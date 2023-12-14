// Testimonial.js
import React from 'react';

const Feed1= ({ image, icon, name, title}) => {
  return (
    <div className="bg-white flex p-2 rounded shadow-lg mb-4 jusytify-center gap-4">
        <div className='flex flex-col'>
      {image && <img src={image} alt={name} className="w-16 h-16  justify-center rounded-full mb-4" />}
      {icon && <i className={`text-4xl mb-4 ${icon}`} />}
      </div>
      <div className='flex flex-col'>
      <p className="text-gray-600 font-bold text-center">{name}</p>
      <p className="text-gray-600 font-bold text-center">{title}</p>
      </div>
    </div>
  );
};

export default Feed1;
