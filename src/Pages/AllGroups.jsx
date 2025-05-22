import React from 'react';
import { useLoaderData } from 'react-router';
import GroupCard from '../Components/GroupCard/GroupCard';

const AllGroups = () => {
    const data = useLoaderData();
    console.log(data);
    
    return (
        <div>
            <div className='my-10'>
                <h2 className='text-5xl font-bold text-center text-secondary'>All Groups</h2>
                <div className="divider divider-primary w-52 mx-auto"></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-40'>
                {
                    data.sort((a,b)=> new Date(a.date) - new Date(b.date) )
                    .map(group => 
                    <GroupCard
                        key={group._id}
                        group={group}
                    ></GroupCard>)
                }
            </div>
        </div>
    );
};

export default AllGroups;