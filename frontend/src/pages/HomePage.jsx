// src/pages/HomePage.js
import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../PostCard';

import { IoIosNotifications } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const posts = useSelector((state) => state.posts.posts); // Accessing posts from Redux

  return (
    <div className="bg-[#1E1E2F] min-h-screen">
      <div className='flex  items-baseline  justify-between'>
      <h1 className="text-white text-2xl font-bold mb-6  mt-2">All Posts</h1>
     
      <button>
        <NavLink to="/Notifications"> <IoIosNotifications className='text-2xl'/> 
        </NavLink>
      </button>
     
        </div>
   

      {/* Rendering all posts */}
      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <p className="text-gray-400">No posts available.</p>
      )}
   
    </div>
  );
};

export default HomePage;
