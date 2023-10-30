import React from 'react'

const FarmhouseImage =({ content }) => {
    return (
      <div className="flex p-8 border border-gray-200 rounded shadow-lg">
        {content.map((item, index) => (
          <div key={index} className="flex-1 p-4">
            <div className="flex-none w-24 h-24 rounded-full overflow-hidden mb-4 ">
              <img src={item.imageUrl} alt="Content" className="w-full h-full object-cover " />
            </div>
            <h1 className="text-2xl font-bold text-black mb-2">{item.heading}</h1>
            <p className="text-base text-black mb-2">{item.paragraph}</p>
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 ">
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    );
  };

export default FarmhouseImage
