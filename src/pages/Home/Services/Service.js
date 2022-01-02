import React from 'react';
import {Button} from 'react-bootstrap'



const Service = ({service}) => {
    const {_id, name, img, imgBack, description, price } = service;
    return (
        <div className='service-container'>
            <div>
                <h2 className='text-2xl font-semibold'>Name:{name}</h2>
                <p>{description}</p>
                <Button></Button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam cupiditate sed sint, perspiciatis error officia, inventore ad, a beatae ex quas sit repellendus rem deserunt saepe in soluta cum!</p>
            </div>
            <div>
                <img className='' src={img} alt="" />
            </div>
        </div>
        
    );
};

export default Service;