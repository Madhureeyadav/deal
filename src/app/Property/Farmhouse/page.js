import React from 'react'
import Image from 'next/image'
 import FarmhouseImage from '../../components/FarmhouseImage'

const Farmhouse = () => {
  const contentData2 = [
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
  ];
  return (
    <div>
    <div className="flex flex-col items-center justify-center ">
    <img
      src="/img/a1.jpeg"
      alt="Description of the image"
      className="w-full h-64 object-cover relative "
    />
   
    <h1 className="text-xl text-white font-bold  absolute ">Your Farmhouse</h1>
    
    <div className="  justify-center  w-auto h-64 pt-48 ">
            
            
            <FarmhouseImage content={contentData2} />
          
         
                  </div>
  </div>
  </div>





//     <div className=" border-2 border-black">
//       <ImageButton/>
//     <div className="border-2  w-full p-4 ">
//         <div className="border-2   w-[80%]  h-56">
//             <Image
//       src="/img/farmhouse.jpg" width={500} height={500}
//       className="w-full h-full "
//       alt="Farmhouse" 
//     /> </div></div>
//   <div className="border-2  w-full p-6">
//         <div className="border-2   w-[90%]  h-56">
//             <Image
//       src="/img/Swimming.jpg" width={500} height={500}
//       className="w-full h-full "
//       alt="Swimming pool" 
//     /> </div></div>
//     <div className="border-2  w-full p-4 ">
//         <div className="border-2   w-[80%]  h-56">
//             <Image
//       src="/img/parking.jpeg" width={500} height={500}
//       className="w-full h-full "
//       alt="Parking" 
//     /> </div></div>
//     <div className="border-2  w-full p-6 ">
//         <div className="border-2   w-[90%]  h-56">
//             <Image
//       src="/img/road.jpg" width={500} height={500}
//       className="w-full h-full "
//       alt="Widerange road" 
//     /> </div></div>
//     <div className="border-2  w-full  bg-purple-200" > 
//       <div className=" border-2 font-bold  py-5 sm:px-10 lg:px-56">
//         <div className="text-orange-800 text-center border-2 p-1">Here is what we can do for you we are experts at several thing and agood at edgerly following daily trends</div> </div>
//  <div className="border-2  w-full  p-2 gap-2 flex">
//         <div className="border-2 flex flex-col w-full text-center p-3 rounded-xl ">
//           <p className="font-bold text-2xl pb-2  ">Farmhouse land </p>
//           <p>High Creation Interior understandands interior designing is not about arranging thing in the pattern but about utilizing the given space effectively to ensure it both looks and feels good. So conect with us , and let's discuss your requirements.</p>
//           </div>
//           <div className="border-2 flex flex-col w-full text-center p-3 rounded-xl">
//           <p className="font-bold text-2xl pb-2  ">Swimming Pool </p>
//           <p>High Creation Interior understandands interior designing is not about arranging thing in the pattern but about utilizing the given space effectively to ensure it both looks and feels good. So conect with us , and let's discuss your requirements.</p>
//           </div>
//           <div className="border-2 flex flex-col w-full text-center p-3 rounded-xl">
//           <p className="font-bold text-2xl pb-2  ">Parking</p>
//           <p>High Creation Interior understandands interior designing is not about arranging thing in the pattern but about utilizing the given space effectively to ensure it both looks and feels good. So conect with us , and let's discuss your requirements.</p>
//           </div>
//           <div className="border-2 flex flex-col w-full text-center p-3 rounded-xl">
//           <p className="font-bold text-2xl pb-2  ">Widerange road</p>
//           <p>High Creation Interior understandands interior designing is not about arranging thing in the pattern but about utilizing the given space effectively to ensure it both looks and feels good. So conect with us , and let's discuss your requirements.</p>
//           </div>
         
          
//         </div>
//         </div>

    
//     </div>
  )
}

export default Farmhouse
