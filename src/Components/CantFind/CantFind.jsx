import React from 'react';
import { Link } from 'react-router';

const CantFind = () => {
    return (
        <div className='my-20 bg-[#f3f4f6] dark:bg-[#ff946a] p-10 rounded-2xl grid grid-cols-12 gap-8'>
            <div className='col-span-12 md:col-span-7'>
                <div className='flex items-center justify-center h-full'>
                    <h2 className='text-6xl text-secondary font-bold tracking-widest'>Can’t find a group? <br /> Create your own!</h2>
                </div>
            </div>
            <div className='col-span-12 md:col-span-5'>
                <div className='flex items-center justify-center h-full'>
                    <Link to='/create-group'>
                        <button onClick={()=> window.scrollTo(0,1)} className="btn dark:bg-secondary btn-primary text-2xl">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CantFind;