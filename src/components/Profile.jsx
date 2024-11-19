import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../providers/Network'; 
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
     
      setUserData({
        photo: user.photoURL,
        name: user.displayName,
        email: user.email
      });
    }
  }, [user]);

  if (!user) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-bold">Please login to view your profile</h2>
        <Link to="/login" className="text-blue-500">Login</Link>
      </div>
    );
  }
  const handleUpdateClick = () => {
    navigate("/update-profile");
  };
  return (
    <div className="p-6">
      {/* Profile Cover */}
      <div
        className="hero mb-8"
        style={{
          backgroundImage: 'url(https://img.daisyui.com/images/stock/photo-1494794343960-1e0e79d6b93f.webp)',
          backgroundSize: 'cover',
          height: '300px',
        }}
      >
        <div className="hero-overlay bg-orange-600 bg-opacity-60"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold text-center text-white"> Hello! {user.displayName} Welcome to Your Dashboard</h1>
          </div>
        </div>
      </div>

      {/* User Information Card */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center mb-6">
          {/* User Photo */}
          <img
            src={userData?.photo || 'https://via.placeholder.com/150'}
            alt="User Photo"
            className="w-24 h-24 rounded-full object-cover mr-6"
          />
          <div>
            <h2 className="text-2xl font-semibold">{userData?.name || 'User Name'}</h2>
            <p className="text-gray-600">{userData?.email || 'user@example.com'}</p>
          </div>
        </div>

        {/* Update User Information Section (Optional for future) */}
        <div className="text-center mt-8">
        <button
        onClick={handleUpdateClick}
        className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
      >
        Update Profile
      </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

