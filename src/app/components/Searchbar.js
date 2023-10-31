import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; // Import the search icon from react-icons

const SearchBar = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-1">
      <input
        type="text"
        placeholder="Search..."
        className="outline-none px-2 py-1 w-64 flex-grow"
      />
      <button className="bg-slate-800 text-white px-4 py-1 rounded-md  hover:bg-slate-300 transition duration-300">
        <AiOutlineSearch size={30} /> {/* Search icon */}
      </button>
    </div>
  );
};

export default SearchBar;
