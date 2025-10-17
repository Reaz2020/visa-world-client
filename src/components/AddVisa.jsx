import { useContext} from "react";
import { AuthContext } from "../providers/Network";
import React, { useState } from "react";
import { toast } from "react-toastify";


const AddVisa = () => {
  const { user,signOutUser} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    countryImage: "",
    countryName: "",
    visaType: "",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle checkbox selection
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        requiredDocuments: [...prev.requiredDocuments, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        requiredDocuments: prev.requiredDocuments.filter((doc) => doc !== value),
      }));
    }
  };

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
      // Add user's email to form data
      const visaData = { ...formData, userEmail: user.email };
    try {
      // Send data to the database
      const response = await fetch("https://visa-app-server.vercel.app/add-visa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(visaData),
      });

      if (response.ok) {
        toast.success("Visa added successfully!");
        setFormData({
          countryImage: "",
          countryName: "",
          visaType: "",
          processingTime: "",
          requiredDocuments: [],
          description: "",
          ageRestriction: "",
          fee: "",
          validity: "",
          applicationMethod: "",
        });
      } else {
        toast.error("Failed to add visa. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto border-2 shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-purple-500">Add Visa</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Country Image */}
        <div>
          <label className="block font-semibold mb-1">Country Image URL</label>
          <input
            type="text"
            name="countryImage"
            value={formData.countryImage}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Country Name */}
        <div>
          <label className="block font-semibold mb-1">Country Name</label>
          <input
            type="text"
            name="countryName"
            value={formData.countryName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Visa Type */}
        <div>
          <label className="block font-semibold mb-1">Visa Type</label>
          <select
            name="visaType"
            value={formData.visaType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Visa Type</option>
            <option value="Tourist visa">Tourist Visa</option>
            <option value="Student visa">Student Visa</option>
            <option value=" Work visa">Work Visa</option>
          </select>
        </div>

        {/* Processing Time */}
        <div>
          <label className="block font-semibold mb-1">Processing Time</label>
          <input
            type="text"
            name="processingTime"
            value={formData.processingTime}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Required Documents */}
        <div>
          <label className="block font-semibold mb-1">Required Documents</label>
          <div className="space-y-2">
            {["Valid passport", "Visa application form", "Recent passport-sized photograph"].map((doc) => (
              <label key={doc} className="block">
                <input
                  type="checkbox"
                  value={doc}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2">{doc}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Age Restriction */}
        <div>
          <label className="block font-semibold mb-1">Age Restriction * must be a number</label>
          <input
            type="number"
            name="ageRestriction"
            value={formData.ageRestriction}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Fee */}
        <div>
          <label className="block font-semibold mb-1">Fee * $</label>
          <input
            type="number"
            name="fee"
            value={formData.fee}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Validity */}
        <div>
          <label className="block font-semibold mb-1">Validity</label>
          <input
            type="text"
            name="validity"
            value={formData.validity}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Application Method */}
        <div>
          <label className="block font-semibold mb-1">Application Method</label>
          <input
            type="text"
            name="applicationMethod"
            value={formData.applicationMethod}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Add Visa Button */}
        <button
          type="submit"
          className="btn btn-primary w-full py-2 mt-4"
        >
          Add Visa
        </button>
      </form>
    </div>
  );
};

export default AddVisa;



