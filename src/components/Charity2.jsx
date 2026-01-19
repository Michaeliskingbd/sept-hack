import React from 'react';
import kiddo from '../assets/kidinblanket.jpg';

const Charity2 = () => {
  return (
    <div className="bg-white font-sans text-[#1a1a1a]">
      <section className="max-w-[1200px] mx-auto py-16">
        <div className="grid md:grid-cols-12 items-start">

          {/* Text Content Section */}
          <div className="md:col-span-7 flex flex-col order-2 md:order-1 md:pr-16">
            <div className="mb-8">
              <h2 className="text-[42px] font-bold leading-[1.1] mb-6">
                A new future for <br />Exploited <br /> Children
              </h2>
              <div className="w-10 h-[3px] bg-[#8b3d5a]" />
            </div>

            <p className="text-gray-500 text-[20px] font-light pl-[200px]">
              Children and young people who have faced exploitation
              in their early years need care,guidiance, and mental health support to heal
              and rebuild their confidence.We help them step out of these harmful 
              envinronments and provide the safety, education and  emotional stability
              they deserve for a better life.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:col-span-5 order-1 md:order-2">
            <div className="overflow-hidden shadow-sm">
              <img
                src={kiddo}
                alt="Smiling child"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Charity2;