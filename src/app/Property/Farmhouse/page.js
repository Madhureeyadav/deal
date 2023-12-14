
'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SearchBar from "../../components/Searchbar"
import Landlist from '../../components/Landlist'
import Landgrid from '../../components/Landgrid'
import ShopOptions from '../../components/ShopOptions'
import  { useState } from 'react';

const Apartment = () => {
  const [currentView, setCurrentView] = useState('grid');

  const handleViewChange = (newView) => {
    setCurrentView(newView);
  };
  return (
    <div className="pt-20 ">
     <div className="bg-slate-100 w-full  shodow-lg  ">
     <Image src="/img/f1.jpg" alt="Farmhouse image" width={500} height={100}  className="w-full h-52 object-cover"/>
      
     
<nav class="flex p-2" aria-label="Breadcrumb">
  <ol class="flex items-center font-bold text-md space-x-2 pl-3">
    <li>
      <Link href="/" class="text-stone-600 hover:text-stone-900  hover:underline">Home</Link>
    </li>
    <li>/</li>
    <li>
    <Link href="/Property" class="text-stone-600  hover:text-stone-900 hover:underline"> Property</Link>
    </li>
    <li>/</li>
    <li>
      <Link href="/Apartment" class="text-stone-600 hover:text-stone-900 hover:underline"> Apartment</Link>
    </li>
    <li>/</li>
    <li>
      <Link href="/Farmhouse" class="text-stone-600 hover:text-stone-900 hover:underline">Farmhouse</Link>
    </li>

  </ol>
</nav>

</div>
      
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
      {currentView === 'grid' ? <Landgrid/> :<Landlist/>}
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
