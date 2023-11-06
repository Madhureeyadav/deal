import React from 'react'
import Image from "next/image"
const ImagePart = () => {
    const likes = [
        {
          id: 1,
          image: "/img/service-1.png",
         
        },
        {
          id: 2,
          image: "/img/service-2.png",
          
        },
        {
          id: 3,
          image: "/img/service-3.png",
        
        },
      ];
 return (
    <div className="flex flex-wrap justify-start">
      {likes.map((part) => (
        <div key={part.id} className="  m-4 border border-gray-300 rounded-lg">
          
          <Image
            src={part.image}
            alt={`likes ${part.id}`}
            width={100}
            height={100}
          />
          
        </div>
      ))}
    </div>
  );
};

  

export default ImagePart
