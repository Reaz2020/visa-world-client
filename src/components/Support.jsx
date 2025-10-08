import React from 'react';

const Support = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4 text-center">Support</h1>

      {/* Description */}
      <p className="mb-8 text-center text-gray-700 max-w-3xl mx-auto">
        Our support team is dedicated to providing comprehensive assistance for all your needs. 
        Whether you need help with visa applications, travel arrangements, or just have a question, 
        we're here to help. Explore the various support services we offer:
      </p>

      {/* Support Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="card bg-white p-6 shadow-md rounded-xl hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">One-to-One Solutions</h2>
          <p>Get personalized assistance with our dedicated support team for any inquiries or issues.</p>
        </div>
        <div className="card bg-white p-6 shadow-md rounded-xl hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">24/7 Email and Chat Help</h2>
          <p>We offer round-the-clock support through email and chat to ensure your concerns are addressed promptly.</p>
        </div>
        <div className="card bg-white p-6 shadow-md rounded-xl hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Mentorship Support</h2>
          <p>Receive expert guidance and mentorship until your visa application is successfully completed.</p>
        </div>
        <div className="card bg-white p-6 shadow-md rounded-xl hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Language Support</h2>
          <p>We provide language support to help bridge communication gaps during your application process.</p>
        </div>
        <div className="card bg-white p-6 shadow-md rounded-xl hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Transportation & Hotel Assistance</h2>
          <p>Get help with transportation and hotel arrangements at your destination to make your travel hassle-free.</p>
        </div>
      </div>

      {/* Office Locations Section */}
      <h2 className="text-2xl font-bold mb-4 text-center">Our Offices</h2>
      <p className="text-center text-gray-600 mb-6">
        Visit or contact one of our offices closest to you for personalized assistance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Dhaka Office</h3>
          <p className="text-gray-700">House 12, Road 3, Dhanmondi, Dhaka, Bangladesh</p>
          <p className="mt-2 font-medium text-gray-900">Phone: +880 1234 567890</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">London Office</h3>
          <p className="text-gray-700">221B Baker Street, London NW1 6XE, United Kingdom</p>
          <p className="mt-2 font-medium text-gray-900">Phone: +44 20 7946 0958</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Stockholm Office</h3>
          <p className="text-gray-700">Sveavägen 45, 111 34 Stockholm, Sweden</p>
          <p className="mt-2 font-medium text-gray-900">Phone: +46 8 123 4567</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
