import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';  // Import axios

const SignUp = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // To handle success messages

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setSuccess(null); // Clear success if any error occurs
      return;
    }

    try {
      const userData = { role, username, email, password };
      
      // Make a POST request to your API route
      const response = await axios.post('http://localhost:3000/api/users/create', userData);

      console.log('User created successfully:', response.data);
      setSuccess('User created successfully!'); // Display success message
      setError(null); // Clear error message on success

      // Optionally, reset the form fields after successful signup
      setRole('');
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      if (error.response) {
        // Server responded with a status code outside of the 2xx range
        setError(error.response.data.error || 'An error occurred');
        setSuccess(null);
      } else {
        // No response received (network error)
        setError('Network error: Unable to reach the server');
        setSuccess(null);
      }
    }
  };

  return (
    <div className='max-w-lg mx-auto bg-[#121212] text-white shadow-md rounded-md p-8 mt-10'>
      <h2 className='text-4xl font-bold text-center mb-6'>Sign Up</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        
        <div className='space-y-2'>
          <label className='block font-medium text-gray-400'>Role:</label>
          <select 
            value={role} 
            onChange={(event) => setRole(event.target.value)} 
            className='w-full bg-[#1c1c1c] border border-gray-600 p-2 rounded-md focus:ring focus:ring-white focus:border-white'
          >
            <option value="">Select a role</option>
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
        </div>
        
        <div className='space-y-2'>
          <label className='block font-medium text-gray-400'>Username:</label>
          <input 
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder='Enter the Username'
            className='w-full bg-[#1c1c1c] text-white border border-gray-600 p-2 rounded-md focus:ring focus:ring-white focus:border-white'
          />
        </div>

        <div className='space-y-2'>
          <label className='block font-medium text-gray-400'>Email:</label>
          <input 
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder='Enter Your Email'
            className='w-full bg-[#1c1c1c] text-white border border-gray-600 p-2 rounded-md focus:ring focus:ring-white focus:border-white'
          />
        </div>

        <div className='space-y-2'>
          <label className='block font-medium text-gray-400'>Password:</label>
          <input 
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)} 
            placeholder='Enter the Password'
            className='w-full bg-[#1c1c1c] text-white border border-gray-600 p-2 rounded-md focus:ring focus:ring-white focus:border-white'
          />
        </div>

        <div className='space-y-2'>
          <label className='block font-medium text-gray-400'>Confirm Password:</label>
          <input 
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder='Confirm the Password'
            className='w-full bg-[#1c1c1c] text-white border border-gray-600 p-2 rounded-md focus:ring focus:ring-white focus:border-white'
          />
        </div>

        {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
        {success && <div className="text-green-600 text-sm mt-2">{success}</div>}

        <div className='flex flex-col justify-between items-center mt-6'>
          <button type="submit" className='bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200'>
            <Link to='/dashboard'>SignUp</Link>
          </button>
          <Link to='/login' className='text-gray-400 hover:underline'>
            Already have an account? Log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
