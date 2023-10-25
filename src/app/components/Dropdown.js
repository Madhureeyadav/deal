// components/Dropdown.js

"use client";

import Link from 'next/link';

import React, { useState, useEffect, useRef } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
    <div>
      <button
        type="button"
      
        onClick={toggleDropdown}
      >
        Property
      </button>
    </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link href="/Property/Apartment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
             Apartment
            </Link>
            <Link href="/Property/Farmhouse" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
             Farmhouse
            </Link>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
