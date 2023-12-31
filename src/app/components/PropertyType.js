"use client";
import React, { useState } from "react";



const PropertyType=()=> {
    const items = [
        { id: 1, label: "House" },
        { id: 2, label: "Single family" },
        { id: 3, label: "Apartment" },
        { id: 4, label: "office villa" },
        { id: 5, label: "Luxart Home" },
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
      <div key={item.id} className="flex justify-between text-orange-700 font-bold mb-2">
        <input
          type="checkbox"
          id={`item-${item.id}`}
          className="ml-4"
          checked={checkedItems[item.id] || false}
          onChange={() => handleCheckboxChange(item.id)}
        />
        <label htmlFor={`item-${item.id}`}>{item.label}</label>
      </div>
    ))}
  </div>
  );
}



export default PropertyType;