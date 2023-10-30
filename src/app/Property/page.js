import React from 'react'
import Image from 'next/image'
import ApartmentFrame from '../components/ApartmentFrame'
import ImageApartment from '../components/ImageApartment'
import ImageProperty from '../components/ImageProperty'

const apartments = [
  { id: 1, name: 'Apartment A', description: 'Beautiful apartment with a view', price: 1000 , rating: 4 },
  { id: 2, name: 'Apartment B', description: 'Cozy apartment in the heart of the city', price: 800 ,rating: 4 },
  
  { id: 1, name: 'Apartment A', description: 'Beautiful apartment with a view', price: 1000 , rating: 4 },
  { id: 1, name: 'Apartment A', description: 'Beautiful apartment with a view', price: 1000 , rating: 4 },
  { id: 1, name: 'Apartment A', description: 'Beautiful apartment with a view', price: 1000 , rating: 4 },
  { id: 1, name: 'Apartment A', description: 'Beautiful apartment with a view', price: 1000 , rating: 4 },
  // Add more apartments as needed
];


const property = () => {

  const images = [
    {
      imageUrl: '/img/1bh.jpg',
      buttonText: 'click here',
      description: 'Description for Image 1',
    },
    {
      imageUrl: '/img/2bh.jpg',
      buttonText: 'click here',
      description: 'Description for Image 1',
    },
    {
      imageUrl: '/img/3bh.jpg',
      buttonText: 'click here',
      description: 'Description for Image 1',
    },
  ];
  return (
    <div className="">
      <div className="border-2  w-full h-full">
        <Image src="/img/pro.jpg " 
         width={500} height={100}
          className="w-full h-96">

          </Image>
      </div>
      <div className='border-2 w-full text-center '>
      <div className=' font-extrabold p-3'>
      Apartment
      </div>
      <div  className='border-2 inline-block m-2'>
      <p className='font-bold p-2'>Requiredment of customer</p>
      <p className='p-2 '>This given the apartment your sutitable of the 1BH ,2BH requirement according of the aprtment avaiable .</p>
      <p>there are provide the safe its recommaned the  hospital, college, playground ,school, </p>
      
      </div>
      <div className="border-2  w-full p-2   ">
       <div className="container mx-auto my-2 text-center ">
      
      <div className="flex justify-center">
        {images.map((image, index) => (
          <ImageApartment
           key={index}
            imageUrl={image.imageUrl}
             buttonText={image.buttonText}
             description={image.description}
              />
        ))}
      </div>
  
        </div>
        </div>
        
      </div> 

<div className="container mx-auto mt-8">
      <h1 className="  text-center font-bold mb-4">Image Gallery</h1>
      <ImageProperty />
    </div>



      <div className="w-full h-64 bg-gradient-to-r from-indigo-500 text-black">
        <div className="p-2  w-[40%] text-center">
          <p className="p-4 font-bold">Modern interior Design</p>
          <p>if you are looking out for a beutiful here that fits in you budget , yes you are at the right place , we will make your dream  home come</p>
        
        </div>
        <button className="border-2 rounded-full ml-20 mt-10 p-1 px-3 bg-gradient-to-r from-green-400 to-blue-500">Let's Connect</button>
      </div>
</div>
  )
}

export default property
