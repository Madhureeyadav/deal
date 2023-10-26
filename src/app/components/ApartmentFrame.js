import React from 'react';

const ApartmentFrame = ({ apartment }) => {
    const { name, description, price, rating } = apartment;
  return (
    <div className="border rounded p-4 mb-4 shadow-md flex flex-col">
      <h2 className="text-xl font-semibold mb-2">{apartment.name}</h2>
      <p className="text-gray-700 mb-2">{apartment.description}</p>
      <p className="text-blue-500 font-semibold">Price: ${apartment.price} per month</p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">Rating:</span>
        {[...Array(rating)].map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5 text-yellow-500 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 0l2.42 6.565h6.705l-5.455 4.39 2.456 6.545-6.726-4.532-6.704.018 2.417-6.566-5.455-4.39h6.704z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default ApartmentFrame;