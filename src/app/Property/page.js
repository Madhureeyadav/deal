import React from 'react'
import Image from 'next/image'
import ApartmentFrame from '../components/ApartmentFrame'
import ImageApartment from '../components/ImageApartment'
import ImageProperty from '../components/ImageProperty'
import BookingForm from '../components/BookingForm'
import PropertyType from '../components/PropertyType'
import Agent from '../components/Agent'

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
  const farmhouseData = [
    {
      id: 1,
      imageUrl: '/img/plot4.jpg',
      title: "For Sell",
      description: "New Apartment Nice View",
      location: "Belmont Gardens, Chicago",
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 3450,
      price: "$34,900/Month",
    },
    {
      id: 1,
      imageUrl: '/img/plot3.jpeg',
      title: "For Sell",
      description: "New Apartment Nice View",
      location: "Belmont Gardens, Chicago",
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 3450,
      price: "$34,900/Month",
    },
    {
      id: 1,
      imageUrl: '/img/f7.jpg',
      title: "For Sell",
      description: "New Apartment Nice View",
      location: "Belmont Gardens, Chicago",
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 3450,
      price: "$34,900/Month",
    },
    {
      id: 1,
      imageUrl: '/img/f5.jpg',
      title: "For Sell",
      description: "New Apartment Nice View",
      location: "Belmont Gardens, Chicago",
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 3450,
      price: "$34,900/Month",
    },
   
  ];

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
      imageUrl: '/img/2bh.jpg',
      buttonText: 'click here',
      description: 'Description for Image 1',
    },
    {
      imageUrl: '/img/2bh.jpg',
      buttonText: 'click here',
      description: 'Description for Image 1',
    },
   
  ];
  return (
    <div className="pt-20">
  <div className="flex xl:flex-row flex-col gap-5  max-w-[1440px] mx-auto">
     <div className="flex w-full">
  {/* First Column (Image) */}
  <div className=" w-1/2 p-4">
    <Image src="/img/best.jpg" width={1000} height={500} className="w-full " />
  </div>
  
  {/* Second Column (Booking Form) */}
  <div className=" w-1/2  p-4">
    <BookingForm />
  </div>
</div>
</div>
      <div className='border-2 w-full text-center flex  '>
      <div className=' font-extrabold p-3 w-2/3 flex flex-col '>
        Welcome to our  page
    
      {/* <div  className='border-2 inline-block m-4'>
    
      <p className='p-3 justify-center h-56 overflow-hidden '>
      your dreams find a home. Immerse yourself in a world of endless possibilities as we offer unparalleled services tailored to meet your needs. Our commitment to excellence ensures your experience is nothing short of extraordinary. Explore, dream, and embark on a journey that exceeds your expectations. Your satisfaction is our priority, and your trust inspires us to deliver exceptional service. Join our community of satisfied customers and let us redefine your expectations. 
         </p>
         </div> */}
    
     
  
    <div className="flex flex-wrap ">
  {farmhouseData.map((property) => (
    <div key={property.id} className="w-full sm:w-1/2  p-4">
      <div className="bg-white rounded shadow-md">
        <img
          src={property.imageUrl}
          alt={`Farmhouse ${property.id}`}
          className="w-full h-40 object-cover mb-4 rounded-t"
        />
        <div className="p-4">
          <h1 className="text-2xl text-orange-600 font-bold mb-2">{property.title}</h1>
          <p className="text-gray-600">{property.description}</p>
          <p className="text-gray-800">{property.location}</p>
          <p>{property.bedrooms} Bedrooms {property.bathrooms} Bathrooms {property.squareFeet} square Ft</p>
          <p className="text-lg font-bold text-orange-400 pt-2 mt-2 border-t">{property.price}</p>
        </div>
      </div>
    </div>
  ))}
</div>
</div>

        <div className="w-1/3 border-2 flex flex-col ">
        <div className="flex flex-col text-left ">
      <h1 className="text-xl font-bold p-3 pl-7"> Property Type</h1> 
      <PropertyType />
      
    </div> 
       
        <div className="flex flex-col text-left ">
      <h1 className="text-xl font-bold p-4 pl-7">Categories </h1> 
      <PropertyType />
    </div> 
        
        <div className="flex flex-col text-left ">
      <h1 className="text-xl  font-bold p-2 pl-7"> Prices </h1> 
      <PropertyType />
    </div> 

    </div> 
        </div>

<div className="container mx-auto mt-8">
      <h1 className="  text-center font-bold mb-4">Image Gallery</h1>
      <ImageProperty />
    </div>


<Agent/>
      
</div>
  )
}

export default property
