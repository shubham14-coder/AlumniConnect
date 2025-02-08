import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { deleteChat } from './Store/recentChatSlice'
import Navbar from './navbar';
import MobileNav from './MobileNav';
import { GrGallery } from "react-icons/gr";

import { FaChevronRight, FaSearch,FaLink, FaPhone,FaFile,FaArrowRight, FaVideo, FaPaperclip, FaImage,FaLinkedin} from 'react-icons/fa';
import { IoIosNotificationsOff,IoMdClose } from "react-icons/io";

import { SiGotomeeting } from "react-icons/si";



// Chat Room Component
const ChatRoom = () => {

  const { chatId } = useParams(); // Get the chatId from the URL

  // Dummy chat data for demonstration
  const chatData = {
    1: { name: 'Aakanksha' },
    2: { name: 'Laxmi' },
    3: { name: 'Mambo Joy' },
  };

  const chatUser = chatData[chatId] || { name: 'Unknown User' };

  // Dummy messages between the current user and the chat user
  const [messages, setMessages] = useState([
    { id: 1, sender: 'You', text: 'Hey, how are you?', time: '10:30 AM' },
    { id: 2, sender: chatUser.name, text: "I'm good, how about you?", time: '10:31 AM' },
    { id: 3, sender: 'You', text: "I'm doing well. Working on a new project!", time: '10:32 AM' },
    { id: 4, sender: chatUser.name, text: "That's awesome! Tell me more about it.", time: '10:33 AM' },
  ]);

  // Message input
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages([...messages, { id: messages.length + 1, sender: 'You', text: newMessage, time: currentTime }]);
      setNewMessage('');
    }
  };


  const handleFileUpload = (event) => {
  
    const file = event.target.files[0];
    if (file) {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages([...messages, { id: messages.length + 1, sender: 'You', text: `Sent a file: ${file.name}`, time: currentTime }]);
    }
  };

  return (
    <div className="text-white h-[100vh] p-4 bg flex flex-col">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold">Chat with {chatUser.name}</h2>
      <div className="flex space-x-4">
        <FaPhone className="text-gray-400" />
        <FaVideo className="text-gray-400" />
      </div>
    </div>

    {/* Chat Messages */}
    <div className="flex-grow overflow-y-auto space-y-4 mt-4 font-montserrat">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`p-3 rounded-lg ${message.sender === 'You' ? 'bg-[#a9a9a9] ml-auto text-black' : 'bg-gray-700'}`}
          style={{ maxWidth: '75%' }}
        >
          <p className="text-sm font-bold">{message.sender}</p>
          <p>{message.text}</p>
          <span className="text-xs text-black">{message.time}</span>
        </div>
      ))}
    </div>
    

    {/* Message Input */}
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 p-2 bg-gray-700 text-white rounded-lg focus:outline-none font-poppins"
      />
      {/* Image Upload Button */}
      <label className="cursor-pointer">
        <FaImage className="text-gray-300 hover:text-white" />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
      </label>
      {/* Document Upload Button */}
      <label className="cursor-pointer">
        <FaPaperclip className="text-gray-300 hover:text-white" />
        <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx"
          onChange={handleFileUpload}
          className="hidden"
        />
      </label>
      <button
        onClick={handleSendMessage}
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 font-poppins"
      >
        Send
      </button>
    </div>
  </div>
  
);
};

