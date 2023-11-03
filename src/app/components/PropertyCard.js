import React from 'react';
import Image from 'next/image'

const PropertyCard = ({ property }) => {
  const { heading, description, totalArea, bedrooms, bathrooms, penthouse, lounge ,imageUrl} = property;

  return (
    <>
    <div className=" p-2 flex rounded-lg shadow-lg  duration-300 ease-in-out hover:shadow-xl">
   <div className="w-1/2 flex flex-col p-3">
    <Image src={imageUrl} alt={heading} width={500} height={100} className=" w-full object-cover mb-4 rounded-lg" />
   </div> 
   <div  className="w-1/2 flex-col text-center  hover:bg-orange-100 ">
      <h2 className="text-xl font-bold mb-2 text-center">{heading}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-gray-700 mb-2">Total Area ............................................ {totalArea} sq. ft</p>
      <p className="text-gray-700 mb-2">Bedrooms ............................................ {bedrooms}</p>
      <p className="text-gray-700 mb-2">Bathrooms ............................................ {bathrooms}</p>
      <p className="text-green-500 mb-2">Penthouse ................................{penthouse}</p>
      <p className="text-green-500 mb-2">Lounge.........................................{lounge}</p>
    </div>
    </div>
   </>
  );
};

export default PropertyCard;
