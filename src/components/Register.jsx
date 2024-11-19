import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/Network";
import { toast } from "react-toastify";


const Register = () => {

  const { createUser, handleGoogleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");


  const handleNavigate = () => {
    navigate("/home");
  };


  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;


    const passwordValidation = validatePassword(password);
    if (passwordValidation !== true) {
      setPasswordError(passwordValidation);
      toast.error(passwordValidation);
      return;
    } else {
      setPasswordError("");
    }

    // Create user
    createUser(email, password)
      .then((result) => {
     
       // toast.success("Registration Successful!", { position: toast.POSITION.TOP_CENTER });
        handleNavigate();
      })
      .catch((error) => {
  
       toast.error(error.message);
      });
  };


  const validatePassword = (password) => {
    const upperCasePattern = /[A-Z]/;
    const lowerCasePattern = /[a-z]/;
    const minLength = 6;

    if (!upperCasePattern.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!lowerCasePattern.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (password.length < minLength) {
      return `Password must be at least ${minLength} characters long.`;
    }
    return true;
  };

  // Handle Google sign-in
  const handleGoogleSignInLocally = () => {
    handleGoogleSignIn()
      .then((result) => {
       
       // toast.success("Google Authentication Successful!", { position: toast.POSITION.TOP_CENTER });
        navigate("/");
      })
      .catch((error) => {
       // console.error("ERROR:", error.message);
        toast.error(error.message);
      });
  };

  return (
    
    <div className="container mx-auto py-8">

      <h1 className="text-center text-3xl font-bold mb-6">Register</h1>
      
      {/* Register Form */}
      <form onSubmit={handleRegister} className="w-1/2 mx-auto flex flex-col gap-4">
        <label className="text-sm font-medium">
          Name
          <input name="name" type="text" className="border-2 p-2 mt-1 w-full" placeholder="Enter your name" required />
        </label>
        
        <label className="text-sm font-medium">
          Email
          <input name="email" type="email" className="border-2 p-2 mt-1 w-full" placeholder="Enter your email" required />
        </label>
        
        <label className="text-sm font-medium">
          Password
          <input
            name="password"
            type="password"
            className="border-2 p-2 mt-1 w-full"
            placeholder="Enter your password"
            required
          />
          {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
        </label>
        
        <label className="text-sm font-medium">
          Photo URL
          <input
            name="photoURL"
            type="text"
            className="border-2 p-2 mt-1 w-full"
            placeholder="Enter your photo URL"
          />
        </label>

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-3 mt-4 rounded-full">
          Register
        </button>
      </form>

      {/* Link to Login */}
      <div className="mt-4 text-center">
        <p>
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>

      {/* Social Login Button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleGoogleSignInLocally}
          className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-full"
        >
          Register with Google
        </button>
      </div>

      {/* Go to Home Page Button */}
      <div className="text-center mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 mt-4 rounded-full"
          onClick={handleNavigate}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Register;
