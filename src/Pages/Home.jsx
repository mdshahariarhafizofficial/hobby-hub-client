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
            <div className='py-10'>
            <AboutUs></AboutUs>
            </div>
            <div className='pb-5'>               
                <HowItWork></HowItWork>
            </div>
            <CantFind></CantFind>
        </div>
    );
};

export default Home;