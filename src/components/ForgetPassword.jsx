import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Set initial email state to the email passed in via location state or an empty string
  const [email, setEmail] = useState(location.state?.email || "");

  const handleResetPassword = () => {
    // Redirect to Gmail after clicking "Reset Password" button
    window.location.href = "https://mail.google.com";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-700 p-4 opacity-80">
    <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
        Reset Your Password
      </h2>

      <form className="space-y-4">
        {/* Email Field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-600 font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Reset Button */}
        <button
          type="button"
          onClick={handleResetPassword}
          className="w-full py-3 mt-4 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition duration-300 font-semibold"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  </div>
  );
};

export default ForgetPassword;
