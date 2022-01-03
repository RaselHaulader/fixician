import React from 'react';
import './Login.css';
import login from '../../../Images/Login/login.jpg';
import { Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-center fw-bold fs-2 mt-5 mb-3'>Please Login!</h1>
            <div className='login-container'>
                <div>
                    <img className="w-100 img-fluid" src={login} alt="" />
                </div>
                <div>
                    <Form className="form-bg">
                        <div className="mt-5 mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control w-50" placeholder='Enter Your Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 ">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control w-50 border" placeholder='Enter Your Password' id="exampleInputPassword1" />
                        </div>
                        <Button type="submit" className="submit-btn" variant="primary">Login</Button>
                        <NavLink to="/register" >
                            <button type="button"  className="d-block text-decoration-none btn btn-link ms-5 mt-3">New User? Please Register</button>             
                        </NavLink>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;