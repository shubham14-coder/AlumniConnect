import React from 'react';
import Navbar from '../navbar';
import { useSelector } from 'react-redux';
import UserProfile from '../UserProfile';
import MobileNav from '../MobileNav';

const UserProfilePage = () => {
  // Select the current user from the Redux store
  const activeUser = useSelector(state => state.user.currentUser);
  console.log(activeUser);
  
  return (
    <div>
      <Navbar />
      <div className='bg-red-100  w-[100vw]'>
        {
          activeUser ? (
            // Only pass primitive values to UserProfile
            <UserProfile 
              id={activeUser.id} 
              name={activeUser.name} 
              email={activeUser.email} 
              education={activeUser.education}
              workExperience={activeUser.work}
              role={activeUser.role}
              // location={activeUser.location} // Comment out if it's an object
            />
          ) : (
            <p className="text-white">No user profile available.</p>
          )
        }
     
      </div>
     
    </div>
  );
};

export default UserProfilePage;
