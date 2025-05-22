import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slice/authSlice';
import { logoutUser } from '../api/user.api';
import { useNavigate } from '@tanstack/react-router';

const Navbar = ({ onContactClick, onNav }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      dispatch(logout());
      if (onNav) {
        onNav(() => navigate({ to: '/' }));
      } else {
        navigate({ to: '/' });
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="bg-white border border-b-black">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - App Name */}
          <div className="flex items-center">
            <button onClick={() => onNav ? onNav(() => navigate({ to: '/' })) : navigate({ to: '/' })} className="text-xl font-bold text-gray-800 bg-transparent border-none cursor-pointer focus:outline-none">
              URL Shortener
            </button>
          </div>
          {/* Right side - Navigation and Auth buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onNav ? onNav(() => navigate({ to: '/' })) : navigate({ to: '/' })}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition bg-transparent border-none cursor-pointer focus:outline-none"
            >
              Home
            </button>
            <button
              onClick={onContactClick}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition bg-transparent border-none cursor-pointer focus:outline-none"
            >
              Contact Us
            </button>
            {isAuthenticated && (
              <button
                onClick={() => onNav ? onNav(() => navigate({ to: '/dashboard' })) : navigate({ to: '/dashboard' })}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition bg-transparent border-none cursor-pointer focus:outline-none"
              >
                Dashboard
              </button>
            )}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">
                  Welcome, {user?.name ? user.name.split('@')[0] : 'User'}! 👋
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => onNav ? onNav(() => navigate({ to: '/auth' })) : navigate({ to: '/auth' })}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;