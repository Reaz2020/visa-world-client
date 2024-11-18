import React from 'react';
import { Link } from 'react-router-dom';

const Tutorials = () => {
  // List of YouTube video links for language tutorials
  const videos = [
    "https://www.youtube.com/embed/kqeEfqe6gMw?autoplay=1", 
    "https://www.youtube.com/embed/uM-OgxS8bZg?autoplay=1",
    "https://www.youtube.com/embed/aGoC_gVjdr4?autoplay=1", 
    "https://www.youtube.com/embed/IPU9kJ4sGGU?autoplay=1", 
    "https://www.youtube.com/embed/NnZ4uBYeqiM?autoplay=1", 
    "https://www.youtube.com/embed/6JDvVpK8Knk?autoplay=1", 
    "https://www.youtube.com/embed/6JDvVpK8Knk?autoplay=1&si=3fa65jrqKjILsyzX",
  ];

  return (
    <div className="p-6">
      {/* Page Title */}
      <div className="text-5xl font-bold text-center mb-8">Language Learning Tutorials</div>

      {/* Embed Videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        {videos.map((videoUrl, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              width="100%"
              height="315"
              src={videoUrl}
              title={`Tutorial Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* Button to navigate to "Start Lesson" */}
      <div className="text-center">
        <Link
          to="/start-learning"
          className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-lg"
        >
          Learn Vocabularies
        </Link>
      </div>
    </div>
  );
};

export default Tutorials;
