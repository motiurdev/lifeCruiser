import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-3">
                        <h4 className='py-3'>Life Cruiser</h4>
                        <p>Kuala Lumpur is the capital of Malaysia. Its modern skyline is dominated by the 451m-tall Petronas Twin Towers, a pair of glass-and-steel-clad skyscrapers with Islamic motifs</p>
                    </div>
                    <div class="col-12 col-md-3">
                        <h4 className='py-3'>Quick Links</h4>
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <Link to="/about" className='nav-link'>About us</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/experience" className='nav-link'>Experience</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" className='nav-link'>About us</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" className='nav-link'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-3">
                        <h4 className='py-3'>Contact Info</h4>
                        <p><i class="fas fa-location-arrow"></i> 3481 Rabana Place, 2090</p>
                        <p><i class="fas fa-phone-alt"></i> +65988569885</p>
                        <p><i class="far fa-envelope"></i> lifecruiser@gmail.com</p>
                        <p><i class="fas fa-fax"></i> 02 9635 0247</p>
                    </div>
                    <div class="col-12 col-md-3">
                        <h5 className="py-3">NewLetter</h5>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span class="input-group-text btn-color btn-hover" id="basic-addon2">Submit</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;