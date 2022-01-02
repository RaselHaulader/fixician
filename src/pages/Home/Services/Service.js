
import React from 'react';
import { Button } from 'react-bootstrap';


const Service = ({service}) => {
    const {_id, name, img, imgBack, description, price } = service;
    return (
        <div className='service-container'>
            <div>
                <h2 className='text-2xl font-semibold'>{name}</h2>
                <p>{description}</p>
                <Button></Button>
            </div>
            <div>
                <img className='' src={img} alt="" />
            </div>
        </div>
        
    );
};

export default Service;