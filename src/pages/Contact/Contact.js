import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import Navbar from '../Shared/Navbar/Navbar';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3jkfgwq', 'template_l8n3a0w', form.current, 'user_5F8SRjK97Ss1hUmuX4KMz')
            .then((result) => {
            }, (error) => {
            });

        e.target.reset();
    };
    return (
        <div>
            <Navbar></Navbar>
            <div className='row w-100 my-5'>
            <div className='col-sm-12 col-md-5 col-lg-5 px-5'>
                <div className='ps-5'>
                    <h2>Contact Info</h2>
                    <hr className="hr" />
                    <div className="d-flex mt-5">
                        <div className="call-icon">
                            <span className="pe-4 fs-3"><i class="fas fa-phone-alt"></i></span>
                        </div>
                        <div className="ps-4 fs-6">
                            <p>01755-555-80</p>
                            <p>998877665544</p>
                        </div>
                    </div>
                    <div className="d-flex mt-5">
                        <div className="call-icon">
                            <span className="pe-4 fs-3"><i class="fas fa-map-marker-alt"></i></span>
                        </div>
                        <div className="ps-4 fs-6">
                            <p>Sector-1,Road-3/E <br />
                                Uttara,Dhaka-1230
                            </p>
                        </div>
                    </div>
                    <div className="d-flex mt-4 social-link ">
                        <a href=""><i class="fab fa-facebook"></i></a>
                        <a href=""><i class="fab fa-instagram"></i></a>
                        <a href=""><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className='col-sm-12 col-md-7 col-lg-7 px-5'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                            <div className="input-field">
                                <input type="text" name="user_name" placeholder="YOUR NAME"
                                    required
                                    className="text-dark py-4" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="input-field">
                                <input type="email" name="user_email"
                                    placeholder="YOUR EMAIL"
                                    required
                                    className="text-dark py-4"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
                            <div className="input-field">
                                <input type="text" name="subject"
                                    placeholder="YOUR SUBJECT"
                                    required
                                    className="text-dark py-4"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
                            <div className="input-field">
                                <textarea name="message" placeholder="YOUR MESSAGE"
                                    required
                                    className="text-dark py-4"
                                />
                            </div>
                        </div>
                        <div className="col-12 submit-input">
                            <input type="submit" value="SEND MESSAGE"
                                className='py-3 px-4'
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
        
    );
};

export default Contact;