import React from 'react';

const Jobs = () => {
  const jobListings = [
    {
      title: "Visa Consultant",
      location: "New York, USA",
      type: "Full-Time",
      salary: "$60,000 - $80,000/year",
      description: "Help clients navigate the visa application process and provide support with document preparation.",
      email: "visa_world@sk.com"
    },
    {
      title: "Customer Support Representative",
      location: "London, UK",
      type: "Part-Time",
      salary: "$25/hour",
      description: "Assist customers with their inquiries and provide excellent support via email and chat.",
      email: "visa_world@sk.com"
    },
    {
      title: "Visa Application Specialist",
      location: "Berlin, Germany",
      type: "Full-Time",
      salary: "$50,000 - $70,000/year",
      description: "Specialize in processing visa applications and ensuring all necessary documentation is in place.",
      email: "visa_world@sk.com"
    },
    {
      title: "Travel Coordinator",
      location: "Toronto, Canada",
      type: "Contract",
      salary: "$40,000 - $55,000/year",
      description: "Coordinate travel plans, including transportation and accommodation, for clients in visa programs.",
      email: "visa_world@sk.com"
    },
    {
      title: "Marketing Manager",
      location: "Sydney, Australia",
      type: "Full-Time",
      salary: "$70,000 - $90,000/year",
      description: "Lead marketing campaigns to promote the company's services and drive customer engagement.",
      email: "visa_world@sk.com"
    },
    {
      title: "IT Support Specialist",
      location: "Singapore",
      type: "Full-Time",
      salary: "$50,000 - $60,000/year",
      description: "Provide technical support to internal teams and clients, ensuring smooth operations of digital services.",
      email: "visa_world@sk.com"
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Career Opportunities at Visa World Ltd.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobListings.map((job, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">Location: {job.location}</p>
            <p className="text-gray-600">Job Type: {job.type}</p>
            <p className="text-gray-600">Salary: {job.salary}</p>
            <p className="mt-2 text-gray-800">{job.description}</p>
            <p className="mt-4 text-blue-500">Apply via email: <a href={`mailto:${job.email}`}>{job.email}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
