"use client"

// components/MyForm.js
import { useState } from 'react';

const  CustomButton= () => {
  const [state, setState] = useState({
    isLoading: false,
    // other state variables
  });

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    // Your other form submission logic can go here

    // Simulating a delay (replace with your actual logic)
    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }, 2000);
  };

  return (
    <div>
      {/* Your form elements go here */}
      <button
       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={onSubmit}
        disabled={state.isLoading}
      >
        {state.isLoading ? 'Submitting...' : 'Submit'}
      </button>
   </div>
  );
};


export default CustomButton;

