import React from 'react'
import Image from 'next/image'
const Apartment = () => {
  return (
    <div className="pt-20 border-2 border-black">
      <div className="w-full h-56  text-center ">
        <p>welcome to my Apartment family always staisfied you</p>
       <p >looking it </p>
       <button className="rounded-full border-2 mt-10 px-8 py-5 text-center text-purple-300 bg-purple-950">Booking now</button></div>
    <div className="border-2  w-full p-10 bg-yellow-100 ">
        <div className="border-2   w-[80%]  h-56">
            <Image
      src="/img/gal-1.jpeg" width={500} height={500}
      className="w-full h-full "
      alt="Living room" 
    /> </div></div>
  <div className="border-2  w-full p-10 bg-yellow-100">
        <div className="border-2   w-[80%]  h-56">
            <Image
      src="/img/gal-1.jpeg" width={500} height={500}
      className="w-full h-full "
      alt="kitchen" 
    /> </div></div>
    <div className="border-2  w-full p-10 bg-yellow-200">
        <div className="border-2   w-[80%]  h-56">
            <Image
      src="/img/gal-1.jpeg" width={500} height={500}
      className="w-full h-full "
      alt="Bad room" 
    /> </div></div>
    <div className="border-2  w-full p-10 bg-yellow-900">
        <div className="border-2   w-[80%]  h-56">
            <Image
      src="/img/gal-1.jpeg" width={500} height={500}
      className="w-full h-full "
      alt="bath room" 
    /> </div></div>

    
    </div>
  )
}

export default Apartment
