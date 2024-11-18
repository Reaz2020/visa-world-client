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
    centerMode: true, 
    centerPadding: '0', 
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/TMSjzBF/swe1.png"
            alt="swe1"
            className="w-full h-[500px] object-cover" 
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/TtD2SnZ/swe2.png"
            alt="swe2"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/SyNBJnZ/swe3.png"
            alt="swe3"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
