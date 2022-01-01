import React from "react";
import { FaUserCircle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import AppBar from "../../shared/AppBar/AppBar";
import Footer from "../../shared/Footer/Footer";

const UserDashboard = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <>
            <AppBar></AppBar>
            <div>
                <div className='container mx-auto py-12'>
                    <div className='grid grid-cols-5 gap-8'>
                        <div className='col-span-1 bg-purple-300 rounded-xl border-r-2'>
                            <div className='shaddow px-4 py-8'>
                                {user.profileImage ? (
                                    <img
                                        className='w-24 mx-auto h-24 rounded-full'
                                        src={user.profileImage}
                                        alt=''
                                    />
                                ) : (
                                    <span className='mx-auto text-6xl'>
                                        <FaUserCircle></FaUserCircle>
                                    </span>
                                )}
                                <h2 className='text-center text-2xl my-4'>
                                    {user?.fullName}
                                </h2>
                            </div>
                        </div>
                        <div className='col-span-4 glass-effect px-12 py-6 rounded-xl'>
                            <h2 className='text-4xl py-4 my-4'>My Profile</h2>

                            <hr />
                            <div className='flex '>
                                <div className='w-1/4'>
                                    {user?.profileImage ? (
                                        <img
                                            className='w-40 h-40 my-2 mx-auto rounded-full'
                                            src={user.photoURL}
                                            alt=''
                                        />
                                    ) : (
                                        <FaUserCircle className='w-40 h-40 my-2 mx-auto rounded-full'></FaUserCircle>
                                    )}
                                    <div className='text-center mt-8'>
                                        <button className='bg-gray-600 px-4 py-2 text-2xl text-white rounded'>
                                            Edit Profile
                                        </button>
                                    </div>
                                </div>
                                <div className='w-3/4'>
                                    <h2 className='text-2xl font-semibold mt-8'>
                                        Full Name
                                    </h2>
                                    <h2 className='text-3xl'>
                                        {user.fullName}
                                    </h2>
                                    <h2 className='text-2xl font-semibold'>
                                        Email Address
                                    </h2>
                                    <h2 className='text-3xl'>{user.email}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default UserDashboard;
