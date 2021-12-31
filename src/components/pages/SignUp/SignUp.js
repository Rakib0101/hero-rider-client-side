import React from "react";
import { Link } from "react-router-dom";
import AppBar from "../../shared/AppBar/AppBar";
import Footer from "../../shared/Footer/Footer";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const SignUp = () => {
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <AppBar></AppBar>
            <div className=''>
                <div className='container mx-auto flex flex-col-reverse md:flex-row'>
                    <div className='md:w-1/2 w-full text-black text-left'>
                        <div className='p-8 md:m-12 m-4 rounded-lg'>
                            <h2 className='custom-color text-4xl'>
                                Join as a rider
                            </h2>
                            <p className='my-4'>
                                And enjoy life during the time you just saved!
                            </p>
                            <p className='text-red-600'></p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    className='w-full border p-2'
                                    placeholder='Full Name'
                                    {...register("full_name", {
                                        required: true,
                                    })}
                                />
                                {errors.exampleRequired && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("email", {
                                        required: true,
                                    })}
                                    placeholder='Email'
                                />
                                {errors.exampleRequired && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    type='number'
                                    className='w-full border p-2 my-4'
                                    {...register("age", {
                                        required: true,
                                    })}
                                    placeholder='Age'
                                />
                                {errors.exampleRequired && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("address", {
                                        required: true,
                                    })}
                                    placeholder='Address'
                                />
                                {errors.exampleRequired && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("phone", {
                                        required: true,
                                    })}
                                    placeholder='Phone no.'
                                />
                                {errors.exampleRequired && (
                                    <span>This field is required</span>
                                )}
                                <textarea
                                    className='w-full border p-2'
                                    {...register("review", {
                                        required: true,
                                    })}
                                    rows='10'
                                ></textarea>
                                {errors.exampleRequired && (
                                    <span>This field is required</span>
                                )}
                                <div className='flex my-4'>
                                    <h2 className='pr-8'>
                                        Please give a rating
                                    </h2>
                                </div>
                                <input
                                    className='w-full border p-2 bg-primary'
                                    type='submit'
                                />
                            </form>
                            <div className='flex flex-col md:flex-row justify-between my-8'>
                                <p></p>
                            </div>
                            <h2 className='my-8'>
                                Already have an account ?{" "}
                                <Link
                                    className='primary-color font-bold'
                                    to='/login'
                                >
                                    Sign In
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full text-black text-left'>
                        <div className='p-8 md:m-12 m-4 rounded-lg'>
                            <h2 className='custom-color text-4xl'>
                                Join as a driving lesson learner
                            </h2>
                            <p className='my-4'>
                                And enjoy life during the time you just saved!
                            </p>
                            <p className='text-red-600'></p>
                            <form action=''>
                                <div className='flex flex-col md:flex-row justify-between mb-2'>
                                    <div className='md:w-1/2 mr-2'>
                                        <label htmlFor=''>Full Name</label>
                                        <br />
                                        <input
                                            className='w-full text-gray-500 rounded py-2 pl-4'
                                            type='text'
                                            placeholder='Full Name'
                                        />
                                    </div>
                                    <div className='md:w-1/2 md:ml-2'>
                                        <label htmlFor=''>Email Address</label>
                                        <br />
                                        <input
                                            className='w-full text-gray-500 rounded py-2 pl-4'
                                            type='email'
                                            placeholder='Email Address'
                                        />
                                    </div>
                                </div>
                                <div className='mb-2'>
                                    <label htmlFor=''>Password</label>
                                    <br />
                                    <input
                                        className='w-full text-gray-500 rounded py-2 pl-4'
                                        type='password'
                                        placeholder='Password'
                                    />
                                </div>
                                <div>
                                    Creating an account means you are okay with
                                    our Terms of Service and Privacy Policy
                                </div>
                                <div>
                                    <input
                                        className='text-white bg-gray-600 text-xl rounded mt-4  px-8 py-2'
                                        type='submit'
                                        value='Create An Account'
                                    />
                                </div>
                            </form>
                            <div className='flex flex-col md:flex-row justify-between my-8'>
                                <p></p>
                            </div>
                            <h2 className='my-8'>
                                Already have an account ?{" "}
                                <Link
                                    className='primary-color font-bold'
                                    to='/login'
                                >
                                    Sign In
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;
