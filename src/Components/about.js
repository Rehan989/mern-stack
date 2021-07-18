import React from 'react'

const about = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <form action="">
                            <h3>Rehan Makrani <span class="badge bg-secondary"><button type="button" className="btn btn-sm" name="btnAddMore" value="Edit Profile"><i class="zmdi zmdi-edit"></i></button></span></h3>
                            <h5 id="profession-heading">Web Developer</h5>
                            <br /><br />
                            <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">User Id:</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" disabled aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Name:</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" disabled aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Email:</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" disabled aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Phone:</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" disabled aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Profession:</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" disabled aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 user-img overflow-hidden">
                        <img className="img-fluid" src="https://miro.medium.com/max/1000/0*Zw1ZfCk0svcXVQXg.jpg" alt="" width="720" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default about
