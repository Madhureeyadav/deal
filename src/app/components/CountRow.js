import React from 'react'

const CountRow =({ content }) => {
    return (
      <div className="flex border-2 border-gray-300 rounded gap-5 shadow-lg ">
        {content.map((item, index) => (
          <div key={index} className="flex-1 p-4  text-center border-2 ">
            <div className="flex-none w-56 border-gray-200 h-24 border-2 mb-4">
  <img src={item.imageUrl} alt="Content" className="w-full h-full  object-contain" />
</div>

            <h1 className="text-2xl font-bold mb-2">{item.heading}</h1>
            <p className="text-base mb-2">{item.paragraph}</p>
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    );
  };

export default CountRow
