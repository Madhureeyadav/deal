'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'; 
import PropertyNav from '../components/PropertyNav'
import PropertyDescription from '../components/PropertyDescription'
import PropertyDetailDes from '../components/PropertyDetailDes'
import PropertyFact from '../components/PropertyFact'

const PropertyDetail1 = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const interval = 3000;
  let timer;

  useEffect(() => {
    timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, []);

  function changeSlide(n) {
    setCurrentImg(n);
  }

  function nextSlide() {
    setCurrentImg((prevImg) => (prevImg + 1) % 3);
  }

  return (
    <div className="pt-20">
      <div className="w-full h-102 flex items-center justify-center ">
        <Image src="/img/service-3.png" width={300} height={300} className={`slide ${currentImg === 0 ? 'active' : ''}`} />
        <Image src="/img/service-1.png" width={300} height={300} className={`slide ${currentImg === 1 ? 'active' : ''}`} />
        <Image src="/img/service-2.png" width={300} height={300} className={`slide ${currentImg === 2 ? 'active' : ''}`} />
      </div>
      <div className="text-center">
        <span
          className={`cursor-pointer h-4 w-4 m-1 bg-gray-400 rounded-full inline-block ${currentImg === 0 ? 'bg-gray-700' : ''}`}
          onClick={() => changeSlide(0)}
        ></span>
        <span
          className={`cursor-pointer h-4 w-4 m-1 bg-gray-400 rounded-full inline-block ${currentImg === 1 ? 'bg-gray-700' : ''}`}
          onClick={() => changeSlide(1)}
        ></span>
        <span
          className={`cursor-pointer h-4 w-4 m-1 bg-gray-400 rounded-full inline-block ${currentImg === 2 ? 'bg-gray-700' : ''}`}
          onClick={() => changeSlide(2)}
        ></span>
      </div>
      <style jsx>{`
        .slide {
          display: none;
        }
        .active {
          display: block;
        }
      `}</style>
      <PropertyNav/>
      <PropertyDescription/>
      <PropertyDetailDes/>
      <PropertyFact/>
    </div>
  );
};

export default PropertyDetail1;
