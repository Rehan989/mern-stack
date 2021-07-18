import React from 'react'

const contact = () => {
    return (
        <>
        <div className="container mt-5">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h2 align="center">Contact Us</h2>
                <div className="m-2">
                <input class="form-control" type="text" value="Phone: +1233145234" aria-label="readonly input example" readonly/>
                </div>
                <div className="m-2">
                <input class="form-control" type="text" value="Email: rehan@mail.com" aria-label="Email" readonly/>
                </div>
                <div className="m-2">
                <input class="form-control" type="text" value="Address: Pune" aria-label="readonly input example" readonly/>
                </div>
                <br />
                <div className="container-fluid">
                <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg me-6 ">
                    <h2>
                        Get in Touch
                    </h2>
                    <br />
                    <form>
                    <div class="row g-3">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Your name" aria-label="Name" name="name"/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Email Address" aria-label="Email" name="email" />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Phone Number" aria-label="Phone" name="phone" />
                    </div>
                    <div class="form-floating ml-auto">
                    <textarea class="form-control" placeholder="Message" id="message"></textarea>
                    <label htmlFor="message">Message</label>
                    </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    </form>
                </div>
                </div>
                </div>
                <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img class="rounded-lg-3" src="https://source.unsplash.com/random/800x720" alt="af" width="720" />
                </div>
            </div>
        </div>
        </>
    )
}

export default contact
