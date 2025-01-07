import React from 'react';
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

import { Navigation, Pagination ,Autoplay} from 'swiper/modules';
import "slick-carousel/slick/slick.css";       
import "slick-carousel/slick/slick-theme.css";    
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Banner = () => {
 
  return (
  

//-------------------------------------
<div className='md:flex '>


<Swiper
modules={[Pagination,Navigation,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={true}
      pagination={{clickable:true}}
   
    >
      <SwiperSlide><img className='w-full lg:h-96 rounded-md' src="/img-8.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full lg:h-96 rounded-md' src="/img-12.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full lg:h-96 rounded-md' src="/img-13.png" alt="" /></SwiperSlide>
      {/* <SwiperSlide><img className='w-full lg:h-96' src="/img-9.png" alt="" /></SwiperSlide> */}
    
   
    </Swiper>

   {/* Title and Subtitle Section */}  
   <div className="w-full p-4 lg:pl-8 lg:w-[140rem]  ">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">
     
     
          <Fade cascade> Welcome to visa service Portal</Fade>
   
        </h1>
        <Slide duration={4000}>

        <p className="text-lg text-gray-700 mb-6">
          We specialize in delivering top-notch services to meet your unique needs. 
          Our dedicated team ensures every project is executed with excellence and integrity.
        </p>

        </Slide>


       
  
           <p className="text-md text-gray-600">
             Explore our expertise and let us help you achieve your goals. 
             Together, we create solutions that drive success.
           </p>
    
   
     
       <div className="h-32  text-purple-400 flex items-center justify-center text-5xl font-extrabold rounded-lg shadow-lg my-4 animate-spin-slow">
          24-hr service 
        </div>
      
      </div>
    
  
</div>
  );


};

export default Banner;
