import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/Network";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const MyVisas = () => {
  const visaTypes = ["Tourist visa", "Student visa", "Official visa", "Business visa", "Transit visa"];
  const { user } = useContext(AuthContext); // Get logged-in user from context
  const [visas, setVisas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState(null);

  useEffect(() => {
    if (user && user.email) {
      fetchVisas(user.email);
    }
  }, [user]); // Trigger when user changes

  const fetchVisas = async (email) => {
    try {
      const response = await fetch("http://localhost:9000/user-visas", {
        method: "POST", // POST request to send email in the body
        headers: {
          "Content-Type": "application/json", // Specify JSON content
        },
        body: JSON.stringify({ email }), // Send email as part of the body
      });

      if (!response.ok) {
        throw new Error("Failed to fetch visas");
      }

      const data = await response.json();
      setVisas(data); // Set fetched data to state
      setLoading(false); // Set loading to false once data is loaded
    } catch (error) {
      setError(error.message); // Set error message if something goes wrong
      setLoading(false);
    }
  };

  const handleRemoveVisa = async (visaId) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete this visa?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    });
  
    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:9000/remove-my-added-visa/${visaId}`, {
          method: "DELETE",
        });
  
        if (!response.ok) {
          throw new Error("Failed to remove visa");
        }
  
        Swal.fire({
          title: "Deleted!",
          text: "The visa has been removed.",
          icon: "success",
          confirmButtonText: "OK",
        });
  
        // Remove the visa from state
        setVisas((prevVisas) => prevVisas.filter((visa) => visa._id !== visaId));
      } catch (error) {
        console.error("Error removing visa:", error.message);
      }
    }
  };
  

  const handleEditVisa = (visa) => {
    setSelectedVisa(visa);
    setIsModalOpen(true);
  };

  const handleUpdateVisa = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:9000/update-visa/${selectedVisa._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedVisa)
      })
  
      if (!response.ok) {
        throw new Error("Failed to update visa");
      }
  
      const updatedVisa = await response.json();
      console.log(updatedVisa.countryName + ' updated response')
  
      // Update the visa in state
      setVisas((prevVisas) =>
        prevVisas.map((visa) => (visa._id === updatedVisa._id ? updatedVisa : visa))
      );



    } catch (error) {
      console.error("Error updating visa:", error.message);
    } finally {
      setIsModalOpen(false); // Close modal regardless of success or failure
      toast.success('Updated successfully ! ')
    }
  };
  // onnly for checkbox 
  const handleCheckboxChange = (doc) => {
    setSelectedVisa((prevVisa) => {
      const isChecked = prevVisa.requiredDocuments.includes(doc);
      
      // If document is checked, remove it from the array; otherwise, add it.
      const updatedDocuments = isChecked
        ? prevVisa.requiredDocuments.filter((item) => item !== doc) // Remove if checked
        : [...prevVisa.requiredDocuments, doc]; // Add if not checked
  
      // Return a new object to update state, preserving previous state values
      return {
        ...prevVisa, 
        requiredDocuments: updatedDocuments, // Update requiredDocuments array
      };
    });
  };
  
// Handle the change event for the dropdown
const handleVisaTypeChange = (event) => {
  const newVisaType = event.target.value;
  setSelectedVisa((prevSelectedVisa) => ({
    ...prevSelectedVisa,
    visaType: newVisaType, // Update the visaType in selectedVisa state
  }));
};
  if (loading) return <p>Loading your visas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="">
      <h1>My Visas</h1>
      {visas.length > 0 ? (
        <ul>
          {visas.map((visa, index) => (
            <li key={index} className="border-8 shadow-2xl rounded-xl lg:grid lg:grid-cols-4 gap-8 my-6 p-4 ">
              <p>Visa Title: {visa.visaType}</p>
              <p>Country: {visa.countryName}</p>
              <p>Description: {visa.description}</p>
              <p>Email: {visa.userEmail}</p>
              <p>processing time: {visa.processingTime}</p>
              {/* this line made problem before age restriction  */}
              <p>age res: {visa.ageRestriction}</p> 
              <p>req doc: {visa.requiredDocuments[0]}</p> 
              <p>fee: {visa.fee}</p>
              <div className="flex gap-2">
                <button
                  className="btn-secondary btn text-xl"
                  onClick={() => handleRemoveVisa(visa._id)}
                >
                  Remove X
                </button>
                <button
                  className="btn-primary btn text-xl"
                  onClick={() => handleEditVisa(visa)}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No visas found.</p>
      )}

      {/* Modal for Editing Visa */}
      {isModalOpen && selectedVisa && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-scroll ">
    <div className="bg-white p-6 rounded-lg lg:w-1/2  sm:h-2/4 lg:h-auto h-3/4 overflow-scroll">
      <h2 className="text-xl mb-4">Edit Visa</h2>
      <form onSubmit={handleUpdateVisa}>
        {/* Country Name */}
        <div className="mb-4">
          <label className="block mb-2">Country Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={selectedVisa.countryName || ""}
            onChange={(e) =>
              setSelectedVisa({ ...selectedVisa, countryName: e.target.value })
            }
          />
        </div>

        {/* Country Image */}
        <div className="mb-4">
          <label className="block mb-2">Country Image URL</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={selectedVisa.countryImage || ""}
            onChange={(e) =>
              setSelectedVisa({ ...selectedVisa, countryImage: e.target.value })
            }
          />
        </div>

        {/* Visa Type */}
  {/* Visa Type Dropdown */}
  <div className="mb-4">
        <label className="block mb-2">Visa Type</label>
        <select
          value={selectedVisa.visaType} // Preselect the value from selectedVisa.visaType
          onChange={handleVisaTypeChange} // Update the selectedVisa state when selection changes
          className="w-full border p-2 rounded"
        >
          {/* Map through the visaTypes array to create options */}
          {visaTypes.map((visa) => (
            <option key={visa} value={visa}>
              {visa}
            </option>
          ))}
        </select>
      </div>
         {/* Display the selected Visa type */}
         <div className="mt-4">
        <p>You have selected: {selectedVisa.visaType}</p>
      </div>

        {/* Processing Time */}
        <div className="mb-4">
          <label className="block mb-2">Processing Time</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={selectedVisa.processingTime || ""}
            onChange={(e) =>
              setSelectedVisa({
                ...selectedVisa,
                processingTime: e.target.value,
              })
            }
          />
        </div>


{/* Required Documents */}
<div>
  <label className="block font-semibold mb-1">Add New Required Documents</label>
  <div className="space-y-2">
    {["Valid passport", "Visa application form", "Recent passport-sized photograph"].map((doc) => {
      const isChecked =
        Array.isArray(selectedVisa?.requiredDocuments) &&
        selectedVisa.requiredDocuments.some((requiredDoc) => requiredDoc === doc); // Safeguard added

      return (
        <label key={doc} className="block">
          <input
            type="checkbox"
            value={doc}
            checked={isChecked} // Set checked based on comparison
            onChange={() => handleCheckboxChange(doc)} // Handle checkbox toggle
          />
          <span className="ml-2">{doc}</span>
        </label>
      );
    })}
  </div>
</div>





        {/* Age Restriction */}
        <div className="mb-4">
          <label className="block mb-2">Age Restriction</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={selectedVisa?.ageRestriction || ""}
            onChange={(e) =>
              setSelectedVisa({ ...selectedVisa, ageRestriction: e.target.value })
            }
          />
        </div>

        {/* Fee */}
        <div className="mb-4">
          <label className="block mb-2">Fee</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={selectedVisa.fee || ""}
            onChange={(e) =>
              setSelectedVisa({ ...selectedVisa, fee: e.target.value })
            }
          />
        </div>

        {/* Validity */}
        <div className="mb-4">
          <label className="block mb-2">Validity</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={selectedVisa.validity || ""}
            onChange={(e) =>
              setSelectedVisa({ ...selectedVisa, validity: e.target.value })
            }
          />
        </div>

        {/* Application Method */}
        <div className="mb-4">
          <label className="block mb-2">Application Method</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={selectedVisa.applicationMethod || ""}
            onChange={(e) =>
              setSelectedVisa({
                ...selectedVisa,
                applicationMethod: e.target.value,
              })
            }
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="btn-secondary btn"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
          <button type="submit" className="btn-primary btn">
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default MyVisas;
