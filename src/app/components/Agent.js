import React from 'react'
import { PiPhoneCallLight } from "react-icons/pi";
import { IoLocation } from "react-icons/io5";
const Agent = () => {
    const farmhouseData = [
       
        {
          id: 1,
          imageUrl: '/img/realtor-1.jpeg',
          title: "Sell manager",
          description: " Ajay Rana",
          location: "Noida ",
          
          phone: "873657827",
        },
        
        {
          id: 1,
          imageUrl: '/img/realtor-3.jpeg',
          title: "Sellman  ",
          description: "Ritesh gupta",
          location: "Pari Chock",
         
          phone: "1234567890",
        },
        
        {
          id: 1,
          imageUrl: '/img/realtor-1.jpeg',
          title: " Broker",
          description: "kamal gupta",
          location: "sectoe 62 Noida",
          
          phone: "672388723",
        },
       
        
        
        // Add more farmhouse data objects as needed
      ];
    return (
    //   
    <div className="container mx-auto my-8 bg-white p-4 rounded shadow-lg">
    <h1 className="text-3xl  text-center font-semibold mb-4 ">Call Agents</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {farmhouseData.map((property) => (
        <div key={property.id} className="bg-white rounded p-4 shadow-md">
          <img
            src={property.imageUrl}
            alt={`Farmhouse ${property.id}`}
            className="w-full h-40 object-cover mb-4"
          />
           <h1 className="text-2xl text-orange-600 font-bold m-2">{property.title}</h1>
      <p className="text-gray-600 m-2">{property.description}</p>
      <p className="text-gray-800"> <IoLocation  className="inline m-2"/>{property.location}</p>
      
      <p className="text-lg font-bold text-orange-400  border-t  "><PiPhoneCallLight className="inline m-2" />{property.phone}</p>
        </div>
      ))}
    </div>
  </div>
    );
  };

export default Agent
