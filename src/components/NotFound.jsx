// NotFound.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  // Function to go back to home
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-4">Sorry, the page you are looking for does not exist.</p>
      <button
        onClick={goToHome}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default NotFound;
