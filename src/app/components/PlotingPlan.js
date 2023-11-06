import React from 'react'
import Link from 'next/link'
import PropertyCard from './PropertyCard'


const PlotingPlan = () => {
  const properties = [
    {
      heading: "Beautiful Home",
      description: "A stunning property with modern amenities.",
      totalArea: 2000,
      bedrooms: 4,
      bathrooms: 3,
      penthouse: 1,
      lounge: 1,
      imageUrl: "/img/plot2.jpg",
    },
    // Add more property objects as needed
  ];
  
    
      return (
        <div className="p-3">
          <h1 className="text-center border-2 text-xl mx:auto p-2 sm:text-2xl  ">Ploting sketch</h1>
          <h1 className="text-center font-bold text-2xl p-2 sm:text-3xl md:text-4xl lg:text-5xl">Plot Planning</h1>
          <nav className="p-4 text-black">
            <div className="container mx-auto flex items-center justify-center">
              <div className="space-x-4 sm:space-x-8 md:space-x-10 lg:space-x-12">
                <Link href="/PlotingSketch/Studio">The Studio</Link>
                <Link href="/PlotingSketch/Deluxe">Deluxe Portion</Link>
                <Link href="/PlotingSketch/Penhouse">Penhouse</Link>
                <Link href="/PlotingSketch/Top Garden">Top Garden</Link>
                <Link href="/PlotingSketch/DoubleHeight">Double Height</Link>
              </div>
            </div>
          </nav>
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1  gap-4">
              {properties.map((property, index) => (
                <PropertyCard key={index} property={property} />
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default PlotingPlan;
    