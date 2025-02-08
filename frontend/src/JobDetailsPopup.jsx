import React from 'react';

// JobDetailsPopup component: renders a pop-up with detailed information about the selected job
const JobDetailsPopup = ({ job, onClose }) => {
  return (
    // Background overlay for the pop-up (covers entire screen with opacity)
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center font-montserrat'>
      
      {/* Pop-up container with job details */}
      <div className='bg-[#A9A9A9] text-slate-200 p-6 rounded-lg w-[400px]'>

        {/* Job title displayed in bold */}
        <h2 className='text-xl font-bold text-black'>{job.title}</h2>

        {/* Company and location details */}
        <div className='company-loc'>
          <p>
            <span className='font-bold text-black'>Company: </span>{job.company} {/* Company name */}
          </p>
          <p>
            <span className='font-bold text-black'>Location: </span>{job.location} {/* Job location */}
          </p>
        </div>

        {/* Job requirements */}
        <p><strong className='text-black'>Requirements:</strong> {job.Requirement}</p>

        {/* Placeholder for job description */}
        <p>
          <strong className='text-black'>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula metus vel felis egestas, et dictum lectus gravida.
        </p>

        {/* Close button section */}
        <div className='flex'>
          {/* Close button with hover effects */}
          <button 
            className='mt-4 bg-black text-white px-4 py-2 rounded mx-auto hover:scale-105 transition-all duration-500 hover:bg-white hover:text-black' 
            onClick={onClose} // Calls onClose function to close the pop-up
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default JobDetailsPopup;
