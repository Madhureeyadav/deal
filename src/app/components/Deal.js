import React from 'react'
import Image from 'next/image'


  async function handleSubmit(event){
      event.preventDefualt();
    
      const data={
        name:String(event.target.name.value),
        email:String(event.target.email.value),
        meassage:String(event.target.message.value),
        };
    
        const response =await fetch("api/contact",{
          method:"POST",
          headers:{
            "content-Type":"application/json",
          },
          body:JSON.stringify(data),
    });
    if(response.ok){
      console.log("Message sent successfully")
    }
    if(response.ok){
      console.log("Error sending the message")
    }
    }
const Deal = () => {
  return (
    <main className="overflow:hidden">
     <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-20  padding-x">
        <Image src="/img/plot.jpg" width={500} height={500} className="w-full ">
          
        </Image>
       </div>
       
     </div>
     <div>
     <div className="text-center font-bold text-2xl m-5 uppercase ">Property 
     <div className="w-full border-2 h-72 flex pt-10 ">
      <div className="w-full border-2 flex flex-col">
        <Image src="/img/plot.jpg" 
        width={500} 
        height={500} 
        className="w-full h-full ">
        </Image></div>
      <div className="w-full border-2 flex flex-col"><Image src="/img/plot.jpg" 
        width={500} 
        height={500} 
        className="w-full h-full ">
        </Image></div>
      <div className="w-full border-2 flex flex-col"><Image src="/img/plot.jpg" 
        width={500} 
        height={500} 
        className="w-full h-full ">
        </Image></div>
      <div className="w-full border-2 flex flex-col"><div className="w-full border-2  flex-col "></div>
      <div className="w-full border-2  flex-col "></div></div>
      </div> 
      </div> 
     </div>



<div  className="h-56 w-full ">
  <div className="text-center font-bold text-xl m-5 uppercase">Find real estate property in Delhi for Buy/Sell/Rent/Sale </div>
<div className="flex border-2 h-48 w-full " >
<div className="flex  border-2 w-full p-2">
  <div><Image src="/img/icon1.png" 
        width={500} 
        height={500} 
        className="w-96 h-full rounded-2xl p-2 ">
        </Image></div>
  <div className="w-full bg-white text-blue-900 rounded-sm text-center">RESEARCH

<p>Blog</p>
<p>Price Trends</p>
<p>Locality Info</p>
<p>Home Buyer's Guide</p>
</div></div>
  <div  className="flex border-2 w-full p-2">
  <div><Image src="/img/icon2.png" 
        width={500} 
        height={500} 
        className="w-96 h-full rounded-2xl p-2 ">
        </Image></div>
  <div className="w-full bg-white text-blue-900 rounded-sm text-center"> Buy

  <p>Budget properties </p>
  <p>Ready to move </p>
  <p>Apartments/Flats </p>
  <p>Independent House</p>
  <p>Residential Plots/Lands</p>
</div>
  </div>
  <div  className="flex  border-2 w-full p-2">
  <div className="w-full"><Image src="/img/icon3.png" 
        width={500} 
        height={500} 
        className=" rounded-full p-4 ">
        </Image></div>
  <div className="w-full  bg-white text-blue-900 rounded-sm text-center">SUPPORT

<p>Home Loan</p>
<p>User Support</p>
<p>Help Guide</p>
<p>Live Chat</p>

</div>
  </div>
  
  </div>
  </div>

     <div className=" w-full ">
     <div className="text-center font-bold text-2xl m-5 uppercase hover:shadow-inner"> Gallery</div>
   <div className="w-full border-2 h-48 flex gap-5 p-1">
      <div className="w-full border-2 flex  ">
      <Image src="/img/gal-1.jpeg" width={500} height={500}></Image>
         </div>
      <div className="w-full border-2 flex "><Image src="/img/gal-2.jpeg" width={500} height={500}></Image></div>
      <div className="w-full border-2 flex "><Image src="/img/gal-6.jpeg" width={500} height={500}></Image></div>
      <div className="w-full border-2 flex"><Image src="/img/gal-7.jpeg" width={500} height={500}></Image></div>
      </div>  
      </div>

      <div className="w-full border-2 h-36 flex gap-2 mt-4 p-2 ">
      <div className="w-full border-2 flex"><Image src="/img/gal-4.jpeg" width={500} height={500} className="relative" ></Image>
      <div className="absolute ">plot</div></div>
      <div className="w-full border-2 flex "><Image src="/img/gal-7.jpeg" width={500} height={500} className="relative" ></Image>
      <div className="absolute ">unfanictured</div></div>
      <div className="w-full border-2 flex "><Image src="/img/gal-6.jpeg" width={500} height={500} className="relative" ></Image>
      <div className="absolute ">fanitured</div></div>
      </div> 


      {/* <div className=" border-2">
      <Image src="/img/house-6.jpeg" width={500} height={500} className=" w-full  h-56 " ></Image>
      
      <div className="absolute ">fanitured</div>
      
      
      
     
      </div>
     */}
      
     
      <div className="w-full border-2  h-72 px-2"> <div className="text-center font-bold  p-2">property</div>
      <div className=" border-2 text-center h-56 px-48 py-10 flex"> 
        <div className=" flex flex-col border-2 w-full ">
          
        <Image src="/img/gal-2.jpeg" width={500} height={500} className="w-full rounded-6xl h-full hover:bg-primary "></Image>
        </div>
         <div className="flex flex-col border-2 w-full  "><Image src="/img/gal-2.jpeg" width={500} height={500} className="w-full rounded-6xl h-full "></Image></div>
        </div></div>
   

     
        <div className="flex flex-col" > <div className="text-center font-bold  p-2">Agent Meet</div> </div>
      <div className="w-full border-2 h-36 flex gap-10  p-10 ">
      <div className="w-full border-2 flex flex-col"></div>
      <div className="w-full border-2 flex flex-col"></div>
      <div className="w-full border-2 flex flex-col"></div>
      <div className="w-full border-2 flex flex-col"></div>
      </div> 
      
      <div>
      <div className="text-center font-bold text-2xl m-5 uppercase">contact </div>
      <div className="w-full border-2 h-96 flex  pt-10 ">
      <div className="w-[30%] border-2 flex flex-col"><div className="border-2 h-72 text-center bg-slate-600 text-white m-10"><p  className="text-2xl font-bold p-4">Location Detail</p ><p className="text-xl font-bold">Addresss </p> <p className="text-slate-400">BSI Tower h-15</p>
      <p className="text-xl font-bold">Phone number</p ><p className="text-slate-400">0123456789</p><p className="text-xl font-bold">Email Address</p><p className="text-slate-400">info@gmail.com</p></div></div>
      <div className="w-[70%] border-2 flex flex-col">
        <form   className="px-10">
          <div className="w-full flex gap-10 my-4 ">
          <div  className="w-full flex flex-col my-4">
            <label  className="font-bold text-gray-800" htmlfor="name">Name </label>
          <input 
        
          className="bg-slate-200" 
          type="text"
          required
          minLength={5}
          maxLength={20}
          autoComplete="off"
           id="name"/>
           </div>
         <div  className="w-full flex flex-col my-4">
          <label  className="font-bold text-gray-800" htmlfor="name">Email </label>
          <input  
          className="bg-slate-200" 
          type="email" 
          required
          minLength={10}
          maxLength={20}
          autoComplete="off"
          id="email"/>
          </div>
          </div>
          <div>
          <label className="font-bold" htmlFor="message">Message</label>
          <textarea
          rows={2}
          required
          minLength={5}
          maxLength={100}
          name="message"
          className="w-full p-4 bg-gray-200 border border-gray-100"/>
          </div>
          <button type="submit" className="px-4 py-2 w-40 bg-gray-700 text-white mt-4 rounded-2xl ">Send Message</button>
        </form>
      </div>
      </div>
      </div>
    </main>
  )
}

export default Deal
