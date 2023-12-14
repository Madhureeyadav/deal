"use client";
import React, { useState } from "react";



const Category=()=> {
    const items = [
        { id: 1, label: "Buying - 3920" },
        { id: 2, label: "Renting - 3610" },
        { id: 3, label: "Selling - 2912" },
        
        // Add more items as needed
      ];
    const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className=" py-4 border-b m-2">
    {items.map((item) => (
      <div key={item.id} className="flex justify-between  text-orange-700 font-bold  mb-2">
        <input
          type="checkbox"
          id={`item-${item.id}`}
          className="ml-4 "
          checked={checkedItems[item.id] || false}
          onChange={() => handleCheckboxChange(item.id)}
        />
        <label htmlFor={`item-${item.id}`}>{item.label}</label>
      </div>
    ))}
  </div>
  );
}



export default Category;