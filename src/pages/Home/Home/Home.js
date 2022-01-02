import React from 'react';
import Explore from '../../Explore/Explore';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Services></Services>
            <Explore></Explore>
            <Experts></Experts>
        </div>
    );
};

export default Home;