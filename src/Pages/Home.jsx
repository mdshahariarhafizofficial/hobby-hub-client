import React from 'react';
import Slider from '../Components/Slider/Slider';
import FeaturedGroups from '../Components/FeaturedGroups/FeaturedGroups';
import AboutUs from '../Components/AboutUs/AboutUs';
import HowItWork from '../Components/HowItWork/HowItWork';

const Home = () => {
    return (
        <div >
            <Slider></Slider>
            <FeaturedGroups></FeaturedGroups>
            <AboutUs></AboutUs>
            <HowItWork></HowItWork>
        </div>
    );
};

export default Home;