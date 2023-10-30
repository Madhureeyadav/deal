import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FarmhouseImage from '../../components/FarmhouseImage'

const Farmhouse = () => {
  return (
    <div className="pt-20 ">
     
      <Image src="/img/f1.jpg" alt="Farmhouse image" width={500} height={100} className="w-full h-52 object-cover"/>
      <
      
    <div className="container mx-auto my-8">
      {/* <h1 className="text-3xl font-semibold mb-4">Welcome to Our Farmhouse Page</h1>
      <p className="text-lg mb-4">Explore our beautiful farmhouse properties available for purchase.</p>
       */}
       <div className="bg-green-200 p-4 rounded mb-4">
        <p className="text-green-800">Special Offer: Get 10% off on your first farmhouse purchase!</p>
      </div> 
      <FarmhouseImage/>
        <h1 className="text-blue-500 hover:underline">View Farmhouse Properties</h1>
     </div>
    </div>
  
  )
}

export default Farmhouse
