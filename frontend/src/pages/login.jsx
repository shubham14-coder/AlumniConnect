import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../Store/userSlice';

const Login = () => {
  const [email, setEmail] = useState(''); // Changed to email since it's used for authentication
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Access the authentication status and error from Redux state
  const { currentUser, authError } = useSelector(state => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    // Dispatch authenticateUser action
    dispatch(authenticateUser({ email, password }));
  };

  // Effect to navigate when currentUser changes
  useEffect(() => {
    if (currentUser) {
      navigate('/UserProfile');
    }
  }, [currentUser, navigate]); // Depend on currentUser

  return (
    <div className="w-[100vw] flex items-center justify-center bg-gray-900 h-[100vh]">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300"
          >
            Login
          </button>

          {/* Display authentication error if exists */}
          {authError && (
            <p className="text-red-500 text-center mt-4">
              {authError}
            </p>
          )}
        </form>
        <p className="mt-6 text-gray-400 text-center">
          Don't have an account? <a href="/login" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
