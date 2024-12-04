import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/Network";

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext); // Get logged-in user from context
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user && user.email) {
      fetchVisaApplications(user.email);
    }
  }, [user]); // Trigger when user changes

  const fetchVisaApplications = async (email) => {
    try {
      const response = await fetch("http://localhost:9000/user-applications", {
        method: "POST", // POST request to send email in the body
        headers: {
          "Content-Type": "application/json", // Specify JSON content
        },
        body: JSON.stringify({ email }), // Send email as part of the body
      });

      if (!response.ok) {
        throw new Error("Failed to fetch applications");
      }

      const data = await response.json();
      setApplications(data); // Set fetched data to state
      setLoading(false); // Set loading to false once data is loaded
    } catch (error) {
      setError(error.message); // Set error message if something goes wrong
      setLoading(false);
    }
  };

  const handleRemoveApplication = async (applicationId) => {
    try {
      const response = await fetch("http://localhost:9000/delete-application", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ applicationId }), // Send the applicationId in the body
      });

      if (!response.ok) {
        throw new Error("Failed to remove application");
      }

      // Remove the deleted application from the state list
      setApplications((prevApplications) =>
        prevApplications.filter((application) => application._id !== applicationId)
      );
    } catch (error) {
      setError(error.message); // Set error message if something goes wrong
    }
  };

  if (loading) return <p>Loading your visa applications...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>My Visa Applications</h1>
      {applications.length > 0 ? (
        <ul>
          {applications.map((application, index) => (
            <li key={index} className="border-2 lg:grid lg:grid-cols-5 my-6 p-4">
              <p>Visa Type: {application.visaType}</p>
              <p>Country: {application.countryName}</p>
              <p>Applied Date: {application.appliedDate}</p>
              <p>Email: {application.email}</p>
            
              <button
                className="btn-primary btn text-xl"
                onClick={() => handleRemoveApplication(application._id)} // Call handleRemoveApplication when clicked
              >
                Remove x
              </button>
              {/* Add more application details as needed */}
            </li>
         
          ))}
             
        </ul>
      ) : (
        <p>No applications found.</p>
      )}
    </div>
  );
};

export default MyVisaApplications;
