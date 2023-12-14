
'use client'
 import React, { useState } from 'react';
 import { GrPrevious,GrNext } from "react-icons/gr";

const ImageProperty = () => {
  const imageNames = ['feild.jpeg', 'feild2.jpeg', 'feild3.jpeg', 'feild4.jpg', 'feild5.jpeg','feild.jpeg', 'feild2.jpeg', 'feild3.jpeg'];
  const [startIndex, setStartIndex] = useState(0);

  const nextImages = () => {
    setStartIndex((prevIndex) => (prevIndex +2) % imageNames.length);
  };

  const previousImages = () => {
    setStartIndex((prevIndex) => (prevIndex - 2+imageNames.length)%imageNames.length);
  };

  const visibleImages = imageNames.slice(startIndex, startIndex +2);

  return (
    <div className="flex items-center   justify-evenly">




      <button className="m-2" onClick={previousImages}>
      <GrPrevious size={20}/>
      </button>
      <div className="flex space-x-6 overflow-hidden">
        {visibleImages.map((imageName, index) => (
          <img
            key={index}
            src={`/img/${imageName}`}
            alt={`Image ${startIndex + index + 2}`}
            className="w-96 h-96  object-cover"
          />
        ))}
      </div>
      <button className="m-2" onClick={nextImages}>
      <GrNext size={20} />
      </button>
    </div>
  );
};

export default ImageProperty;
// // components/ImageSlider.js
// import React from 'react';
// import Slider from 'react-slick';
// import Image from 'next/image'

// const ImageProperty = ({ images1 }) => {
//   const settings = {
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 1000,
//     autoplaySpeed: 3000,
//     cssEase: 'linear',
//   };

//   return (
//     <Slider {...settings}>
//       {images1.map((image, index) => (
//         <div key={index} className="p-2">
//           <Image src={image} alt={`Slide ${index + 1}`} width={100} height={100} className="w-full h-auto rounded" />
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default ImageProperty;
