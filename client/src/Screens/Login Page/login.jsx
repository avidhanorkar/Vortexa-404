import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === "" || password === "") {
            setError("Please enter both username and password");
        } else {
            // Call API or perform login logic here
            console.log(`Logging in with username: ${username} and password: ${password}`);
            axios.post('http://localhost:3000/api/users/login', { username, password })
                .then(response => {
                    console.log('Login successful:', response.data);
                })
                .catch(error => {
                    if (error.response) {
                        console.log('Error:', error.response.data);  // Logs error message returned by server
                    } else {
                        console.log('Network Error');
                    }
                });

            // Reset form fields
            setUsername("");
            setPassword("");
        }
    };

    return (
        <div className='max-w-lg mx-auto bg-[#121212] text-white shadow-md rounded-md p-8 mt-10'>
            <p className='text-4xl font-bold text-center mb-6'>Login</p>
            <div className='flex flex-col gap-6'>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div className='space-y-2'>
                        <label className='block font-medium text-gray-400'>Username:</label>
                        <input className='w-full bg-[#1c1c1c] text-white border border-gray-600 p-2 rounded-md focus:ring focus:ring-white focus:border-white'
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            placeholder="Enter username"
                        />
                    </div>

                    <div className='space-y-2'>
                        <label className='block font-medium text-gray-400'>Password:</label>
                        <input className='w-full bg-[#1c1c1c] text-white border border-gray-600 p-2 rounded-md focus:ring focus:ring-white focus:border-white'
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Enter password"
                        />
                    </div>

                    {error && <div className="text-red-600 text-sm">{error}</div>}

                    <div className='mt-6 flex flex-col justify-between items-center'>
                        <button  className='bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200'>
                            <Link to='/dashboard'>Login</Link>
                        </button>
                        <Link to='/signup' className='text-gray-400 hover:underline'>
                            Don't have an account? Sign up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
