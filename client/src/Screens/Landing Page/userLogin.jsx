import React from 'react';
import { Link } from 'react-router-dom'
const UserLogin = () => {
    return (
        <>
            <div className="login-container w-[40%] h-[50%] bg-[#121212] flex flex-col justify-between rounded ">
                <div className="px-2">
                    <p className='text-4xl text-center text-[#fff] pt-[50px]'><span className='font-bold'>Login</span></p>
                    <p className='text-2xl text-center text-gray-500 pt-[50px]'>Welcome Back! Log in to continue your journey.Please log in to your account to continue your learning journey. Users can dive back into courses, track progress, and earn badges. Let’s get started! </p>
                </div>
                <div className='h-[20%] flex justify-center align-center'>
                    <Link to="/login" className='px-3 py-2 bg-[#ECDBB5] text-[#000] font-bold w-max h-max rounded-lg hover:bg-[#fff]'>Login</Link>
                </div>
            </div>
        </>
    )
}

export default UserLogin;