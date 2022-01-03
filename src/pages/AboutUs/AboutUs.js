import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section>
      <Navbar></Navbar>
      <div className="container">
        <h1 className="py-5">About Us</h1>
        <div className="row d-flex align-items-center">
          <div className="col-md-8">
            <div className="left-side-text">
              <h4>Our Advantages</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ducimus exercitationem quidem harum laborum quod velit, vel iste
                minus praesentium totam! Labore temporibus voluptatem fugit
                sint! Deserunt eos consequuntur magnam ipsum natus, vel
                consequatur fugit voluptatem recusandae suscipit autem saepe
                similique nam voluptatum delectus totam? Illum, voluptates
                repellendus. Iusto dolor delectus nobis error facilis nemo
                dolorem. Similique id itaque dolor quaerat illum autem ipsam
                blanditiis quo nihil asperiores excepturi voluptates qui,{" "}
              </p>
              <button className="about-btn">Read More</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="right-side-img">
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
