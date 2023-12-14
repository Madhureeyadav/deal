import React from 'react'
import Image from "next/image"
const Imagefont = () => {
    const likes = [
        {
          id: 1,
          image: "/img/f3.jpg",
         
        },
        {
          id: 2,
          image: "/img/f1.jpg",
          
        },
        {
          id: 3,
          image: "/img/f2.jpg",
        
        },
        
      ];
 return (
<div className="border-gray-500  m-4 shadow-lg rounded-lg pb-5">
<h1 className="text-center text-2xl font-bold p-4">Related Image </h1>
    
    <div className="flex flex-wrap  justify-evenly  ">


      {likes.map((part) => (
        <div key={part.id} className=" p-2">
          
          <Image
            src={part.image}
            alt={`likes ${part.id}`}
            width={500}
            height={500}
className="h-72 w-72 rounded-lg "
            
          />
          
        </div>
      ))}
    </div>
    </div>
  );
};

  

export default Imagefont;
