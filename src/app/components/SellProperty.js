import React from 'react';
import AreaPart from './AreaPart';
import Image from 'next/image';
import ImagePart from './ImagePart'

const SellProperty = () => {
  return (
    <div className="flex flex-col p-5 md:flex-row">
      {/* Left Column */}
      <div className="md:w-1/2 p-7">
        <h1 className="text-2xl font-bold mb-4">Today Sell Property</h1>
        <p className="mb-4 text-gray-700">
          Houzez allows you to design unlimited panels and real estate custom forms to capture leads and keep a record of all information
        </p>
        <ul className="list-disc p-4">
            <li className="mb-2 text-green-600">
          Live Music Concerts at Luviana</li>
          <li className="mb-2 text-green-600">
          Live Music Concerts at Luviana</li>
          <li className="mb-2 text-green-600">
          Live Music Concerts at Luviana</li>
          <li className="mb-2 text-green-600">
          Live Music Concerts at Luviana</li>
        </ul>
        <div className="mt-8">
          <AreaPart />
          <ImagePart />
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2 p-4">
        <Image src="/img/Living.jpeg" alt="Living Room"
        width={500}
         height={400} />
      </div>
    </div>
  );
};

export default SellProperty;
