<<<<<<< HEAD
import React from "react";
import "./Service.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
=======
import React from 'react';
import './Service.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
>>>>>>> e2a67890e43bb96221c2fc22c1b4e21b19aa8ce3

const Service = ({ service }) => {
  const { _id, name, img, description } = service;
  return (
    <div className="service-container">
      <div>
        <h2 className="text-2xl font-semibold">Name:{name}</h2>
        <p>{description}</p>
        <Button></Button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam
          cupiditate sed sint, perspiciatis error officia, inventore ad, a
          beatae ex quas sit repellendus rem deserunt saepe in soluta cum!
        </p>
      </div>
      <div className="info-container">
        <h2 className="fw-bold">{name}</h2>
        <p className="pt-3 ">{description}</p>

<<<<<<< HEAD
        <Link to={`/allServices/${_id}`}>
          <Button className="mt-2 fw-bold" variant="secondary">
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
=======
const Service = ({ service }) => {
    const { name, img, description } = service;
    return (
        <div className='service-container'>
            <div className='row'>
                <div className='col-md-6 m-0 p-0'>
                    <img className='w-100 m-0 p-0' src={img} alt="" />
                </div>
                <div className="info-container col-md-6 px-5">
                    <h2 className='fw-bold'>{name}</h2>
                    <p className="pt-3 ">{description}</p>
                    <Link to="/serviceDetails">  <Button className="mt-2 fw-bold" variant="secondary">Read More</Button></Link>
                </div>
            </div>
        </div>
    );
>>>>>>> e2a67890e43bb96221c2fc22c1b4e21b19aa8ce3
};

export default Service;
