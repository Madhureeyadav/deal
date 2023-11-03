
       
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
      <div className="flex justify-around items-center h-48 rounded-xl bg-slate-100 ">
      <div className=" p-8 rounded-lg hover:text-orange-500">
      
        <p className="font-bold text-4xl hover:text-orange-500"> {counter1}k+</p>
        <h1 className="text-2xl font-bold hover:text-orange-500">Column 1</h1>
      </div>
      <div className=" p-8 rounded-lg">
      <p className="font-bold text-4xl hover:text-orange-500"> {counter1}k+</p>
        <h1 className="text-xl font-bold hover:text-orange-500">Column 2</h1>  
      </div>
      <div className=" p-8 rounded-lg">
      <p className="font-bold text-4xl hover:text-orange-500"> {counter1}k+</p>
        <h1 className="text-2l font-bold hover:text-orange-500">Column 3</h1>
      </div>
    
    </div>
    
    </div>
  );
};

export default Counter;

 
