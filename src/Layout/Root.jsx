import React, { useEffect, useState } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Loader from '../Pages/Loader';

const Root = () => {
    const [darkMode, setDarkMode] = useState(false);

    // When Page Load
    useEffect(()=>{
        const rootHtml = window.document.documentElement;
        const storedMode = localStorage.getItem('theme')
        if (storedMode == "dark") {
            rootHtml.classList.add('dark');
            setDarkMode(true)
        }
    },[])

    // Dark Mode
    useEffect(()=>{
        const rootHtml = window.document.documentElement; 
        if (darkMode) {
           rootHtml.classList.add('dark');
           localStorage.setItem('theme', 'dark') 
        }
        else{
            rootHtml.classList.remove('dark');
            localStorage.setItem('theme', 'light')
        }
    },[darkMode])

    const {state} = useNavigation(); 


    return (
        <>
            <header className='sticky top-0 bg-white z-50 dark:bg-[#1F0A3D]'>
                <div className='max-w-[1280px] mx-auto px-5 lg:px-0'>
                    <Navbar></Navbar>
                </div>
            </header>
            <main className='relative'>

            {/* Dark Mode Controller */}
                <label onClick={()=>setDarkMode(!darkMode)} className="w-25 px-2 py-1 rounded-2xl left-[95%] top-[10%] z-50 sticky lg:flex items-center cursor-pointer gap-2 bg-gray-200 hidden">
                
                {/* Sun */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff5722"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <path
                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>

                <input type="checkbox" value="synthwave" className="toggle theme-controller" />

                {/* Moon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1e0a3c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>

                </label>

                <div className='max-w-[1280px] min-h-[calc(100vh-390.61px)] mx-auto px-5 lg:px-0'>
                    {
                        state == 'loading'? <Loader></Loader>
                        :<Outlet></Outlet>
                    }
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