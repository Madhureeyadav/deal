"use client";
import React, { useState } from "react";



const PriceRange=()=> {
    const items = [
        { id: 1, label: "Lower Budget   -   $5,000-$10,000" },
        { id: 2, label: "Medium1 Budget   -   $10,000-$30,000"  },
        { id: 3, label: "Medium1 Budget   -   $10,000-$30,000"  },
        { id: 4, label: "Medium1 Budget   -   $10,000-$30,000" },
        { id: 5, label: "High Budget   -   $40,000up"  },
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



export default PriceRange;