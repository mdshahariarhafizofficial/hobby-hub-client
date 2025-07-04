import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/HobbyHubLogo.png'
import { AuthContext } from '../../Context/AuthContext';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineDashboard } from 'react-icons/md';

const Navbar = () => {
    const {user, handleSingOut} = useContext(AuthContext);
    
    const menu = <>
            <li><NavLink to='/' 
            className={ ({isActive}) => isActive? 'text-primary border-b-2 rounded-none font-bold' : '' }
            >Home</NavLink></li>
            <li><NavLink to='all-groups' 
            className={ ({isActive}) => isActive? 'text-primary border-b-2 rounded-none font-bold': '' }
            >All Groups</NavLink></li>

            <li><NavLink to='about-us' 
            className={ ({isActive}) => isActive? 'text-primary border-b-2 rounded-none font-bold': '' }
            >About Us</NavLink></li>
            {
                !user && 
                <>
                    <li><NavLink to='terms-of-use' 
                    className={ ({isActive}) => isActive? 'text-primary border-b-2 rounded-none font-bold': '' }
                    >Terms of Use</NavLink></li>

                    <li><NavLink to='privacy-policy' 
                    className={ ({isActive}) => isActive? 'text-primary border-b-2 rounded-none font-bold': '' }
                    >Privacy Policy</NavLink></li>
                </>
            }

            {
               user ? 
               <>
               <li><NavLink to='create-group' 
               className={ ({isActive}) => isActive? 'text-primary border-b-2 rounded-none font-bold': '' }
               >Create Group</NavLink></li>
               <li><NavLink to='my-groups' 
               className={ ({isActive}) => isActive? 'text-primary border-b-2 rounded-none font-bold': '' }
               >My Groups</NavLink></li>
               </>
               : ''
            }

    </>
    return (
        <nav>
            <div className="navbar px-0 py-3 border-b-2 border-gray-200">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn dark:bg-[#ff946a] btn-ghost pl-0 lg:hidden items-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-base font-medium space-y-4 text-secondary">
                        {
                            menu
                        }
                    </ul>
                    </div>
                    <Link to='/'><img className='max-w-40 h-16 object-cover' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base font-medium space-x-4 text-secondary dark:text-[#ff946a]">
                        {
                            menu
                        }
                    </ul>
                </div>
                {/* <div className="navbar-end space-x-4">
                    <Tooltip id='my-tooltip'></Tooltip>
                    {
                        user? 
                        <div className='flex items-center gap-4'>
                            
                            <div
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={`${user&& user.displayName }`}
                            data-tooltip-place="bottom"
                            >
                                <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                                    <img 
                                    className='cursor-pointer' src= {user && user.email ? user.photoURL : '' } referrerPolicy="no-referrer" />
                                </div>
                                </div>
                            </div>

                            <button onClick={()=>handleSingOut()} className="btn dark:bg-[#ff946a] btn-primary text-white text-xl font-medium px-6 tracking-wider">Log Out</button>
                        </div>
                        :
                        <div className='flex items-center gap-4'>
                            <Link to='login'>
                                <button className="btn btn-primary dark:bg-[#ff946a] text-white text-xl font-medium px-6 tracking-wider">Login</button>
                            </Link>
                                <span className='font-bold hidden md:block dark:text-primary'>Or</span>
                            <Link to='register' className='hidden md:block'>
                                <button className="btn btn-outline dark:text-white border-primary border-2 text-xl font-medium tracking-wider">Register</button>
                            </Link>
                        </div>
                    }

                </div> */}
                <div className="navbar-end space-x-4">
                    <Tooltip id='my-tooltip'></Tooltip>
                    {
                        user ? (
                        <div className='flex items-center gap-4'>
                            <h2 className='hidden md:block'>{user?.email}</h2>
                            {/* Profile Dropdown with Dashboard Link */}
                            <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={`${user && user.displayName}`}
                                data-tooltip-place="bottom"
                                role="button"
                                className="avatar"
                            >
                                <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                                <img
                                    className='cursor-pointer'
                                    src={user?.photoURL || ''}
                                    referrerPolicy="no-referrer"
                                    alt="user"
                                />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 space-y-3">
                                <li>
                                <span className="font-semibold text-secondary"><FaRegUserCircle size={20} /> {user?.displayName}</span>
                                </li>
                                <li>
                                <Link to="/dashboard"><MdOutlineDashboard size={20} /> Dashboard</Link>
                                </li>
                                <li>
                                <button onClick={() => handleSingOut()} className="btn btn-sm bg-red-500 text-white mt-1">Log Out</button>
                                </li>
                            </ul>
                            </div>

                        </div>
                        ) : (
                        <div className='flex items-center gap-4'>
                            <Link to='login'>
                            <button className="btn btn-primary dark:bg-[#ff946a] text-white text-xl font-medium px-6 tracking-wider">Login</button>
                            </Link>
                            <span className='font-bold hidden md:block dark:text-primary'>Or</span>
                            <Link to='register' className='hidden md:block'>
                            <button className="btn btn-outline dark:text-white border-primary border-2 text-xl font-medium tracking-wider">Register</button>
                            </Link>
                        </div>
                        )
                    }
                    </div>

            </div>
        </nav>
    );
};

export default Navbar;