import React from 'react'
import { NavLink } from 'react-router-dom'
const login = () => {
    return (
        <>
            <div className="container col-xl-10 col-xxl-8 px-4 py-5 mt-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <img src="https://source.unsplash.com/800x460/?nature,water" alt="images" height="400" width="800" className="img-fluid"/>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-light">
                            <div className="form-floating mb-3">
                                <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" required/> Agree to terms and service
                                </label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                            <hr className="my-4" />
                            <small className="text-muted">Don't Have an account <NavLink to="/signup"> Signup?</NavLink ></small>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default login
