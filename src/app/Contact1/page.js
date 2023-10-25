

"use Client";


import React from 'react';
import CustomButton from '../components/CustomButton';




const Contact1 = () => {

  const handleButtonClick = () => {
    // Handle button click logic here
    console.log('Button clicked!');
  };
 
  return (
   
       <div>
      <div className="text-center font-bold text-2xl m-5 uppercase">contact </div>
      <div className="w-full border-2 h-96 flex  pt-10 ">
      <div className="w-[30%] border-2 flex flex-col"><div className="border-2 h-72 text-center bg-slate-600 text-white m-10"><p  className="text-2xl font-bold p-4">Location Detail</p ><p className="text-xl font-bold">Addresss </p> <p className="text-slate-400">BSI Tower h-15</p>
      <p className="text-xl font-bold">Phone number</p ><p className="text-slate-400">0123456789</p><p className="text-xl font-bold">Email Address</p><p className="text-slate-400">info@gmail.com</p></div></div>
      <div className="w-[70%] border-2 flex flex-col">
        <form   className="px-10">
          <div className="w-full flex gap-10 my-4 ">
          <div  className="w-full flex flex-col my-4">
            <label  className="font-bold text-gray-800" htmlfor="name">Name </label>
          <input 
        
          className="bg-slate-200" 
          type="text"
          required
          minLength={5}
          maxLength={20}
          autoComplete="off"
           id="name"/>
           </div>
         <div  className="w-full flex flex-col my-4">
          <label  className="font-bold text-gray-800" htmlfor="name">Email </label>
          <input  
          className="bg-slate-200" 
          type="email" 
          required
          minLength={10}
          maxLength={20}
          autoComplete="off"
          id="email"/>
          </div>
          </div>
          <div>
          <label className="font-bold" htmlFor="message">Message</label>
          <textarea
          rows={2}
          required
          minLength={5}
          maxLength={100}
          name="message"
          className="w-full p-4 bg-gray-200 border border-gray-100"/>
          </div>
          {/* <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  mt-2 rounded"
    
    >
     Send Message
    </button> */}
    <div className="container mx-auto my-8 text-center">
     
      <CustomButton />
    </div>
        </form>
      </div>
      </div>
      </div>
    
  )
}

export default Contact1
