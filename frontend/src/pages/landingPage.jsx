import React from 'react';
import Navbar from '../navbar'; // Importing the Navbar component
import images from '../assets/images'; // Importing images from the assets
import { BsFillPeopleFill } from "react-icons/bs"; // Community icon
import { IoBriefcase } from "react-icons/io5"; // Opportunity icon
import { FaCalendarAlt } from "react-icons/fa"; // Events icon
import { MdOutlineJoinFull } from "react-icons/md"; // Join icon
import { NavLink, useNavigate } from 'react-router-dom'; // NavLink for navigating between pages

const LandingPage = () => { // Landing page component
  const navigator = useNavigate();

  const handleNav = () => {
    navigator('/trylogin');
  };

  return (
  
    <div className='bg-[#121212] flex flex-col min-h-screen font-montserrat  w-[100vw]'> {/* Darker background for the dark theme */}
      <Navbar /> {/* Renders the navigation bar at the top */}

      {/* Top section: Welcome message */}
      <div className='flex items-center justify-center flex-col mt-10'>
        <div className='hidden sm:block w-[100vw] '>
          <img src={images.desktopPeople} className='h-[350px] mx-auto'></img>

        </div>
        <img src={images.peoples} className='h-[200px] aspect-square mb-4 rounded-full shadow-lg sm:hidden' alt="Welcome" /> {/* Image with rounded and shadow effect */}
        <p className='font-extrabold font-poppins text-white text-3xl mt-4 '>Welcome to Alumni Connect</p> {/* Main heading with larger font */}
        <p className='font-light font-montserrat text-gray-400 text-lg'>Connecting Alumni, Fostering Success</p> {/* Subheading with lighter text color */}
      </div>

      {/* Middle of the landing page */}
      <div className='middle text-white flex flex-col items-center justify-center mt-5 gap-5'>
        {/* Banner Section */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          {/* Community Banner */}
          <div className='bg-[#2C3141] px-6 py-4 flex items-center gap-3 rounded-lg shadow-lg transition duration-300 hover:bg-[#3E4455] w-full sm:w-1/3'>
            <BsFillPeopleFill className='text-blue-500 text-3xl' /> {/* Community icon */}
            <div>
              <p className='font-semibold text-lg'>Community</p> {/* Text describing community */}
              <p className='text-gray-300 text-sm'>Join and connect with fellow alumni!</p>
            </div>
          </div>

          {/* Opportunity Banner */}
          <div className='bg-[#2C3141] px-6 py-4 flex items-center gap-3 rounded-lg shadow-lg transition duration-300 hover:bg-[#3E4455] w-full sm:w-1/3'>
            <IoBriefcase className='text-blue-500 text-3xl' /> {/* Briefcase icon */}
            <div>
              <p className='font-semibold text-lg'>Opportunities</p> {/* Text describing opportunities */}
              <p className='text-gray-300 text-sm'>Discover job openings and internships!</p>
            </div>
          </div>

          {/* Events Banner */}
          <div className='bg-[#2C3141] px-6 py-4 flex items-center gap-3 rounded-lg shadow-lg transition duration-300 hover:bg-[#3E4455] w-full sm:w-1/3'>
            <FaCalendarAlt className='text-blue-500 text-3xl' /> {/* Calendar icon */}
            <div>
              <p className='font-semibold text-lg'>Events</p> {/* Text describing events */}
              <p className='text-gray-300 text-sm'>Stay updated on alumni events!</p>
            </div>
          </div>
        </div>

        {/* Bottom part: Call to action */}
        <div className='bottom mt-10 flex flex-col gap-4'>
          {/* Join Us section */}
          <div className='bg-[#2C3141] flex flex-col gap-2 justify-center items-center p-6 rounded-lg shadow-lg'>
            <p className='font-extrabold font-poppins text-xl'>Join Us Today</p> {/* Call to action header */}
            <p className='font-montserrat text-center text-gray-300'>Become a part of Alumni Connect and start enjoying the benefits of our community</p> {/* Call to action message */}
            
            {/* Buttons for Join Now and Login */}
            <div className='buttons flex gap-4 items-center mb-4'>
              {/* Join Now Button */}
              <button className='flex items-center gap-2 px-5 py-2 bg-white rounded-[10px] text-black hover:bg-gray-600 transition duration-300'>
                <MdOutlineJoinFull /> {/* Join icon */}
                <NavLink to="/login">Join Now</NavLink> {/* Links to the Login page */}
              </button>
              
              {/* Login Button */}
              <button className='px-5 py-2 bg-white rounded-[10px] text-black hover:bg-gray-600 transition duration-300' onClick={handleNav}>
                Login {/* Placeholder for login action */}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='h-[30px]'></div> {/* Spacer at the bottom */}
    </div>
  );
}

export default LandingPage;
