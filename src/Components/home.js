import React from 'react'

const home = () => {
    return (
        <>
            <div className="bg-dark1 text-secondary px-4 py-5 text-center size">
                <div className="py-5 home-content">
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <h1 className="display-5 fw-bold text-white">Welcome to Mern Stack Site</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4">Made with reactjs, mongoose, nodejs <br />and ExpressJs</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
                            <button type="button" className="btn btn-outline-light btn-lg px-4">Secondary</button>
                        </div>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div>
            </div>
        </>
    )
}

export default home
