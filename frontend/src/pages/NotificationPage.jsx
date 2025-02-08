// NotificationsPage.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaChevronRight, FaBell, FaBriefcase, FaCalendarAlt, FaComment, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { markAllAsRead, markAsRead } from '../Store/notifications';
import MobileNav from '../MobileNav';
const NotificationsPage = () => {
  const notifications = useSelector((state) => state.notifications.notifications);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Group notifications by date
  const groupedNotifications = notifications.reduce((groups, notification) => {
    const date = notification.timestamp;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(notification);
    return groups;
  }, {});

  const handleNotificationClick = (notification) => {
    // Mark as read
    dispatch(markAsRead(notification.id));
    // Navigate to relevant content based on notification type
    // For example:
    if (notification.type === 'job') {
      navigate(`/jobs/${notification.id}`);
    } else if (notification.type === 'event') {
      navigate(`/events/${notification.id}`);
    }
    // Add more navigation logic based on notification type
  };

  const handleMarkAllAsRead = () => {
    dispatch(markAllAsRead());
  };

  const getIconByType = (type) => {
    switch (type) {
      case 'job':
        return <FaBriefcase className="text-blue-500" />;
      case 'event':
        return <FaCalendarAlt className="text-green-500" />;
      case 'comment':
        return <FaComment className="text-yellow-500" />;
      case 'like':
        return <FaHeart className="text-pink-500" />;
      case 'purchase':
        return <FaShoppingCart className="text-purple-500" />;
      default:
        return <FaBell className="text-gray-500" />;
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 font-montserrat">
      <div className="flex justify-between items-center mb-6 gap-4">
        <h1 className="text-[21px] sm:text-3xl font-bold">Notifications</h1>
        <button
          onClick={handleMarkAllAsRead}
          className="
    bg-blue-600 text-white px-4 py-2 rounded-lg 
    hover:bg-blue-500 transition duration-300 
    md:px-6 md:py-2 text-sm md:text-base
    w-full md:w-auto mb-4 md:mb-0" 
        >
         Dismiss All
        </button>
      </div>
      {Object.keys(groupedNotifications).sort((a, b) => new Date(b) - new Date(a)).map((date) => (
        <div key={date} className="mb-6">
          <h2 className="text-xl font-semibold mb-4">{new Date(date).toDateString()}</h2>
          <div className="space-y-4">
            {groupedNotifications[date].map((notification) => (
              <div
                key={notification.id}
                className={`flex items-center bg-gray-800 shadow-md rounded-lg p-4 cursor-pointer hover:bg-gray-700 transition duration-300 ${
                  !notification.read ? 'border-l-4 border-blue-500' : ''
                }`}
                onClick={() => handleNotificationClick(notification)}
              >
                <div className="mr-4">
                  {getIconByType(notification.type)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{notification.message}</h3>
                  <p className="text-gray-400 text-sm">{notification.timestamp}</p>
                </div>
                {!notification.read && (
                  <span className="text-blue-500 text-sm font-semibold">New</span>
                )}
                <FaChevronRight className="text-gray-400 ml-4" />
              </div>
            ))}
          </div>
        </div>
      ))}
      <MobileNav/>
    </div>
  );
};

export default NotificationsPage;
