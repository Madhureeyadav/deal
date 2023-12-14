
"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link"


const FontPage1 = () => {
 
    
    return (
    <div className="bg-gray-100 py-20 ">
        
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">

    
      <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
      
        <p className="flex items-center justify-center md:justify-start text-2xl text-gray-600 mb-2">
        
          <span>Real Estate Agency</span>
        </p>
        <h2 className="text-4xl font-bold mb-4">Find Your Dream House By Us</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out ">
        <Link href="/BookingForm">  Make An Enquiry</Link>
        </button>
   
      </div>


      <div className="md:w-1/2">
        <Image src="/img/build.png" alt="Modern house model" width={500} height={100} className="w-full " />
      </div>
     
    </div>
  </div>
  )
}


export default FontPage1
