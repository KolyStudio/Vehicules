import { useState } from "react";
import { produit, site } from "./config";
export default function Assets() {
  const questions = [
    {
      id: 1,
      title: "Free Delivery in 4 to 7 days",
      content:
        "We process each order as quickly as possible while maintaining the strictest quality control.",
      icon: "icons/delivery.svg",
      active: false,
    },
    {
      id: 2,
      title: "24/7 customer service",
      content:
        "Our customer service is at your disposal 24/7. We answer you very quickly.",
      icon: "icons/chat.svg",
      active: false,
    },
  ];

  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <>
      <section className=' flex justify-center space-x-4 py-1 pt-2 lg:w-[80%]'>
        <img
          src='/payments/visa.svg'
          alt='visa'
          className=''
        />
        <img
          src='/payments/mc.svg'
          alt='mastercard'
          className=''
        />
        <img
          src='/payments/amex.svg'
          alt='amex'
          className=''
        />
        <img
          src='/payments/paypal.svg'
          alt='paypal'
          className=''
        />
      </section>

       <section className='flex items-center justify-center space-x-1 text-sm lg:w-[80%] pb-2'>
        <img src='/icons/lock.svg' alt='lock' />
        <h3>Secure payments with our partners</h3>
      </section>  

<section className='  md:m-auto mt-4 lg:mt-4 md:mt-4 justify-center rounded-lg bg-[#fafafa]   p-1 py-2 lg:m-0 md:w-3/5 lg:w-[80%]   tracking-wider'>
  <div className="text-center font-bold ">Our guarantees</div>
<div className="w-[70%] m-auto ">
  <div className='flex space-x-2 border-b py-1 '>
     <img
       alt='produit.price'
       src='icons/checktest2.svg'
       className='w-[14px]'
     />
     <h3 className="text-sm">Free Delivery in 4 to 7 Days</h3>
   </div>
   <div className='flex space-x-2 border-b py-1'>
     <img
       alt='produit.price'
       src='icons/checktest2.svg'
       className='w-[14px]'
     />
     <h3 className="text-sm">24/7 Customer Support</h3>
   </div>
   <div className='flex space-x-2 border-b py-1'>
     <img
       alt='produit.price'
       src='icons/checktest2.svg'
       className='w-[14px]'
     />
     <h3 className="text-sm">Easy Free Returns</h3>
   </div>
   <div className='flex space-x-2 border-b py-1'>
     <img
       alt='produit.price'
       src='icons/checktest2.svg'
       className='w-[14px]'
     />
     <h3 className="text-sm">Lifetime Warranty</h3>
   </div></div></section> 


      {/* <section className='mt-5  border-y-[1px] p-2 py-3 md:mx-auto md:w-3/5 lg:mx-0 lg:w-[80%]'>
        {questions.map((item, index) => {
          return (
            <article
              key={index}
              onClick={() => toggle(index)}
              className={`flex cursor-pointer justify-between space-x-4 first:mb-2 first:border-b first:pb-2 ${clicked === index ? " transition-all" : null
            } `}>
              <img alt='delivery' src={item.icon} className='w-[20px]' />
              <div className='grow'>
                <h1 className=''>{item.title}</h1>

                {clicked === index ?  (
                  <p className='text-sm'>{item.content}</p>
                ) : (
                  ""
                )}
              </div>
              <img
                alt='delivery'
                src='icons/arrowright.svg'
                className={`w-[20px] ${
                  clicked === index ? "rotate-90 transition-all" : null
                } `}
              />
            </article>
          );
        })}
      </section> */}
    </>
  );
}
