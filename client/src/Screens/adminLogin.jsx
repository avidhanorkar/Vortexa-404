import React from 'react';
const AdminLogin = () => {
    return (
        <>
            <div className="login-container w-[40%] h-[50%] bg-[#121212] flex flex-col justify-between rounded">
                <div>
                    <p className='text-4xl text-center text-[#fff] pt-[50px] font-bold'>Login/SignUp as a Admin</p>
                    <p className='text-2xl text-center text-gray-500 pt-[50px]'>Welcome, Admin! Log in to manage courses and track progress</p>
                    <p className='text-2xl text-center text-gray-500 '>Join Us! Sign up to enhance the learning experience and oversee student achievements!</p>
                </div>
                <div className='h-[20%] flex justify-center align-center'>
                    <div className="px-3 py-2 bg-[#ECDBB5] text-[#000] font-bold w-max h-max rounded-lg hover:bg-[#fff]">Admin Authentication</div>
                </div>
            </div>
        </>
    )
}

export default AdminLogin;