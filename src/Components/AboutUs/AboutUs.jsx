import React from 'react';
import hobbyImg from '../../assets/Hooby.jpg'
const AboutUs = () => {
    return (
        <div className='bg-[#f3f4f6] dark:bg-[#ff946a] p-10 my-10 rounded-2xl'>
            {/* <div>
                <h2 className='text-5xl text-secondary font-bold'>About Us</h2>
            </div> */}
            <div className='grid grid-cols-12 items-center gap-8'>
                <div className='col-span-12 md:col-span-5'>
                    <img className='w-full rounded-2xl' src={hobbyImg} alt="" />
                </div>
                <div className='col-span-12 md:col-span-7 space-y-4'>
                    <h2 className='text-6xl text-secondary font-bold'>About Hobby Hub</h2>
                    <p className='text-secondary dark:text-white'>
                        Discover, Connect, Create – All in One Place.
                        HobbyHub is your go-to platform for finding and building hobby-based communities. Whether you're into painting, running, gaming, or cooking, HobbyHub helps you connect with like-minded people nearby. Join local groups, participate in exciting meetups, or start your own hobby circle. We’re making it easier than ever to turn passions into shared experiences.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;