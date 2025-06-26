import React from 'react';
import Slider from '../Components/Slider/Slider';
import FeaturedGroups from '../Components/FeaturedGroups/FeaturedGroups';
import AboutUs from '../Components/AboutUs/AboutUs';
import HowItWork from '../Components/HowItWork/HowItWork';
import CantFind from '../Components/CantFind/CantFind';
import CategorySection from '../Components/CategorySection/CategorySection';

const Home = () => {
    return (
        <div >
            <Slider></Slider>
            <CategorySection></CategorySection>
            <FeaturedGroups></FeaturedGroups>
            <AboutUs></AboutUs>
            <HowItWork></HowItWork>
            <CantFind></CantFind>
        </div>
    );
};

export default Home;