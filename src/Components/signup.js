import React from 'react'
import { NavLink } from 'react-router-dom'
const signup = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h2>
                            Signup
                        </h2>
                        <div className="container-fluid">
                            <form action="" className="mt-5">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><i className="zmdi zmdi-account"></i></span>
                                    <input type="text" name="name" className="form-control" placeholder="Your name" aria-label="Your name" aria-describedby="basic-addon1" required />
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input name="phone" type="phone" className="form-control" id="floatingInput" placeholder="Phone Number" required />
                                    <label htmlFor="floatingInput">Phone Number</label>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Your Profession</label>
                                    <input type="profession" name="profession" className="form-control" id="exampleFormControlInput1" placeholder="Your Profession" required />
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" name="password" className="form-control" id="inputPassword" required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label fohtmlFor="inputPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" name="cpassword" className="form-control" id="inputPassword" required />
                                    </div>
                                </div>
                                <button type="submit" name="signup" value="register" className="btn btn-primary">Submit</button>
                            </form>
                            <br />
                            <h6>Already have an <NavLink to="/login"> account?</NavLink></h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default signup
