import React from 'react';
import { Accordion, Carousel } from 'react-bootstrap';

const Faq = () => {
    return (
        <div className='row my-5 pt-5'>
            <div className='col-sm-12 col-md-6 col-lg-6'>
                <div className='mx-5'>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/zFRZhNK/Side-View-Of-Mature-Man-Repairing-Microwave-Oven-In-Kitchen.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/KVcqJ1y/Plumber-Fixing-Domestic-Washing-Machine.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/7WfzxnN/fridge.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6'>
                <div className='text-center'>
                    <div className='pb-4'>
                        <h2 style={{ color: "#0338AB" }}>Frequently Asked Questions (FAQ) </h2>
                    </div>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How quickly can you repair my appliance?</Accordion.Header>
                            <Accordion.Body>
                                We Do Same Day Repairs On Most Appliances.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How much will it cost to repair?</Accordion.Header>
                            <Accordion.Body>
                                The repair cost depends on the make of the device and the type and amount of danger there is.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Do your engineers carry spare parts of any aplliance</Accordion.Header>
                            <Accordion.Body>
                                All our vehicles carry a range of fast moving spares to facilitate a first visit repair as this is more cost effective to the company and more convenient to our customers.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Do you book appointments</Accordion.Header>
                            <Accordion.Body>
                                We normally book appointments with a window of time, this would include a courtesy phone call 30-45 minutes prior to arrival.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>If a spare part needs to be ordered, how log would it take?</Accordion.Header>
                            <Accordion.Body>
                                Most spare parts take 2-3 days to arrive in stock. Some manufacturers offer a next day delivery service for an extra fee.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;

// yellow : #FFC000 blue: #0338AB

