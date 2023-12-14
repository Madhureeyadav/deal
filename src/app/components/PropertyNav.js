// components/PropertyNav.js
import React from 'react';
import Link from 'next/link';
// import { ChatAlt2Icon, CalendarIcon } from '@heroicons/react/solid';  // Make sure to import CalendarIcon from @heroicons/react/outline

const PropertyNav = () => {
  return (
    <nav className=" text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <Link href="/"
    className=" font-bold text-lg">YourLogo
        </Link>
        

        {/* Responsive Menu */}
        <div className="flex items-center space-x-4">
          {/* Comment Button */}
          <button className="bg-red-600 p-2">
         comment
          </button>

          {/* Calendar Button */}
          <button className="bg-yellow-700 p-2"> calendar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default PropertyNav;
