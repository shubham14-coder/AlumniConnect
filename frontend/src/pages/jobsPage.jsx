import React, { useState } from 'react';
import Navbar from '../navbar';
import { FaSearch } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { useSelector } from 'react-redux';
import JobCards from '../jobsCards';
import JobDetailsPopup from '../JobDetailsPopup'; // Modal component for job details
import { NavLink } from 'react-router-dom';
import MobileNav from '../MobileNav';

const JobsPage = () => {
  const jobs = useSelector(state => state.jobs.jobList); // Get the jobs list from Redux store
  const [searchTerm, setSearchTerm] = useState(""); // State to track search input
  const [selectedJob, setSelectedJob] = useState(null); // State to track the selected job for the popup

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase()); // Update the search term state
  };

  // Filter jobs based on the search term
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm) || // Filter by job title
    job.company.toLowerCase().includes(searchTerm) || // Filter by company name
    job.Requirement.toLowerCase().includes(searchTerm) // Filter by job requirements
  );

  // Function to handle "Know More" button click
  const handleKnowMoreClick = (job) => {
    setSelectedJob(job); // Set the selected job to show in the pop-up
  };

  // Function to close the pop-up
  const closePopup = () => {
    setSelectedJob(null); // Close the modal by setting selectedJob to null
  };

  return (
    <>
    <Navbar/>
    <div className="font-montserrat">
  
      <div className='bg-gray-900 text-white w-[100vw] h-[100vh] flex flex-col'>
        
        {/* Top Section: Search Bar and Icons */}
        <div className='flex items-center justify-between px-6 py-4 gap-4'>
          <RiAccountCircleFill className='text-3xl' />
          <div className='flex bg-[#2C3141] px-4 py-2 rounded-md items-center flex-grow'>
            <FaSearch className='text-white mr-2' />
            <input 
              className='bg-transparent focus:outline-none text-white flex-grow' 
              placeholder='Search jobs...' 
              type='text'
              value={searchTerm}
              onChange={handleSearchChange} // Handle search input
            />
          </div>
          <CiSquarePlus className='text-3xl' />
          <NavLink to='/Messaging'>
            <MdOutlineMessage className='text-3xl' />
          </NavLink>
        </div>

        {/* Middle Section: Jobs Listing */}
        <div className='flex-1 px-6 py-4 overflow-y-auto'>
          <h1 className='text-2xl font-poppins mb-6'>Recommended Jobs</h1>

          {/* Job Cards or Filtered Job Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchTerm === "" ? (
              jobs.length > 0 ? (
                jobs.map((job) => (
                  <div key={job.id}>
                    <JobCards 
                      {...job} 
                      onKnowMore={() => handleKnowMoreClick(job)} // Pass click handler
                    />
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No jobs available at the moment.</p>
              )
            ) : (
              filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div key={job.id}>
                    <JobCards 
                      {...job} 
                      onKnowMore={() => handleKnowMoreClick(job)} // Pass click handler
                    />
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No jobs found for your search.</p>
              )
            )}
          </div>
        </div>

        {/* Pop-up for job details */}
        {selectedJob && <JobDetailsPopup job={selectedJob} onClose={closePopup} />}
        <MobileNav/>
      </div>
      
    </div>
   
    </>
  );
};

export default JobsPage;
