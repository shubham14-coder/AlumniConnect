import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage';

import LandingPage from './pages/landingPage';
import JobsPage from './pages/jobsPage';
import UserProfilePage from './pages/UserProfilePage';
import Login from './pages/login';
import HomeSection from './pages/ForyouPage';
import AlumniSearchPage from './pages/AlumniPage';
import MessagingPage from './pages/Messaging';
import ChatRoom from './chatRoom';
import NotificationPage from './pages/NotificationPage';
import PostUploadPage from './pages/PostUploadPage';
import HomePage from './pages/HomePage';


const App = () => {
  return (
    <div className=''>
      
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/trylogin' element={<Login/>}/>
          <Route path='/jobPortal' element={<JobsPage/>}/>
          <Route path='/UserProfile' element={<UserProfilePage/>}/>
       
          <Route path='/AlumniSearchPage' element={<AlumniSearchPage/>}/>
          <Route path='/Messaging' element={<MessagingPage/>}/>
          <Route path="/chat/:chatId" element={<ChatRoom />} />
          <Route path='/Notifications' element={<NotificationPage/>}/>
          <Route path='/PostUploadPage' element={<PostUploadPage/>}/>
          <Route path='/home' element={<HomeSection/>}/>
    
        </Routes>
     
   
    </div>
  );
}

export default App;
