import React from 'react';
import Image from 'next/image';

const PropertyCard = ({ property }) => {
  const { heading, description, totalArea, bedrooms, bathrooms, penthouse, lounge, imageUrl } = property;

  return (
    <div className="p-2 flex rounded-lg shadow-lg duration-300 ease-in-out transform ">
      <div className="w-1/2 relative">
        <Image src={imageUrl} alt={heading} width={500} height={300} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="w-1/2 p-5 flex flex-col justify-between m-2 hover:bg-orange-100">
        <div className="">
          <h2 className="text-xl font-bold mb-2">{heading}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-col mb-2">
            <span className="text-gray-700">Total Area ................................ {totalArea} sq. ft</span>
            <span className="text-gray-700">Bedrooms ................................ {bedrooms}</span>
            <span className="text-gray-700">Bathrooms ................................ {bathrooms}</span>
        
          {penthouse && <span className="text-green-500">Penthouse Available</span>}
          {lounge && <span className="text-green-500">Lounge Area Available</span>}
        </div>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4  justify-around rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;

