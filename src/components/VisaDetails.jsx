import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const VisaDetails = () => {
  const { id } = useParams();
  // Get visaId from the URL
  const [visaData, setVisaData] = useState(null);

  useEffect(() => {
    // Fetch visa details based on visaId
    const fetchVisaDetails = async () => {
      const response = await fetch(`http://localhost:8000/visa/${id}`);

   //   console.log(id+' params')
      const data = await response.json();
      setVisaData(data);
      console.log(data)
    };

    fetchVisaDetails();
  }, [id]);

  if (!visaData) return <p>Loading...</p>;
  const { 
    countryImage, 
    countryName
    ,visaType, 
    userEmail} = visaData;

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto mt-8">
      <h1 className="text-xl font-bold mb-4 text-purple-700">Visa Details</h1>
      <p className="mb-2">
        <span className="font-semibold">Email:</span> {
userEmail}
      </p>
   
      <p className="mb-2">
        <span className="font-semibold">Type:</span> {visaType}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Country:</span> { countryName}
      </p>
   
      <button
        className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800"
        onClick={() => alert("Apply button clicked!")}
      >
        Apply
      </button>
    </div>
  );
};

export default VisaDetails;
