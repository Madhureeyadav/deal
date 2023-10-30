"use client";

import Image from 'next/image'


const FarmhouseImage =() => {
    const farmhouseData = [
        {
          id: 1,
          imageUrl: '/img/f1.jpg',
          price: '$500,000',
          purchaseInfo: 'Contact us for purchasing details.',
        },
        {
            
            id: 1,
            imageUrl: '/img/f1.jpg',
            price: '$500,000',
            purchaseInfo: 'Contact us for purchasing details.',
          },
          {
            id: 1,
            imageUrl: '/img/f1.jpg',
            price: '$500,000',
            purchaseInfo: 'Contact us for purchasing details.',
          },
          {
            id: 1,
            imageUrl: '/img/f1.jpg',
            price: '$500,000',
            purchaseInfo: 'Contact us for purchasing details.',
          },
          {
            id: 1,
            imageUrl: '/img/f1.jpg',
            price: '$500,000',
            purchaseInfo: 'Contact us for purchasing details.',
          },
          {
            id: 1,
            imageUrl: '/img/f1.jpg',
            price: '$500,000',
            purchaseInfo: 'Contact us for purchasing details.',
          },

        // Add more farmhouse data objects as needed
      ];
    return (
    //   <div className="grid grid-cols-1 gap-4 p-4 border border-gray-300 rounded-lg shadow-lg">
    //     <Image
    //       href={property.image}
    //       alt={property.title}
    //       className="w-full h-48 object-cover rounded-md"
    //     />
    //     <div className="mt-4">
    //       <h2 className="text-xl font-semibold">{property.title}</h2>
    //       <p className="text-gray-600">{property.location}</p>
    //       <div className="grid grid-cols-3 gap-2 mt-2">
    //         <div>
    //           <span className="text-gray-600">Bedrooms:</span> {property.bedrooms}
    //         </div>
    //         <div>
    //           <span className="text-gray-600">Bathrooms:</span> {property.bathrooms}
    //         </div>
    //         <div>
    //           <span className="text-gray-600">Area:</span> {property.area} sq. ft.
    //         </div>
    //       </div>
    //       <div className="mt-2">
    //         <span className="text-green-600 font-semibold">
    //           ${property.price}/Month
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    <div className="container mx-auto my-8">
    <h1 className="text-3xl font-semibold mb-4">Farmhouse Properties</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {farmhouseData.map((property) => (
        <div key={property.id} className="bg-white rounded p-4 shadow-md">
          <img
            src={property.imageUrl}
            alt={`Farmhouse ${property.id}`}
            className="w-full h-40 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Price: {property.price}</h2>
          <p>{property.purchaseInfo}</p>
        </div>
      ))}
    </div>
  </div>
    );
  };

export default FarmhouseImage
