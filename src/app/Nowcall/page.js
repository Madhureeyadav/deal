// pages/contact.js
'use client'
import Image from'next/image'
import React, { useState } from 'react';
import { MdMarkEmailUnread } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    categories: '',
    price: '',
    propertyType: '',
    number: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [error,setError]=useState("");
  const[success,setSuccess]=useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

   const res=await fetch("api/contactNow",{
    method:'POST',
    headers:{
      "Content-type":"application/json",
    },
    body:JSON.stringify({
   formData
    })
   })
    const {msg,success}=await res.json();
    setError(msg);
   setSuccess(success);
 if(success){
      // setName("");
      // setEmail("");
      // setCategories(" ");
      // setPrice('');
      // setPropertyTYpe('');
      // setNumber('');
      setFormData('')
 }

  };

  return (
    <div>
    <div className="max-w-2xl mx-auto  p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mt-20  text-center mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
       
        <div>
          <label htmlFor="categories" className="block text-sm font-medium text-gray-700">
            Property Categories:
          </label>
          <input
            type="text"
            id="categories"
            name="categories"
            value={formData.categories}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price:
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">
            Property Type:
          </label>
          <input
            type="text"
            id="propertyType"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="number" className="block text-sm font-medium text-gray-700">
            Number:
          </label>
          <input
            type="text"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 items-center text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
      </div>
      <div className="flex m-10 p-6 font-bold text-lg max-w-2xl mx-auto justify-around ">
        <div className=" flex   flex-col border-2 m-5 md:p-10 lg:p-20 bg-white rounded text-center shadow-md ">
      <div className="flex items-center justify-center p-2">
  {/* <Image src="/img/icon2.png" alt="Icon Image" width={100} height={100} /> */}
  <MdMarkEmailUnread size={30} />
</div>

      <h3 className="animated fadeIn">Email Address</h3>
      <div>
        <p>info@mail.com</p> 
        <p>support@wmail.com</p>
      </div>
      </div>
      <div className=" flex   flex-col  border-2 m-5 md:p-10 lg:p-20 bg-white rounded text-center shadow-md ">
      <div className="flex items-center p-2 justify-center">
  <Image src="/img/icon2.png" alt="Icon Image" width={100} height={100} />
</div>

      <h3 className="animated fadeIn">Number</h3>
      <div>
        <p>9187654321</p> 
        <p >9123456789</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Contact;
