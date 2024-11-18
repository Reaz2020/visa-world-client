import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/Network"; // adjust based on your path
import { updateProfile } from "firebase/auth"; // Firebase import for profile updates

const UpdateProfile = () => {
  const { user,handleUpdateUser  } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdateProfileLocally = async () => {
    handleUpdateUser(name, photoURL).then(() => {
       // setUser({ ...user, displayName: name, photoURL: photoURL }); // Update local user state
        console.log("User profile updated successfully");
        navigate('/profile')
      })
      .catch((error) => {
        console.error("Error updating user profile:", error);
      });;
   
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Update Profile</h2>
        
        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="text-gray-600 font-semibold mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div>
            <label className="text-gray-600 font-semibold mb-2">Photo URL</label>
            <input
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter photo URL"
              required
            />
          </div>

          {/* Update Button */}
          <button
            type="button"
            onClick={handleUpdateProfileLocally}
            className="w-full py-3 mt-4 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition duration-300 font-semibold"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
