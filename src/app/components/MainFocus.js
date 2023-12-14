import React from 'react'

const MainFocus = () => {
    const farmhouseData = [
       
        {
          id: 1,
          imageUrl: '/img/service-1.png',
          title: "Buy a home",
          description: "Seize the opportunity to own your dream home – a sanctuary of luxury, blending timeless elegance with modern comfort, promising a lifetime of cherished moments.",
          
        },
        {
            id: 1,
            imageUrl: '/img/service-2.png',
            title: "Rent a home",
            description: "Experience the epitome of urban living in this stylishly appointed rental home, where convenience meets comfort in the heart of vibrant city living",
            
          },
          {
            id: 1,
            imageUrl: '/img/service-3.png',
            title: "sell a home",
            description: "Embrace serenity in this charming home, where modern elegance meets timeless comfort, offering a haven of tranquility for a lifetime of cherished memories.",
            
          },
        
        
       
        
        
        // Add more farmhouse data objects as needed
      ];
    return (
    //   
    <div className="container mx-auto my-8">
   
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {farmhouseData.map((property) => (
        <div key={property.id} className="bg-white rounded p-4 shadow-md">
          <img
            src={property.imageUrl}
            alt={`Farmhouse ${property.id}`}
            className="w-full h-24 object-contain rounded-full mb-4"
          />
           <h1 className="text-2xl text-center text-orange-600 font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 text-md text-center">{property.description}</p>
      
        </div>
      ))}
    </div>
  </div>
    
  )
}

export default MainFocus
