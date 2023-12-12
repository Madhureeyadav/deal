/* eslint-disable @next/next/no-img-element */

'use client';

import React, { useState } from 'react';
// import CustomButton from '../components/CustomButton';
import Map from '../components/Map';
import Image from 'next/image';

// const initValues = { name: '', email: '', message: '' };
// const initState = { values: initValues };

const Contact1 = () => {

const [name,setName]=useState('');
const [email,setEmail] = useState('');
const [subject,setSubject]=useState('');
const [message,setMessage]=useState('');
console.log(email);
console.log(name);
console.log(subject);
console.log(message);
// 


const handleSubmit = (e) =>{
  e.preventDeafault();

console.log("Full Name",name);
console.log("email",email);
console.log("subject",subject);
console.log("message",message);

};






//   const [state, setState] = useState(initState);
//   const [touched, setTouched] = useState({});
//   const { values, isLoading } = state;

//   const onBlur = ({ target }) =>
//     setTouched((prev) => ({ ...prev, [target.name]: true }));

//   const handleChange = ({ target }) => {
//     setState((prev) => ({
//       ...prev,
//       values: {
//         ...prev.values,
//         [target.name]: target.value,
//       },
//     }));
//   };
// //   const sendEmail = async() => {
//     let dataSend = {
//       name:name,
//         email: email,
//         subject: subject,
//         message: message,
//     };
//     const res = await fetch('${baseUrl}/email/sendmail', {
//             method: "POST",
//             body: JSON.stringify(dataSend),
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//         })
//         //Handling errors
//         .then((res) => {
//             console.log(res);
//             if (res.status > 199 && res.status < 300) {
//                 alert("Send Successfully ");
//             }
//         });

// };

  //
  //  const onSubmit = async () => {
  //   setState((prev) => ({
  //     ...prev,
  //     isLoading: true,
  //   }));
    // You can add your form submission logic here
    // For example, make an API call
    // Reset loading state when the operation is complete
    // setState((prev) => ({
    //   ...prev,
    //   isLoading: false,
    // }));
  

  return (
    <div className="">
      <div className="flex    ">
        <Image
          src="/img/f2.jpg"
          width={500}
          height={500}
          className="w-full h-64 opacity-75 object-cover mt-20"
        />
        <div className=" cont text-2xl   ">Contact Us </div>
      </div>
      <Map />
      <div className="w-full border-2 h-96 flex   ">
        <div className="w-[30%] border-2 flex flex-col">
          <div className="border-2 h-72 text-center bg-slate-600 text-white m-10">
            <p className="text-2xl font-bold p-4">Location Detail</p>
            <p className="text-xl font-bold">Addresss </p>
            <p className="text-slate-400">BSI Tower h-15</p>
            <p className="text-xl font-bold">Phone number</p>
            <p className="text-slate-400">0123456789</p>
            <p className="text-xl font-bold">Email Address</p>
            <p className="text-slate-400">info@gmail.com</p>
          </div>
        </div>
        <div className="w-[70%] border-2 flex flex-col">
          <form  onSubmit={handleSubmit} className="px-10">
            <div className="w-full flex gap-10 my-4 ">
              <div
                
                className="w-full flex flex-col my-4"
              >
                <label className="font-bold text-gray-800" htmlFor="name">
                  Name
                </label>
                <input
                  className="bg-slate-200"
                  type="text"
                  required
                  minLength={5}
                  maxLength={20}
                  autoComplete="off"
                  value={name}
                  onChange={(e)=>{
                    setName(e.target.value);
                  }}
                
                  id="name"
                />
              </div>
            
              <div
               
                className="w-full flex flex-col my-4"
              >
                <label className="font-bold text-gray-800" htmlFor="name">
                  Subject
                </label>
                <input
                  className="bg-slate-200"
                  type="text"
                  required
                  minLength={5}
                  maxLength={20}
                  autoComplete="off"
                  value={subject}
                  onChange={(e)=>{
                    setSubject(e.target.value);
                  }}
                
                  id="subject"
                />
              </div>
              <div
              
                className="w-full flex flex-col my-4"
              >
                <label className="font-bold text-gray-800" htmlFor="name">
                  Email{' '}
                </label>
                <input
                  className="bg-slate-200"
                  type="email"
                  required
                  minLength={10}
                  maxLength={30}
                  autoComplete="off"
                  value={email}
                  onChange={(e)=>{
                    setEmail(e.target.value);
                  }}
               
                  id="email"
                />
              </div>
            </div>
            <div >
              <label className="font-bold" htmlFor="message">
                Message
              </label>
              <textarea
                rows={2}
                required
                minLength={5}
                maxLength={100}
                value={message}
                onChange={(e)=>{
                  setMessage(e.target.value);
                }}
              
                name="message"
                className="w-full p-4 bg-gray-200 border border-gray-100"
              />
            </div>
            <button
              // variant="outline"
              // colorScheme="blue"
              // isLoading={isLoading}
              // disabled={!values.name || !values.email ||!values.subject || !values.message}
              // onClick={onSubmit}
              type='submit'
              
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  mt-2 rounded"
            >
              Send Message
            </button>
            {/* <div className="container mx-auto my-8 text-center">
             
            {/* <CustomButton /> 68
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact1;
