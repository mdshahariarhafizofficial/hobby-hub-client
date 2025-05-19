import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <>
            <header>
                <div className='max-w-[1280px] mx-auto px-5 lg:px-0'>
                    <Navbar></Navbar>
                </div>
            </header>
            <main>
                <div className='max-w-[1280px] min-h-[calc(100vh-390.61px)] mx-auto px-5 lg:px-0'>
                    <Outlet></Outlet>
                </div>
            </main>
            <footer>
                <div className='max-w-[1280px] mx-auto px-5 lg:px-0'>
                    <Footer></Footer>
                </div>
            </footer>
        </>
    );
};

export default Root;