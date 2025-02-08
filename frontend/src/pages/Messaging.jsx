import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { deleteChat } from '../Store/recentChatSlice';
import Navbar from '../navbar';
import MobileNav from '../MobileNav';

const MessagingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Access the recent chats from the Redux store
  const recentChats = useSelector((state) => state.recentChats.chats);

  const handleChatClick = (chatId) => {
    navigate(`/chat/${chatId}`);
  };

  const handleDeleteChat = (chatId) => {
    dispatch(deleteChat(chatId)); 
  };

  return (
    <>
    <div className="flex flex-col  text-white h-[100vh]   w-[100vw]">
      <Navbar />
      <div className="flex-grow p-4 "> {/* This allows the content area to grow */}
        <h1 className="text-3xl font-bold mb-6">Recent Chats</h1>
        <div className="space-y-4">
          {recentChats.map((chat) => (
            <div
              key={chat.id}
              className="flex justify-between items-center bg-gray-800 shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => handleChatClick(chat.id)} // Clicking on the entire card leads to chat
            >
              <div>
                <h2 className="text-lg font-medium">{chat.name}</h2>
                <p className="text-gray-400">{chat.lastMessage}</p>
                <span className="text-gray-500 text-sm">{chat.time}</span>
              </div>
              <div className="flex items-center">
                <FaChevronRight className="text-gray-300" />
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the chat click
                    handleDeleteChat(chat.id);
                  }}
                  className="ml-2 text-red-500 hover:text-red-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </div>
    <MobileNav/>
    </>
  );
};

export default MessagingPage;
