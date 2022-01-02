import React from 'react';
import './Service.css';
import { Button } from 'react-bootstrap';


const Service = ({service}) => {
    const {name, img, description} = service;
    return (
        <div className='service-container'>
            <div>
                <img className='img-fluid w-100' src={img} alt="" />
            </div>
            <div className="info-container">
                <h2 className='fw-bold'>{name}</h2>
                <p className="pt-3 ">{description}</p>
                
                <Button className="mt-2 fw-bold" variant="secondary">Read More</Button>
            </div>
        </div>
        
    );
};

export default Service;