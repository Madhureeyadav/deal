'use client'
// components/BookingForm.js
import React, { useState } from 'react';
import DropdownLocation from '../components/DropdownLocation';
 // Update the path as needed

const BookingForm = () => {
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
const [error,setError]=useState("");
const [success,setSuccess]=useState(false);


  const bookingHandle =async (e) => {
    e.preventDefault();
    
console.log("name",name);
console.log("mobileNo.",mobileNo);
console.log("propertyName",propertyName);
console.log("location",location);
console.log("date",date);

    
     

      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, mobileNo, propertyName, location, date }),
      });
      
      const responseText = await res.text();
      console.log('Raw Server Response:', responseText);
      
      try {
        const { msg, success } = JSON.parse(responseText);
        console.log('Parsed Server Response:', { msg, success });
        setError(msg);
        setSuccess(success);
      
        if (success) {
          // Reset form fields on success
          setName('');
          setMobileNo('');
          setPropertyName('');
          setLocation('');
          setDate('');
        }
      } catch (error) {
        console.error('Error parsing server response:', error);
        setError('Server error, please try again!');
        setSuccess(false);
      }
    }      



  const locationOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    // Add more options as needed
  ];

  return (
    <div className='pt-20 my-2'>
    <form onSubmit={bookingHandle } className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg ">
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
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
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
          value={propertyName}
          onChange={(e) => setPropertyName(e.target.value)}
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
    </div>
  );
};

export default BookingForm;
