import React from "react";
import UserSr from "../../../img/userService/referral.png";
import "./UserServices.css";

const UserServices = () => {
  return (
    <div className="userServices">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12 ">
            <div className="user-services-img py-4">
              <img src={UserSr} className="img-fluid" alt="" />
            </div>
            <div className="code">
              <h1>sdhjfjkdv111</h1>
            </div>
            <div className="user-text py-3">
              <h3 className="py-2">Share your referral code</h3>
              <p>
                Share your referral code & get BDT200 taka discount for next 3
                orders!
              </p>
              <div className="userSr-btn">
                <button className="facebook">Facebook</button>
                <button className="copy">Copy Code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserServices;
