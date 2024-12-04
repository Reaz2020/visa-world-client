import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
   <div className="text-center min-h-36 bg-lime-300">
About us page 
   </div>
  );
};

export default AboutUs;
