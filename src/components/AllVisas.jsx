import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
import Loading from "./Loading";

const AllVisasPage = () => {
  const [visas, setVisas] = useState([]);
  const [filteredVisas, setFilteredVisas] = useState([]);
  const [selectedVisaType, setSelectedVisaType] = useState("");
  const [loading,setLoading]=useState(true)
  const navigate = useNavigate();


  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Fetch visas 
  useEffect(() => {
    const fetchVisas = async () => {
      try {
        const response = await fetch("http://localhost:9000/visas");

        if (!response.ok) {
          throw new Error("Failed to fetch visas");
        }
        const data = await response.json(); // Parsing JSON response
        setVisas(data); // Store fetched visas in state
        setFilteredVisas(data); // Initially, showing all visas
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch visas", error);
      }
    };

    fetchVisas();
  }, []); 

  // Handle visa type filter change
  const handleVisaTypeChange = (e) => {
    const selectedType = e.target.value;
    setSelectedVisaType(selectedType);
    
    if (selectedType === "") {
      setFilteredVisas(visas); // Showing all visas if no filter is selected
    } else {
      const filtered = visas.filter((visa) => visa.visaType === selectedType);
      setFilteredVisas(filtered);
    }
  };

  const handleSeeDetails = (id) => {
    navigate(`/visa-details/${id}`);
  };
  if(loading)  {return <Loading></Loading> }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-500">All Visas</h1>
      
      {/* Dropdown for visa type filter */}
      <div className="mb-6">
        <label htmlFor="visaType" className="block text-lg font-semibold mb-2 text-purple-500">
          Filter by Visa Type
        </label>
        <select
          id="visaType"
          value={selectedVisaType}
          onChange={handleVisaTypeChange}
          className="p-2 border rounded-lg w-full sm:w-1/3"
        >
          <option value="">All Visa Types</option>
          <option value="Tourist visa">Tourist visa</option>
          <option value="Student visa">Student visa</option>
          <option value="Official visa">Official visa</option>
     
        </select>
      </div>

      {/* Display filtered visas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredVisas.map((visa) => (
          <div
            key={visa._id} 
            data-aos="fade-up"
            className="bg-white p-4 shadow rounded-lg hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2">{visa.countryName}</h2>
            <img
              src={visa.countryImage}
              alt={`Flag of ${visa.country}`}
              className="w-16 h-10 mt-2"
            />
            <p className="text-gray-700">Visa Type: {visa.visaType}</p>
            <p className="text-gray-700">Processing Time: {visa.processingTime}</p>
            <p className="text-gray-700">Description: {visa.description}</p>
            <p className="text-gray-700">Required Documents: {visa.requiredDocuments}</p>
            <p className="text-gray-700">Application Method: {visa.applicationMethod}</p>
            <p className="text-gray-700">Age Restriction: {visa.ageRestriction}</p>
            <button
              onClick={() => handleSeeDetails(visa._id)} // Pass the unique ID of the visa
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              See Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisasPage;
