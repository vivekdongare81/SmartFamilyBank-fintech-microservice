import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import { currentUser, mockNotifications } from '../../data/mockData';

const Header: React.FC = () => {
  const unreadNotifications = mockNotifications.filter(n => !n.read).length;

  return (
    <header className="bg-white shadow-sm border-b h-16 fixed top-0 left-64 right-0 z-30">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions, goals..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors" />
            {unreadNotifications > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {unreadNotifications}
              </span>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-8 h-8 rounded-full"
            />
            <div className="text-sm">
              <p className="font-medium text-gray-800">{currentUser.name}</p>
              <p className="text-gray-500 capitalize">{currentUser.role}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;