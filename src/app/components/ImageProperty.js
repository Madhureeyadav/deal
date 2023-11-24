
'use client'
//  import React, { useState } from 'react';

// const ImageProperty = () => {
//   const imageNames = ['feild.jpeg', 'feild2.jpeg', 'feild3.jpeg', 'feild4.jpg', 'feild5.jpeg','feild.jpeg', 'feild2.jpeg', 'feild3.jpeg'];
//   const [startIndex, setStartIndex] = useState(0);

//   const nextImages = () => {
//     setStartIndex((prevIndex) => (prevIndex +3) % imageNames.length);
//   };

//   const previousImages = () => {
//     setStartIndex((prevIndex) => (prevIndex - 3+ imageNames.length) % imageNames.length);
//   };

//   const visibleImages = imageNames.slice(startIndex, startIndex +3);

//   return (
//     <div className="flex items-center justify-around">
//       <button className="m-4" onClick={previousImages}>
//         Previous
//       </button>
//       <div className="flex space-x-4 overflow-hidden">
//         {visibleImages.map((imageName, index) => (
//           <img
//             key={index}
//             src={`/img/${imageName}`}
//             alt={`Image ${startIndex + index + 1}`}
//             className="w-48 h-48 object-cover"
//           />
//         ))}
//       </div>
//       <button className="m-4" onClick={nextImages}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default ImageProperty;
// components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image'

const ImageProperty = ({ images1 }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };

  return (
    <Slider {...settings}>
      {images1.map((image, index) => (
        <div key={index} className="p-4">
          <Image src={image} alt={`Slide ${index + 1}`} width={100} height={100} className="w-full h-auto rounded" />
        </div>
      ))}
    </Slider>
  );
};

export default ImageProperty;
