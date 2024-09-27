import React from 'react';
const AdminLogin = () => {
    return (
        <>
            <div className="login-container w-[40%] h-[50%] bg-[#121212] flex flex-col justify-between rounded">
                <div>
                    <p className='text-4xl text-center text-[#fff] pt-[50px] font-bold'><span className='font-bold'>SignUp</span></p>
                    <p className='text-2xl text-center text-gray-500 pt-[50px]'>

Start Your Journey Today!
Sign up now to explore, learn, and unlock exciting rewards along the way!</p>
                </div>
                <div className='h-[20%] flex justify-center align-center'>
                    <div className="px-3 py-2 bg-[#ECDBB5] text-[#000] font-bold w-max h-max rounded-lg hover:bg-[#fff]">SignUp</div>
                </div>
            </div>
        </>
    )
}

export default AdminLogin;