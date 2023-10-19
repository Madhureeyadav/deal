import {AiFillMessage } from "react-icons/ai"
import Link from "next/link"
import gallery from "../Gallery/page"
import React from 'react'

const Navbar = () => (

  <div className="border-2 border-black w-full  fixed  ">
    <nav className="flex  border-2 bg-cyan-900 ">

      <div className="flex  border-2 justify-start w-[80%] ">
        <ul className="inline-flex ">
          <li className="flex p-4 pl-14 ">Home</li>
          <li className="flex p-4 pl-14">About</li>
          <li className="flex  p-4 pl-14 "><Link href="/">Gallery</Link></li>
          <li className="flex p-4  pl-14">Contact</li>

        </ul>


      </div>
      <button className=" flex-end border-2 rounded-xl m-3  px-3 bg-blue-300 tetx-center"><Link href={"/"} className="inline-flex "><AiFillMessage size={20} className="pr-1" /><span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>Send Email</Link></button>
    </nav>
  </div>

)

export default Navbar
