import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

  

const gallery = () => {
  return (
    <div className="pt-20"> 
    <div className="font-bold text-center p-3">Apartment Images</div>
         <div className="flex  ">
  
  <div className="lg:w-1/3  md:w-full pr-4 pl-4 mb-4 lg:mb-0">
    <Image
      src="/img/a1.jpeg" width={500} height={500}
      className="w-full shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <Image
      src="/img/a4.jpeg" width={500} height={500}
      className="w-full shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
     <Image
      src="/img/gal-11.jpeg" width={500} height={500}
      className="w-full shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div className="lg:w-1/3 pr-4 pl-4 mb-4 lg:mb-0">
  <Image
      src="/img/a10.jpeg" width={500} height={500}
      class="w-full shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    /> 
  <video
      src="/img/a7.mp4"width={500} height={500}
      className="w-full shadow-1-strong rounded mb-4"
      controls
    />
   
  </div>

  <div className="lg:w-1/3 pr-4 pl-4 mb-4 lg:mb-0">
    

    <Image
      src="/img/gal-12.jpeg" width={500} height={500}
      className="w-full shadow-1-strong rounded mb-4"
     
    />
    <Image
      src="/img/a2.jpeg" width={500} height={500}
      className="w-full shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />
    
    <Image
      src="/img/a5.jpeg" width={500} height={500}
      className="w-full shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
    
  </div>
</div> 

<div className="font-bold text-center p-3">Farmhouse&Landhouse Images</div>
         <div className="flex flex-wrap ">
  <div className="lg:w-1/3  md:w-full pr-4 pl-4 mb-4 lg:mb-0">
    <Image
      src="/img/f2.jpg" width={500} height={500}
      className="w-full shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <Image
      src="/img/f4.jpg" width={500} height={500}
      className="w-full shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div className="lg:w-1/3 pr-4 pl-4 mb-4 lg:mb-0">
    <Image
      src="/img/f4.jpg" width={500} height={500}
      className="w-full shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <Image
      src="/img/f1.jpg" width={500} height={500}
      class="w-full shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div className="lg:w-1/3 pr-4 pl-4 mb-4 lg:mb-0">
    <Image
      src="/img/f6.jpg"width={500} height={500}
      className="w-full shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <Image
      src="/img/f7.jpg" width={500} height={500}
      className="w-full shadow-1-strong rounded mb-4"
      />
     
  
   
  </div>
</div> 
<div className="flex ">

 
</div>
    </div>
      
    
  )
}

export default gallery