// Main Messaging Page Component
const MessagingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recentChats = useSelector((state) => state.recentChats.chats);

  const handleChatClick = (chatId) => {
    navigate(`/chat/${chatId}`);
  };
  const handlejob=()=>
    {
      navigate('/jobPortal');
    }
  const handleDeleteChat = (chatId) => {
    dispatch(deleteChat(chatId));
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-black w-[100vw] text-white">
        <Navbar/>
        <div className="flex flex-grow">
          {/* Recent Chats Section */}
          <div className="w-[25%] p-4 bg-[#a9a9a9] hidden lg:block">
            <h1 className="text-2xl font-bold mb-4 text-black">Recent Updates</h1>
            <input
              type="text"
              placeholder="Search"
              className="w-full mb-4 p-2 rounded-lg bg-black  text-white focus:outline-none"
            />
            <div className="space-y-4">
              {recentChats.map((chat) => (
                <div>
                <div
                  key={chat.id}
                  className="flex justify-between text-black items-center rounded-lg p-4 transition-transform transform hover:scale-105 cursor-pointer"
                  onClick={() => handleChatClick(chat.id)}
                >
                  <div>

                   

                   
                      <h2 className="text-lg font-medium">{chat.name}</h2>
                    <p className="">{chat.lastMessage}</p>
                    <span className=" text-sm">{chat.time}</span>
                 </div>
                 
                  <div className="flex items-center">
                    <FaChevronRight className="text-gray-300" />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteChat(chat.id);
                      }}
                      className="ml-2 text-red-500 hover:text-red-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <hr className='bg-white h-[2px]'/>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Section */}
          <div className="flex-grow p-4">
            <ChatRoom />
          </div>

          {/* Chat Details Section  */}
         
         <div className="w-[25%] hidden bg-[#a9a9a9] p-4 text-black lg:flex flex-col justify-around">
            <div className='text-black flex justify-between flex-col'>
            <div className='flex justify-between'>
            <h2 className="text-lg font-bold">Chat Details</h2>

            <IoMdClose className='text-[20px] font-semibold'/>
            </div>
            <div className='m=icons flex justify-evenly'> 
            <div className='bg-black p-2 rounded-md'>
            
              <GrGallery className='text-white bg-black text-[30px] '/>
            </div>

            <div className='bg-black p-2 rounded-md'>
            
              <FaFile className='text-white bg-black text-[30px] '/>
            </div>
            <div className='bg-black p-2 rounded-md'>
            
              <FaLink className='text-white bg-black text-[30px] '/>
            </div>
            <div className='bg-black p-2 rounded-md'>
            
             <IoIosNotificationsOff className='text-white bg-black text-[30px] '/>
            </div>
            </div>
           
            </div>
            
            <div className="mt-4 space-y-4">
              <div className='flex justify-between'>
                <p className='font-popppins font-bold'>New Job Posting</p>
              <button className='' onClick={handlejob}>
              <FaArrowRight/>
              </button>
                </div>
              <ul className="space-y-2">
                <li className="text-black flex gap-2 items-center font-semibold">
                <div className='bg-black p-2 rounded-md w-fit'>
            
            <FaFile className='text-white bg-black text-[30px] '/>
          </div>Career Fair</li>
          <li className="text-black flex gap-2 items-center font-semibold">
                <div className='bg-black p-2 rounded-md w-fit'>
            
            <FaFile className='text-white bg-black text-[30px] '/>
          </div>Internship.doc (2MB)</li>
          <li className="text-black flex gap-2 items-center font-semibold">
                <div className='bg-black p-2 rounded-md w-fit'>
            
            <FaFile className='text-white bg-black text-[30px] '/>
          </div>Cover Letter.doc (2MB)</li>
          <li className="text-black flex gap-2 items-center font-semibold">
                <div className='bg-black p-2 rounded-md w-fit'>
            
            <FaFile className='text-white bg-black text-[30px] '/>
          </div>Resume.doc (2MB)</li>
              </ul>
             
            </div>
            <div>
            <h3 className="text-black font-bold mt-6">Alumni Success</h3>
              <ul className="space-y-2">
                <li className="text-blue-400">Professional profile</li>
                <li className="text-blue-400">Alumni meetup</li>
                <li className="text-blue-400">Alumni panel</li>
              </ul>
              </div>
          </div>
         </div>
        </div>
   
      <MobileNav />
    </>
  );
};

export default MessagingPage;
