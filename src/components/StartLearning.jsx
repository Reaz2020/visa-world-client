import React from 'react';
import { Link } from 'react-router-dom';

const StartLearning = () => {
  // Static lessons (for demonstration)
  const lessons = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="p-6">
      {/* Page Title */}
      <div className="text-6xl font-bold text-center mb-8">Let's Learn</div>

      {/* Lesson Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-8">
        {lessons.map((lessonNo) => (
          <Link
            key={lessonNo}
            to={`/lessons/${lessonNo}`}
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-xl font-semibold text-gray-800">Lesson {lessonNo}</div>
          </Link>
        ))}
      </div>

      {/* Tutorial Section */}
      <div className="mb-8">
        <div className="text-2xl font-semibold text-center mb-4">Learn the Alphabet</div>
        <div className="flex justify-center">

       <iframe width="560" height="315" 

        src="https://www.youtube.com/embed/kqeEfqe6gMw?si=IkwNlEUbWM8eicpp" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>

       </iframe>

        </div>
      </div>

      {/* View More Button */}
      <div className="text-center">
        <Link
          to="/tutorial"
          className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-lg"
        >
          View More Tutorials
        </Link>
      </div>
    </div>
  );
};

export default StartLearning;
