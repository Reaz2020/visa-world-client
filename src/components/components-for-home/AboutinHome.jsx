const AboutInHome = () => {
    return (
        <section className="bg-gradient-to-b from-blue-50 via-white to-blue-100 py-16">
          <div className=" px-8 lg:px-16 text-center">
            
            {/* Title Section */}
            <h2 className="text-4xl font-extrabold text-blue-800 mb-4">
              Welcome to Speak Scandinavian!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Your gateway to mastering Swedish and connecting with the rich Scandinavian culture.
            </p>
    
            {/* Why Learn Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-10">
              <h3 className="text-2xl font-bold text-green-700 mb-4">🗣️ Our Mission !</h3>
              <p className="text-gray-700 text-lg">
         
                 Our mission is to make language learning easy, interactive, and accessible for everyone, no matter where they are in their journey.
              </p>
            </div>
    
            {/* Our Courses Section */}
            <div className="bg-yellow-100 rounded-lg shadow-md p-8 mb-10">
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">📚 How we learn together </h3>
              <ul>
                <li>🔰 <strong>Beginner-Friendly:</strong> Start with essentials in Swedish vocabulary, grammar, and pronunciation.</li>
                <li>🎙️ <strong>Interactive Lessons:</strong> Practice with real-life dialogues and fun speaking exercises.</li>
                <li>📈 <strong>Structured Learning:</strong> Our lessons introduce new vocabulary in bite-sized chunks, each tailored to your level, from beginner to advanced.</li>
                <li>🃏 <strong>Word Cards:</strong> We offer interactive word cards for each new vocabulary word. Simply click on the card to hear the correct pronunciation and see its meaning and usage in a sentence. The cards reinforce both visual and auditory learning.</li>
                <li>🔊 <strong>Pronunciation Practice:</strong> For every vocabulary word, you can hear the correct pronunciation with native-speaker audio, helping you master authentic accents and sounds.</li>
             </ul>

            </div>
    
        
          </div>
        </section>
      );
}
 
export default AboutInHome;