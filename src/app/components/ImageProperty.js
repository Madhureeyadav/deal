
'use client'
 import React, { useState } from 'react';

const ImageProperty = () => {
  const imageNames = ['feild.jpeg', 'feild2.jpeg', 'feild3.jpeg', 'feild4.jpg', 'feild5.jpeg','feild.jpeg', 'feild2.jpeg', 'feild3.jpeg'];
  const [startIndex, setStartIndex] = useState(0);

  const nextImages = () => {
    setStartIndex((prevIndex) => (prevIndex +3) % imageNames.length);
  };

  const previousImages = () => {
    setStartIndex((prevIndex) => (prevIndex - 3+ imageNames.length) % imageNames.length);
  };

  const visibleImages = imageNames.slice(startIndex, startIndex +3);

  return (
    <div className="flex items-center justify-around">
      <button className="m-4" onClick={previousImages}>
        Previous
      </button>
      <div className="flex space-x-4 overflow-hidden">
        {visibleImages.map((imageName, index) => (
          <img
            key={index}
            src={`/img/${imageName}`}
            alt={`Image ${startIndex + index + 1}`}
            className="w-48 h-48 object-cover"
          />
        ))}
      </div>
      <button className="m-4" onClick={nextImages}>
        Next
      </button>
    </div>
  );
};

export default ImageProperty;
