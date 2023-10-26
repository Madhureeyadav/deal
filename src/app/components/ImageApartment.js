import React from 'react'

const ImageApartment   = ({ imageUrl, buttonText }) => {
    return (
        <div className="flex flex-col items-center mx-4 border-2">
        <img src={imageUrl} alt="Image" className="mb-2" style={{ width: '500px', height: '200px' }} />
        <button className="bg-purple-500 hover:bg-purple-700 text-purple-200 font-bold py-2 px-4 rounded-full">
          {buttonText}
        </button>
      </div>
    );
  };
 
export default ImageApartment
