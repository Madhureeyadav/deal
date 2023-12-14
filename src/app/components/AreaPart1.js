import React from 'react';
import Image from 'next/image';

const AreaPart = () => {
  const areas = [
    {
      id: 1,
      image: "/img/badroom1.png",
      title: "Bathroom",
      total: 2,
    },
    {
      id: 2,
      image: "/img/bathroom.png",
      title: "Bedroom",
      total: 3,
    },
    {
      id: 3,
      image: "/img/kitchen1.png",
      title: "Kitchen",
      total: 1,
    },
  ];

  return (
    <div className="flex flex-wrap justify-start ">
      {areas.map((part) => (
        <div key={part.id} className="  p-2  border-gray-300 rounded-lg">
            <div className=" flex">
         
          <Image
            src={part.image}
            alt={`Area ${part.id}`}
            width={25}
            height={25}
          />
          </div>
        
        </div>
      ))}
    </div>
  );
};

export default AreaPart;
