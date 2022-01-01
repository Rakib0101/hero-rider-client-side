import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AppBar = () => {
    const { user , logOut} = useAuth()
    console.log(user);
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className='flex flex-wrap'>
                <div className='w-full'>
                    <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500'>
                        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
                            <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
                                <Link
                                    className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'
                                    to='/'
                                >
                                    Hero Rider
                                </Link>
                                <button
                                    className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                                    type='button'
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    <i className='fas fa-bars'></i>
                                </button>
                            </div>
                            <div
                                className={
                                    "lg:flex flex-grow items-center" +
                                    (menuOpen ? " flex" : " hidden")
                                }
                                id='example-navbar-info'
                            >
                                <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
                                    <li className='nav-item'>
                                        <Link
                                            className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                            to='/'
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link
                                            className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                            to='/services'
                                        >
                                            Services
                                        </Link>
                                    </li>
                                    {user?.email ? (
                                        <li className='nav-item'>
                                            <button
                                                onClick={logOut}
                                                className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                            >Logout</button>
                                        </li>
                                    ) : (
                                        <li className='flex'>
                                            <li className='nav-item'>
                                                <Link
                                                    className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                                    to='/sign-up'
                                                >
                                                    Sign Up
                                                </Link>
                                            </li>
                                            <li className='nav-item'>
                                                <Link
                                                    className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                                    to='/login'
                                                >
                                                    Login
                                                </Link>
                                            </li>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default AppBar;