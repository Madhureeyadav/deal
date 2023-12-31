import React from 'react'

const ApartmentImage = ({ content }) => {
    return (
      <div className="flex p-8 border border-gray-200 rounded shadow-lg">
        {content.map((item, index) => (
          <div key={index} className="flex-1 p-4">
            <div className="flex-none w-24 h-24 rounded-full overflow-hidden mb-4 ">
              <img src={item.imageUrl} alt="Content" className="w-full h-full object-cover " />
            </div>
            <h1 className="text-2xl font-bold text-black mb-2">{item.heading}</h1>
            <p className="text-base text-black mb-2">{item.paragraph}</p>
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 ">
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    );
  };

export default ApartmentImage


// "use client";

// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import ImageButton from '../../components/ImageButton'
// import CountRow from '../../components/CountRow'
// const Apartment = () => {

//   const contentData1 = [
//     {
//       // imageUrl: '/img/icon1.png',
//       // heading: 'Column 1 Heading',
//       // paragraph: 'Content for column 1 goes here.',
//       // buttonText: 'Button 1',
//       id: 1,
//     image: "img/product-3/3.jpg",
//     title: "New Apartment Nice View",
//     location: "Belmont Gardens, Chicago",
//     bedrooms: 3,
//     bathrooms: 2,
//     area: 3450,
//     price: 34900,
  
//     },
//     {
//       imageUrl: '/img/icon1.png',
//       heading: 'Column 2 Heading',
//       paragraph: 'Content for column 2 goes here.',
//       buttonText: 'Button 2',
//     },
//     {
//       imageUrl: '/img/icon1.png',
//       heading: 'Column 3 Heading',
//       paragraph: 'Content for column 3 goes here.',
//       buttonText: 'Button 3',
//     },
//   ];


//   return (
//     <>
//     <div className=" border-2 border-black ">
//      <ImageButton/>
    {/* <div className="border-2  w-full p-6  ">
        <div className="border-2   w-[90%]  h-56">
            <Image
      src="/img/Living room.jpeg" width={500} height={500}
      className="w-full h-full "
      alt="Living room" 
    /> </div></div>
  <div className="border-2  w-full p-4 ">
        <div className="border-2   w-[80%]  h-56">
            <Image
      src="/img/Kitchen.jpeg" width={500} height={500}
      className="w-full h-full "
      alt="kitchen" 
    /> </div></div>
    <div className="border-2  w-full p-6">
        <div className="border-2   w-[90%]  h-56">
            <Image
      src="/img/badroom.jpeg" width={500} height={500}
      className="w-full h-full "
      alt="Bad room" 
    /> </div></div>
    <div className="border-2  w-full p-4 ">
        <div className="border-2   w-[80%]  h-56">
            <Image
      src="/img/bethroom.jpg" width={500} height={500}
      className="w-full h-full "
      alt="bath room" 
    /> </div></div>
    <div className="border-2  w-full  bg-purple-200" > 
      <div className=" border-2 font-bold  py-5 sm:px-10 lg:px-56">
        <div className="text-orange-800 text-center border-2 p-1">Here is what we can do for you we are experts at several thing and agood at edgerly following daily trends</div> </div>
 <div className="border-2  w-full  p-2 gap-2 flex">
        <div className="border-2 flex flex-col w-full text-center p-3 rounded-xl ">
          <p className="font-bold text-2xl pb-2  ">Home interior Design</p>
          <p>High Creation Interior understandands interior designing is not about arranging thing in the pattern but about utilizing the given space effectively to ensure it both looks and feels good. So conect with us , and let's discuss your requirements.</p>
          </div>
          <div className="border-2 flex flex-col w-full text-center p-3 rounded-xl">
          <p className="font-bold text-2xl pb-2  ">Living Room  interior Design</p>
          <p>High Creation Interior understandands interior designing is not about arranging thing in the pattern but about utilizing the given space effectively to ensure it both looks and feels good. So conect with us , and let's discuss your requirements.</p>
          </div>
          <div className="border-2 flex flex-col w-full text-center p-3 rounded-xl">
          <p className="font-bold text-2xl pb-2  ">Modular kitchen interior Design</p>
          <p>High Creation Interior understandands interior designing is not about arranging thing in the pattern but about utilizing the given space effectively to ensure it both looks and feels good. So conect with us , and let's discuss your requirements.</p>
          </div>
          <div className="border-2 flex flex-col w-full text-center p-3 rounded-xl">
          <p className="font-bold text-2xl pb-2  ">Corporate interior Design</p>
          <p>High Creation Interior understandands interior designing is not about arranging thing in the pattern but about utilizing the given space effectively to ensure it both looks and feels good. So conect with us , and let's discuss your requirements.</p>
          </div>
          <div className="border-2 flex flex-col w-full text-center p-3 rounded-xl">
          <p className="font-bold text-2xl pb-2  ">Other Architecture Design</p>
          <p>High Creation Interior understandands interior designing is not about arranging thing in the pattern but about utilizing the given space effectively to ensure it both looks and feels good. So conect with us , and let's discuss your requirements.</p>
          </div>
          
        </div>
        </div> */}

        
    {/* </div>
     <div className="mt-64 ">
     <div className="text-center fond-bold text-2xl">Featured Listing</div>
     <div className="container p-10 border-2 mt-8">
      <CountRow content={contentData1} />
    </div>
   </div>
   </>
  )
}

export default Apartment */}
