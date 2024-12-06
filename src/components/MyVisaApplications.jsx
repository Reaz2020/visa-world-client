import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/Network";
import { data } from "autoprefixer";
import Swal from "sweetalert2";

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext); // Get logged-in user from context
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      fetch(`http://localhost:9000/user-applications?searchParams=${search}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch applications");
          }
          return res.json();
        })
        .then((data) => {
          //console.log(data); // Log the fetched data
          setApplications(data);
        })
        .catch((error) => {
          console.error("Error fetching applications:", error);
        });
    }
  }, [search]);// Triggers when searching field  changes



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
        throw new Error("Failed to fetch applications or No applications available ");
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
    // Use SweetAlert2 for confirmation before deleting
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
  
    if (result.isConfirmed) {
      try {
        const response = await fetch("http://localhost:9000/delete-application", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ applicationId }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to remove application");
        }
  
        // Remove the deleted application from the state list
        setApplications((prevApplications) =>
          prevApplications.filter((application) => application._id !== applicationId)
        );
  
        // Show a success confirmation
        Swal.fire({
          title: "Deleted!",
          text: "Your application has been deleted.",
          icon: "success",
        });
      } catch (error) {
        setError(error.message);
      }
    }
  };
  


//console.log(search);
  if (loading) return <p>Loading your visa applications...</p>; //unnecessary 
  if (error) return <p>Error: {error}</p>;

  return (
 <div>

     <div>
     
      <div className="border-2 text-center">
        <input
          type="text"
          className="border  rounded-md p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400 mx-auto border-blue-600 h-16"
          placeholder="Enter a country name to SEARCH "
        
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>
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
 </div>
  );
};

export default MyVisaApplications;
