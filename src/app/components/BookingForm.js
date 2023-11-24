'use client'
// components/BookingForm.js
import React, { useState } from 'react';
import DropdownLocation from './DropdownLocation'; // Update the path as needed

const BookingForm = ({ onBook }) => {
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook({ name, mobileNo, propertyName, location, date });
  };

  const locationOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    // Add more options as needed
  ];

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name:
        </label>
        <input
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Mobile Number:
        </label>
        <input
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          type="number"
          id="mobileNo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Property Area:
        </label>
        <input
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          type="text"
          id="propertyName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {/* Add the rest of the input fields */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
          Location:
        </label>
        <DropdownLocation
          label="Select Location"
          options={locationOptions}
          selectedValue={location}
          onChange={(value) => setLocation(value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
          Date:
        </label>
        <input
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300"
        type="submit"
      >
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;
