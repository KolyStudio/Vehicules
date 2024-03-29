import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Thumbs } from "swiper";
import React, { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";

export default function ImageProduit() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <section className='w-full'>
        
        <Swiper
          className=' p-3 md:w-[550px] lg:mt-10 lg:w-[550px]  '
          modules={[Thumbs, Navigation, Pagination, Scrollbar, A11y]}
          loop
          pagination={{ clickable: true }}
          navigation
          thumbs={{ swiper: thumbsSwiper }}>
          <SwiperSlide>
            <img
              alt='test'
              src='/produits/produit/prod_1.webp'
              className='w-[600px] p-2 rounded-3xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt='test'
              src='/produits/produit/prod_2.webp'
              className='w-[600px] p-2 rounded-3xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt='test'
              src='/produits/produit/prod_3.webp'
              className='w-[600px] p-2 rounded-3xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt='test'
              src='/produits/produit/prod_4.webp'
              className='w-[600px] p-2 rounded-3xl'
            />
          </SwiperSlide>
          
          
        </Swiper>
        <div className='relative m-auto mt-2 lg:mt-5  '>
          <Swiper
            className='absolute mt-2 w-[300px] lg:w-[300px]'
            modules={[Thumbs]}
            watchSlidesProgress
            slidesPerView={4}
            spaceBetween={20}
            onSwiper={setThumbsSwiper}>
            <SwiperSlide>
              <img
                alt='test'
                src='/produits/produit/prod_1.webp'
                className='max-w-[50px] cursor-pointer rounded-xl border-[#6fa6ff] border-[2px] lg:max-w-[70px] '
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt='test'
                src='/produits/produit/prod_2.webp'
                className='max-w-[50px] cursor-pointer rounded-xl border-[#6fa6ff] border-[2px] lg:max-w-[70px]'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt='test'
                src='/produits/produit/prod_3.webp'
                className='max-w-[50px] cursor-pointer rounded-xl border-[#6fa6ff] border-[2px] lg:max-w-[70px]'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt='test'
                src='/produits/produit/prod_4.webp'
                className='max-w-[50px] cursor-pointer rounded-xl border-[#6fa6ff] border-[2px]  lg:max-w-[70px]'
              />
            </SwiperSlide>
            
          </Swiper>
        </div>
      </section>
    </>
  );
}
