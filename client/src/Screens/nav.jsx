import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-[#000] p-[20px]'>
      <div className='container mx-auto'>
        <ul className='flex justify-end gap-[30px]'>
          <li>
            <Link to="/login" className='text-white font-bold hover:text-[#aaa]'>Login</Link>
          </li>
          <li>
            <Link to="/signup" className='text-white font-bold hover:text-[#aaa]'>Sign Up</Link>
          </li>
          <li>
            <Link to="/dashboard" className='text-white font-bold hover:text-[#aaa]'>Dashboard</Link>
          </li>
          <li>
            <Link to="/contact" className='text-white font-bold hover:text-[#aaa]'>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
