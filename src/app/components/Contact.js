import {AiFillFacebook,AiFillLinkedin,AiFillInstagram,AiFillTwitterCircle} from "react-icons/ai"
import Link from "next/link"
import { IoCall } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import Map from '../components/Map';

const Contact = () => {

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
<ul class="flex flex-row space-x-5 mt-3">
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
     
       <Link href='/Gallery'><div className="mb-2">Gallery</div></Link> 
       <Link href='/PropertyDetail1'><div className="mb-2">Property Detail</div></Link> 
       <Link href='/Property/Apartment'><div className="mb-2">Apartment</div></Link> 
       <Link href='/Property/Farmhouse'><div className="mb-2">FarmHouse</div></Link> 
       <Link href='/Contact1'><div className="mb-2">Contact us</div></Link> 
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



  