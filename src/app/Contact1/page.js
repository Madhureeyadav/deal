/* eslint-disable @next/next/no-img-element */


'use client'

import React from 'react';
// import CustomButton from '../components/CustomButton';
import Map from '../components/Map'
import Image from 'next/image'
import {useState} from 'react';
import Link from 'next/link'


const Contact1 = () => {
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
}
}
  return (
   
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
    <Link href="/Contact1" class="text-stone-600  hover:text-stone-900 hover:underline"> Contact</Link>
    </li>
  </ol>
</nav>

</div>
   
      <div className="w-full border-2 h-auto flex   ">
      <div className="w-[30%] border-2 flex flex-col"><div className="border-2 h-72 text-center bg-slate-600 text-white m-10"><p  className="text-2xl font-bold p-4">Location Detail</p ><p className="text-xl font-bold">Addresss </p> <p className="text-slate-400">BSI Tower h-15</p>
      <p className="text-xl font-bold">Phone number</p ><p className="text-slate-400">0123456789</p><p className="text-xl font-bold">Email Address</p><p className="text-slate-400">info@gmail.com</p></div></div>
      <div className="w-[70%] border-2 flex flex-col">
        <form  className="px-10" 
        onSubmit={handleSubmit}>
          <div className="w-full flex gap-10 my-4 ">
          <div  className="w-full flex flex-col my-4">
            <label  className="font-bold text-gray-800" htmlfor="username">Name </label>
          <input  
        
          className="bg-slate-200 p-2" 
          type="text" name="name" id="name"
          placeholder="Enter your name"
            
             value={name}
             onChange={(e) =>setName(e.target.value)}
             required
             autoComplete="off"/>
  
           </div>
         <div  className="w-full flex flex-col my-4">
          <label  className="font-bold text-gray-800" htmlfor="ename">Email </label>
          <input  
          className="bg-slate-200 p-2" 
          type="text" name="email" id="email"
                           placeholder="Enter your email"
                        value={email}
             onChange={(e) =>setEmail(e.target.value)}
                           required
                           autoComplete="off"/>
          </div>
          </div>
          <div  className="w-full flex flex-col my-4">
          <label  className="font-bold text-gray-800" htmlfor="name">Number </label>
          <input  
          className="bg-slate-200 p-2" 
          type="Number" name="number" id="number"
                           placeholder="Enter your phone"
                           value={number}
             onChange={(e) =>setNumber(e.target.value)}
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
  
          className="w-full p-4 bg-gray-200 border border-gray-100"/>
          </div>

          
          <button
         
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  mt-2  mb-2 rounded"
    
    >
     Send Message
    </button>

        </form>
      </div>
     
      </div>
      <Map/>
      </div>
    
  )
}

export default Contact1;
