import React from 'react';
import { Link, useLocation } from 'react-router';
import { IoIosWarning } from "react-icons/io";

const ErrorPage = () => {
    const location = useLocation();
    
    return (
    <section className="flex items-center h-screen p-16 dark:bg-gray-50 dark:text-gray-800">
        <div className="flex flex-col items-center justify-center px-5 mx-auto my-8" bis_skin_checked="1">
            <div className="text-center" bis_skin_checked="1">
                <IoIosWarning size={200} color='#ff5722' className='mx-auto' />
                <p className="mb-8 font-extrabold text-9xl text-primary">
                    <span className="sr-only">Error</span>404
                </p>
                <h4 className="mb-8 font-extrabold text-4xl text-primary">
                    {location.pathname}
                </h4>
                <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                <Link to='/' className="px-8 py-3 font-semibold rounded bg-primary dark:text-gray-50">Back to homepage</Link>
            </div>
        </div>
    </section>
    );
};

export default ErrorPage;