import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/Network";

const MyVisas = () => {
  const { user } = useContext(AuthContext); // Get logged-in user from context
  const [visas, setVisas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
    try {
      const response = await fetch(`http://localhost:9000/remove-my-added-visa/${visaId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to remove visa");
      }

      // Remove the visa from state
      setVisas((prevVisas) => prevVisas.filter((visa) => visa._id !== visaId));
    } catch (error) {
      console.error("Error removing visa:", error.message);
    }
  };

  if (loading) return <p>Loading your visas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>My Visas</h1>
      {visas.length > 0 ? (
        <ul>
          {visas.map((visa, index) => (
            <li key={index} className="border-2 lg:grid lg:grid-cols-5 my-6 p-4">
              <p>Visa Title: {visa.title}</p>
              <p>Country: {visa.country}</p>
              <p>Issued Date: {visa.issuedDate}</p>
              <p>Email: {visa.userEmail}</p>
              <button
                className="btn-primary btn text-xl"
                onClick={() => handleRemoveVisa(visa._id)}
              >
                Remove X
              </button>
              {/* Add more visa details as needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No visas found.</p>
      )}
    </div>
  );
};

export default MyVisas;
