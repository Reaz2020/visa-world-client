
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import Banner from "./components-for-home/Banner";
// // import AboutInHome from "./components-for-home/AboutinHome";
// import Success from "./components-for-home/Sucess";
// import LatestVisas from "./components-for-home/LatestVisas";
// import VisaStatistics from "./components-for-home/VisaStatistics";

// const Home = () => {

//     AOS.init({
//       duration: 2000, 
//       once: true, 
//       easing: "ease-in-out" 
//     });


//   return (
//     <div className="border-2 border-e-red-5">
//       {/* Banner Section */}
//       <div data-aos="fade-down" className="mb-6">
//         <Banner />
//       </div>

//       {/* Value of Scandinavia Section */}
//       <section data-aos="zoom-in" className="mb-6">
//         <LatestVisas/>
//       </section>

//       {/* About Section */}
//       {/* <section data-aos="fade-right" className=" bg-sky-300">
//         <AboutInHome />
//       </section> */}

//       {/* Success Section */}
//       <section data-aos="fade-left" className=" bg-sky-300 mb-6">
//         <Success />
//       </section>

  

//       {/* Course Statistics Section */}
//       <section data-aos="fade-up" className="mb-6">
//         <VisaStatistics />
//       </section>
//     </div>
//   );
// };

// export default Home;
//--------------------------------------
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fade } from "react-awesome-reveal";

import Banner from "./components-for-home/Banner";
import Success from "./components-for-home/Sucess";
import LatestVisas from "./components-for-home/LatestVisas";
import VisaStatistics from "./components-for-home/VisaStatistics";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize AOS animation
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Toggle theme
  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    if (!isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} transition-colors duration-300`}>
      {/* Theme Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={handleThemeToggle}
          className="px-4 py-2 bg-purple-500 text-white rounded shadow hover:bg-blue-600 transition-all"
        >
        {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      {/* Banner Section */}
      <div data-aos="fade-down" className="mb-6">
        <Banner />
      </div>

      {/* Latest Visas Section */}
       <Fade>
      <section className="mb-6">
        <LatestVisas />
      </section>
      </Fade>

      {/* Success Section */}
      <section data-aos="fade-left" className="mb-6">
        <Success />
      </section>

      {/* Visa Statistics Section */}
      <section data-aos="fade-up" className="mb-6">
        <VisaStatistics />
      </section>
    </div>
  );
};

export default Home;
