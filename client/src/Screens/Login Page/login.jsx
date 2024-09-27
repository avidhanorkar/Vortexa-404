import React, { useState } from 'react';
import axios from "axios"
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
            axios.post('https://localhost:3000/api/users/login', {username, password})
            // Reset form fields
            setUsername("");
            setPassword("");
        }
    };

    return (
        <div className='bg-[#000] rounded-md p-[20px]'>
            <p className='text-3xl font-bold'>Login</p>
            <div className='flex flex-col pt-[50px] gap-[25px] w-[35vw] justify-center align-center'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='text-[20px]'>Enter YourUsername: <br /> </label>
                        <input className='w-[300px] h-[40px] text-[20px] rounded'
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            placeholder="Enter username"
                        />
                        <br />
                    </div>
                    <div>
                        <label className='text-[20px]'>Enter the Password: <br /> </label>
                        <input className='w-[300px] h-[40px] text-[20px] rounded'
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Enter password"
                        />
                        <br />
                    </div>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    <div className='mt-[50px]'>
                        <Link to='/dashboard'><button type="submit">Login</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
