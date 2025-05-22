import { format } from 'date-fns';
import React, { useState } from 'react';
import { FaClock, FaMapLocationDot, FaUserCheck } from 'react-icons/fa6';
import { FiMonitor } from 'react-icons/fi';
import { MdDateRange, MdGroupAdd } from 'react-icons/md';
import { TiWarning } from 'react-icons/ti';
import { useLoaderData } from 'react-router';
import { BiSolidCategory } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { FaUserTie } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const GroupDetails = () => {
    const data = useLoaderData();
    const [join, setJoin] = useState(false);
    const { category, date, description, email, groupName, imageUrl, maxMembers, meetingLocation, userName} = data;
    console.log(data);

    const formattedDate = format(new Date(date), 'EEE, MMM d, yyyy')
    const isExpired = new Date(date) < new Date();
    console.log(isExpired);

    if (join) {
        Swal.fire({
        icon: "success",
        title: "Successfully joined the group!",
        showConfirmButton: false,
        timer: 1500
        });
    }
    
    return (
        <div className='mt-7 mb-40'>
            <div>
                <img className='w-full h-[470px] object-cover rounded-2xl' src={imageUrl} alt="" />
                <p className='flex items-center gap-2 text-gray-500 font-bold mt-5'> 
                    <MdDateRange size={25} color='#FF5722'></MdDateRange>
                {formattedDate}</p>

                <div className='my-6 flex flex-col md:flex-row items-start justify-between gap-6'>
                    <h2 className='text-5xl font-bold text-secondary'>
                    {groupName}</h2>

                    {
                        isExpired?
                        <div>
                            <button onClick={()=>setJoin(!join)} className='bg-red-500 text-white btn text-xl'>
                            <FaClock></FaClock>
                            Date is Expired</button>
                            <p className='text-red-500 font-medium flex items-center gap-1'> 
                                <TiWarning size={30}></TiWarning>
                                Group is no longer active.</p>
                        </div>:
                        <div>
                            {
                                join? 
                                <button className='bg-green-500 text-white btn text-xl'>
                                <FaUserCheck></FaUserCheck>
                                Joined</button>:
                                <button onClick={()=>setJoin(!join)} className='bg-primary text-white btn text-xl'>
                                <MdGroupAdd />
                                Join Group</button>
                            }
                        </div>
                    }

                </div>
                <div className='space-y-4'>

                {/* Category */}
                <p className='flex items-center gap-2 text-gray-500 font-medium'>
                         <BiSolidCategory size={25} color='#FF5722'> </BiSolidCategory>
                    <span className='text-xl font-bold text-secondary'>Category : </span>
                {category}</p>

                {/* Location */}
                <p className='flex items-center gap-2 text-gray-500 font-medium'>
                    {
                        category == "video-gaming" ?
                         <FiMonitor size={25} color='#FF5722' />:
                        <FaMapLocationDot size={25} color='#FF5722'></FaMapLocationDot>
                    } 
                    <span className='text-xl font-bold text-secondary'>Location : </span>
                {meetingLocation}</p>

                {/* Member */}
                <p className='flex items-center gap-2 text-gray-500 font-medium'>
                         <HiUserGroup size={25} color='#FF5722'> </HiUserGroup>
                    <span className='text-xl font-bold text-secondary'>Max Member : </span>
                {maxMembers}</p>

                {/* Start Date */}
                <p className='flex items-center gap-2 text-gray-500 font-medium'>
                         <MdDateRange size={25} color='#FF5722'> </MdDateRange>
                    <span className='text-xl font-bold text-secondary'>Start Date : </span>
                {formattedDate}</p>

                <div className='py-5 mt-4 border-y-2 border-primary space-y-4'>
                    <h2 className='text-4xl font-bold text-secondary'>Organizer Info</h2>

                    {/* Name */}
                    <p className='flex items-center gap-2 text-gray-500 font-medium'>
                            <FaUserTie size={25} color='#FF5722'> </FaUserTie>
                        <span className='text-xl font-bold text-secondary'>Organized by : </span>
                    {userName}</p>

                    
                    {/* Email */}
                    <p className='flex items-center gap-2 text-gray-500 font-medium'>
                            <MdDateRange size={25} color='#FF5722'> </MdDateRange>
                        <span className='text-xl font-bold text-secondary'>Email : </span>
                    {email}</p>
                </div>
                
                <div className='mt-6'>
                    <h2 className='text-5xl border-b-2 border-secondary pb-4 mb-4 font-bold text-secondary'>Description</h2>
                    <p className='text-gray-500 font-medium'>{description}</p>
                </div>

                    {/* <p className='text-xl font-bold text-secondary'>Category: <span className='text-gray-600 font-medium ml-2'>{category}</span></p> */}
                </div>
            </div>
        </div>
    );
};

export default GroupDetails;