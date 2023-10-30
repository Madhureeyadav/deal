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
        {/* <div className="font-bold">Differnt type of apartment</div> */}
        {/* <div className="border-2 w-full flex flex-wrap p-2  sm:gap-2 md:gap-4 "> */}
     
{/* <div className=" border-2 container mx-auto text-center  ">
      
      
      <ImageApartment/>
    
        
         </div>
        <div className="border-2 rounded-xl  w-full"> <Image src="/img/gal-2.jpeg "  width={500} height={100} className="w-full h-full "></Image><div className=' absolute z-10
        '>1BH</div></div>
        <div className="border-2 rounded-xl w-full"> <Image src="/img/gal-2.jpeg "  width={500} height={100} className="w-full h-full "></Image><div className=' absolute z-10
        '>1BH</div></div> */}
        
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
    {/* </div> */}
        </div>
        </div>
        {/* <div className="border-2 h-48 w-full flex  gap-3 p-2">
        <div className="border-2 flex flex-col w-full">
          <Image src="/img/gal-2.jpeg "  
          width={500} 
          height={100} 
          alt="without faniture"
          className="w-full  h-full ">
            </Image>
            </div>
        <div className="border-2  flex flex-col w-full">
        <Image src="/img/gal-2.jpeg "  
          width={500} 
          height={100} 
          alt="living room faniture"
          className="w-full  h-full ">
            </Image>
        </div>
        <div className="border-2   flex flex-col w-full">
        <Image src="/img/gal-2.jpeg "  
          width={500} 
          height={100} 
          alt="single room fantiture"
          className="w-full  h-full ">
            </Image>
            </div> 
        <div className="border-2   flex flex-col w-full">
        <Image src="/img/gal-2.jpeg "  
          width={500} 
          height={100} 
          alt="full faniture"
          className="w-full  h-full ">
            </Image>
        </div>

        </div> */}
        {/* <div className="border-2 h-48 w-full flex gap-3 p-2">
  <div className="border-2 flex flex-col w-1/4">
    <Image
      src="/img/gal-2.jpeg"
      width={500}
      height={100}
      alt="without faniture"
      className="w-full h-full"
    />
  </div>
  <div className="border-2 flex flex-col w-1/4">
    <Image
      src="/img/gal-2.jpeg"
      width={500}
      height={100}
      alt="living room faniture"
      className="w-full h-full"
    />
  </div>
  <div className="border-2 flex flex-col w-1/4">
    <Image
      src="/img/gal-2.jpeg"
      width={500}
      height={100}
      alt="single room fantiture"
      className="w-full h-full"
    />
  </div>
  <div className="border-2 flex flex-col w-1/4">
    <Image
      src="/img/gal-2.jpeg"
      width={500}
      height={100}
      alt="full faniture"
      className="w-full h-full"
    />
  </div>
</div>


        <div >
        <div className="border-2  w-full  p-2 bg-slate-100 ">
      
        {/* <div className="border-2 flex flex-col w-full"> */}
        {/* <div className=" mx-auto    my-8">
      <h1 className=" font-bold  mb-8">Available Apartments</h1>
       <div className=" mx-auto  flex flex-wrap gap-10 my-8 justify-center">
      {apartments.map((apartment) => (
        <ApartmentFrame key={apartment.id} apartment={apartment} />
      ))}
     </div>
     </div>
        </div> */}
        {/* <div className="border-2  flex flex-col w-full">rate</div>
        <div className="border-2   flex flex-col w-full">rate</div>
        <div className="border-2  flex flex-col w-full">rate</div>
        <div className="border-2   flex flex-col w-full">rate</div> */}
       

      {/* </div>*/}
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

      {/* <div className=" w-full bg-gradient-to-r from-blue-500">
      <div className="p-4 font-bold text-center">Here What our satified Client ou service</div>
      <div className="flex w-full p-2 gap-10 md:flex md:flex-row  ">
        <div className="flex flex-col w-[50%] border-2 h-48 rounded-full  overflow-hidden md:flex ">
        
        <Image src="/img/realtor-1.jpeg" 
        width={100} 
        height={100} 
        className="w-full h-full "
        >
        </Image>
       
       
    </div>
     <div className="flex flex-col w-[50%] border-2 h-48 rounded-full bg-gradient-to-l from-blue-500 text-center md:flex  p-10 overflow-hidden ">
      Always have an attitude of gratitude.” “The sole reason we are in business is to make life less difficult for our clients.” “Always begin with 'So that I can better serve you, do you mind if I ask a few questions?'” “Imagine your customer is your best friend.</div>
       </div> </div> */}

    </div>
  )
}

export default property
