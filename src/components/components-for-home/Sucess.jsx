import React from 'react';

const Success = () => {
  const visaCards = [
    {
      id: 1,
      image: '/visa-1.png',
      country: 'USA',
      visaType: 'Tourist Visa',
      validity: '6 months',
      date: '1-12-24',
    },
    {
      id: 2,
      image: '/visa-2.png',
      country: 'USA',
      visaType: 'Student Visa',
      validity: '1 year',
      date: '1-12-24',
    },
    {
      id: 3,
      image: '/visa-5.png',
      country: 'MALAYSIA',
      visaType: 'Work Visa',
      validity: '2 years',
      date: '1-12-24',
    },
    {
      id: 4,
      image: '/visa-4.png',
      country: 'UK',
      visaType: 'Business Visa',
      validity: '1 year',
      date: '1-12-24',
    },
  ];

  return (
    <div className="min-h-40 bg-purple-400 text-center py-8">
      <h1 className="text-3xl font-bold text-white mb-6">Visa Success</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {visaCards.map((visa) => (
          <div
            key={visa.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img src={visa.image} alt={`Visa ${visa.id}`} className="w-full h-40 object-cover" />
            <div className="p-4 text-left">
              <h2 className="text-xl font-semibold text-gray-800">{visa.country}</h2>
              <p className="text-gray-600">Visa Type: {visa.visaType}</p>
              <p className="text-gray-600">Validity: {visa.validity}</p>
              <p className="text-gray-600">Received: {visa.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Success;
