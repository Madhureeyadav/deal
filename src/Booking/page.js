// pages/index.js
import React from 'react';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="container mx-auto my-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Next.js Button Click Example</h1>
      <Button href="/BookingForm" onCLick="Go to New Page" />
    </div>
  );
};

export default Home;
