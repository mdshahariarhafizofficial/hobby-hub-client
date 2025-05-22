import React from 'react';
import { Link, useLoaderData } from 'react-router';
import GroupCard from '../GroupCard/GroupCard';
import { FaArrowRight } from 'react-icons/fa6';

const FeaturedGroups = () => {
    const data = useLoaderData();
    const featuredGroups = data.filter(group => new Date(group.date) >= new Date());
    // console.log(data);
    console.log(featuredGroups.slice(0, 6));
    
    
    return (
        <div id='featured-groups' className='my-10'>
            <div className='flex items-center justify-between border-b-2 pb-3 border-gray-300'>
                <h2 className='text-5xl text-secondary font-bold'>Featured Groups</h2>
                <div>
                    <Link to='/all-groups' className='text-primary font-bold flex items-center gap-1'>
                        See All Groups
                        <FaArrowRight></FaArrowRight>
                    </Link>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20 mt-6'>
                {
                    featuredGroups.slice(0, 8).sort((a,b)=> new Date(a.date) - new Date(b.date) )
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

export default FeaturedGroups;