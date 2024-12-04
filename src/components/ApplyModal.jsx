import { useContext, useState } from "react";
import { AuthContext } from "../providers/Network";
import { format } from "date-fns";

const ApplyModal = ({ visaId, fee, onClose }) => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: user?.email || "",
    firstName: "",
    lastName: "",
    appliedDate: format(new Date(), "yyyy-MM-dd"),
    fee: fee,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/visa-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, visaId }),
      });

      if (response.ok) {
        alert("Visa application submitted successfully!");
        onClose();
      } else {
        console.error("Error submitting visa application");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Apply for Visa</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label>Applied Date</label>
            <input
              type="date"
              name="appliedDate"
              value={formData.appliedDate}
              readOnly
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label>Fee</label>
            <input
              type="number"
              name="fee"
              value={formData.fee}
              readOnly
              className="input input-bordered"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Apply
          </button>
        </form>
        <button className="btn btn-secondary mt-4" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ApplyModal;
