import React from 'react';

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
<div>

<Swiper
modules={[Pagination,Navigation,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={true}
      pagination={{clickable:true}}
   
    >
      <SwiperSlide><img className='w-full lg:h-96' src="/img-8.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full lg:h-96' src="/img-1.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full lg:h-96' src="/img-3.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full lg:h-96' src="/img-9.png" alt="" /></SwiperSlide>
    
   
    </Swiper>
</div>
  );


};

export default Banner;
