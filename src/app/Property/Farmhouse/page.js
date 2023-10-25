import React from 'react'
import Image from 'next/image'
const Farmhouse = () => {
  return (
    <div className="pt-10 border-2 border-black">
      <div className="w-full h-56  text-center ">
        <p>welcome to my Farmhouse family always staisfied you</p>
       <p >looking it </p>
       <button className="rounded-full border-2 mt-10 px-8 py-5 text-center text-green-300 bg-green-600">Booking now</button></div>
    <div className="border-2  w-full p-4 ">
        <div className="border-2   w-[80%]  h-56">
            <Image
      src="/img/farmhouse.jpg" width={500} height={500}
      className="w-full h-full "
      alt="Farmhouse" 
    /> </div></div>
  <div className="border-2  w-full p-6">
        <div className="border-2   w-[90%]  h-56">
            <Image
      src="/img/Swimming.jpg" width={500} height={500}
      className="w-full h-full "
      alt="Swimming pool" 
    /> </div></div>
    <div className="border-2  w-full p-4 ">
        <div className="border-2   w-[80%]  h-56">
            <Image
      src="/img/parking.jpeg" width={500} height={500}
      className="w-full h-full "
      alt="Parking" 
    /> </div></div>
    <div className="border-2  w-full p-6 ">
        <div className="border-2   w-[90%]  h-56">
            <Image
      src="/img/road.jpg" width={500} height={500}
      className="w-full h-full "
      alt="Widerange road" 
    /> </div></div>
    <div className="border-2  w-full  bg-purple-200" > 
      <div className=" border-2 font-bold  py-5 sm:px-10 lg:px-56">
        <div className="text-orange-800 text-center border-2 p-1">Here is what we can do for you we are experts at several thing and agood at edgerly following daily trends</div> </div>
 <div className="border-2  w-full  p-2 gap-2 flex">
        <div className="border-2 flex flex-col w-full text-center p-3 rounded-xl ">
          <p className="font-bold text-2xl pb-2  ">Farmhouse land </p>
          <p>High Creation Interior understandands interior designing is not about arranging thing in the pattern but about utilizing the given space effectively to ensure it both looks and feels good. So conect with us , and let's discuss your requirements.</p>
          </div>
          <div className="border-2 flex flex-col w-full text-center p-3 rounded-xl">
          <p className="font-bold text-2xl pb-2  ">Swimming Pool </p>
          <p>High Creation Interior understandands interior designing is not about arranging thing in the pattern but about utilizing the given space effectively to ensure it both looks and feels good. So conect with us , and let's discuss your requirements.</p>
          </div>
          <div className="border-2 flex flex-col w-full text-center p-3 rounded-xl">
          <p className="font-bold text-2xl pb-2  ">Parking</p>
          <p>High Creation Interior understandands interior designing is not about arranging thing in the pattern but about utilizing the given space effectively to ensure it both looks and feels good. So conect with us , and let's discuss your requirements.</p>
          </div>
          <div className="border-2 flex flex-col w-full text-center p-3 rounded-xl">
          <p className="font-bold text-2xl pb-2  ">Widerange road</p>
          <p>High Creation Interior understandands interior designing is not about arranging thing in the pattern but about utilizing the given space effectively to ensure it both looks and feels good. So conect with us , and let's discuss your requirements.</p>
          </div>
         
          
        </div>
        </div>

    
    </div>
  )
}

export default Farmhouse
