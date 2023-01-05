import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function SignUp() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const register = async (newUser) => {
        try {
            const res = await axios.post(`http://localhost:4000/signUp`, newUser);
            alert(res.data.message)
            navigate('/login')
        } catch (e) {
            alert('error signing up')
        }

    }
    const handleSubmit = e => {
        e.preventDefault();
        if (username && email && password) {
            const newUser = {
                username,
                email,
                password
            }
            register(newUser)
            return
        }
        alert(`Enter the details correctly.`)
    }


    return (
        <section class=" gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-primary text-white" style={{ borderRadius: "1rem" }}>
                            <div class="card-body p-5 text-center">

                                <form class="mb-md-5 mt-md-4 pb-5" onSubmit={handleSubmit} >

                                    <h2 class="fw-bold mb-2 ">SIGN UP</h2>
                                    <p class="text-white-50 mb-5">Please enter an username, email and password</p>

                                    <div class="form-outline form-white mb-4">
                                        <input type="text" id="username" class="form-control form-control-lg" onChange={(e) => setUsername(e.target.value)} />
                                        <label class="form-label" for="username">Username</label>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="email" id="email" class="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} />
                                        <label class="form-label" for="email">Email</label>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="password" id="pass" class="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />
                                        <label class="form-label" for="pass">Password</label>
                                    </div>

                                    <button class="btn btn-outline-light btn-lg px-5" type="submit">Sign Up</button>

                                </form>

                                <div>
                                    <p class="mb-0">Already have an account?
                                        <NavLink to="/login" className="text-white fw-bold">
                                            Login
                                        </NavLink>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
