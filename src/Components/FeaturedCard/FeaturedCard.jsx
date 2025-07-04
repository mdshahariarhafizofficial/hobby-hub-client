import { format } from 'date-fns';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaMapLocationDot } from 'react-icons/fa6';
import { FiMonitor } from 'react-icons/fi';
import { IoTime } from 'react-icons/io5';
import { MdDateRange, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router';

const FeaturedCard = ({group}) => {
    const {_id, meetingLocation, groupName, category, imageUrl, date} = group;
    const formattedDate = format(new Date(date), 'EEE, MMM d, yyyy');


    const isExpired = new Date(date) < new Date();

    return (
        <Fade triggerOnce>
            <div className=''>
                <div className="card md:h-[200px] grid grid-cols-12 shadow-sm bg-base-100 dark:bg-[#4d3965]">
                <figure className='col-span-12 md:col-span-6 lg:col-span-6 relative md:h-[150px] lg:h-auto'>
                    <img
                    className='w-full h-full rounded-lg'
                    src={imageUrl} />
                    <div className='absolute bg-primary text-white font-semibold px-3 rounded top-1 right-1 capitalize'>{category}</div>
                </figure>
                <div className="card-body grow-1 p-4 col-span-12 md:col-span-6 lg:col-span-6">
                    <h2 className="card-title text-secondary text-2xl dark:text-[#ff946a]">{groupName}</h2>
                    <div className='flex'>
                        <p className='flex items-center gap-2 text-secondary font-bold'> 
                        <MdDateRange size={25} color='#FF5722'></MdDateRange>
                        {formattedDate}</p>
                        {
                            isExpired? 
                        <h4 className='bg-red-500 text-white w-20 text-center font-bold rounded flex items-center justify-center gap-1'>
                            <IoTime></IoTime>
                            Expired</h4>: ''
                        // <h4 className='bg-green-500 text-secondary w-20 text-center font-bold text-sm rounded flex items-center justify-center'>Upcoming</h4>
                        }
                    </div>
                    <p className='flex items-center gap-2 text-gray-500 dark:text-white font-medium'>
                        {
                            category == "video-gaming" ?
                            <FiMonitor size={25} color='#FF5722' />:
                            <FaMapLocationDot size={25} color='#FF5722'></FaMapLocationDot>
                        } 
                    {meetingLocation}</p>

                    <div className="card-actions mt-auto">
                        <Link to={`/group/${_id}`}>
                            <button onClick={()=>window.scrollTo(0,1)} className="btn btn-primary text-black">See More 
                                <MdOutlineKeyboardDoubleArrowRight size={20} />
                            </button>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
        </Fade>
    );
};

export default FeaturedCard;