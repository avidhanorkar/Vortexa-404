import React, { useState } from 'react';

const SignUp = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Call API to create new user
      console.log('Creating new user...');
      console.log('Role:', role);
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <div className='w-[35vw] bg-[#fff] text-[#000] rounded-md p-[30px]'>
      <h2 className='text-3xl font-bold'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Role: <br/>
            <select value={role} onChange={(event) => setRole(event.target.value)}>
              <option className='text-[#fff]' value="">Select a role</option>
              <option className='text-[#fff]' value="student">Student</option>
              <option className='text-[#fff]' value="instructor">Instructor</option>
            </select>
          </label>
        </div>
        <br />
        <div>
          <label>
            Username:<br/>
            <input className='bg-[#000] text-[#fff] w-[300px] h-[40px] text-[20px] rounded'
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder='Enter the UserName'
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Email:<br/>
            <input className='bg-[#000] text-[#fff] w-[300px] h-[40px] text-[20px] rounded'
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder='Enter Your Email'
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Password:<br/>
            <input className='bg-[#000] text-[#fff] w-[300px] h-[40px] text-[20px] rounded'
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)} 
              placeholder='Enter the Password'
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Confirm Password:<br/>
            <input className='bg-[#000] text-[#fff] w-[300px] h-[40px] text-[20px] rounded'
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder='Enter the Password'
            />
          </label>
        </div>
        <br />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button className='text-[#fff]' type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;