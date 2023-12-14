
       
   // pages/index.js
import React, { useState, useEffect } from 'react';

const Counter = () => {
 
const [counter1, setCounter] = useState(0);

useEffect(() => {
  const intervalId = setInterval(() => {
    setCounter(prevCounter => {
      if (prevCounter === 197) {
        clearInterval(intervalId);
        return prevCounter; // Stop updating the counter when it reaches 10
      }
      return prevCounter + 1; // Increment the counter for values less than 10
    });
  }, 10);

  return () => {
    clearInterval(intervalId); // Cleanup the interval on component unmount
  };
}, []);
  
        
        
  return (
    <div className="p-2">
      <div className="  items-center text-center h-64 rounded-xl bg-slate-100 ">
       <p className="text-3xl font-bold pt-4 ">Achievement's</p>

     <p  className="text-xl mt-2 ">Proven Success - Number don't lie</p>
      <div className="flex justify-around items-center ">
       
      <div className=" p-8 rounded-lg hover:text-orange-500">
      
        <p className="font-bold text-4xl hover:text-orange-500"> ${counter1}M+</p>
        <h1 className="text-2xl font-bold hover:text-orange-500">Properties Sold</h1>
      </div>
      <div className=" p-8 rounded-lg">
      <p className="font-bold text-4xl hover:text-orange-500"> {counter1}%</p>
        <h1 className="text-2xl font-bold hover:text-orange-500">ToSoldRatio</h1>  
      </div>
      <div className=" p-8 rounded-lg">
      <p className="font-bold text-4xl hover:text-orange-500"> {counter1}%</p>
        <h1 className="text-2xl font-bold hover:text-orange-500">HappyClient</h1>
      </div>
    
    </div>
     
    </div>
    
    </div>
  );
};

export default Counter;

 
