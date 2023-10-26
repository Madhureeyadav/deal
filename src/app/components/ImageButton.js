import React from 'react'

const ImageButton = () => {
  
    const backgroundStyle = {
        backgroundImage: `url('/img/font.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };
    
      return (
        <>
        <div className="relative flex flex-col items-center justify-center h-screen" style={backgroundStyle} >
          <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
          <div className="z-20 flex flex-col items-center text-white">
          <p className="p-3 font-bold">welcome to your family always staisfied you</p>
       <p className="p-3 font-bold">looking it </p>
            <button className="bg-purple-700 hover:bg-purple-900 text-purple-300 font-bold py-2 px-4 rounded-full mb-4">
          Now Booking
            </button>
           
          </div>
        </div>
        
        </>
  )
}

export default ImageButton
