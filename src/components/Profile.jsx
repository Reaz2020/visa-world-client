import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../providers/Network'; 
import { Link } from 'react-router-dom';

const Profile = () => {

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
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-center text-white">Welcome to Your Profile</h1>
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
          <Link
            to="/update-profile"
            className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-lg"
          >
            Update Profile Information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;

