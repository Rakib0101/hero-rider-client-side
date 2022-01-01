import React from "react";
import { Link } from "react-router-dom";
import AppBar from "../../shared/AppBar/AppBar";
import Footer from "../../shared/Footer/Footer";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

const SignUp = () => {
    const { user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/";
     const {
         getName,
         getEmail,
         getPassword,
         registerWithEmailAndPass,
         setUser,
         handleUpdateUserName,
         setError,
         setIsLogin,
         saveUser
    } = useAuth();
    const formSchema = Yup.object().shape({
         password: Yup.string()
             .required("Password is required")
             .min(4, "Password length should be at least 4 characters"),
         passwordConfirm: Yup.string()
             .required("Confirm Password is required")
             .oneOf([Yup.ref("password")], "Passwords must and should match"),
     });

     const validationOpt = { resolver: yupResolver(formSchema) };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm(validationOpt);
    const onSubmitRider = (data) => {
        // registerUser(data.email, data.password, data.name, redirect_uri);
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
    const onSubmitLearner = (data) => {
        // registerUser(data.email, data.password, data.name, redirect_uri);
        registerWithEmailAndPass(data.email, data.password, data.name)
            .then((result) => {
                const user = result.user;
                setUser(user);
                handleUpdateUserName();
                // save user to the database
                saveUser(data,"learner", "POST");
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
                            <form action='' onSubmit={handleSubmit(onSubmitRider)}>
                                <input
                                    onBlur={getName}
                                    className='w-full border p-2'
                                    placeholder='Full Name'
                                    {...register("full_name", {
                                        required: true,
                                    })}
                                />
                                {errors.full_name && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    onBlur={getEmail}
                                    type='email'
                                    className='w-full border p-2 my-4'
                                    {...register("email", {
                                        required: true,
                                    })}
                                    placeholder='Email'
                                />
                                {errors.email && (
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
                                {errors.age && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("address", {
                                        required: true,
                                    })}
                                    placeholder='Address'
                                />
                                {errors.address && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("phone", {
                                        required: true,
                                    })}
                                    placeholder='Phone no.'
                                />
                                {errors.phone && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("drivingLicence", {
                                        required: true,
                                    })}
                                    placeholder='Driving Licence Picture Link'
                                />
                                {errors.drivingLicence && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("area", {
                                        required: true,
                                    })}
                                    placeholder='Area'
                                />
                                {errors.area && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("nid", {
                                        required: true,
                                    })}
                                    placeholder='NID picture link'
                                />
                                {errors.nid && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("profilePicture", {
                                        required: true,
                                    })}
                                    placeholder='Profile picture link'
                                />
                                {errors.profilePicture && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("vehicleType", {
                                        required: true,
                                    })}
                                    placeholder='Vehicle type'
                                />
                                {errors.exampleRequired && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("carName", {
                                        required: true,
                                    })}
                                    placeholder='Car Name'
                                />
                                {errors.exampleRequired && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("carModel", {
                                        required: true,
                                    })}
                                    placeholder='Car model'
                                />
                                {errors.exampleRequired && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("carNamePalate", {
                                        required: true,
                                    })}
                                    placeholder='Car name palate'
                                />
                                {errors.exampleRequired && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    onBlur={getPassword}
                                    type='password'
                                    className='w-full border p-2 my-4'
                                    {...register("password", {
                                        required: true,
                                    })}
                                    placeholder='Passowrd'
                                />
                                {errors.exampleRequired && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    type='password'
                                    className='w-full border p-2 my-4'
                                    {...register("passwordConfirm", {
                                        required: true,
                                    })}
                                    placeholder='Confirm Passowrd'
                                />
                                <div className='invalid-feedback'>
                                    {errors.passwordConfirm?.message}
                                </div>
                                {errors.exampleRequired && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border cursor-pointer p-2 bg-gray-600'
                                    type='submit'
                                    value='Create An Account'
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
                            <form action='' onSubmit={handleSubmit(onSubmitLearner)}>
                                <input
                                    onBlur={getName}
                                    className='w-full border p-2'
                                    placeholder='Full Name'
                                    {...register("full_name", {
                                        required: true,
                                    })}
                                />
                                {errors.full_name && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    onBlur={getEmail}
                                    type='email'
                                    className='w-full border p-2 my-4'
                                    {...register("email", {
                                        required: true,
                                    })}
                                    placeholder='Email'
                                />
                                {errors.email && (
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
                                {errors.age && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("address", {
                                        required: true,
                                    })}
                                    placeholder='Address'
                                />
                                {errors.address && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("phone", {
                                        required: true,
                                    })}
                                    placeholder='Phone no.'
                                />
                                {errors.phone && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("drivingLicence", {
                                        required: true,
                                    })}
                                    placeholder='Driving Licence Picture Link'
                                />
                                {errors.drivingLicence && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("area", {
                                        required: true,
                                    })}
                                    placeholder='Area'
                                />
                                {errors.area && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("nid", {
                                        required: true,
                                    })}
                                    placeholder='NID picture link'
                                />
                                {errors.nid && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("profilePicture", {
                                        required: true,
                                    })}
                                    placeholder='Profile picture link'
                                />
                                {errors.profilePicture && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border p-2 my-4'
                                    {...register("vehicleType", {
                                        required: true,
                                    })}
                                    placeholder='Vehicle type'
                                />
                                {errors.exampleRequired && (
                                    <span>This field is required</span>
                                )}
                                
                                <input
                                    onBlur={getPassword}
                                    type='password'
                                    className='w-full border p-2 my-4'
                                    {...register("password", {
                                        required: true,
                                    })}
                                    placeholder='Passowrd'
                                />
                                {errors.exampleRequired && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    type='password'
                                    className='w-full border p-2 my-4'
                                    {...register("passwordConfirm", {
                                        required: true,
                                    })}
                                    placeholder='Confirm Passowrd'
                                />
                                <div className='invalid-feedback'>
                                    {errors.passwordConfirm?.message}
                                </div>
                                {errors.exampleRequired && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    className='w-full border cursor-pointer p-2 bg-gray-600'
                                    type='submit'
                                    value='Create An Account'
                                />
                            </form>
                            <div className='flex flex-col md:flex-row justify-between my-8'>
                                <p></p>
                            </div>
                            <h2 className='my-8'>
                                Already have an account ?{" "}
                                <Link
                                    className='text-green-700 cursor-pointer font-bold'
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
