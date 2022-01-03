import React from 'react';
import Explore from '../../Explore/Explore';
import Login from '../../Login/Login/Login';
import Register from '../../Login/Register/Register';
import Navbar from '../../Shared/Navbar/Navbar';
import Counter from '../Counter/Counter';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Register></Register>
            <Login></Login>
            <Counter></Counter>
            <Services></Services>
            <Explore></Explore>
        </div>
    );
};

export default Home;