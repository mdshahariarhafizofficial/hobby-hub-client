import React from 'react';
import { FaMapLocationDot } from 'react-icons/fa6';
import { MdDateRange, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router';
import { format } from 'date-fns';
import { IoTime } from "react-icons/io5";
import { FiMonitor } from "react-icons/fi";

const GroupCard = ({group}) => {
    const {_id, meetingLocation, groupName, category, imageUrl, date} = group;
    const formattedDate = format(new Date(date), 'EEE, MMM d, yyyy');


    const isExpired = new Date(date) < new Date();
    console.log(isExpired);
    
    
    
    return (
        <div className=''>
            <div className="card h-[400px] bg-base-100 shadow-sm">
            <figure className='relative min-h-[200px]'>
                <img
                className='w-full h-full rounded-lg'
                src={imageUrl} />
                <div className='absolute bg-primary text-white font-semibold px-3 rounded top-1 right-1 capitalize'>{category}</div>
            </figure>
            <div className="card-body grow-1 p-4">
                <h2 className="card-title text-secondary text-2xl">{groupName}</h2>
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
                <p className='flex items-center gap-2 text-gray-500 font-medium'>
                    {
                        category == "video-gaming" ?
                         <FiMonitor size={25} color='#FF5722' />:
                        <FaMapLocationDot size={25} color='#FF5722'></FaMapLocationDot>
                    } 
                {meetingLocation}</p>

                <div className="card-actions mt-auto">
                    <Link to={`/group/${_id}`}>
                        <button className="btn btn-primary text-black">See More 
                            <MdOutlineKeyboardDoubleArrowRight size={20} />
                        </button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default GroupCard;