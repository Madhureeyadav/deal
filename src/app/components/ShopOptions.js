'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faThList } from '@fortawesome/free-solid-svg-icons';

const ShopOptions = ({ onViewChange }) => {
  const [viewType, setViewType] = useState('grid'); 

  const toggleView = () => {
    const newViewType = viewType === 'grid' ? 'list' : 'grid';
    setViewType(newViewType);
    onViewChange(newViewType); 
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-2">
      <div className="flex items-center space-x-4">
        <button
          className={`px-1 py-1 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300 ${
            viewType === 'grid' ? 'bg-gray-400' : ''
          }`}
          onClick={toggleView}
        >
          <FontAwesomeIcon icon={faTh} className="mr-2 w-10 h-7" />
        </button>

        <button
          className={`px-1 py-1 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300 ${
            viewType === 'list' ? 'bg-gray-400' : ''
          }`}
          onClick={toggleView}
        >
          <FontAwesomeIcon icon={faThList} className="mr-2 w-10 h-7" />
        </button>
      </div>
      <div className="justify-around px-20">
        <li className="flex items-center">
          <div className="text-center md:mr-4">
            <select className="bg-gray-100 border border-gray-300 rounded-full p-2 text-gray-800 focus:outline-none focus:border-blue-500 transition duration-300">
              <option className="text-gray-500">Default sorting</option>
               <option className="text-gray-500">Sort by price: low to high</option>
              <option className="text-gray-500">Sort by price: high to low</option>
            </select>

            <div className="md:hidden" tabIndex="0">
              <span className="current">Default sorting</span>
              <ul className="list">
                <li data-value="Default sorting" className="option selected">
                  Default sorting
                </li>
                <li data-value="Sort by price: low to high" className="option">
                  Sort by price: low to high
                </li>
                <li data-value="Sort by price: high to low" className="option">
                  Sort by price: high to low
                </li>
              </ul>
            </div>
          </div>
        </li>
      </div>
    </div>
  );
};

export default ShopOptions;

