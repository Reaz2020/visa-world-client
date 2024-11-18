
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Banner from "./components-for-home/Banner";
import AboutInHome from "./components-for-home/AboutinHome";
import Success from "./components-for-home/Sucess";
import ValueOfScandinavia from "./components-for-home/ValueOfScandinavia";
import CourseStatistics from "./components-for-home/CourseStatistics";

const Home = () => {

    AOS.init({
      duration: 2000, 
      once: true, 
      easing: "ease-in-out" 
    });


  return (
    <div>
      {/* Banner Section */}
      <div data-aos="fade-down" className="mb-6">
        <Banner />
      </div>

      {/* About Section */}
      <section data-aos="fade-right" className="min-h-96 bg-sky-300">
        <AboutInHome />
      </section>

      {/* Success Section */}
      <section data-aos="fade-left" className="min-h-96 bg-sky-300 m-6">
        <Success />
      </section>

      {/* Value of Scandinavia Section */}
      <section data-aos="zoom-in" className="m-6">
        <ValueOfScandinavia />
      </section>

      {/* Course Statistics Section */}
      <section data-aos="fade-up" className="m-6">
        <CourseStatistics />
      </section>
    </div>
  );
};

export default Home;
