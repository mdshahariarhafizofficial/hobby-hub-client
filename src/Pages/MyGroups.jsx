import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import GroupCard from '../Components/GroupCard/GroupCard';
import { FaEdit, FaInfoCircle } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const MyGroups = () => {
    const {user} = useContext(AuthContext);
    const data = useLoaderData();
    const [myGroups, setMyGroups] = useState(data);

    useEffect(()=>{
        const remainingGroups = data.filter(group => group.email === user.email );
        setMyGroups(remainingGroups)
    },[data, user.email])

    console.log(data);
    
    return (
        <div>
            <div className='my-10'>
                <h2 className='text-5xl font-bold text-center text-secondary'>My Groups</h2>
                <div className="divider divider-primary w-52 mx-auto"></div>
            </div>

            <div className='mb-20'>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Group Name</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row  */}
                    {
                        myGroups.map( (group, index) => 
                    <tr key={group._id}>
                        <th>{index+1}</th>
                        <td className='text-md font-bold text-primary'>{group.groupName}</td>
                        <td className='text-secondary font-medium'>{group.category}</td>
                        <td className='font-semibold text-gray-600'>{group.date}</td>
                        <td className='text-md text-secondary font-semibold'>{group.userName}</td>
                        <td>{
                            <div>
                                <div className="join flex justify-center gap-7">
                                    <button className="join-item">
                                        <FaInfoCircle size={22} color='#ff5722'></FaInfoCircle>
                                    </button>
                                    <button className=" join-item">
                                        <FaEdit 
                                        size={22} color='#1e0a3c'></FaEdit>
                                    </button>
                                    <button className=" join-item">
                                        <MdDeleteForever
                                        size={25} color='red'
                                        ></MdDeleteForever>
                                    </button>
                                </div>
                            </div>    
                        }</td>
                    </tr>
                        )
                    }
                    </tbody>
                </table>
                </div>
            </div>

        </div>
    );
};

export default MyGroups;