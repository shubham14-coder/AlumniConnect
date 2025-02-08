import React, { useState } from 'react';
import images from '../assets/images';
import { useDispatch } from 'react-redux';
import { addNewUser } from '../Store/userSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import MobileNav from '../MobileNav';

const Form = () => {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password
  const [education, setEducation] = useState('');
  const [work, setWorkExperience] = useState('');
  const [role, setRole] = useState('student');
  const [collegeID, setCollegeID] = useState('');
  const [market, setMarket] = useState('');
  const [imageProof, setImageProof] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value); // Handler for confirm password
  const handleEducation = (e) => setEducation(e.target.value);
  const handleWorkExperience = (e) => setWorkExperience(e.target.value);
  const handleRoleChange = (e) => {
    setRole(e.target.value);
    // Reset additional fields when role changes
    setCollegeID('');
    setMarket('');
    setImageProof(null);
  };
  const handleCollegeID = (e) => setCollegeID(e.target.value);
  const handleMarket = (e) => setMarket(e.target.value);
  const handleImageProofChange = (e) => setImageProof(e.target.files[0]);

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match!'); // Simple alert for mismatch
      return;
    }

    const userData = {
      id: nanoid(),
      name,
      email,
      password,
      education,
      work,
      role,
      collegeID: role === 'student' ? collegeID : undefined,
      market: role === 'alumni' ? market : undefined,
      imageProof, // Include the image proof file
    };

    dispatch(addNewUser(userData)); // Save in Redux

    // Manually save to local storage to keep data consistent
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    localStorage.setItem('users', JSON.stringify([...existingUsers, userData]));

    navi('/'); // Redirect after sign-up
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center  p-4 w-[100vw]">
     

      <div className="text-center text-white mb-6">
        <h2 className="text-2xl font-semibold">Set Up Your Profile</h2>
        <p className="text-sm text-gray-400">Personalize your bio and experiences</p>
      </div>

      <form className="flex flex-col  bg-[#242837] p-6 rounded-lg shadow-md" onSubmit={handleLogin}>
        {/* Full Name Input */}
        <div className="flex flex-col mb-4">
          <label htmlFor="userName" className="text-sm text-gray-400">Full Name</label>
          <input
            className="mt-1 p-2 bg-[#2C3141] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={handleName}
            required
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-sm text-gray-400">Email</label>
          <input
            className="mt-1 p-2 bg-[#2C3141] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={handleEmail}
            required
          />
        </div>

        {/* Password Input */}
        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="text-sm text-gray-400">Password</label>
          <input
            className="mt-1 p-2 bg-[#2C3141] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePassword}
            required
          />
        </div>

        {/* Re-enter Password Input */}
        <div className="flex flex-col mb-4">
          <label htmlFor="confirmPassword" className="text-sm text-gray-400">Re-enter Password</label>
          <input
            className="mt-1 p-2 bg-[#2C3141] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            required
          />
        </div>

        {/* Role Selection */}
        <div className="flex flex-col mb-4">
          <label className="text-sm text-gray-400">Select Role</label>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center text-white">
              <input
                type="radio"
                name="role"
                value="student"
                checked={role === 'student'}
                onChange={handleRoleChange}
                className="mr-2"
              />
              Student
            </label>
            <label className="flex items-center text-white">
              <input
                type="radio"
                name="role"
                value="alumni"
                checked={role === 'alumni'}
                onChange={handleRoleChange}
                className="mr-2"
              />
              Alumni
            </label>
          </div>
        </div>

        {/* College ID Input (Visible for Student) */}
        {role === 'student' && (
          <div className="flex flex-col mb-4">
            <label htmlFor="collegeID" className="text-sm text-gray-400">College ID</label>
            <input
              className="mt-1 p-2 bg-[#2C3141] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter your college ID"
              value={collegeID}
              onChange={handleCollegeID}
             
            />
          </div>
        )}

        {/* Market Input (Visible for Alumni) */}
        {role === 'alumni' && (
          <div className="flex flex-col mb-4">
            <label htmlFor="market" className="text-sm text-gray-400">Marksheet Verification</label>
            <input
              className="mt-1 p-2 bg-[#2C3141] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter your market"
              value={market}
              onChange={handleMarket}
              
            />
          </div>
        )}

        {/* Image Proof Upload */}
        {(role === 'student' || role === 'alumni') && (
          <div className="flex flex-col mb-4">
            <label htmlFor="imageProof" className="text-sm text-gray-400">Upload Image Proof</label>
            <input
              className="mt-1 p-2 bg-[#2C3141] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
              type="file"
              accept="image/*"
              onChange={handleImageProofChange}
              
            />
          </div>
        )}

        {/* Education Input */}
        <div className="flex flex-col mb-4">
          <label htmlFor="userEducation" className="text-sm text-gray-400">Add Your Education</label>
          <input
            className="mt-1 p-2 bg-[#2C3141] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Add Education"
            value={education}
            onChange={handleEducation}
          />
        </div>

        {/* Work Experience Input */}
        <div className="flex flex-col mb-4">
          <label htmlFor="workExperience" className="text-sm text-gray-400">Add Work Experience</label>
          <input
            className="mt-1 p-2 bg-[#2C3141] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Add Work Experience"
            value={work}
            onChange={handleWorkExperience}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Create Account
        </button>
      </form>

      
    </div>
  
     </>
  );
};

export default Form;
