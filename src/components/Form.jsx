import { useContext, useState } from "react";
import { AuthContext } from "../providers/Network";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify"; // For toast notifications

const Form = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const { SignInUser, handleGoogleSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState(""); // Track email state

  // Determine redirection route after successful login
  const handleNavigate = () => {
    navigate(location?.state || "/");
  };

  // Handle login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const userCredential = await SignInUser(email, password);
      handleNavigate();
      toast.success("Login successful!");
    } catch (error) {
      const errorMsg = error.message;
      setErrorMessage(errorMsg);
      toast.error(`Login failed: ${errorMsg}`);
    }
  };

  // Navigate to the register page
  const handleNavigateToRegister = () => {
    navigate("/register");
  };

  // Google sign-in
  const handleGoogleSignInLocally = async () => {
    try {
      const result = await handleGoogleSignIn();
      handleNavigate();
      toast.success("Google login successful!");
    } catch (error) {
      const errorMsg = error.message;
      toast.error(`Google login failed: ${errorMsg}`);
    }
  };

  // Navigate to forgot password page with email if available
  const handleNavigateToForgotPassword = () => {
    navigate("/forgot-password", { state: { email } });
  };

  return (
    <div className="container mx-auto border-2">
      {/* Navigation buttons */}
      <div className="text-center mb-4">
        <button
          className="border-2 bg-lime-400 hover:bg-lime-600 w-32 rounded-full p-4"
          onClick={handleNavigate}
        >
          Home
        </button>
        <button
          className="border-2 bg-lime-400 hover:bg-lime-600 w-32 rounded-full p-4"
          onClick={handleNavigateToRegister}
        >
          Register
        </button>
      </div>

      {/* Login Form */}
      <form
        className="w-1/2 container mx-auto flex flex-col my-2 gap-2"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-2xl font-bold mb-4">User Login</h2>

        {/* Email Input */}
        <label>
          Email
          <input
            onChange={(e) => setEmail(e.target.value)} 
            name="email"
            type="email"
            placeholder="Enter your email"
            className="border-2 w-full p-2 rounded"
            required
          />
        </label>

        {/* Password Input */}
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="border-2 w-full p-2 rounded"
            required
          />
        </label>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-600 text-lg">{errorMessage}</p>
        )}

        {/* Login Button */}
        <button className="btn btn-primary w-full p-2 mt-4" type="submit">
          Login
        </button>
      </form>

      {/* Google Login Button */}
      <div className="mt-4">
        <button
          className="btn btn-primary w-full p-2"
          onClick={handleGoogleSignInLocally}
        >
          Log in with Google
        </button>
      </div>

      {/* Forgot Password Link */}
      <div className="text-center mt-4">
        <button
          onClick={handleNavigateToForgotPassword}
          className="text-blue-500 underline"
        >
          Forgot Password?
        </button>
      </div>
    </div>
  );
};

export default Form;
