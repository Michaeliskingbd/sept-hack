import React from 'react';

const Homepage1 = () => {
  return (
    <div className="bg-white font-sans text-[#1a1a1a]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            We support children<br/>
             and youth to reach<br/>
              their full potential!<br/>
          </h1>

          {/* Intro Paragraph */}
          <div className="md:mt-4">
            <p className="text-lg text-gray-700 leading-relaxed mt-[350px]">
              We run shelter homes, schools and a resource center 
              that helps such needy young people. We also have 
              helpline offices that can be approached at any time.
            </p>
          </div>
        </div>
      </div>

      </div>
   
  );
};

export default Homepage1;