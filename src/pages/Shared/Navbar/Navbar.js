import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand" href="#">Fixician</a>
                        <ul class="navbar-nav  ms-auto mb-2 mb-lg-0">
                            <Link to='/home '>
                                <li class="nav-item mx-2">
                                    Home
                                </li>
                            </Link>

                            <Link to='/explore'>
                                <li class="nav-item mx-2">
                                    Explore
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;