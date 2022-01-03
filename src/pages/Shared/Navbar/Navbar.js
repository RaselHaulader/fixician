import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";
import "./Navbar.css";
const Navbar = () => {
  const { logOut } = useFirebase()
  const user = useSelector(state => state.user.userAuth)
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand fs-2 text-primary fw-bolder" href="#">
              Fixician
            </a>
            <ul class="navbar-nav  ms-auto mb-2 mb-lg-0">
              <Link to="/home ">
                <li class="nav-item mx-2">Home</li>
              </Link>
              <Link to="/explore">
                <li class="nav-item mx-2">Explore</li>
              </Link>
              <Link to="/aboutUs ">
                <li class="nav-item mx-2">About us</li>
              </Link>
              <Link to="/contact ">
                <li class="nav-item mx-2">Contact</li>
              </Link>
              <Link to="/dashboard ">
                <li class="nav-item mx-2">Dashboard</li>
              </Link>
              <Link to="/serviceDetails ">
                <li class="nav-item mx-2">Service Details</li>
              </Link>
              {!user.email && <Link to="/login ">
                <li class="nav-item mx-2">Login</li>
              </Link>}

              {user?.email && <a onClick={logOut} class="nav-item mx-2">LogOut</a>}

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
