import {AiFillFacebook,AiFillLinkedin,AiFillInstagram,AiFillTwitterCircle} from "react-icons/ai"
import Link from "next/link"
import Image from "next/image"

const Contact = () => {



  
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

 



       
    {/* <div className="  border-2 w-full p-5 h-96  bg-black text-white ">
   <div className="flex ">
      <div className="flex flex-col border-2 w-full h-80 pl-2  ">
        <div className="font-bold p-2">Company</div>
        <div>About</div>
        <div>Career</div>
        <div>Service</div>
        <div>Contect us</div>
        <div>Term Conditions</div>
        <div>Site</div>
        <div>Blog</div>
      </div>
      <div className=" flex flex-col border-2 w-full h-80 pl-2" >
      <div className="font-bold p-2">NetworkSite</div>
        <div>Plot yards Canda</div>
        <div>Plot yards USE</div>
        <div>Urban Money</div>
        <div>Urban Money Austraila</div>
        <div>Interior Company</div>
        <div>Prop VR</div>
        <div>PropMNC</div>
      </div>
      <div className=" flex flex-col border-2 w-full h-80 pl-2">
      <div className="font-bold p-2">Solution</div>
        <div>Plot Connect</div>
        <div>Prime Connect</div>
        <div>Small Agent</div>
        <div>Realizing</div>
        <div>Rent Agreement</div>
        <div>Escrow</div>
        <div>Book Property Online</div>
      
      </div>
      <div className="flex flex-col border-2 w-full h-80 pl-2">
      <div className="font-bold p-2">Resource</div>
        <div>Data Intelligence</div>
        <div>Plot Yards Review</div>
        <div>Rest Estate Guide </div>
        <div>Cities Real Estate</div>
        <div>Awards & Recogition</div>
        <div>Media Converage</div>
        <div>Glossary</div>
      </div>
      </div> 

      
      <div className="flex w-full">
      
     <div className="flex flex-col w-full text-center">@copy. All right reversed </div>
   
   < div className="flex flex-col w-full  ">
      <ul className="inline-flex pt-1 justify-end ">
      <li className="pl-5"><Link href={"/"}><AiFillFacebook size={30}/></Link> </li>
      <li className="pl-5"><Link href={"/"}><AiFillLinkedin size={30}/></Link></li>
      <li className="pl-5"><Link href={"/"}><AiFillInstagram size={30}/></Link> </li>
      <li className="pl-5"><Link href={"/"}><AiFillTwitterCircle size={30}/></Link></li>
     </ul>
     </div>
     </div>
      </div> */}
 
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
      <li>
        <Link href={"/"}
          className="text-slate-900 hover:text-slate-700 transition duration-300">
            <AiFillFacebook size={30} />
       
        </Link>
      </li>
      <li>
        <Link href={"/"}
           className="text-slate-900 hover:text-slate-700 transition duration-300">
            <AiFillLinkedin size={30} />
     
        </Link>
      </li>
      <li>
        <Link href={"/"}
         className="text-slate-900 hover:text-slate-700 transition duration-300">
            <AiFillInstagram size={30} />
          
        </Link>
      </li>
      <li>
        <Link href={"/"}
           className="text-slate-900 hover:text-slate-700 transition duration-300">
            <AiFillTwitterCircle size={30} />
          
        </Link>
      </li>
    </ul>
  </div>
</div>


</>
   
  )
}

export default Contact



  