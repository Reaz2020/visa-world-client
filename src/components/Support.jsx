import React from 'react';

const Support = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Support</h1>
      <p className="mb-4">
        Our support team is dedicated to providing comprehensive assistance for all your needs. Whether you need help with visa applications, travel arrangements, or just have a question, we're here to help. Explore the various support services we offer:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-2">One-to-One Solutions</h2>
          <p>Get personalized assistance with our dedicated support team for any inquiries or issues.</p>
        </div>
        <div className="card bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-2">24/7 Email and Chat Help</h2>
          <p>We offer round-the-clock support through email and chat to ensure your concerns are addressed promptly.</p>
        </div>
        <div className="card bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-2">Mentorship Support</h2>
          <p>Receive expert guidance and mentorship until your visa application is successfully completed.</p>
        </div>
        <div className="card bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-2">Language Support</h2>
          <p>We provide language support to help bridge communication gaps during your application process.</p>
        </div>
        <div className="card bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-2">Transportation & Hotel Assistance</h2>
          <p>Get help with transportation and hotel arrangements at your destination to make your travel hassle-free.</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
