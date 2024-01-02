'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'; 

// import PropertyNav from '../components/PropertyNav'
import PropertyDescription from '../components/PropertyDescription'
import PropertyDetailDes from '../components/PropertyDetailDes'
// import PropertyFact from '../components/PropertyFact'

const PropertyDetail1 = () => {
 
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [number,setNumber]=useState("");
  const [message,setMessage]=useState("");
  const [error,setError]=useState("");
  const[success,setSuccess]=useState(false);
  
  
  const handleSubmit = async (e) =>{
      e.preventDefault();
      console.log("name",name);
      console.log("email",email);
      console.log("number",number);
      console.log("message",message);
  
  const res=await fetch("api/contact",{
      method:"POST",
      headers:{
          "Content-type":"application/json",
      },
      body:JSON.stringify({
          name,
          email,
          number,
          message,
  
      }),
  });
  
  
  
  const {msg,success}=await res.json();
  setError(msg);
  setSuccess(success);
  
  if(success){
      setName("");
      setEmail("");
      setNumber("");
      setMessage("");
  }}
  return (
    <div className="pt-20 p-10 container ">
          <Image src="/img/f1.jpg" alt="Farmhouse image" width={500} height={100}  className="w-full h-96 object-cover"/>

      <div className="border-2 flex flex-row">
      <div className="border-2 w-2/3">
      {/* <PropertyNav/> */}
      <PropertyDescription/>
      <PropertyDetailDes/>
      {/* <PropertyFact/> */}
      </div>
     
      <div className="border-2 w-1/3">
      <h1 className=' m-1 p-2 text-3xl border-l-4 border-red-600 pb-5 font-bold' >Drop Messege For Book</h1>
      <form  className="px-10" 
        onSubmit={handleSubmit}>
          <div className="w-full flex gap-10 my-4 ">
          <div  className="w-full flex flex-col my-4">
            <label  className="font-bold text-gray-800" htmlfor="username">Name </label>
          <input  
        
          className=" p-2" 
          type="text" name="name" id="name"
          placeholder="Enter your name"
            
             value={name}
             onChange={(e) =>setName(e.target.value)}
             required
             autoComplete="off"/>
  
           </div>
        
          </div>
          <div  className="w-full flex flex-col my-4">
          
  
          <label  className="font-bold text-gray-800" htmlfor="ename">Email </label>
          <input  
          className=" p-2" 
          type="text" name="email" id="email"
                           placeholder="Enter your email"
                        value={email}
                         onChange={(e) =>setEmail(e.target.value)}
                           required
                           autoComplete="off"/>
          </div>
          <div>
          <label className="font-bold" htmlFor="message">Message</label>
          <textarea
          name="message" id="message" rows={3}
          placeholder="Enter your Message"
          value={message}
          onChange={(e) =>setMessage(e.target.value)}
              required
               autoComplete="off"
  
          className="w-full p-4  border border-gray-100"/>
          </div>

          
          <button
         
      className="bg-slate-100 hover:bg-slate-700 text-black font-bold py-2 px-4  mt-2  mb-2 rounded"
    
    >
     Send Message
    </button>

        </form>
         </div>
    </div>
    </div>
  );
};

export default PropertyDetail1;
