"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import FontPage1 from '../components/FontPage1'

const FontPage = () => {
  
    
  return (

    
    <div className="bg-gray-100 py-20 ">
        
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
    <Link className="pr-10" href={"/FontPage1"}><AiOutlineArrowLeft size={20}/></Link> 
      <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
      
    
        <p className="flex items-center justify-center md:justify-start text-2xl text-gray-600 mb-2">
      
          <span >Real Estate Agency</span>
        </p>
        <h2 className="text-4xl font-bold mb-4">Find Your Dream House By Us</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out ">
          Make An Enquiry
        </button>
        
      </div>
      <div className="md:w-1/2 ">
        <Image src="/img/build.png" alt="Modern house model" width={500} height={100} className="w-full  " />
      </div>
      <Link className="pr-10" href={"/FontPage"}><AiOutlineArrowRight size={20}/></Link>
    </div>
  </div>
  )
}

export default FontPage
