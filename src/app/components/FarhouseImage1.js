import React from 'react'

const FarhouseImage1 = () => {
 
    const farmhouseData = [
        {
          id: 1,
          imageUrl: '/img/plot4.jpg',
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
          imageUrl: '/img/feild4.jpg',
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
          imageUrl: '/img/feild2.jpeg',
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
          imageUrl: '/img/feild3.jpeg',
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
          imageUrl: '/img/feild5.jpeg',
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
          imageUrl: '/img/feild.jpeg',
          title: "For Rent",
          description: "New Apartment Nice View",
          location: "Belmont Gardens, Chicago",
          bedrooms: 3,
          bathrooms: 2,
          squareFeet: 3450,
          price: "$34,900/Month",
        },
    ];
    return (
      
            <div className="container mx-auto my-8">
              <h1 className="text-3xl font-semibold mb-4">Farmhouse Properties</h1>
              {farmhouseData.map((property) => (
                <div key={property.id} className="mb-8 ">
                  <div className="bg-white rounded p-4 shadow-md flex">
                    <div className="w-1/2  px-4">
                    <img
                      src={property.imageUrl}
                      alt={`Farmhouse ${property.id}`}
                      className="w-full h-40 object-cover mb-4"
                    />
                    </div>
                    <div className="w-1/2 px-4">
                    <h1 className="text-2xl text-orange-600 font-bold mb-2">{property.title}</h1>
                    <p className="text-gray-600">{property.description}</p>
                    <p className="text-gray-800">{property.location}</p>
                    <p>{property.bedrooms} Bedrooms {property.bathrooms} Bathrooms {property.squareFeet} square Ft</p>
                    <p className="text-lg font-bold text-orange-400 p-2 mt-2 border-t">{property.price}</p>
                    </div>
                 </div>
                </div>
              ))}
            </div>
          );
          

      
  
}

export default FarhouseImage1

