import React, { useEffect, useState } from "react";
import "./Services.css";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  // load data
  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <div id="services">
      <h2 className="fw-bold text-center mt-5">Checkout Our Services</h2>
      <div className="services-container p-5">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
