import React from 'react';

// JobCards component: renders individual job details in a card format
const JobCards = ({ title, company, Requirement, location, id, alumniId, onKnowMore }) => {
  return (
    <div>
      {/* Card container with background color and padding */}
      <div className='bg-[#2C3141] sm:bg-[#a9a9a9] rounded-lg p-4 transition-transform transform hover:scale-105'>

        {/* Job details displayed using flex and font styling */}
        <div className='flex flex-col font-montserrat'>
          
          {/* Job title */}
          <div className='font-semibold font-poppins text-xl'>{title}</div>
          
          {/* Company name */}
          <div className='mt-1'>
            <span className='font-semibold'>
              Company: <span className='font-light'>{company}</span> {/* Display company */}
            </span>
          </div>
          
          {/* Job requirements */}
          <div className='mt-2 font-semibold'>
            Requirements: <span className='font-light'>{Requirement}</span> {/* Display requirements */}
          </div>
          
          {/* Buttons for Apply and Know More */}
          <div className='buttons flex justify-around mt-4'>
            {/* Apply button */}
            <button className='bg-black text-white p-2 rounded-lg hover:bg-gray-800'>
              Apply {/* Placeholder for apply action */}
            </button>
            
            {/* Know More button triggers the onKnowMore function to show more details */}
            <button className='bg-white text-black p-2 rounded-lg hover:bg-gray-200' onClick={onKnowMore}>
              Know More {/* Displays more details when clicked */}
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default JobCards;
