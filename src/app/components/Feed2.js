// TestimonialsSection.js
import React from 'react';
import Feed1 from '../components/Feed1';

const Feed2 = ({ testimonials }) => {
  return (
    <div className="container mx-auto">

      <div className="flex flex-col ">
        {testimonials.map((testimonial, index) => (
          <Feed1 key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feed2 ;
