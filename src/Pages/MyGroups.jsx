import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import GroupCard from '../Components/GroupCard/GroupCard';

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
            <h1>My Groups Page</h1>
            {
                myGroups.map(group => 
                <GroupCard 
                key={group._id}
                group={group}
                ></GroupCard>)
            }
        </div>
    );
};

export default MyGroups;