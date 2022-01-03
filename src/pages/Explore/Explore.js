import React, { useEffect, useState } from 'react';
import './Explore.css';
import { Button, Card } from 'react-bootstrap';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Explore = () => {
    const [services, setServices] = useState([]);

    // load data
    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div>
            <Navbar></Navbar>
            <div className="explore-container">
                {
                    services.map((service, _id) => (
                        <div className="service">
                            <Card border="light" className="card-body mx-3 mt-5 shadow mb-3 bg-body rounded-3" >
                                <Card.Img className="pt-3 img-fluid w-100" variant="top" src={service.img} />
                                <Card.Body>
                                    <h3 className='my-3 text-center'>{service.name}</h3>
                                    <p>{service.description}</p>
                                    <Link to='/serviceDetails' > <Button className="mt-2 fw-normal" variant="warning">Read More</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Explore;