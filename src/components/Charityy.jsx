import React from 'react';
import logo from '../assets/japankid.jpg';

const Charityy = () => {
  return (
    <div className="bg-white font-sans text-[#1a1a1a]">
      {/* SECTION 1: What We Care For */}
      <section className="max-w-[1200px] mx-auto  py-16">
        {/* Header Section */}
        <h1 className="text-5xl font-bold text-center mb-6">What we care for</h1>
        <div className="w-full h-[1px] bg-gray-200 mb-20"></div>
        
        <div className="grid md:grid-cols-12 gap-0 items-start">
          {/* Image Section - Taking up 5 columns */}
          <div className="md:col-span-4">
            <div className="overflow-hidden shadow-sm">
              <img 
                src={logo} 
                alt="Smiling child" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Content Section - Taking up 7 columns */}
          <div className="md:col-span-7 flex flex-col md:pl-16 pt-4">
            {/* Title with decorative line */}
            <div className="mb-8">
              <h2 className="text-[42px] font-bold leading-[1.1] mb-6">
                New life for <br /> children, in a <br /> new land
              </h2>
              {/* Decorative line specifically placed below the text */}
              <div className="w-10 h-[3px] bg-[#8b3d5a]"></div>
            </div>

            {/* Description - Aligned to the right-ish side like the photo */}
            <div className="md:pl-[300px]">
              <p className="text-gray-500 text-[20px]  font-light">
                We have built shelter homes across several regions, 
                giving children from underdeveloped areas the 
                opportunity to move into safer environments 
                where they can live, study, and work in larger cities 
                with better resources and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Charityy;