// TestimonialsSection.js
import React from 'react';
import FeedbackTest from '../components/Feedbacktest';

const FeedbackTest2 = ({ testimonials }) => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl text-center font-semibold mb-6">Client Feedback</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <FeedbackTest key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default FeedbackTest2 ;
