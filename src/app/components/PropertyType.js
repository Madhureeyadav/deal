"use client";
import React, { useState } from "react";



const PropertyType=()=> {
    const items = [
        { id: 1, label: "Item 1" },
        { id: 2, label: "Item 2" },
        { id: 3, label: "Item 3" },
        { id: 4, label: "Item 4" },
        { id: 5, label: "Item 5" },
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
    <div className=" py-4 border-b">
    {items.map((item) => (
      <div key={item.id} className="flex justify-around mb-2">
        <input
          type="checkbox"
          id={`item-${item.id}`}
          className="mr-2"
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