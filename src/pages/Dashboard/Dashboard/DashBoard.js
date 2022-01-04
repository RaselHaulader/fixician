import React from "react";
import "./Dashboard.css";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import useFirebase from "../../../Hooks/useFirebase";

const Dashboard = () => {
  const { emailLogin} = useFirebase()
  return (
    <div>
      <Navbar></Navbar>
      <div className="dashboard container">
        <div className="row w-100">
          <div className=" col-md-4">
            <div className="bashboard-manu p-1">
              <div className="all-menu mt-5">
                <div className="all-order">
                  <li className="admin-menu p-2">
                    <NavLink
                      style={{
                        textDecoration: "none",
                        color: "#333",
                        paddingLeft: "10px",
                        background: "none",
                      }}
                      to={`/dashboard/userProfile`}
                    >
                      Profile
                    </NavLink>
                  </li>
                </div>
                <div className="all-order">
                  <li className="admin-menu p-2">
                    <NavLink
                      style={{
                        textDecoration: "none",
                        color: "#333",
                        paddingLeft: "10px",
                        background: "none",
                      }}
                      to={`/dashboard/userServices`}
                    >
                      User Services
                    </NavLink>
                  </li>
                </div>
                <div className="all-order">
                  <li className="admin-menu p-2">
                    <NavLink
                      style={{
                        textDecoration: "none",
                        color: "#333",
                        paddingLeft: "10px",
                        background: "none",
                      }}
                      to={`/dashboard/userReview`}
                    >
                      Review
                    </NavLink>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
