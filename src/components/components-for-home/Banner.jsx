import React from 'react';
import { Slide, Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MapPin } from "lucide-react"; // <-- ✅ added icon import
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
  return (
    <div className="relative z-[9999] bg-white">
      <div className='md:flex'>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide><img className='w-full lg:h-96 rounded-md' src="/img-8.png" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full lg:h-96 rounded-md' src="/img-12.png" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full lg:h-96 rounded-md' src="/img-13.png" alt="" /></SwiperSlide>
        </Swiper>

        <div className="w-full p-4 lg:pl-8 lg:w-[140rem]">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            <Fade cascade><h1>The founder</h1></Fade>
          </h1>

          <Slide duration={4000}>
            <p className="text-lg text-gray-700 mb-6">
              I started my journey in 2008 as a student who had a dream to study abroad and build my career.
              From there I learned the difficulties students face to achieve their dreams.
              Our dedicated team ensures every project is executed with excellence and integrity.
            </p>
          </Slide>

          <div className="text-purple-400 flex items-center justify-center text-5xl font-extrabold rounded-lg shadow-lg my-4 animate-spin-slow">
            16 years of experience
          </div>

          <div className='flex gap-4 mb-4'>
           <button className="btn bg-purple-200 hover:bg-purple-300 transition" onClick={() => window.open("https://forms.gle/zu75nF9TP8qPnZAd8", "_blank")}>
             Contact form
           </button>

          </div>

          {/* Office Buttons */}
          <div className="flex gap-4 flex-wrap justify-start relative">
            
            {/* Dhaka */}
            <div className="relative group">
              <button className="btn flex items-center gap-2 bg-purple-300 px-6 py-2 rounded-lg font-semibold hover:bg-purple-400 transition">
                <MapPin className="w-4 h-4 text-purple-700" />
                Dhaka
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-white text-gray-700 text-sm p-4 rounded-xl shadow-lg 
                opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 pointer-events-none 
                z-[9999] border border-purple-200">
                <h3 className="font-bold text-gray-900 mb-1">Dhaka Office</h3>
                <p>House 12, Road 3, Dhanmondi, Dhaka</p>
                <p>Phone: +880 1234 567890</p>
              </div>
            </div>

            {/* London */}
            <div className="relative group">
              <button className="btn flex items-center gap-2 bg-purple-300 px-6 py-2 rounded-lg font-semibold hover:bg-purple-400 transition">
                <MapPin className="w-4 h-4 text-purple-700" />
                London
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-white text-gray-700 text-sm p-4 rounded-xl shadow-lg 
                opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 pointer-events-none 
                z-[9999] border border-purple-200">
                <h3 className="font-bold text-gray-900 mb-1">London Office</h3>
                <p>221B Baker Street, London NW1 6XE</p>
                <p>Phone: +44 20 7946 0958</p>
              </div>
            </div>

            {/* Stockholm */}
            <div className="relative group">
              <button className="btn flex items-center gap-2 bg-purple-300 px-6 py-2 rounded-lg font-semibold hover:bg-purple-400 transition">
                <MapPin className="w-4 h-4 text-purple-700" />
                Stockholm
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-white text-gray-700 text-sm p-4 rounded-xl shadow-lg 
                opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 pointer-events-none 
                z-[9999] border border-purple-200">
                <h3 className="font-bold text-gray-900 mb-1">Stockholm Office</h3>
                <p>Sveavägen 45, 111 34 Stockholm</p>
                <p>Phone: +46 8 123 4567</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
