import React from 'react';
import { Search, LogIn, UserPlus, Bell, Upload } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 bg-black z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="flex items-center text-2xl font-bold text-purple-400">
                <span className="mr-1">Parsa</span>
                <span className="text-white">Hub</span>
              </div>
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex items-center flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                className="w-full py-2 pl-10 pr-4 text-white bg-gray-900 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                placeholder="Search videos..."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
              <Upload className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
              <Bell className="h-5 w-5" />
            </button>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-500 rounded-md hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black transition-colors duration-200"
            >
              <LogIn className="h-4 w-4 mr-1" />
              Log In
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium text-purple-400 bg-transparent border border-purple-400 rounded-md hover:bg-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black transition-colors duration-200"
            >
              <UserPlus className="h-4 w-4 mr-1" />
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;