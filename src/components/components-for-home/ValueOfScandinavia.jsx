import { useNavigate } from "react-router-dom";

const ValueOfScandinavia = () => {
  const navigate = useNavigate();
    return ( <div>
            {/* Cultural Insights Section */}
            <div className="bg-blue-100 rounded-lg shadow-md p-8 mb-10">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">🌍 Explore Scandinavian Culture</h3>
              <p className="text-gray-700 text-lg mb-4">
                Our platform is more than a language site. Dive into the traditions, food, and social etiquette that make Scandinavia so unique:
              </p>
              <ul className="text-lg text-gray-700 space-y-4">
                <li>🍪 <strong>Food & Traditions:</strong> Enjoy a fika, learn hygge, and explore Nordic festivals.</li>
                <li>🗺️ <strong>Popular Destinations:</strong> Discover the fjords of Norway, the charming streets of Stockholm, and cozy Copenhagen cafes.</li>
                <li>💬 <strong>Social Etiquette:</strong> Understand the Scandinavian approach to life and connect with locals like a native.</li>
              </ul>
            </div>
    
            {/* Join Us Section */}
            <div className="bg-green-100 rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-4">🎉 Join Us Today!</h3>
              <p className="text-gray-700 text-lg mb-4">
                Ready to explore the Scandinavian world? Join us and begin your language journey. We make learning Swedish
                fun, interactive, and culturally immersive!
              </p>
              <button
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700"
            onClick={() => navigate("/register")} 
          >
            Get Started
          </button>
            </div>
    </div> );
}
 
export default ValueOfScandinavia ;