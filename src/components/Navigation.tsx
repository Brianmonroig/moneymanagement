import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-xl mb-4 md:mb-0">
          Money Manager
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row md:space-x-4">
          <li>
            <Link
              to="/"
              className="text-white font-bold block py-2 md:py-0 hover:text-yellow-300 hover:underline transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="text-white font-bold block py-2 md:py-0 hover:text-yellow-300 hover:underline transition duration-300"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/manage-expenses"
              className="text-white font-bold block py-2 md:py-0 hover:text-yellow-300 hover:underline transition duration-300"
            >
              Manage Expenses
            </Link>
          </li>
          <li>
            <Link
              to="/manage-income"
              className="text-white font-bold block py-2 md:py-0 hover:text-yellow-300 hover:underline transition duration-300"
            >
              Manage Income
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
