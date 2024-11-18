import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/Network";
import { toast } from "react-toastify"; 


const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();


  const [passwordError, setPasswordError] = useState("");

  const handleNavigate = () => {
    navigate("/");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password validation
    const passwordValidation = validatePassword(password);
    if (passwordValidation !== true) {
      setPasswordError(passwordValidation);
      return;
    } else {
      setPasswordError(""); // Clear previous error
    }

    // Create user with email and password
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Registration Successful!", { position: toast.POSITION.TOP_CENTER });
        navigate("/"); // Navigate to home after successful registration
      })
      .catch((error) => {
        console.error("ERROR:", error.message);
        toast.error(error.message, { position: toast.POSITION.TOP_CENTER });
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
    return true; // Password is valid
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Google Authentication Successful!", { position: toast.POSITION.TOP_CENTER });
        navigate("/"); 
      })
      .catch((error) => {
        console.error("ERROR:", error.message);
        toast.error(error.message, { position: toast.POSITION.TOP_CENTER });
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
          About You
          <textarea name="about" className="border-2 p-2 mt-1 w-full" placeholder="Tell us about yourself" />
        </label>
        
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-3 mt-4 rounded-full">Register</button>
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
          onClick={handleGoogleSignIn}
          className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-full"
        >
          Register with Google
        </button>
      </div>

      {/*  to Home Page Button */}
      <div className="text-center mt-8">
        <button className="border-2 bg-lime-400 hover:bg-lime-600 w-32 rounded-full p-4" onClick={handleNavigate}>Go to Home</button>
      </div>
    </div>
  );
};

export default Register;
