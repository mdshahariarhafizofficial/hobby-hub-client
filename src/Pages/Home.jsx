import React from 'react';
import Slider from '../Components/Slider/Slider';
import FeaturedGroups from '../Components/FeaturedGroups/FeaturedGroups';
import AboutUs from '../Components/AboutUs/AboutUs';

const Home = () => {
    return (
        <div >
            <Slider></Slider>
            <FeaturedGroups></FeaturedGroups>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;