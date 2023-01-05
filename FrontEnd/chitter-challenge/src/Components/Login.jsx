import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Css/Login.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


export default function Login({ setUser }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const login = async (user) => {
        try {
            const res = await axios.post(`http://localhost:4000/login`, user);
            setUser(res.data.username)
            alert(res.data.message)
            navigate('/')
        } catch (e) {
            alert('error signing up')
        }

    }
    const handleSubmit = e => {
        e.preventDefault();
        if (email && password) {
            const user = {
                email,
                password
            }
            login(user)
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

                                <form class="mb-md-5 mt-md-4 pb-5" onSubmit={handleSubmit}>

                                    <h2 class="fw-bold mb-2">LOGIN</h2>
                                    <p class="text-white-50 mb-5">Please enter your email and password!</p>

                                    <div class="form-outline form-white mb-4">
                                        <input type="email" id="typeEmailX" class="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} />
                                        <label class="form-label" for="typeEmailX">Email</label>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordX" class="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />
                                        <label class="form-label" for="typePasswordX">Password</label>
                                    </div>

                                    <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                                </form>

                                <div>
                                    <p class="mb-0">Don't have an account?
                                        <NavLink to="/signUp" className="text-white fw-bold">
                                            Sign Up
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
