import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext} from "react";
import { AuthContext } from "../providers/Network";
import { toast } from "react-toastify";

const VisaDetails = ({ loggedInUser }) => {
  const { user } = useContext(AuthContext);
  const { id } = useParams(); // Get 'id' from the URL
  const [visaData, setVisaData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    appliedDate: "",
    fee: "",
    countryName:""
  });

  useEffect(() => {
    const fetchVisaDetails = async () => {
      try {
        const response = await fetch(`http://localhost:9000/visa/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch visa details");
        }
        const data = await response.json();
        setVisaData(data);

        // Pre-fill form data with fetched visa details
        setFormData({
          email: data.userEmail || "",
          firstName: "",
          lastName: "",
          appliedDate: new Date().toLocaleDateString("en-CA"), 
          fee: data.fee || "",
        });
      } catch (error) {
        console.error("Error fetching visa details:", error);
      }
    };

    fetchVisaDetails();
  }, [id]);

  if (!visaData) return <p>Loading...</p>;

  const { countryName, visaType } = visaData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApply = async (e) => {
    e.preventDefault();
  
    const applicationData = {
      email: user?.email || 'N/A',
      firstName: formData?.firstName || 'N/A',
      lastName: formData?.lastName || 'N/A',
      appliedDate: formData?.appliedDate || new Date().toLocaleDateString(),
      fee: formData?.fee || 0,
      countryName: visaData?.countryName || 'N/A',
      countryImage: visaData?.countryImage || 'N/A',
      processingTime: visaData?.processingTime || 'N/A',
      visaType: visaData?.visaType || 'N/A',
      validity: visaData?.validity || 'N/A',
      applicationMethod: visaData?.applicationMethod || 'N/A',
    };
    
  
    try {
      const response = await fetch("http://localhost:9000/applying", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
      });
  
      if (!response.ok) {
        alert('data not inserted')
        throw new Error("Failed to submit application");
      }
  
      const result = await response.json();
      console.log("Application Submitted:", result);
    } catch (error) {
      console.error("Error submitting application:", error);
    } finally {
      // Ensure modal is closed in both success and error scenarios
      setIsModalOpen(false);
      toast.success('Thanks your application was successful !')
    }
  };
  

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto mt-8">
      <h1 className="text-xl font-bold mb-4 text-purple-700">Visa Details</h1>
      <p className="mb-2">
        <span className="font-semibold">Email:</span> {visaData.countryName}
      </p>
      <p className="mb-2">
      <img src={visaData.countryImage} alt="Country" className="font-semibold max-w-40" />

      </p>
      <p className="mb-2">
        <span className="font-semibold">processing time:</span> {visaData.processingTime}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Email:</span> {visaData.userEmail}
      </p>
        <p className="mb-2">
                <span className="font-semibold">Req doc:</span>{" "}
                {visaData.requiredDocuments.join(", ")}
        </p>

        <p className="mb-2">
        <span className="font-semibold">Description:</span> {visaData.description}
      </p>

      <p className="mb-2">
        <span className="font-semibold">Type:</span> {visaType}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Age restriction *min age :</span> {visaData.ageRestriction}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Fee:</span> ${visaData.fee}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Validity:</span> {visaData.validity}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Application method:</span> {visaData.applicationMethod}
      </p>
      <button
        className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800 mb-8"
        onClick={() => setIsModalOpen(true)} // Open modal on click
      >
        Apply
      </button>

   {/* Modal */}
{/* Modal */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-md w-96 overflow-scroll h-full">
      <h2 className="text-lg font-bold mb-4">Apply for Visa</h2>
      <form onSubmit={handleApply}>
        
        {/* Country Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            name="countryName"
            value={visaData.countryName}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>

        {/* Processing Time */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Processing Time</label>
          <input
            type="text"
            name="processingTime"
            value={visaData.processingTime}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>

        {/* Country Image */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Country Image</label>
          <img 
            src={visaData.countryImage} 
            alt="Country" 
            className="w-full h-32 object-cover rounded-lg" 
          />
        </div>

        {/* Visa Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Visa Type</label>
          <input
            type="text"
            name="visaType"
            value={visaData.visaType}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>

        {/* Validity */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Validity</label>
          <input
            type="text"
            name="validity"
            value={visaData.validity}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>

        {/* User Details */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={user?.email}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Applied Date</label>
          <input
            type="text"
            name="appliedDate"
            value={formData.appliedDate}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Fee</label>
          <input
            type="text"
            name="fee"
            value={`$${formData.fee}`}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 rounded-lg mr-2"
            onClick={() => setIsModalOpen(false)} 
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  </div>
)}


    </div>
  );
};

export default VisaDetails;
