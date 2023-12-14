import React from 'react'
import Image from 'next/image'
import Ga1 from '../components/Ga1'
import Link from 'next/link';

const images = [
  { src: '/img/hindu.jpg' },
  { src: '/img/cnbc.png' },
  { src: '/img/ndtu.jpg' },
  { src: '/img/nxBig.png' },
  // Add more images as needed
];

const gallery = () => {
  return (
    <div>
    <div className="pt-20"> 
    <div className="bg-slate-100 w-full  shodow-lg  ">
     <Image src="/img/f3.jpg" alt="Farmhouse image" width={500} height={100}  className="w-full h-52 object-cover"/>
      
     
<nav class="flex p-2" aria-label="Breadcrumb">
  <ol class="flex items-center font-bold text-md space-x-2 pl-3">
    <li>
      <Link href="/" class="text-stone-600 hover:text-stone-900  hover:underline">Home</Link>
    </li>
    <li>/</li>
    <li>
    <Link href="/Gallery" class="text-stone-600  hover:text-stone-900 hover:underline"> Gallery</Link>
    </li>
  </ol>
</nav>

</div>
    
    <div className="font-bold text-center p-3">Apartment Images </div>
         <div className="flex  ">
  
  <div className="lg:w-1/3  md:w-full pr-4 pl-4 mb-4 lg:mb-0">
    <Image
      src="/img/a1.jpeg" width='auto' height='auto'
      className="w-full shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <Image
      src="/img/a4.jpeg" width='auto' height='auto'
      className="w-full shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
     <Image
      src="/img/gal-11.jpeg" width='auto' height='auto'
      className="w-full shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div className="lg:w-1/3 pr-4 pl-4 mb-4 lg:mb-0">
  <Image
      src="/img/a10.jpeg" width='auto' height='auto'
      class="w-full shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    /> 
  <video
      src="/img/a7.mp4"width='auto' height='auto'
      className="w-full shadow-1-strong rounded mb-4"
      controls
    />
   
  </div>

  <div className="lg:w-1/3 pr-4 pl-4 mb-4 lg:mb-0">
    

    <Image
      src="/img/gal-12.jpeg" width='auto' height='auto'
      className="w-full shadow-1-strong rounded mb-4"
     
    />
    <Image
      src="/img/a2.jpeg" width='auto' height='auto'
      className="w-full shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />
    
    <Image
      src="/img/a5.jpeg" width='auto' height='auto'
      className="w-full shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
    
  </div>
</div> 

<div className="font-bold text-center p-3">Farmhouse&Landhouse Images</div>
         <div className="flex flex-wrap ">
  <div className="lg:w-1/3  md:w-full pr-4 pl-4 mb-4 lg:mb-0">
    <Image
      src="/img/f2.jpg" width='auto' height='auto'
      className="w-full shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <Image
      src="/img/f4.jpg" width='auto' height='auto'
      className="w-full shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div className="lg:w-1/3 pr-4 pl-4 mb-4 lg:mb-0">
    <Image
      src="/img/f4.jpg" width='auto' height='auto'
      className="w-full shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <Image
      src="/img/f1.jpg" width='auto' height='auto'
      class="w-full shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div className="lg:w-1/3 pr-4 pl-4 mb-4 lg:mb-0">
    <Image
      src="/img/f6.jpg"width='auto' height='auto'
      className="w-full shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <Image
      src="/img/f7.jpg" width='auto' height='auto'
      className="w-full shadow-1-strong rounded mb-4"
      />
     
  
   
  </div>



 

<div className="items-center p-2 mx-auto w-full container">
      
<Ga1   images={images}/>
</div>
    </div>
    </div> 
    </div>  
    
  )
}

export default gallery
