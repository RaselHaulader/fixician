import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo "></div>
            <div className="text pb-2">
              <small className="footer-text">
                Fixitian is the largest company works for home appliences fixing
                solutions at your home environment in Bangladesh. We are largest
                and most experienced authorized home appliences fixing service
                center in Bangladesh. We trust our citizen, provide and think
                the best for their comfortable zone regarding home applicences.
              </small>
            </div>
          </div>
          <div className="col-md-2 ">
            <div className="categorie pb-2">
              <h5>CATEGORIES</h5>
              <h6>Home</h6>
              <h6>About Us</h6>
              <h6>Services</h6>
              <h6>Explore</h6>
            </div>
          </div>
          <div className="col-md-2 pb-2">
            <div className="information pb-2">
              <h5>INFORMATION</h5>
              <h6>Portfolio</h6>
              <h6>Shop</h6>
              <h6>Contact</h6>
              <h6>Location</h6>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="contact">
              <h5>SUBSCRIBE NOW</h5>
              <div class="input-group my-2 ">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </div>
              <small>
                Objectively provide high quality fixing service whereas parallel
                platforms.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
