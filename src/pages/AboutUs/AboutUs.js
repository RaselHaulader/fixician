import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section>
      <Navbar></Navbar>
      <div className="container">
        <h1 className="py-5 text-center">About Us</h1>
        <div className="row">
          <div className="col-md-8">
            <div className="left-side-text">
              <h4>Our Advantages</h4>
              <p>
                Fixitian is dedicated to providing our clients to meet their
                business objectives faster and more cost effectively.
                Traditional outsourcing concentrates on non-core tasks being
                shipped out, whereas W3Engineers outsourced development is
                targeted at the core tasks, the more critical part of your
                organization. Our outsourcing is built on the idea of having a
                skilled knowledge force at a remote location, for a fraction of
                the original costs.
              </p>
              <p>
                We are specialized in software and web application development
                services such as content distribution & management systems
                development, e-commerce software programming, web portals and
                websites development, mobile application development plus many
                others. Java, .Net, PHP software developers in our company are
                also experienced in developing major enterprise applications
                such as CRM & ERP software, Knowledge Management, Business
                Intelligence software.
              </p>
              <button className="about-btn">Read More</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="right-side-img mt-3">
              <img
                src="https://airvice.codelayers.net/images/2021/06/16/about-img-1.jpg"
                className="img-fluid"
                alt="about-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
