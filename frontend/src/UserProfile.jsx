import React from 'react';
import { IoSchoolSharp } from "react-icons/io5";
import { FaBuilding, FaUserEdit } from "react-icons/fa"; // Added icons for more styling
import MobileNav from './MobileNav';
import { SiGitconnected } from "react-icons/si";
import { IoMdClose } from 'react-icons/io';
import { FaRegMessage } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const UserProfile = ({ id, name, education, workExperience, role }) => {
  const navigate=useNavigate();
  const messagepage=()=>
  {
navigate("/Messaging")
  }
  return (
    <>
     <div className="bg-gray-800 text-white shadow-lg p-6 font-montserrat sm:flex sm:gap-10 ">
      <div className='left sm:flex gap-10'>
        <div>
      <div className='sm:flex sm:flex-col'>
      <div className="flex flex-col sm:flex-row sm:gap-8 items-center md:items-start ">
        {/* Profile Picture */}
        <div className="profile-img h-[120px] w-[120px] sm:h-[200px] sm:w-[200px] bg-blue-500 border-4 border-gray-700 rounded-full flex items-center justify-center">
          {/* Profile Picture Placeholder */}
          <FaUserEdit className="text-4xl text-white" />
        </div>

        {/* User Name */}
      <div className='sm:flex sm:flex-col gap-10 w-full sm:w-fit'>
<div className='text-center'>      <h1 className="text-3xl font-bold mt-4 font-poppins">{name}</h1>
<p className="text-gray-400 text-sm">{role}</p></div>
      <div className="flex justify-around text-center mb-6 gap-10" >
        <div className='bg-[#A9A9A9] px-5  rounded-md'>
          <h1 className="text-xl font-semibold font-poppins">Followers</h1>
          <p className="text-lg">0</p>
        </div>
        <div className='bg-[#A9A9A9] px-5  rounded-md font-poppins'>
          <h1 className="text-xl font-semibold font-poppins">Following</h1>
          <p className="text-lg">0</p>
        </div>
      </div>
      </div>
      </div>
     
      </div>
     

      
     

      {/* Edit Profile Button */}
      <div className="flex justify-center mb-6">
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-montserrat shadow-lg"
        >
          Edit Profile
        </button>
      </div>

      {/* Education and Work Experience Section */}
      <div className='flex flex-col'>
        <p className='font-montserrat font-semibold mb-4'>Profile Information</p>
        <div className="mb-6 sm:flex gap-10 ">
       
        <div className="bg-[#A9A9A9] flex items-center gap-4 p-4 rounded-lg mb-4 ">
          <IoSchoolSharp className="text-2xl text-white" />
          <div className="font-semibold text-white font-montserrat p-5 ">
          <p className=' text-black '>Education</p>
            {education ? education : 'Education not provided'}
          </div>
        </div>

        {workExperience && (
          <div className="bg-[#A9A9A9] flex items-center gap-4 rounded-lg mb-4 px-10">
            <FaBuilding className="text-2xl text-white" />
            <div className="font-semibold text-white font-montserrat">
            <p className=' text-black '>Work</p>
              {workExperience ? workExperience : 'Work experience not provided'}
            </div>
          </div>
        )}
        
        {workExperience && (
          <div className="bg-[#A9A9A9] flex items-center gap-4 rounded-lg mb-4 px-10">
            <FaBuilding className="text-2xl text-white" />
            <div className="font-semibold text-white font-montserrat">
            <p className=' text-black '>Skills</p>
             <ul className='flex gap-4 flex-grow w-fit list-disc'>
              <li className=''>Web3</li>
              <li>React</li>
           
             </ul>
            </div>
          </div>
        )}
      </div>
      </div>
   

      {/* Achievements Section */}
      <div className="mb-6">
        <div className="bg-[#A9A9A9] p-4 rounded-lg shadow text-black">
          <h2 className="text-xl font-bold mb-3 font-poppins">Milestones</h2>
          <ul className="list-disc list-inside space-y-2 font-montserrat text-sm">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>

      </div>
    </div>
    
    <div className='hidden lg:flex sm:flex-col right gap-10'>
      <div>
      <p className='font-montserrat text-white font-semibold text-2xl'>Alumni Network</p>
      <div className='alummi-network bg-[#a9a9a9] rounded-lg w-[400px] '>
   
   <div>
     <ul>
       <li className='p-5'>
         <div className='item flex justify-between items-center'>
           <div className='left flex gap-4 items-center'>
             <div className='h-[35px] w-[35px] aspect-auto rounded-full bg-blue-400'></div>
             <span className='font-montserrat font-semibold text-black'>Tarun</span>
           </div>
           <div className='right text-black text-[20px] flex items-center gap-2' >
            <div className='bg-black text-white rounded-md p-1'>
            <SiGitconnected/>
            </div>
             <IoMdClose/>
           </div>
         </div>
       </li>
       <hr className='bg-white'/>
       <li className='p-5'>
         <div className='item flex justify-between items-center'>
           <div className='left flex gap-4 items-center'>
             <div className='h-[35px] w-[35px] aspect-auto rounded-full bg-blue-400'></div>
             <span className='font-montserrat font-semibold text-black'>Shubham</span>
           </div>
           <div className='right text-black text-[20px] flex items-center gap-2' >
            <div className='bg-black text-white rounded-md p-1'>
            <SiGitconnected/>
            </div>
             <IoMdClose/>
           </div>
         </div>
       </li>
       <hr className='bg-white'/>
       <li className='p-5'>
         <div className='item flex justify-between items-center'>
           <div className='left flex gap-4 items-center'>
             <div className='h-[35px] w-[35px] aspect-auto rounded-full bg-blue-400'></div>
             <span className='font-montserrat font-semibold text-black'>Riwa</span>
           </div>
           <div className='right text-black text-[20px] flex items-center gap-2' >
            <div className='bg-black text-white rounded-md p-1'>
            <SiGitconnected/>
            </div>
             <IoMdClose/>
           </div>
         </div>
       </li>
      
       </ul>
   </div>
 </div>
      </div>
   

    <div className='connections'>
    <p className='font-montserrat text-white font-semibold text-2xl'>Connections</p>
    <div className='alummi-network bg-[#a9a9a9] rounded-lg w-[400px] '>
      <div>
        <ul>
          <li className='p-5'>
            <div className='item flex justify-between items-center'>
              <div className='left flex gap-4 items-center'>
                <div className='h-[35px] w-[35px] aspect-auto rounded-full bg-blue-400'></div>
                <span className='font-montserrat font-semibold text-black'>Aakanskha</span>
              </div>
              <div className='right text-black text-[20px] flex items-center gap-2' >
               <button className=' text-black rounded-md p-1' onClick={messagepage}>
               <FaRegMessage/>
               </button>
                
              </div>
            </div>
          </li>
          <hr className='bg-white'/>
          <li className='p-5'>
            <div className='item flex justify-between items-center'>
              <div className='left flex gap-4 items-center'>
                <div className='h-[35px] w-[35px] aspect-auto rounded-full bg-blue-400'></div>
                <span className='font-montserrat font-semibold text-black'>Laxmi</span>
              </div>
              <div className='right text-black text-[20px] flex items-center gap-2' >
               <button className=' text-black rounded-md p-1' onClick={messagepage}>
               <FaRegMessage/>
               </button>
              
              </div>
            </div>
          </li>
          <hr className='bg-white'/>
          <li className='p-5'>
            <div className='item flex justify-between items-center'>
              <div className='left flex gap-4 items-center'>
                <div className='h-[35px] w-[35px] aspect-auto rounded-full bg-blue-400'></div>
                <span className='font-montserrat font-semibold text-black'>Mambo Joy</span>
              </div>
              <div className='right text-black text-[20px] flex items-center gap-2' >
               <button className=' text-black rounded-md p-1' onClick={messagepage}>
               <FaRegMessage/>
               </button>
                
              </div>
            </div>
          </li>
         
          </ul>
      </div>
    </div>
    
    </div>
    </div>
      
    </div>
    <MobileNav/>
    </>
   
  );
};

export default UserProfile;
