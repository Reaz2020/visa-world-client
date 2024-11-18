const AboutInHome = () => {
    return (
        <section className="bg-gradient-to-b from-blue-50 via-white to-blue-100 py-16">
          <div className="container mx-auto px-8 lg:px-16 text-center">
            
            {/* Title Section */}
            <h2 className="text-4xl font-extrabold text-blue-800 mb-4">
              Welcome to Speak Scandinavian!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Your gateway to mastering Swedish and connecting with the rich Scandinavian culture.
            </p>
    
            {/* Why Learn Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-10">
              <h3 className="text-2xl font-bold text-green-700 mb-4">🗣️ About our courses !</h3>
              <p className="text-gray-700 text-lg">
                Learning Swedish is a bridge to understanding Norwegian and even Danish! These North Germanic languages
                share many similarities, meaning you'll unlock the ability to communicate with millions of Scandinavians.
              </p>
            </div>
    
            {/* Our Courses Section */}
            <div className="bg-yellow-100 rounded-lg shadow-md p-8 mb-10">
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">📚 Our Courses</h3>
              <ul className="text-lg text-gray-700 space-y-4">
                <li>🔰 <strong>Beginner-Friendly:</strong> Start with essentials in Swedish vocabulary, grammar, and pronunciation.</li>
                <li>🎙️ <strong>Interactive Lessons:</strong> Practice with real-life dialogues and fun speaking exercises.</li>
                <li>📈 <strong>Advanced Courses:</strong> Dive deeper into the language, culture, and social norms of Scandinavia.</li>
              </ul>
            </div>
    
        
          </div>
        </section>
      );
}
 
export default AboutInHome;