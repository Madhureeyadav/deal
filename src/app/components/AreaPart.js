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
    <div className="flex flex-wrap justify-start">
      {areas.map((part) => (
        <div key={part.id} className=" p-4 m-2 border border-gray-300 rounded-lg">
            <div className=" flex">
          <h1 className="text-2xl font-bold ">{part.total}</h1>
          <Image
            src={part.image}
            alt={`Area ${part.id}`}
            width={100}
            height={100}
          />
          </div>
          <p className="mt-2">{part.title}</p>
        </div>
      ))}
    </div>
  );
};

export default AreaPart;
