import React from 'react';
import './Service.css';
import { Button } from 'react-bootstrap';


const Service = ({service}) => {
    const {name, img, description} = service;
    return (
        <div className='service-container'>
            <div>
                <h2 className='text-2xl font-semibold'>Name:{name}</h2>
                <p>{description}</p>
                <Button></Button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam cupiditate sed sint, perspiciatis error officia, inventore ad, a beatae ex quas sit repellendus rem deserunt saepe in soluta cum!</p>
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