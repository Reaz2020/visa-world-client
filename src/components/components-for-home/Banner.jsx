import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";       
import "slick-carousel/slick/slick-theme.css";    

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  
    slidesToScroll: 1,
    centerMode: true, // Keeps image centered in the slider
    centerPadding: '0',  // Removing padding to avoid white space on the sides
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',  
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false, // Disabling centerMode for smaller screens
          centerPadding: '0',  // Removing padding on mobile
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,  // Disabling centerMode for very small screens
          centerPadding: '0', // No padding on very small screens
        },
      },
    ],
    prevArrow: (
      <div className="slick-prev slick-arrow bg-white text-black p-3 rounded-full shadow-lg opacity-100 hover:bg-gray-600">
        &lt;
      </div>
    ),
    nextArrow: (
      <div className="slick-next slick-arrow bg-white text-black p-3 rounded-full shadow-lg opacity-100 hover:bg-gray-600">
        &gt;
      </div>
    ),
  };

  return (
    <div className="relative lg:w-full">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/TMSjzBF/swe1.png"
            alt="swe1"
            className="w-full h-[300px] object-cover object-center"  // Ensure it covers and stays centered
          />
        </div>
        {/* Slide 2 */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/TtD2SnZ/swe2.png"
            alt="swe2"
            className="w-full h-[300px] object-cover object-center"  // Ensure it covers and stays centered
          />
        </div>
        {/* Slide 3 */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/SyNBJnZ/swe3.png"
            alt="swe3"
            className="w-full h-[300px] object-cover object-center"  // Ensure it covers and stays centered
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
