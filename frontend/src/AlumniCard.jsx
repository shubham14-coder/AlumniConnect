import React from 'react';


const AlumniCard = ({ name, specialization, graduationYear, location, onViewProfile }) => {
    console.log(name,specialization,graduationYear,location,onViewProfile);
  return (
    <div className='bg-[#A9A9A9] rounded-lg p-4 '>
      <div className='flex flex-col'>

       <div className='profile flex gap-4'>
        <div className='bg-blue-400 h-[70px] aspect-square rounded-full'>
          </div> 
          <div>
          <div className='font-semibold text-lg'>{name}</div>
        <div>
          <span className='font-semibold'>Specialization: </span>
          <span className='font-light'>{specialization}</span>
        </div>
          </div>
       </div>
        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi optio facere ea recusandae! Doloremque tempore quae rem beatae neque libero?</p>
          <span className='font-semibold'>Graduation Year: </span>
          <span className='font-light'>{graduationYear}</span>
        </div>
        <div>
         
          <span className='font-semibold'>Location: </span>
          <span className='font-light'>{location}</span>
        </div>
        <button className='bg-black text-white p-2 rounded-lg mt-2' onClick={onViewProfile}>
          View Profile
        </button>
      </div>
    </div>
  );
};

export default AlumniCard;
