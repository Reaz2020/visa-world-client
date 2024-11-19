import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="container mx-auto py-12 px-6">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-600" data-aos="fade-up">
        About Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div
          className="bg-white shadow-lg rounded-lg p-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-gray-600">
            We are well known for teaching Swedish with dedication and passion. Our
            mission is to provide high-quality language education that helps learners
            confidently communicate in Swedish. Whether you're a beginner or advanced,
            we tailor our courses to meet your needs.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white shadow-lg rounded-lg p-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Presence</h3>
          <p className="text-gray-600">
            We have two offices located in key areas and primarily focus on online-based
            teaching. Our flexible online courses make learning Swedish accessible from
            anywhere in the world, and our dedicated instructors ensure a personalized
            experience for every student.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white shadow-lg rounded-lg p-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Founder</h3>
          <p className="text-gray-600">
            The founder of our platform was originally from Sweden and had a strong passion
            for teaching the Swedish language. With years of experience and deep cultural
            understanding, our founder's expertise has shaped the high-quality education we
            offer today.
          </p>
        </div>

        {/* Card 4 */}
        <div
          className="bg-white shadow-lg rounded-lg p-6"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Partnerships</h3>
          <p className="text-gray-600">
            We have strong partnerships with various schools and educational institutions
            that help promote and support our Swedish language courses. These collaborations
            allow us to reach more students and provide exceptional learning experiences
            through a combination of online and in-person learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
