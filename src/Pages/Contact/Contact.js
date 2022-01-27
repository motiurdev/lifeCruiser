import React from 'react';

const Contact = () => {
    return (
        <div className='py-5'>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card text-dark bg-light mb-3" style={{ "max-width": "18rem;" }}>
                            <div class="card-header">Location</div>
                            <div class="card-body">
                                <h5 class="card-title">Our Location</h5>
                                <p class="card-text">Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card text-dark bg-light mb-3" style={{ "max-width": "18rem;" }}>
                            <div class="card-header">Email</div>
                            <div class="card-body">
                                <h5 class="card-title">Our Email</h5>
                                <p class="card-text">lifecruiser@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card text-dark bg-light mb-3" style={{ "max-width": "18rem;" }}>
                            <div class="card-header">Phone</div>
                            <div class="card-body">
                                <h5 class="card-title">Our Phone Number</h5>
                                <p class="card-text">+65988569885</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;