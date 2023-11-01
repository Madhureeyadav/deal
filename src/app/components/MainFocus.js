import React from 'react'

const MainFocus = () => {
    const farmhouseData = [
       
        {
          id: 1,
          imageUrl: '/img/icon1.png',
          title: "For Sell",
          description: "New Apartment Nice View",
          
        },
        {
            id: 1,
            imageUrl: '/img/icon2.png',
            title: "For Sell",
            description: "New Apartment Nice View",
            
          },
          {
            id: 1,
            imageUrl: '/img/icon3.png',
            title: "For Sell",
            description: "New Apartment Nice View",
            
          },
        
        
       
        
        
        // Add more farmhouse data objects as needed
      ];
    return (
    //   
    <div className="container mx-auto my-8">
    <h1 className="text-3xl  text-center font-semibold mb-4"> our Main Focus</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {farmhouseData.map((property) => (
        <div key={property.id} className="bg-white rounded p-4 shadow-md">
          <img
            src={property.imageUrl}
            alt={`Farmhouse ${property.id}`}
            className="w-full h-24 object-contain rounded-full mb-4"
          />
           <h1 className="text-2xl text-center text-orange-600 font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 text-center">{property.description}</p>
      
        </div>
      ))}
    </div>
  </div>
    
  )
}

export default MainFocus
