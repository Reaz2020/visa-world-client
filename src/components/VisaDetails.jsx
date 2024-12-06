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
          appliedDate: new Date().toISOString().split("T")[0],
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
      email: user?.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      appliedDate: formData.appliedDate,
      fee: formData.fee,
      countryName:visaData.countryName,
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
        <span className="font-semibold">Email:</span> {visaData.userEmail}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Type:</span> {visaType}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Country:</span> {countryName}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Fee:</span> ${visaData.fee}
      </p>
      <button
        className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800"
        onClick={() => setIsModalOpen(true)} // Open modal on click
      >
        Apply
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-lg font-bold mb-4">Apply for Visa</h2>
            <form onSubmit={handleApply}>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  name="countryName"
                  value={visaData.countryName}
                  //onChange={handleInputChange}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
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
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
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
                <label className="block text-sm font-medium text-gray-700">
                  Applied Date
                </label>
                <input
                  type="text"
                  name="appliedDate"
                  value={formData.appliedDate}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Fee
                </label>
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
                  onClick={() => setIsModalOpen(false)} // Close modal
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
