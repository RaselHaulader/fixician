import React, { useEffect, useState } from "react";
import "./Services.css";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [id, setId] = useState(0)
  // load data
  useEffect(() => {
    fetch("https://desolate-hamlet-19197.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <div id="services">
      <h2 className="fw-bold text-center my-5">Checkout Our Services</h2>
      <div className="selector-container my-5">
        <p onClick={() => setId(0)}>Refrigerator</p>
        <p onClick={() => setId(1)}>Washing</p>
        <p onClick={() => setId(2)}>Microwave</p>
        <p onClick={() => setId(3)}>Condition</p>
        <p onClick={() => setId(4)}>Television</p>
        <p onClick={() => setId(5)}>Electric</p>
        <p onClick={() => setId(6)}>Kitchen</p>
        <p onClick={() => setId(7)}>WaterPurifier</p>
        <p onClick={() => setId(8)}>Dishwasher</p>
      </div>
      <div className="services-container p-5">
        <Service service={services[id]}></Service>
      </div>
    </div>
  );
};

export default Services;
