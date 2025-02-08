import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { IoMdAdd } from 'react-icons/io';
import { FaMessage } from 'react-icons/fa6';
import { MdAccountCircle } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';

import { IoMdPeople } from "react-icons/io";
const MobileNav = () => {
  
  const navigate=useNavigate();
  const toggleFormVisibility = () => {
    navigate('/PostUploadPage')
  };
  
  return (
    <div className='bg-black'>
      <ul className='flex justify-around items-baseline text-[20px] text-white py-4 px-2 w-[100vw]'>

        <NavLink to='/home'><IoMdHome /></NavLink>
        <NavLink to='/jobPortal'><FaSearch /></NavLink>
        <button 
          onClick={toggleFormVisibility} 
          className='rounded-full border-2 bg-gray-700 border-gray-700 flex items-center justify-center button-3d'
        >
          <IoMdAdd />
        </button>
        <NavLink to="/Messaging"><FaMessage /></NavLink>
        <NavLink to="/UserProfile"><MdAccountCircle /></NavLink>
        <NavLink to="/AlumniSearchPage"><IoMdPeople /></NavLink>
      </ul>
      
     
    </div>
  );
};

export default MobileNav;
