import React, { useContext } from 'react';
import logo from '../../assets/HobbyHubLogo.png'
import { NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
const Footer = () => {
        const {user} = useContext(AuthContext);
        const menu = <>
            <li><NavLink to='/' 
            className={ ({isActive}) => isActive? 'text-primary border-b-2 rounded-none font-bold' : '' }
            >Home</NavLink></li>
            <li><NavLink to='all-groups' 
            className={ ({isActive}) => isActive? 'text-primary border-b-2 rounded-none font-bold': '' }
            >All Groups</NavLink></li>
            {
                user? 
                <>
                    <li><NavLink to='create-group' 
                    className={ ({isActive}) => isActive? 'text-primary border-b-2 rounded-none font-bold': '' }
                    >Create Group</NavLink></li>
                    <li><NavLink to='my-groups' 
                    className={ ({isActive}) => isActive? 'text-primary border-b-2 rounded-none font-bold': '' }
                    >My Groups</NavLink></li>
                </>: ''
            }
    </>
    return (
        <footer className="footer dark:bg-[#4d396500] py-20 px-0 sm:footer-horizontal bg-base-100 border-t-2 border-gray-200 text-base-content p-10">
        <aside>
            <img className='w-56' src={logo} alt="" />
            <p className='pl-2 text-primary dark:text-white font-bold'>
                Explore your passion and meet like-minded people.
                HobbyHub <br /> – where hobbies build lasting friendships.
            </p>
        </aside>
        <nav>
            <h6 className="text-2xl tracking-wider text-primary dark:text-[#ff946a] font-bold">Links</h6>
                <ul className='flex flex-col dark:text-white gap-4'>
                    {
                        menu
                    }
                </ul>
        </nav>
        <nav>
        <h6 className="text-2xl dark:text-[#ff946a] tracking-wider text-primary font-bold">Legal</h6>
            <div className='flex flex-col gap-4 dark:text-white'>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </nav>
        <nav>
            <h6 className="text-2xl tracking-wider text-primary dark:text-[#ff946a] font-bold">Social</h6>
            <div className="grid grid-flow-col gap-4">
            <a href='http://www.x.com' target='_blank'>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="dark:fill-[#DCDAD5]">
                <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
            </a>
            <a href='https://www.youtube.com/' target='_blank'>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="dark:fill-[#DCDAD5]">
                <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
            </a>
            <a href='https://www.facebook.com/mdshahariarhafizofficial' target='_blank'>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="dark:fill-[#DCDAD5]">
                <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
            </a>
            </div>
        </nav>
        </footer>

    );
};

export default Footer;