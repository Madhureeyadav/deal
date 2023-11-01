"use client"
import React, { useState } from 'react';

const BookingForm = ({ onBook }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook({ name, date });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
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
  <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300" type="submit">
    Book Now
  </button>
</form>

  );
};

export default BookingForm;
