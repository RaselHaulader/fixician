import React from "react";
import "./Service.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  return (
    <div className="service-container">
      <div className="row">
        <div className="col-md-6 m-0 p-0">
          <img className="w-100 m-0 p-0" src={service?.img} alt="" />
        </div>
        <div className="info-container col-md-6 px-5">
          <h2 className="fw-bold">{service?.name}</h2>
          <p className="pt-3 ">{service?.description}</p>
          <Link to={`/allServices/${service?._id}`}>
            {" "}
            <Button className="mt-2 fw-bold" variant="secondary">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
