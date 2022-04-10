import { useState } from "react";
import Assets from "./Assets";
import Link from "next/link";
import { produit, site } from "./config";
import * as ga from "../utils/ga";
import ReactHtmlParser from "react-html-parser";
import {useEffect } from "react";
  import React from 'react';
  import { useTimer } from 'react-timer-hook';
  import * as dayjs from 'dayjs'
  import { RiAlarmWarningLine } from 'react-icons/ri';

export default function Details() {

  const date = dayjs().format('DD MMMM');
  console.log(date);

  const time = new Date();
  const expiryTimestamp = time.setSeconds(time.getSeconds() + 3600);

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called')});



  const [quantity, setQuantity] = useState(1);
  const [variante, setVariante] = useState(27);
  const [loading, setLoading] = useState(false);

  const [link, setLink] = useState(
    `${site.checkoutx}${produit.id}_${variante}_${quantity}`
  );

  const quantityPicker = (qty) => {
    setQuantity(qty);

    setLink(`${site.checkoutx}${produit.id}_${variante}_${qty}`);

    console.log(link);
  };

  const variantePicker = (vrt) => {
    setVariante(vrt);

    setLink(`${site.checkoutx}${produit.id}_${vrt}_${quantity}`);

    console.log(link);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 2000;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  async function AddToCart() {
    setLoading(true);
    const { default: ReactPixel } = await import("react-facebook-pixel");
    ReactPixel.pageView();
    ReactPixel.track("AddToCart");

    ga.event({
      action: "add_to_cart",
      params: {},
    });
console.log(link);
    window.location.href = link;
  }

  return (
    <section className='z-0 w-[100%] '>
      <div className='lg:w-[70%]'>
      <article className='p-4 lg:max-w-[800px] lg:min-w-[600px] lg:pt-10 '>

         <h2 className='w-[150px]  flex items-center  text-sm font-medium text-gray-500 '>
          BASED IN LONDON 
        </h2> 

        <h1 className='text-[22px]  font-medium '>{produit.name}</h1>

        <div className="flex justify-between items-center  lg:w-[80%] ">
<article className='flex space-x-1 py-2'>
          <div className='flex items-center space-x-0.5 mt-[-1px]'>
            <img src='/icons/star.svg' alt='star' className='w-[14px]' />
          </div>
          <span className=' font-medium'>
             {produit.note}
            <span className=' text-stone-500 pl-1 font-normal'>
               ({produit.review} Reviews)
            </span>
          </span>
        </article>

        <article className='bg-[#ffe8d2] px-2 py-1 font-medium text-[#ff6723] tracking-wider rounded-lg text-sm'>
        🔥Low in stock

        </article>
</div>

       
       <div className="font-semibold pt-2">Product Info</div>

         <section className='pt-1 text-[15px] lg:w-4/5 '>
        {ReactHtmlParser(produit.description)}
        </section>


    








<div className='border rounded-xl p-3 lg:w-[80%]  w-full mt-6'>
{/* <section className=' flex  lg:mt-2 md:mt-2 justify-center space-x-2 rounded-lg bg-[#eef2fd]   p-1 py-2 text-sm lg:m-0  w-full  tracking-wider'>
<img
                alt='produit.price'
                src='icons/fb.svg'
                className='w-[25px]'
              />

  <div >Because you came from <strong className="text-primary">Facebook</strong>. We applied an exclusive <strong className="text-primary">50% OFF discount </strong>(FB54SX12) instead of 30%, valid until <strong className="text-primary">{date}</strong>.
  </div></section>  */}

<section className='flex space-x-1 py-2  pb-2 text-sm font-medium uppercase md:w-3/5 md:m-auto lg:m-0'>

          <span>
            1. Color |
            {variante == 26 ? (
              <span className='text-[14px] font-semibold'> Orange</span>
            ) : variante == 27 ? (
              <span className='text-[14px] font-semibold'> Black</span>
            ): variante == 28 ? (
              <span className='text-[14px] font-semibold'> Red</span>
            ) : (
              <span className='text-[14px] font-semibold'> Blue</span>
            )}
          </span>
        </section>

        <section className=" flex space-x-2">
        <article  onClick={() => variantePicker(27)} className={` p-2 rounded-xl font-medium  cursor-pointer w-[100px] text-center  ${
              variante == 27 ? 'border-[#6fa6ff] border-2 bg-[#6fa6ff] text-white' : 'border-2 bg-[#f6f6f6] text-black'
            }`}>Black</article>
          <article  onClick={() => variantePicker(26)} className={` p-2 rounded-xl font-medium  cursor-pointer w-[100px] text-center ${
              variante == 26 ? 'border-[#6fa6ff] border-2 bg-[#6fa6ff] text-white' : 'border-2 bg-[#f6f6f6] text-black'
            }`}

          >Orange</article>

          <article  onClick={() => variantePicker(28)} className={` p-2 rounded-xl font-medium  cursor-pointer w-[100px] text-center  ${
              variante == 28 ? 'border-[#6fa6ff] border-2 bg-[#6fa6ff] text-white' : 'border-2 bg-[#f6f6f6] text-black'
            }`}>Red</article>
          <article  onClick={() => variantePicker(29)} className={` p-2  rounded-xl font-medium  cursor-pointer w-[100px] text-center  ${
              variante == 29 ? 'border-[#6fa6ff] border-2 bg-[#6fa6ff] text-white' : 'border-2 bg-[#f6f6f6] text-black'
            }`}>Blue </article>
        </section>

        <section className='flex space-x-1 py-2  pb-2 text-sm font-medium uppercase md:w-3/5 md:m-auto lg:m-0'>

          <span>
            2. Pack |
            {quantity == 1 ? (
              <span className='text-[14px] font-semibold'> 1-Unit</span>
            ) : quantity == 2 ? (
              <span className='text-[14px] font-semibold'> 2-Pack</span>
            ) : (
              <span className='text-[14px] font-semibold'> 3-Pack</span>
            )}
          </span>
        </section>

        <section className='mt-1  flex flex-col space-y-1   md:m-auto lg:m-0 '>

          <article
            onClick={() => quantityPicker(1)}
            className={`relative w-full cursor-pointer p-1 rounded-xl border-[2px] text-center ${
              quantity == 1 ? "border-[#6fa6ff]" : ""
            }`}>
              <div className='flex items-center justify-between'>
            {quantity == 1 ? (

<div className='w-[24px] bg-[#6fa6ff] h-[20px] rounded-full border-[3px] border-gray-300'></div>
            ) : (
              <div className='w-[24px] bg-gray-100 h-[20px] rounded-full border-[3px] border-gray-300'></div>
            )}
             <div className='font-medium w-full text-left pl-3'>1 x CapsLock™ <br></br><span className="text-sm">= Save £19.90 (-50%)</span></div>

            <div className='flex flex-col'>
              <span className={` font-medium ${
              quantity == 1 ? "border-[#6fa6ff]  text-[#6fa6ff]" : "text-[#6fa6ff]"}`}>£{produit.price.toFixed(2)}</span>
              <span className='line-through font-bold text-gray-500'>£{(produit.price * 2).toFixed(2)}</span>
              </div>
             </div>

          </article>

          <article
            onClick={() => quantityPicker(2)}
            className={`relative w-full cursor-pointer p-1 rounded-xl border-[2px] text-center ${
              quantity == 2 ? "border-[#6fa6ff]" : ""
            }`}>
              <div className='flex items-center justify-between'>
              {/* <div className='absolute top-0 left-[35px] text-sm font-medium animate-pulse'>BEST SELLER</div> */}
            {quantity == 2 ? (

<div className='w-[24px] bg-[#6fa6ff] h-[20px] rounded-full border-[3px] border-gray-300'></div>
            ) : (
              <div className='w-[24px] h-[20px] bg-gray-100 rounded-full border-[3px] border-gray-300'></div>
            )}
             <div className='font-medium w-full text-left pl-3'>1 x CapsLock™ + 2nd 50% OFF  <br></br><span className="text-sm">= Save £49.75 (-63%)</span></div>
            <div className='flex flex-col'>
              <span className={` font-medium ${
              quantity == 2 ? " text-[#6fa6ff]" : "text-[#6fa6ff]"}`}>£{(produit.price * 1.5).toFixed(2)}</span>
              <span className='line-through font-bold text-gray-500'>£{(produit.price * 2 * 2).toFixed(2)}</span>
              </div>
              <div className='absolute bottom-0 left-[35px] text-sm font-medium'></div>
              </div>

          </article>

          <article
            onClick={() => quantityPicker(3)}
            className={`relative w-full cursor-pointer p-1 rounded-xl border-[2px] text-center ${
              quantity == 3 ? "border-[#6fa6ff]" : ""
            }`}>
              <div className='flex items-center justify-between'>
            {quantity == 3 ? (

<div className='w-[24px] bg-[#6fa6ff] h-[20px] rounded-full border-[3px] '></div>


            ) : (
              <div className='w-[24px] bg-gray-100 h-[20px] rounded-full border-[3px] border-gray-300'></div>
            )}
            <div className='font-medium w-full text-left pl-3'>2 x CapsLock™ + 3rd Free  <br></br><span className="text-sm">= Save £79.60 (-68%)</span></div>

            <div className='flex flex-col'>
              <span className={` font-medium ${
              quantity == 3 ? "text-[#6fa6ff]" : "text-[#6fa6ff]"}`}>£{(produit.price * 2).toFixed(2)}</span>
              <span className='line-through font-bold text-gray-500'> £{(produit.price * 2 * 3).toFixed(2)}</span>
              </div>

              </div>

          </article>

        </section>

       



        <section className=' md:m-auto lg:m-0 pt-4'>
          <button
            onClick={AddToCart}
            className='  flex w-full items-center justify-center    text-white bg-[#3d7de4]  tracking-wider rounded-xl'>
            <div className="w-full flex rounded-lg items-center">
              
              <div className="bg-[#6fa6ff] w-[70%] font-medium rounded-l-xl py-2 text-left pl-7">
              {quantity == 1 ? (
              <h3>£{produit.price.toFixed(2)}</h3>
            ) : quantity == 2 ? (
              <h3>£{(produit.price * 1.5).toFixed(2)}</h3>
            ) : (
              <h3>£{(produit.price * 2).toFixed(2)}</h3>
            )}
            <div className="text-gray-200 text-sm">Total Price</div>

              </div>
              <div className="bg-[#3d7de4] w-full font-medium rounded-r-xl py-2 flex items-center space-x-1">
              <div className="">{loading ? (
              <svg
                className='ml-2 mr-3 h-5 w-5 animate-spin text-white '
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'>
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
              </svg>
            ) : (
              <div className=""></div>
            )}</div>

            <div className="w-full">Add To Cart </div>
         </div> </div></button>
        </section>
        <section className=' mt-2 flex lg:mx-auto lg:mt-4 md:mt-2 justify-center items-center space-x-2 text-[#ff6723] rounded-lg bg-[#ffe8d2]   p-1 py-1 text-sm md:mx-auto lg:m-0 md:w-3/5 w-[80%] m-auto tracking-wider'>
        <RiAlarmWarningLine className=" h-[20px] w-[20px] "/>
        
        <div className="mt-[3px]"> Only <b>7</b> CapsLock left <b>in stock</b></div>
        
      </section> 






        {/* <section className='mt-5 space-x-2 rounded-lg  p-1 bg-[#eef2fd]  lg:w-[90%]  text-sm md:mx-auto'>

      <div className='flex items-center justify-between px-2'><div><b>- Frank C. -</b> <span className="text-sm">Verified Buyer</span>  </div> <article className='flex space-x-1'>
     <span>5</span>   <img src='/icons/star.svg' alt='star' className='w-[14px]' />
        </article></div>
        <div className="pt-1">&quot;I was the victim of an attempted theft of my motorcycle. The thieves wanted to transport it by lifting it. CapsLock was a real problem for them, and deterred the theft. Top product, I recommend it.&quot;</div>
      </section> */}



        </div>
        <Assets />
      </article>
      </div>


     {isVisible ? (
                <div className=' lg:hidden  m-auto fixed bottom-0 left-0 right-0 z-[2]  m-2'>
                  <button
            onClick={AddToCart}
            className='  flex w-full items-center justify-center    text-white bg-[#3d7de4]  tracking-wider rounded-xl'>
            <div className="w-full flex rounded-lg items-center">
              
              <div className="bg-[#6fa6ff] w-[70%] font-medium rounded-l-xl py-2 text-left pl-7">
              {quantity == 1 ? (
              <h3>£{produit.price.toFixed(2)}</h3>
            ) : quantity == 2 ? (
              <h3>£{(produit.price * 1.5).toFixed(2)}</h3>
            ) : (
              <h3>£{(produit.price * 2).toFixed(2)}</h3>
            )}
            <div className="text-gray-200 text-sm">Total Price</div>

              </div>
              <div className="bg-[#3d7de4] w-full font-medium rounded-r-xl py-2 flex items-center space-x-1">
              <div className="">{loading ? (
              <svg
                className='ml-2 mr-3 h-5 w-5 animate-spin text-white '
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'>
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
              </svg>
            ) : (
              <div className=""></div>
            )}</div>

            <div className="w-full">Add To Cart </div>
         </div> </div></button>
                </div>
              ) : null}



      </section>


  );
}
