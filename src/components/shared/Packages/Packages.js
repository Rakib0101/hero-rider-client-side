import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Packages = () => {
    return (
        <div className="">
            <div className='container mx-auto'>
                <h2 className='text-3xl text-center'>Our Packages</h2>
                <div className="flex justify-center my-8">
                    <div class='shadow-lg rounded-2xl w-64 mx-2 bg-gray-800 p-4'>
                        <div class='flex text-white  items-center justify-between'>
                            <p class='text-2xl font-medium mb-4'>
                                Car Driving Lessons
                            </p>
                            <p class='text-2xl font-bold flex flex-col'>
                                $200
                                <span class='font-thin text-right text-sm'>
                                    month
                                </span>
                            </p>
                        </div>
                        <p class='text-white text-md mt-4'>Plan include :</p>
                        <ul class='text-sm text-white w-full mt-6 mb-6'>
                            <li class='mb-3 flex items-center '>
                                <FaCheckCircle></FaCheckCircle>
                                <span className='px-4'>
                                    Provide Certificate
                                </span>
                            </li>
                            <li class='mb-3 flex items-center '>
                                <FaCheckCircle></FaCheckCircle>
                                <span className='px-4'>
                                    Provide Driving Licence
                                </span>
                            </li>
                            <li class='mb-3 flex items-center '>
                                <FaCheckCircle></FaCheckCircle>
                                <span className='px-4'>Extra Classes</span>
                            </li>
                        </ul>
                        <button
                            type='button'
                            class='w-full px-3 py-3 text-sm shadow rounded-lg text-indigo-500 bg-white hover:bg-gray-100 '
                        >
                            Purchase Course
                        </button>
                    </div>
                    <div class='shadow-lg rounded-2xl w-64 mx-2 bg-gray-800 p-4'>
                        <div class='flex text-white  items-center justify-between'>
                            <p class='text-2xl font-medium mb-4'>
                                Bike Driving Lessons
                            </p>
                            <p class='text-2xl font-bold flex flex-col'>
                                $100
                                <span class='font-thin text-right text-sm'>
                                    month
                                </span>
                            </p>
                        </div>
                        <p class='text-white text-md mt-4'>Plan include :</p>
                        <ul class='text-sm text-white w-full mt-6 mb-6'>
                            <li class='mb-3 flex items-center '>
                                <FaCheckCircle></FaCheckCircle>
                                <span className='px-4'>
                                    Provide Certificate
                                </span>
                            </li>
                            <li class='mb-3 flex items-center '>
                                <FaCheckCircle></FaCheckCircle>
                                <span className='px-4'>
                                    Provide Driving Licence
                                </span>
                            </li>
                            <li class='mb-3 flex items-center '>
                                <FaCheckCircle></FaCheckCircle>
                                <span className='px-4'>Extra Classes</span>
                            </li>
                        </ul>
                        <button
                            type='button'
                            class='w-full px-3 py-3 text-sm shadow rounded-lg text-indigo-500 bg-white hover:bg-gray-100 '
                        >
                            Purchase Course
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;