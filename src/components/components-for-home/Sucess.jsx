import React from 'react';
import CountUp from 'react-countup';

const Success = () => {
  // Dummy data
  const userCount = 500;
  const lessonCount = 1200;
  const vocabularyCount = 3500;
  const tutorialCount = 200;

  return (
    <div className="text-center py-10 border-2  ">
      <h2 className="text-3xl font-semibold mb-8">Success Overview</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {/* User Count Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-64 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl text-gray-800 font-semibold">User Count</h3>
          <div className="text-4xl font-bold text-green-500 mt-4">
            <CountUp start={0} end={userCount} duration={2.5} separator="," />
          </div>
        </div>

        {/* Lesson Count Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-64 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl text-gray-800 font-semibold">Lesson Count</h3>
          <div className="text-4xl font-bold text-blue-500 mt-4">
            <CountUp start={0} end={lessonCount} duration={2.5} separator="," />
          </div>
        </div>

        {/* Vocabulary Count Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-64 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl text-gray-800 font-semibold">Vocabulary Count</h3>
          <div className="text-4xl font-bold text-purple-500 mt-4">
            <CountUp start={0} end={vocabularyCount} duration={2.5} separator="," />
          </div>
        </div>

        {/* Tutorial Count Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-64 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl text-gray-800 font-semibold">Tutorial Count</h3>
          <div className="text-4xl font-bold text-orange-500 mt-4">
            <CountUp start={0} end={tutorialCount} duration={2.5} separator="," />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
