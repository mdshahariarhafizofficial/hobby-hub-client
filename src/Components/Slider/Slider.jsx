// import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Slider/Slider.css';
import slide1 from '../../assets/slide-1.jpg';
import slide11 from '../../assets/slide-11.jpg';
import slide2 from '../../assets/slide-2.jpg';
import slide3 from '../../assets/slide-3.jpg';
import { Link } from 'react-router';

const Slider = () => {
    return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >

        {/* Slide-1 */}
        <SwiperSlide>
        <div
          className="flex items-center justify-center relative w-full h-full bg-cover object-cover bg-center"
          style={{ backgroundImage: `url(${slide1})`}}
        >
            {/* Overlay */}
          <div className="absolute inset-0 bg-[#000000] opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 text-white p-10 space-y-5">
            <h2 className="text-4xl md:text-6xl text-shadow-lg/80 text-shadow-black font-bold">Learn, Share, and Grow Together</h2>
            <p className='text-shadow-lg/80 text-shadow-black'>From book clubs to study circles — <br /> find your tribe and fuel your passions with HobbyHub.</p>

            {/* Type Writer */}
            <div>
              <h2 className='text-4xl md:text-4xl text-shadow-lg/80 text-shadow-black font-bold'>Find your hobby in → 
              </h2>
                <h4 className='text-xl md:text-2xl text-shadow-lg/80 text-shadow-black font-bold text-[#ff5722]'>
                 <Typewriter 
                    words={['Drawing', 'Cooking', 'Gaming', 'Photography', 'Running']}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                 />
                </h4>              
            </div>

            <Link to='/all-groups'>
              <button className="btn btn-primary tracking-wider text-xl">Explore Groups</button>
            </Link>
        </div>

        </div>
        </SwiperSlide>

        
        {/* Slide-2 */}
        <SwiperSlide>
        <div
          className="flex items-center justify-center relative w-full h-full bg-cover object-cover bg-center"
          style={{ backgroundImage: `url(${slide2})`}}
        >
            {/* Overlay */}
          <div className="absolute inset-0 bg-[#000000] opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 text-white p-10 space-y-4">
            <h2 className="text-4xl md:text-6xl text-shadow-lg/80 text-shadow-black font-bold">Unleash Creativity Through Crafts</h2>
            <p className='text-shadow-lg/80 text-shadow-black'>Join local hobby groups where kids can explore, create, <br /> and bond through fun hands-on activities.</p>

            {/* Type Writer */}
            <div>
              <h2 className='text-4xl md:text-4xl text-shadow-lg/80 text-shadow-black font-bold'>Find your hobby in → 
              </h2>
                <h4 className='text-xl md:text-2xl text-shadow-lg/80 text-shadow-black font-bold text-[#ff5722]'>
                 <Typewriter 
                    words={['Drawing', 'Cooking', 'Gaming', 'Photography', 'Running']}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                 />
                </h4>              
            </div>

            <Link to='/create-group'>
              <button className="btn btn-primary tracking-wider text-xl">Create a Group</button>
            </Link>
        </div>

        </div>
        </SwiperSlide>

        {/* Slide-3 */}
        <SwiperSlide>
        <div
          className="flex items-center justify-center relative w-full h-full bg-cover object-cover bg-center"
          style={{ backgroundImage: `url(${slide3})`}}
        >
            {/* Overlay */}
          <div className="absolute inset-0 bg-[#000000] opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 text-white p-10 space-y-4">
            <h2 className="text-4xl md:text-6xl text-shadow-lg/80 text-shadow-black font-bold">Build Connections, One Game at a Time</h2>
            <p className='text-shadow-lg/80 text-shadow-black'>Discover board game lovers near you. Compete, <br /> collaborate, and make lasting friendships.</p>

            {/* Type Writer */}
            <div>
              <h2 className='text-4xl md:text-4xl text-shadow-lg/80 text-shadow-black font-bold'>Find your hobby in → 
              </h2>
                <h4 className='text-xl md:text-2xl text-shadow-lg/80 text-shadow-black font-bold text-[#ff5722]'>
                 <Typewriter 
                    words={['Drawing', 'Cooking', 'Gaming', 'Photography', 'Running']}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                 />
                </h4>              
            </div>

            <a href='#featured-groups'>
              <button className="btn btn-primary tracking-wider text-xl">Featured Groups</button>
            </a>
        </div>

        </div>
        </SwiperSlide>

        {/* Slide-4 */}
        <SwiperSlide>
        <div
          className="flex items-center justify-center relative w-full h-full bg-cover object-cover bg-center"
          style={{ backgroundImage: `url(${slide11})`}}
        >
            {/* Overlay */}
          <div className="absolute inset-0 bg-[#000000] opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 text-white p-10 space-y-4">
            <h2 className="text-4xl md:text-6xl text-shadow-lg/80 text-shadow-black font-bold">Where Friendships Spark and Memories Glow</h2>
            <p className='text-shadow-lg/80 text-shadow-black'>HobbyHub brings like-minded people together  <br />  for unforgettable group experiences.</p>

            {/* Type Writer */}
            <div>
              <h2 className='text-4xl md:text-4xl text-shadow-lg/80 text-shadow-black font-bold'>Find your hobby in → 
              </h2>
                <h4 className='text-xl md:text-2xl text-shadow-lg/80 text-shadow-black font-bold text-[#ff5722]'>
                 <Typewriter 
                    words={['Drawing', 'Cooking', 'Gaming', 'Photography', 'Running']}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                 />
                </h4>              
            </div>

            <Link to='/my-groups'>
              <button className="btn btn-primary tracking-wider text-xl">Your Groups</button>
            </Link>
        </div>

        </div>
        </SwiperSlide>


        
      </Swiper>
    </>
    );
};

export default Slider;