import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaArrowRight, FaPeopleLine } from 'react-icons/fa6';
import { MdAutoGraph, MdGroupAdd, MdTravelExplore } from 'react-icons/md';
import { Link } from 'react-router';

const HowItWork = () => {
    return (
        <div className='my-20'>

            <div className='flex items-center justify-between border-b-2 pb-3 border-gray-300'>
                <h2 className='dark:text-[#ff946a] text-3xl md:text-5xl text-secondary font-bold'>How It Works</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-10'>
                {/* Card-1 */}
                <Fade direction='left'>
                    <div>
                        <div className="card card-dash bg-base-100 shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title text-3xl font-bold text-secondary">
                                <MdTravelExplore size={50} color='#ff5722'></MdTravelExplore>    
                                Explore Groups</h2>
                                <p>Browse a wide variety of local hobby groups—from photography and painting to cooking and running. Use filters to find the perfect match for your interests.</p>
                                <div className="card-actions justify-end">
                                <div>
                                    <Link onClick={()=>window.scrollTo(0,1)} to='/all-groups' className='text-primary font-bold flex items-center gap-1'>
                                        Explore Now
                                        <FaArrowRight></FaArrowRight>
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </Fade>

                {/* Card-2 */}
                <Fade direction='right'>
                    <div>
                        <div className="card card-dash bg-base-100 shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title text-3xl font-bold text-secondary">
                                <MdGroupAdd size={50} color='#ff5722'></MdGroupAdd>    
                                Join or Create</h2>
                                <p>Found a group you like? Join with a single click. Don’t see what you're looking for? Create your own group, set the rules, and invite others who share your passion.</p>
                                <div className="card-actions justify-end">
                                <div>
                                    <Link onClick={()=>window.scrollTo(0,1)} to='/register' className='text-primary font-bold flex items-center gap-1'>
                                        Join
                                        <FaArrowRight></FaArrowRight>
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </Fade>
                {/* Card-3 */}
                <Fade direction='left'>
                    <div>
                        <div className="card card-dash bg-base-100 shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title text-3xl font-bold text-secondary">
                                <FaPeopleLine size={50} color='#ff5722'></FaPeopleLine>    
                                Connect & Meet</h2>
                                <p>Once you're in, stay updated on meeting locations, group updates, and upcoming activities. Build real connections through shared hobbies and fun experiences.</p>
                                <div className="card-actions justify-end">
                                <div>
                                    <a href='/#featured-groups' className='text-primary font-bold flex items-center gap-1'>
                                        Connect
                                        <FaArrowRight></FaArrowRight>
                                    </a>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </Fade>
                {/* Card-4 */}
                <Fade direction='right'>
                    <div>
                        <div className="card card-dash bg-base-100 shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title text-3xl font-bold text-secondary">
                                <MdAutoGraph size={50} color='#ff5722'></MdAutoGraph>    
                                Grow Together</h2>
                                <p>Share knowledge, improve your skills, and make new friends. HobbyHub helps you not just connect—but grow with your community.</p>
                                <div className="card-actions justify-end">
                                <div>
                                    <Link onClick={()=>window.scrollTo(0,1)} to='/all-groups' className='text-primary font-bold flex items-center gap-1'>
                                        Grow Together
                                        <FaArrowRight></FaArrowRight>
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>                
                </Fade>
            </div>

        </div>
    );
};

export default HowItWork;