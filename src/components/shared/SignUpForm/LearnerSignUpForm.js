import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function LearnerSignUpForm() {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/";
    // firebase import
    const {
        registerWithEmailAndPass,
        setUser,
        setError,
        setIsLogin,
        saveUser,
        handleUpdateUserName,
    } = useAuth();
    // password match
    const formSchema = Yup.object().shape({
        password: Yup.string()
            .required("Password is required")
            .min(4, "Password length should be at least 4 characters"),
        passwordConfirm: Yup.string()
            .required("Confirm Password is required")
            .oneOf([Yup.ref("password")], "Passwords needs to match"),
    });
    const validationOpt = { resolver: yupResolver(formSchema) };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(validationOpt);
    const onSubmit = (data) => {
        registerWithEmailAndPass(data.email, data.password, data.name)
            .then((result) => {
                const user = result.user;
                setUser(user);
                handleUpdateUserName();
                // save user to the database
                saveUser(data, "rider", "POST");
                history.push(redirect_uri);
            })
            .catch((err) => {
                setError(err.message);
                console.log(err.message);
            })
            .finally(() => {
                setIsLogin(false);
            });
        console.log(data);
    };
    return (
        <div className='md:w-1/2 p-4'>
            <h3 className='text-2xl font-medium'>Join as a Driving Learner</h3>
            <hr className='border-gray-200 w-8/12 my-2' />
            <form action='' onSubmit={handleSubmit(onSubmit)}>
                <h3 className='block w-full my-3 font-medium text-lg'>
                    Personal Information
                </h3>
                <div className='flex'>
                    <input
                        className='w-full border mr-2'
                        type='text'
                        placeholder='Full Name'
                        {...register("fullName")}
                    />
                    <input
                        className='w-full border '
                        required
                        type='email'
                        placeholder='Email'
                        {...register("email")}
                    />
                </div>

                <div>
                    <input
                        className='w-full my-2 border'
                        type='text'
                        placeholder='Address'
                        {...register("address")}
                    />
                </div>
                <div className='flex'>
                    <input
                        className='w-1/2 border mr-2'
                        type='text'
                        placeholder='Image URL'
                        {...register("nidImage")}
                    />
                    <input
                        className='w-1/2 border'
                        required
                        type='text'
                        placeholder='Image URL'
                        {...register("profileImage")}
                    />
                </div>
                <select
                    className='border my-2 w-full'
                    type='dropdown'
                    placeholder='Vehicle Type'
                    {...register("vehicleType")}
                >
                    <option value='car'>Car</option>
                    <option value='bike'>Bike</option>
                </select>
                <div className='flex'>
                    <div className='w-1/2 mr-2'>
                        <input
                            type='password'
                            placeholder='Password'
                            {...register("password")}
                            className={`form-control border w-full ${
                                errors.password ? "is-invalid" : ""
                            }`}
                        />
                        <div className='invalid-feedback w-full text-red-600'>
                            {errors.password?.message}
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <input
                            type='password'
                            placeholder='Re-enter Password'
                            {...register("passwordConfirm")}
                            className={`form-control border w-full ${
                                errors.passwordConfirm ? "is-invalid" : ""
                            }`}
                        />
                        <div className='invalid-feedback w-full text-red-600'>
                            {errors.passwordConfirm?.message}
                        </div>
                    </div>
                </div>
                <input
                    type='hidden'
                    defaultValue='Learner'
                    {...register("userRole")}
                />
                <input
                    className='bg-gray-600 px-4 py-1 rounded mt-2'
                    type='submit'
                    onClick={registerWithEmailAndPass}
                />
            </form>
        </div>
    );
}
