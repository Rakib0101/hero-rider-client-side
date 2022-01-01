import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';
import usePackages from '../../../hooks/usePackages';
import AppBar from '../../shared/AppBar/AppBar';
import Footer from '../../shared/Footer/Footer';
import StripeForm from './StripeForm';

const Checkout = () => {
    let { id } = useParams();
    const [courses] =usePackages()
    const { user } = useAuth();
    const course = courses?.find((ele) => ele.packageId === id);
    console.log(course);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const { _id, ...rest } = courses;
        axios
            .post("https://localhost:5000/orders", {
                ...data,
                ...rest,
            })
            .then((res) => {
                console.log(res.data);
                if (res.data?.insertedId) {
                    swal(
                        "Congratualations!!!",
                        `Your shipping and order information take successfully`,
                        "success"
                    );
                    reset();
                }
            });
    };
    // recreating the `Stripe` object on every render.
    const stripePromise = loadStripe(
        "pk_test_51KD5r7F2NFuyTuJdga0q0nklIbLQxYk1QsURZlXAEDEq6x9vrE0yxxwgeXyOhRdppmGTAe2RZ0UX6GZxy8tFl8Bk00EAsjM1Tx"
    );
    return (
        <div>
            <AppBar></AppBar>
            <div className='container mx-auto flex items-center'>
                <div className='w-1/2 my-4'>
                    <h2 className='mt-8 mb-2 text-2xl'>
                        Please Fillup this form for checkout
                    </h2>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='justify-center  w-full mx-auto'>
                        <input
                            className='w-full mb-4 border px-4 py-1 rounded'
                            type='text'
                            placeholder='Your Full Name'
                            {...register("name")}
                        />
                        <input
                            className='w-full mb-4 border px-4 py-1 rounded'
                            value={user?.email ? user.email : ""}
                            type='email'
                            placeholder='Your Email Address'
                            {...register("email")}
                        />
                        <input
                            className='w-full border mb-4 px-4 py-1 rounded'
                            type='tel'
                            placeholder='Your Mobile Number'
                            {...register("mobileNumber", {
                                required: true,
                            })}
                        />
                        <input
                            className='w-full border mb-4 px-4 py-1 rounded'
                            type='text'
                            placeholder='Address'
                            {...register("address", {
                                required: true,
                            })}
                        />

                        <input
                            className='text-white rounded bg-gray-600 tetx-white px-4 py-1 cursor-pointer'
                            type='submit'
                        />
                    </form>
                </div>
                <div className='w-1/2'>
                    <Elements stripe={stripePromise}>
                        <StripeForm {...course}></StripeForm>
                    </Elements>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Checkout;