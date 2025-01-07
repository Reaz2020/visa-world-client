import React from 'react';

const Testimonials = () => {
  return (
    <section data-aos="fade-up" className="mb-6 bg-gray-100 p-6 rounded-lg">
      <h2 className="text-3xl font-semibold text-center mb-4">What Our Clients Say</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-80 p-4 bg-white rounded-lg shadow-lg">
          <p className="italic text-gray-700">"Visa World Ltd. helped me get my student visa so easily. Their team guided me step by step, and now I’m studying abroad!"</p>
          <h4 className="mt-4 font-bold">Jane Doe</h4>
          <p className="text-sm text-gray-500">Student, USA</p>
        </div>
        <div className="w-80 p-4 bg-white rounded-lg shadow-lg">
          <p className="italic text-gray-700">"I was able to get my work visa thanks to the amazing support and resources provided by Visa World Ltd. Highly recommend!"</p>
          <h4 className="mt-4 font-bold">John Smith</h4>
          <p className="text-sm text-gray-500">Engineer, Germany</p>
        </div>
        <div className="w-80 p-4 bg-white rounded-lg shadow-lg">
          <p className="italic text-gray-700">"Visa World made the entire visa application process straightforward and stress-free. I’m grateful for their assistance!"</p>
          <h4 className="mt-4 font-bold">Emily Turner</h4>
          <p className="text-sm text-gray-500">Tourist, Australia</p>
        </div>
        <div className="w-80 p-4 bg-white rounded-lg shadow-lg">
          <p className="italic text-gray-700">"Their expertise in handling all kinds of visas made the process so easy! I couldn’t be happier with the result!"</p>
          <h4 className="mt-4 font-bold">Carlos Garcia</h4>
          <p className="text-sm text-gray-500">Entrepreneur, Spain</p>
        </div>
        <div className="w-80 p-4 bg-white rounded-lg shadow-lg">
          <p className="italic text-gray-700">"The personalized support and attention to detail were invaluable. Visa World Ltd. is my go-to recommendation for visas!"</p>
          <h4 className="mt-4 font-bold">Sarah Lee</h4>
          <p className="text-sm text-gray-500">Student, UK</p>
        </div>
        <div className="w-80 p-4 bg-white rounded-lg shadow-lg">
          <p className="italic text-gray-700">"From the initial consultation to submitting the final documents, Visa World Ltd. provided excellent guidance and support. Thank you!"</p>
          <h4 className="mt-4 font-bold">Alex Kim</h4>
          <p className="text-sm text-gray-500">Business Owner, South Korea</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
