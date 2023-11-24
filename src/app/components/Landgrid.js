"use client";

import Image from 'next/image'


const Landgrid =() => {
    const farmhouseData = [
        {
          id: 1,
          imageUrl: '/img/f2.jpg',
          title: "For Sell",
          description: "New Apartment Nice View",
          location: "Belmont Gardens, Chicago",
          bedrooms: 3,
          bathrooms: 2,
          squareFeet: 3450,
          price: "$34,900/Month",
        },
        {
          id: 1,
          imageUrl: '/img/f3.jpg',
          title: "For Sell",
          description: "New Apartment Nice View",
          location: "Belmont Gardens, Chicago",
          bedrooms: 3,
          bathrooms: 2,
          squareFeet: 3450,
          price: "$34,900/Month",
        },
        
        {
          id: 1,
          imageUrl: '/img/f4.jpg',
          title: "For Rent",
          description: "New Apartment Nice View",
          location: "Belmont Gardens, Chicago",
          bedrooms: 3,
          bathrooms: 2,
          squareFeet: 3450,
          price: "$34,900/Month",
        },
        
        {
          id: 1,
          imageUrl: '/img/f5.jpg',
          title: "For Rent",
          description: "New Apartment Nice View",
          location: "Belmont Gardens, Chicago",
          bedrooms: 3,
          bathrooms: 2,
          squareFeet: 3450,
          price: "$34,900/Month",
        },
        
        {
          id: 1,
          imageUrl: '/img/f7.jpg',
          title: "For Rent",
          description: "New Apartment Nice View",
          location: "Belmont Gardens, Chicago",
          bedrooms: 3,
          bathrooms: 2,
          squareFeet: 3450,
          price: "$34,900/Month",
        },
        
        {
          id: 1,
          imageUrl: '/img/f1.jpg',
          title: "For Rent",
          description: "New Apartment Nice View",
          location: "Belmont Gardens, Chicago",
          bedrooms: 3,
          bathrooms: 2,
          squareFeet: 3450,
          price: "$34,900/Month",
        },
        
        
        // Add more farmhouse data objects as needed
      ];
    return (
    //   
    <div className="container mx-auto my-8">
    <h1 className="text-3xl font-semibold mb-4">Farmhouse Properties</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {farmhouseData.map((property) => (
        <div key={property.id} className="bg-white rounded p-4 shadow-md">
          <Image
            src={property.imageUrl}
            alt={`Farmhouse ${property.id}`}
            width={100} height={100}
            className="w-full h-40 object-cover mb-4"
          />
           <h1 className="text-2xl text-orange-600 font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600">{property.description}</p>
      <p className="text-gray-800">{property.location}</p>
      <p>{property.bedrooms} Bedrooms {property.bathrooms} Bathrooms {property.squareFeet} square Ft</p>
      <p className="text-lg font-bold text-orange-400 p-2 m-2 border-t">{property.price}</p>
        </div>
      ))}
    </div>
  </div>
    );
  };

export default Landgrid
