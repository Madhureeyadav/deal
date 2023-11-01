import React from 'react'
import ApartmentImage from '../components/ApartmentImage'
const ImageButton = () => {
  const backgroundStyle={
    backgroundImage: 'url("/img/gal-1.jpeg")',
    backgroundSize: 'cover', // You can adjust this based on your needs (cover, contain, etc.)
    backgroundPosition: 'center',
  };
  const contentData = [
    {
      imageUrl: '/img/gal-1.jpeg',
      heading: 'Column 1 Heading',
      paragraph: 'Content for column 1 goes here.',
      buttonText: 'Button 1',
    },
    {
      imageUrl: '/img/gal-1.jpeg',
      heading: 'Column 2 Heading',
      paragraph: 'Content for column 2 goes here.',
      buttonText: 'Button 2',
    },
    {
      imageUrl: '/img/gal-1.jpeg',
      heading: 'Column 3 Heading',
      paragraph: 'Content for column 3 goes here.',
      buttonText: 'Button 3',
    },
    {
      imageUrl: '/img/gal-1.jpeg',
      heading: 'Column 3 Heading',
      paragraph: 'Content for column 3 goes here.',
      buttonText: 'Button 3',
    },
  ];
    
      return (
        <>
        <div className="relative flex flex-col items-center justify-center h-screen" style={backgroundStyle} >
          <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
          <div className="z-20 flex flex-col items-center text-white">
          <p className="p-3 font-bold">welcome to your family always staisfied you</p>
       <p className="p-3 font-bold">looking it </p>
            <button className="bg-purple-700 hover:bg-purple-900 text-purple-300 font-bold py-2 px-4 rounded-full mb-4">
          Now Booking
            </button>
            <div className="  justify-center  w-auto h-64 pt-48 ">
            
            
      <ApartmentImage content={contentData} />
    
   
            </div>
          </div>
          
        
        </div>

       
        
        </>
  )
}

export default ImageButton
