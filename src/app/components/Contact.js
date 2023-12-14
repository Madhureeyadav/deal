import {AiFillFacebook,AiFillLinkedin,AiFillInstagram,AiFillTwitterCircle} from "react-icons/ai"
import Link from "next/link"
import { IoCall } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import Image from "next/image"

const Contact = () => {



  
<<<<<<< HEAD
  return (
  <><footer className="text-black" style={{
    backgroundImage: "url(/img/gal-4.jpeg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
   
   
  }}>  
    <div className="  text-white mx-2 p-4  bg-black border border-black opacity-60  hover:opacity-75" >
   <div className="flex ">
      <div className="flex flex-col w-full h-80 pl-2 flex-wrap ">
        <div className="mx-auto p-3">
        <h1 className="font-bold text-2xl mb-2">Company About </h1>
        <p>"GNK" is a specific company, I recommend checking the latest sources for up-to-date information. </p>
        <div className="mt-2">
        <ul className="flex items-start justify-start  space-x-5">
=======
  return (<>
    <footer className="bg-gray-200 text-black py-20 m-2">
      <div className="container mx-auto flex justify-center items-center ">
       
        <Image src="/img/logo.png" alt="Logo" className="w-14 h-8 mr-10 " width={200} height={100} />
     
        <Link href="/"
        className="mr-4 hover:text-gray-400">Home
        </Link>
        <Link href="/Property"
           className="mr-4 hover:text-gray-400">Property 
        </Link>
        <Link href="/Gallery"
           className="mr-4 hover:text-gray-400"> Gallery
        </Link>
        <Link href="/Contact1"
           className="hover:text-gray-400">Contact
        </Link>
        </div>
        <div className="justify-center mx-auto p-3 flex space-x-2">
       
       <li className="pl-5"><Link href={"/"}><AiFillFacebook size={30}/></Link> </li>
      <li className="pl-5"><Link href={"/"}><AiFillLinkedin size={30}/></Link></li>
      <li className="pl-5"><Link href={"/"}><AiFillInstagram size={30}/></Link> </li>
      <li className="pl-5"><Link href={"/"}><AiFillTwitterCircle size={30}/></Link></li>

       
      </div>
   
 
 <div className="border border-gray-500 my-4"></div>
 <div className="justify-center flex space-x-2">
          <Image src="/img/icon1.png" alt="Icon 1" className="w-10 h-7" width={100} height={100} />
          <Image src="/img/icon2.png" alt="Icon 2" className="w-10 h-7" width={100} height={100}/>
          <Image src="/img/icon3.png" alt="Icon 3" className="w-10 h-7" width={100} height={100}/>
          <Image src="/img/icon2.png" alt="Icon 2" className="w-10 h-7" width={100} height={100}/>
          <Image src="/img/icon3.png" alt="Icon 3" className="w-10 h-7" width={100} height={100}/>
        </div>
        <div className="text-center text-black font-semibold py-4 ">
  <span className="text-2xl">@ Property-Dealing-2023</span>, Made By
  <span className="text-yellow-500"> GNK Solution</span>
</div>



 </footer>
 <div className="text-gray-700 font-semibold py-4 m-2 bg-slate-100 rounded-lg md:flex md:items-center md:justify-between">
  <div className="flex flex-col w-full md:w-auto text-center md:text-left">
    <span className="text-lg">@copy. All rights reserved</span>
  </div>

  <div className="flex flex-col w-full md:w-auto mt-4 md:mt-0">
    <ul className="flex items-center justify-center md:justify-end space-x-5">
>>>>>>> 80dfa47240eed94614175d8d39f1a5be26b650ca
      <li>
        <Link href={"/"}
          className="text-slate-100 hover:text-slate-700 transition duration-300">
            <AiFillFacebook size={30} />
       
        </Link>
      </li>
      <li>
        <Link href={"/"}
           className="text-slate-100 hover:text-slate-700 transition duration-300">
            <AiFillLinkedin size={30} />
     
        </Link>
      </li>
      <li>
        <Link href={"/"}
         className="text-slate-100 hover:text-slate-700 transition duration-300">
            <AiFillInstagram size={30} />
          
        </Link>
      </li>
      <li>
        <Link href={"/"}
           className="text-slate-100 hover:text-slate-700 transition duration-300">
            <AiFillTwitterCircle size={30} />
          
        </Link>
      </li>
    </ul> 
    </div>
        </div>
        
      </div>
      <div className=" flex flex-col  w-full h-80 pl-2" >
      <div className="font-bold mx-auto  p-3">
        <h1 className="text-2xl mb-2" >FAQ</h1>
     
        <div className="mb-2">Gallery</div>
    <div className="mb-2">Property Detail</div>
    <div className="mb-2">Apartment</div>
    <div className="mb-2">FarmHouse</div>
    <div className="mb-2">LocationMap</div>
    <div className="mb-2">Contact us</div>
        </div>
       
      </div>
      <div className=" flex flex-col w-full h-80 pl-2">
      <div className="font-bold mx-auto  p-3">
      <h1 className="text-2xl mb-2"> Contact</h1>
      <div className=" ">
        <div className=" text-center p-2 text-white ">
         
          <p className="flex m-2"><MdOutlineLocationOn size={20} />BSI Tower h-15</p>
      
      <p className="flex m-2 "><IoCall size={20}  />0123456789</p>
     
      <p className="flex m-2"><MdOutlineAlternateEmail  size={20} />info@gmail.com</p>
      </div></div>
       
       </div>
       
      
      </div>
      <div className="flex flex-col w-full h-80 pl-2">
      <div className="font-bold mx-auto  p-3">
      <h1 className="text-2xl mb-2"> NewsPaper</h1>
      <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
      <div  className="w-full flex flex-col my-4">
          <label  className="font-bold" htmlfor="email">Email </label>
          <input  
          className="bg-slate-100 p-2 m-1q" 
          type="text" name="email" id="email"
                           placeholder="Enter your email"
                    
                           autoComplete="off"/>
          </div>
       <div  className="">
          <button className="text-xl  p-4 text-center font-semibold border-2 rounded-full bg-orange-600 "> Subscribe</button>
          </div>
      </div>
       
      </div>
      </div> 
      <div className="flex flex-col w-full border-y-4 py-2 border-white text-center">@copy. All right reversed </div>
      </div>
 

</footer>

</>
   
  )
}

export default Contact



  