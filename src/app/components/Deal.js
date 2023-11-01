import React from 'react'
import Image from 'next/image'
import {AiOutlineVerticalLeft } from "react-icons/ai"
import Link from "next/link"
import BookingForm from '../components/BookingForm'
import Agent from '../components/Agent'
import MainFocus from './MainFocus'

  
const Deal = () => {
  return (
    <main className="overflow-hidden">
      
     <div className="flex xl:flex-row flex-col gap-5  max-w-[1440px] mx-auto">
     <div className="flex padding-x">
     <div className="ltn__slide-item-inner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 align-self-center">
            <div className="slide-item-info">
              <div className="slide-item-info-inner ltn__slide-animation">
                <div className="slide-video mb-50 hidden">
                  <a
                    className="ltn__video-icon-2 ltn__video-icon-2-border"
                    href="https://www.youtube.com/embed/tlThdr3O5Qo"
                    data-rel="lightcase:myCollection"
                    tabIndex="0"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                </div>
                <h6 className="slide-sub-title white-color--- animated">
                  <span>
                    <i className="fas fa-home"></i>
                  </span>{' '}
                  Real Estate Agency
                </h6>
                <h1 className="slide-title animated ">
                  Find Your Dream <br /> House By Us
                </h1>
                <div className="slide-brief animated">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore.
                  </p>
                </div>
                <div className="btn-wrapper animated">
                  <a href="about.html" className="theme-btn-1 btn btn-effect-1" tabIndex="0">
                    Make An Enquiry
                  </a>
                  <a
                    className="ltn__video-play-btn bg-white"
                    href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&amp;showinfo=0"
                    data-rel="lightcase"
                    tabIndex="0"
                  >
                    <i className="icon-play  ltn__secondary-color"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="slide-item-img">
              <img src="img/slider/21.png" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
     </div>
     <div>
     <div className="text-center font-bold text-2xl m-5 uppercase ">Property 
     <div className="w-full border-2 h-72 flex pt-10 ">
      <div className="w-full border-2 flex flex-col">
        <Image src="/img/f1.jpg" 
        width={500} 
        height={500} 
        className="w-full h-full ">
        </Image></div>
      <div className="w-full border-2 flex flex-col"><Image src="/img/f3.jpg" 
        width={500} 
        height={500} 
        className="w-full h-full ">
        </Image></div>
      <div className="w-full border-2 flex flex-col"><Image src="/img/a1.jpeg" 
        width={500} 
        height={500} 
        className="w-full h-full ">
        </Image></div>
      <div className="w-full border-2 flex flex-col">
      <Image src="/img/gal-9.jpeg" 
        width={500} 
        height={500} 
        className="w-full h-full ">
        </Image>
      </div>
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

      
      
     
      <div className="w-full border-2  h-72 px-2"> <div className="text-center font-bold  p-2">property</div>
      <div className=" border-2 text-center h-64 px-48 py-10 flex"> 
        <div className=" flex flex-col border-2 w-full ">
          
        <Image src="/img/gal-12.jpeg" 
        width={500} 
        height={500}
         className="w-full  h-full hover:bg-purple-500  opacity-75">

         </Image>
        <div className="p-1"> 
        <button className="border bg-slate-700 rounded-full p-1 px-2 text-slate-200 hover:bg-slate-900">
          <Link href="/Property/Apartment">Explore Apartment</Link>
          </button>
        </div>
        </div>
         <div className="flex flex-col border-2 w-full  ">
          <Image src="/img/farmhouse.jpg" width={500} 
          height={500} 
          className="w-full  h-full opacity-75">
            </Image>
            <div className="p-1"> 
        <button className="border bg-slate-700 rounded-full p-1 px-2 text-slate-200 hover:bg-slate-900">
          <Link href="/Property/Farmhouse">Explore Farmhouse</Link>
          </button>
        </div>
            </div>
        </div></div>
   

     
        <Agent/>
        <MainFocus/>
    </main>
  )
}

export default Deal
