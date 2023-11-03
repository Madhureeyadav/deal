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
      imageUrl: "/img/farmhouse.jpg",
    },
    // Add more property objects as needed
  ];
  return (
   <div className="p-3">
    <h1 className="text-center font-bold text-xl p-2">Plot Planning</h1> 
    <nav className=" p-4 text-black">
      <div className="container mx-auto flex items-center justify-center">
        
        <div className="space-x-10">
          <Link href="/">
            The Studio
          </Link>
          <Link href="/about">
           Deluxe Portion
          </Link>
          <Link href="/services">
        Penhouse        
          </Link>
          <Link href="/contact">
          Top Garden
          </Link>
          <Link href="/contact">
           Double Height
          </Link>
        </div>
      </div>
    </nav>
    <div className="container mx-auto p-4">
      {properties.map((property, index) => (
        <PropertyCard key={index} property={property} />
      ))}
    </div>
   
    </div>
  )
}

export default PlotingPlan
