// components/Gallery.js
import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="  shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`Image ${index + 1}`}
          className="w-32 h-32 cursor-pointer pl-10"
        />
      ))}
    </div>
  );
};

export default Gallery;
