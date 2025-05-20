import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='min-h-[calc(100vh-382px)] flex items-center justify-center'>
            <FadeLoader color="#ff5722" />
        </div>
    );
};

export default Loader;