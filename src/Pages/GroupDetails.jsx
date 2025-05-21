import React from 'react';
import { useLoaderData } from 'react-router';

const GroupDetails = () => {
    const data = useLoaderData();
    console.log(data);
    
    return (
        <div>
            <h1>Group Details Page</h1>
        </div>
    );
};

export default GroupDetails;