// import React from 'react'

// const FindPlot = () => {
    
//         return (
//           <div className="flex items-center border border-gray-300 rounded-xl p-5 m-7 sm:m-2">
//             <div className="justify-around px-20">
//             <li className="flex items-center">
//             <div className=" text-center md:mr-4">
//             <select className=" bg-gray-100 border  border-gray-300 rounded-xl p-5 text-gray-800 focus:outline-none focus:border-blue-500 transition duration-300">
//         <option className="text-gray-500">Default sorting</option>
//         <option className="text-gray-500">Sort by popularity</option>
//         <option className="text-gray-500">Sort by new arrivals</option>
//         <option className="text-gray-500">Sort by price: low to high</option>
//         <option className="text-gray-500">Sort by price: high to low</option>
//       </select>
      
//               <div className=" md:hidden" tabIndex="0">
//                 <span className="current">Default sorting</span>
//                 <ul className="list">
//                   <li data-value="Default sorting" className="option selected">Default sorting</li>
//                   <li data-value="Sort by popularity" className="option">Sort by popularity</li>
//                   <li data-value="Sort by new arrivals" className="option">Sort by new arrivals</li>
//                   <li data-value="Sort by price: low to high" className="option">Sort by price: low to high</li>
//                   <li data-value="Sort by price: high to low" className="option">Sort by price: high to low</li>
//                 </ul>
//               </div>
//             </div>
//           </li>
//          </div>

         
//           </div>
//         );
//       };
      
      
      

// export default FindPlot
import React, { useState } from 'react';

const FindPlot = () => {
  const [sortingOption, setSortingOption] = useState('default');

  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
    // You may want to perform additional actions based on the selected sorting option.
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-xl p-5 m-7 sm:m-2">
      <div className="justify-around px-20">
        <li className="flex items-center">
          <div className="text-center md:mr-4">
            <select
              value={sortingOption}
              onChange={handleSortingChange}
              className="bg-gray-100 border border-gray-300 rounded-xl p-5 text-gray-800 focus:outline-none focus:border-blue-500 transition duration-300"
            >
              <option value="default" className="text-gray-500">
                Default sorting
              </option>
              <option className="text-gray-500">Sort by price: low to high</option>
//         <option className="text-gray-500">Sort by price: high to low</option>
            </select>
            {/* ... (rest of your code) */}
          </div>
        </li>
      </div>
    </div>
  );
};

export default FindPlot;
