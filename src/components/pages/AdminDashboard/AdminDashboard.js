import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import AppBar from '../../shared/AppBar/AppBar';
import Footer from '../../shared/Footer/Footer';

const AdminDashboard = () => {
    const [users, setUsers] = useState();
    const [filters, setFilters] = useState({});
    const [monitorUser, setMonitorUser] = useState(true);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const { option, searchText } = data;
        handleFilter(option, searchText)   
    }
    let url = `http://localhost:5000/users`;
    
    console.log(users)
    const handleFilter = (option,searchText) => {     
        setFilters({
            ...filters,
            option: option,
            searchText: searchText
        });
        setMonitorUser(!monitorUser);
    };
    url = `http://localhost:5000/users?${
        filters.option ==='email' ? `email=${filters.searchText}&` : ""
    }${filters.option === 'phone' ? `phone=${filters.searchText}&` : ""}${
        filters.option === 'fullName' ? `fullName=${filters.searchText}&` : ""
        }`;
    console.log(url)
    useEffect(() => {
        axios.get(url).then((res) => {
            setUsers(res.data);
        });
    }, [monitorUser]);
    const onSubmitCheckBox = (data) => {
        console.log(data)
    };
    const { isLogin } = useAuth();
    return (
        <div>
            <AppBar></AppBar>
            <div className='container mx-auto py-16 '>
                <div className='text-xl text-white mb-8'>
                    <h2>You can filter by email,phone or fullname </h2>
                    <div className='mr-6'>
                        <div className='bg-gray-600 py-4'>
                            <p className='px-4'>
                                Please select an option, which you want to by
                                filter
                            </p>
                            <form action='' onSubmit={handleSubmit(onSubmit)}>
                                <div className='flex items-center px-4'>
                                    <select
                                        className='text-black mr-2'
                                        name='func'
                                        {...register("option", {
                                            required: "select one option",
                                        })}
                                    >
                                        <option value='email'>Email</option>
                                        <option value='phone'>Phone</option>
                                        <option value='fullName'>
                                            Full Name
                                        </option>
                                    </select>
                                    {errors.func && (
                                        <p style={{ color: "red" }}>
                                            {" "}
                                            {errors.func.message}
                                        </p>
                                    )}
                                    <input
                                        className='w-full mr-2 px-4 outline-0'
                                        type='text'
                                        {...register("searchText", {
                                            required: true,
                                        })}
                                        placeholder='Please write here..'
                                    />
                                    <input
                                        className='bg-blue-600 px-4 rounded py-1'
                                        type='submit'
                                        value='Search'
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <form action='' onSubmit={handleSubmit(onSubmitCheckBox)}>
                        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                            <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                                <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                                    <table className='min-w-full divide-y divide-gray-200'>
                                        <thead className='bg-gray-50'>
                                            <tr>
                                                <th
                                                    scope='col'
                                                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                                >
                                                    Contact
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                                >
                                                    Age
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                                >
                                                    Role
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                                >
                                                    Vehicle Type
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='bg-white divide-y divide-gray-200'>
                                            {users?.map((user) => (
                                                <tr key={user?._id}>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <div className='flex items-center'>
                                                            <div>
                                                                <input
                                                                    type='checkbox'
                                                                    name=''
                                                                    id=''
                                                                    {...register(
                                                                        "checkBox",
                                                                        {
                                                                            required: false,
                                                                        }
                                                                    )}
                                                                />
                                                            </div>
                                                            <div className='flex-shrink-0 h-10 w-10'>
                                                                <img
                                                                    className='h-10 w-10 rounded-full'
                                                                    src={
                                                                        user?.profileImage
                                                                    }
                                                                    alt=''
                                                                />
                                                            </div>
                                                            <div className='ml-4'>
                                                                <div className='text-sm font-medium text-gray-900'>
                                                                    {
                                                                        user?.full_name
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <div className='text-sm text-gray-900'>
                                                            {user.email}
                                                        </div>
                                                        <div className='text-sm text-gray-500'>
                                                            {user.phone}
                                                        </div>
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full '>
                                                            {user.age}
                                                        </span>
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                                                        {user.role}
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                                                        <Link
                                                            to='#'
                                                            className='text-indigo-600 hover:text-indigo-900'
                                                        >
                                                            {user?.vehicleType}
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <input
                            className='bg-red-600 px-4 py-1 rounded cursor-pointer mt-4 text-white'
                            type='submit'
                            value='Block Users'
                        />
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AdminDashboard;