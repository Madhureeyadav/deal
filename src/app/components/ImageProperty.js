import React from 'react';

const ImageProperty = () => {
    const imageNames = [
      'a4.jpeg',
      'gal-5.jpeg',
      'house-5.jpeg',
      'f4.jpg',
      'f1.jpg',
    ];
  
   
  
   
        return (
          <div className="flex flex-wrap justify-center">
            {imageNames.map((imageName, index) => (
              <img
                key={index}
                src={`/img/${imageName}`}
                alt={`Image ${index + 1}`}
                className="m-4 w-52 h-56 object-cover"
              />
            ))}
          </div>
        );
      };
      
  export default ImageProperty;
  


