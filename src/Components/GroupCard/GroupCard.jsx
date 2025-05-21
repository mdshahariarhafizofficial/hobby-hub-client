import React from 'react';
import { FaMapLocationDot } from 'react-icons/fa6';
import { MdDateRange, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const GroupCard = ({group}) => {
    const {meetingLocation, groupName, imageUrl, date} = group;
    console.log(group);
    
    return (
        <div className=''>
            <div className="card h-[400px] bg-base-100 shadow-sm">
            <figure className='min-h-[200px]'>
                <img
                className='w-full h-full rounded-lg'
                src={imageUrl} />
            </figure>
            <div className="card-body grow-1 p-4">
                <h2 className="card-title text-secondary text-2xl">{groupName}</h2>
                <p className='flex items-center gap-2 text-gray-500 font-bold'> 
                <MdDateRange size={25} color='#FF5722'></MdDateRange>
                {date}</p>
                <p className='flex items-center gap-2 text-gray-500 font-medium'> 
                <FaMapLocationDot size={25} color='#FF5722'></FaMapLocationDot>
                {meetingLocation}</p>

                <div className="card-actions mt-auto">
                <button className="btn btn-primary text-black">See More 
                    <MdOutlineKeyboardDoubleArrowRight size={20} />
                </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default GroupCard;