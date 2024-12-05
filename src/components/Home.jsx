
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Banner from "./components-for-home/Banner";
// import AboutInHome from "./components-for-home/AboutinHome";
import Success from "./components-for-home/Sucess";
import LatestVisas from "./components-for-home/LatestVisas";
import CourseStatistics from "./components-for-home/CourseStatistics";

const Home = () => {

    AOS.init({
      duration: 2000, 
      once: true, 
      easing: "ease-in-out" 
    });


  return (
    <div className="border-2 border-e-red-5">
      {/* Banner Section */}
      <div data-aos="fade-down" className="mb-6">
        <Banner />
      </div>

      {/* Value of Scandinavia Section */}
      <section data-aos="zoom-in" className="mb-6">
        <LatestVisas/>
      </section>

      {/* About Section */}
      {/* <section data-aos="fade-right" className=" bg-sky-300">
        <AboutInHome />
      </section> */}

      {/* Success Section */}
      <section data-aos="fade-left" className=" bg-sky-300 mb-6">
        <Success />
      </section>

  

      {/* Course Statistics Section */}
      <section data-aos="fade-up" className="mb-6">
        <CourseStatistics />
      </section>
    </div>
  );
};

export default Home;
