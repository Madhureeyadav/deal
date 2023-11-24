import {AiFillMessage } from "react-icons/ai"
import Link from "next/link"
import Dropdown from "./Dropdown"
import Deal from "./Deal"
import React from 'react'
import Image from "next/image"





const Navbar = () => (
 
//   <div>
//     <nav className="bg-deepBlue">
//       <div className="relative w-[1080px] mx-auto flex items-center justify-between"></div>

// <Image src="/img/logo.png" width={200} height={100} className="cursor-pointer py-7 px-7 "></Image>


// <ul className="flex space-x-4">
//   <li className="text-white font-mulish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 realtive group">
//     <Link href="/Property">Property</Link>
//     <div classNmae="absolute buttom-0 w-full h-1 bg-lightBlue hidden grpoup-hover:block transition-all duration-200"></div>
//   </li>
// </ul>
//     </nav>
//   </div>
  
 
//    

<nav className="bg-blue-950 fixed w-full">
  <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-4">
    <div className="flex items-center">
      <Image src="/img/logo.png" width={200} height={100} className="cursor-pointer" />
    </div>
    <ul className="hidden md:flex space-x-4">
      <li className="text-white font-mulish hover:text-blue-200 transition duration-300 relative group">
        <Link href="/">Home</Link>
        <div className="absolute bottom-0 w-full h-1 bg-blue-200 hidden group-hover:block transition duration-300"></div>
      </li>
      <li className="text-white font-mulish hover:text-blue-200 transition duration-300 relative group">
      <Link href="/Property"><Dropdown /></Link>  {/* Assuming you have a Dropdown component */}
        <div className="absolute bottom-0 w-full h-1 bg-blue-200 hidden group-hover:block transition duration-300"></div>
      </li>
      <li className="text-white font-mulish hover:text-blue-200 transition duration-300 relative group">
        <Link href="/Gallery">Gallery</Link>
        <div className="absolute bottom-0 w-full h-1 bg-blue-200 hidden group-hover:block transition duration-300"></div>
      </li>
     
      <li className="text-white font-mulish hover:text-blue-200 transition duration-300 relative group">
        <Link href="/Contact1">Contact</Link>
        <div className="absolute bottom-0 w-full h-1 bg-blue-200 hidden group-hover:block transition duration-300"></div>
      </li>
    </ul>
    <button className="py-3 px-5 text-mulish text-white border-blue-200 border rounded-full text-sm hover:bg-slate-500 transition duration-300">
      <Link href={"/Nowcall"}  className="flex items-center">
        <AiFillMessage size={20} className="pr-1" />
        Now Call
      </Link>
    </button>
  </div>
</nav>

   

)

export default Navbar


