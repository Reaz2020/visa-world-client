import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllVisas = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // animation runs only once
      easing: 'ease-in-out', // smooth easing
    });
  }, []);



  return (
    <div className='text-center min-h-40'>
    All-visas
    </div>
  );
};

export default AllVisas ;
