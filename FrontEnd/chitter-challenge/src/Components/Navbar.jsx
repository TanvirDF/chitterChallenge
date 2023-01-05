import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar({ user }) {
    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }
    return (
        <header className=" mb-5">
            <nav className=" d-flex navbar navbar-light bg-primary">
                <NavLink className="navbar-brand text-white m-2" to="/">
                    Chitter Chatter
                </NavLink>
                <div>
                    <NavLink className="navbar-brand text-white" to="/">
                        Peeps
                    </NavLink>
                    {!user &&
                        <NavLink className="navbar-brand text-white" to="/login">
                            Login
                        </NavLink>
                    }
                    {!user &&
                        <NavLink className="navbar-brand text-white" to="/signUp">
                            Sign Up
                        </NavLink>
                    }

                    {user &&
                        <NavLink className="navbar-brand" to="/">
                            <button class="btn btn-danger" onClick={logout}>
                                Logout
                            </button>

                        </NavLink>
                    }

                </div>

            </nav>
        </header>
    )
}
