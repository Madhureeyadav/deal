'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SearchBar from "../../components/Searchbar"
import FarmhouseImage from '../../components/FarmhouseImage'
import FarhouseImage1 from '../../components/FarhouseImage1'
import ShopOptions from '../../components/ShopOptions'
import  { useState } from 'react';

const Apartment = () => {
  const [currentView, setCurrentView] = useState('grid');

  const handleViewChange = (newView) => {
    setCurrentView(newView);
  };
  return (
    <div className="pt-20 ">
     
     <Image src="/img/f1.jpg" alt="Farmhouse image" width={500} height={100}  className="w-full h-52 object-cover"/>
      
      
      
     <div className="container mx-auto p-4">
      {/* Other content */}
      <SearchBar />
    </div>
<div className="pt-5 ">
      {/* Other content */}
      <div className="container mx-auto p-4">
        <ShopOptions onViewChange={handleViewChange} />
      </div>
      {/* Other content */}
      {currentView === 'grid' ? <FarmhouseImage /> :<FarhouseImage1/>}
    </div>
    
    <div className="container mx-auto my-8">
      {/* <h1 className="text-3xl font-semibold mb-4">Welcome to Our Farmhouse Page</h1>
      <p className="text-lg mb-4">Explore our beautiful farmhouse properties available for purchase.</p>
       */}
      
       
     

      <div className="bg-green-200 p-4 rounded mb-4">
        <p className="text-green-800">Special Offer: Get 10% off on your first farmhouse purchase!</p>
      </div> 
        <h1 className="text-blue-500 hover:underline">View Farmhouse Properties</h1>
     </div>



     
    </div>
  
  )
}

export default Apartment
