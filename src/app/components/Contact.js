import {AiFillFacebook,AiFillLinkedin,AiFillInstagram,AiFillTwitterCircle} from "react-icons/ai"
import Link from "next/link"

const Contact = () => {



  return (
    <div>
       
    <div className="  border-2 w-full p-5 h-96  bg-black text-white ">
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
      </div>
      </div>
     
 
   
  )
}

export default Contact



  