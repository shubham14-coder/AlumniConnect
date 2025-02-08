import React, { useState } from 'react';
import { FaUniversity } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <div className='bg-black text-white'>
      <div className='flex justify-between items-center px-4 py-2'>
        {/* Left side (Logo and Menu Button) */}
        <div className='left-side flex items-center gap-4'>
          {/* University Icon */}
          <button className='hidden sm:block'>
            <FaUniversity className='text-white' /> {/* Force white color */}
          </button>

          {/* Hamburger Menu Button */}
          <button className='sm:hidden' onClick={toggleMenu}>
            <CiMenuFries className='text-2xl text-white' /> {/* Force white color */}
          </button>

          {/* Logo */}
          <span className='font-poppins text-xl ' style={{ color: 'white' }} >Alumni Connect</span>
        
        </div>
        <div className='hidden sm:flex gap-4'>
        <ul className='menu-opt flex gap-5'>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/AlumniSearchPage'>Alumni</NavLink>
          <NavLink to='/jobPortal'>Job Board</NavLink>
          <NavLink>Contact</NavLink>
          </ul>
      </div>
      </div>

      {/* Sliding Menu */}
    
      <div
        className={`fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 transform transition-transform duration-500 ease-in-out ${
          menuState ? 'translate-y-0' : '-translate-y-full'
        } z-50`}
        style={{ height: '100vh' }} // Fullscreen menu
      >
        <button onClick={toggleMenu} className='absolute top-4 right-4 text-2xl text-white'>
          <IoMdClose />
        </button>

        {/* Menu Links */}
        <ul className='space-y-6 mt-16 text-center'>
          <li>
            <NavLink className='text-xl font-montserrat' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='text-xl font-montserrat' to='/alumni'>
              Alumni Profile
            </NavLink>
          </li>
          <li>
            <NavLink className='text-xl font-montserrat' to='/jobPortal'>
              Job Board
            </NavLink>
          </li>
          <li>
            <NavLink className='text-xl font-montserrat' to='/contact'>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
