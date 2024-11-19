const History = () => {
    return (
        <div className="bg-gray-100 p-8 md:p-12 lg:p-16 text-gray-800">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our History</h1>
            
            <p className="text-lg mb-4">
                Founded in <span className="font-semibold">2003</span>, <span className="font-semibold">Scandinavian Learn</span> 
                started as a small educational initiative in Stockholm, Sweden. From the beginning, we focused on promoting 
                accessible, high-quality learning experiences and empowering individuals through education.
            </p>
            
            <p className="text-lg mb-4">
                Over the years, we expanded our programs and built a reputation for excellence and innovation in the 
                education sector. Today, Scandinavian Learn serves learners across Scandinavia and beyond, continuing to grow 
                while staying true to our founding principles.
            </p>
            
            <p className="text-lg font-semibold mb-4">Highlights from our journey include:</p>
            
            <ul className="list-disc list-inside space-y-3 mb-8">
                <li><span className="font-semibold">2005:</span> Launched our first online course platform, reaching students nationwide.</li>
                <li><span className="font-semibold">2010:</span> Expanded to Norway and Denmark, broadening our educational reach.</li>
                <li><span className="font-semibold">2015:</span> Partnered with universities to offer accredited courses and certifications.</li>
                <li><span className="font-semibold">2018:</span> Recognized as a leader in online education across Scandinavia.</li>
                <li><span className="font-semibold">2022:</span> Introduced AI-driven personalized learning paths for students.</li>
            </ul>
            
            <p className="text-lg">
                Looking forward, Scandinavian Learn is committed to advancing innovative educational solutions and 
                supporting lifelong learning for communities across the globe.
            </p>
        </div>
    );
};

export default History;
