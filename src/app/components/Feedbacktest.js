// Testimonial.js
import React from 'react';

const FeedbackTest = ({ image, icon, name, title, text }) => {
  return (
    <div className="bg-white p-6 rounded shadow-lg mb-4 flex flex-col items-center">
      {image && <img src={image} alt={name} className="w-16 h-16 rounded-full mb-4" />}
      {icon && <i className={`text-4xl mb-4 ${icon}`} />}
      <p className="text-gray-800 mb-2 text-center">{text}</p>
      <p className="text-gray-600 font-bold text-center">{name}</p>
      <p className="text-gray-500 text-center">{title}</p>
    </div>
  );
};

export default FeedbackTest;
