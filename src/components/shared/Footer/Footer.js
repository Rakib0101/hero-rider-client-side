import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-gray-500'>
            <div className='container mx-auto pt-12 pb-4'>
                <h2 className='text-4xl text-center'>Hero Rider</h2>
                <h3 className='text-center py-8 text-2xl'>
                    Subscribe Our Newsletter
                </h3>
                <div className='md:w-1/2  md:mx-auto mx-2 flex bg-blue-600 rounded-full'>
                    <input className='w-full rounded-l-full' type='text' />
                    <button className='text-white px-4 py-2 '>Subscribe</button>
                </div>

                <ul className='flex justify-center pt-8'>
                    <li className='text-xl px-4 text-white'>
                        <Link>
                            <FaFacebookF></FaFacebookF>
                        </Link>
                    </li>
                    <li className='text-xl px-4 text-white'>
                        <Link>
                            <FaInstagram></FaInstagram>
                        </Link>
                    </li>
                    <li className='text-xl px-4 text-white'>
                        <Link>
                            <FaTwitter></FaTwitter>
                        </Link>
                    </li>
                    <li className='text-xl px-4 text-white'>
                        <Link>
                            <FaYoutube></FaYoutube>
                        </Link>
                    </li>
                </ul>
                <ul className='flex flex-wrap justify-center pt-12'>
                    <li className='text-lg px-4 border-primary'>
                        <Link>Home</Link>
                    </li>
                    <li className='text-lg px-4 border-primary'>
                        <Link>About Us</Link>
                    </li>
                    <li className='text-lg px-4 border-primary'>
                        <Link>Shop</Link>
                    </li>
                    <li className='text-lg px-4 border-primary'>
                        <Link>Blogs</Link>
                    </li>
                    <li className='text-lg px-4'>
                        <Link>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className='border-t border-gray-400'>
                <p className='py-4 text-center'>
                    Copyright © 2021 Powered by Rakibul Islam. All Rights
                    Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;