import React from 'react'
import Image from 'next/image'


const property = () => {
  return (
    <div className="">
      <div className="border-2  w-full h-full">
        <Image src="/img/gal-2.jpeg "  width={500} height={100} className="w-full h-96"></Image>
      </div>
      <div className='border-2 w-full text-center bg-slate-800'>
      <div className=' font-extrabold p-3'>
      Apartment
      </div>
      <div  className='border-2 inline-block m-2'>
      <p className=''>Requiredment of customer</p>
      <p className=' '>This given the apartment your sutitable of the 1BH ,2BH requirement according of the aprtment avaiable .</p>
      <p>there are provide the safe its recommaned the  hospital, college, playground ,school, </p>
      
      </div>
      <div className="border-2  w-full p-2 bg-yellow-100 ">Differnt type of apartment
<div className="border-2 w-full flex h-56 p-2 bg-purple-300 ">
        <div className="border-2 flex flex-col w-full">1BH</div>
        <div className="border-2  flex flex-col w-full">2BH</div>
        <div className="border-2   flex flex-col w-full">#Bh</div>
        </div>
        <div className="border-2 h-48 w-full flex p-2 bg-purple-900">
        <div className="border-2 flex flex-col w-full">family package</div>
        <div className="border-2  flex flex-col w-full">family</div>
        <div className="border-2   flex flex-col w-full">family</div> 
        <div className="border-2   flex flex-col w-full">family</div>

        </div>

        <div >
        <div className="border-2 h-32 w-full flex p-2 bg-slate-700 ">
        <div className="border-2 flex flex-col w-full">rate</div>
        <div className="border-2  flex flex-col w-full">rate</div>
        <div className="border-2   flex flex-col w-full">rate</div>
        <div className="border-2  flex flex-col w-full">rate</div>
        <div className="border-2   flex flex-col w-full">rate</div>
        </div>

      </div>
      </div>

      </div>



      <div className="w-full h-64 bg-gradient-to-r from-indigo-500 text-black">
        <div className="p-2  w-[40%] text-center">
          <p className="p-4 font-bold">Modern interior Design</p>
          <p>if you are looking out for a beutiful here that fits in you budget , yes you are at the right place , we will make your dream  home come</p>
        
        </div>
        <button className="border-2 rounded-full ml-20 mt-10 p-1 px-3 bg-gradient-to-r from-green-400 to-blue-500">Let's Connect</button>
      </div>

      <div className=" w-full bg-gradient-to-r from-blue-500">
      <div className="p-4 font-bold text-center">Here What our satified Client ou service</div>
      <div className="flex w-full p-2 gap-10  ">
        <div className="flex flex-col w-[50%] border-2 h-48 rounded-full  ">
      
    </div>
     <div className="flex flex-col w-[50%] border-2 h-48 rounded-full bg-gradient-to-l from-blue-500 text-center p-10">Always have an attitude of gratitude.” “The sole reason we are in business is to make life less difficult for our clients.” “Always begin with 'So that I can better serve you, do you mind if I ask a few questions?'” “Imagine your customer is your best friend.</div>
       </div> </div>

    </div>
  )
}

export default property
