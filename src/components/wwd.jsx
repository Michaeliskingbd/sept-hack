import React from "react";

const Wwd = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {/* We Find & Fund */}
        <div className="bg-[#8b3d5a] p-12 text-white min-h-[300px]">
          <h2 className="text-3xl font-bold mb-6">We Find & Fund</h2>
          <p className="text-pink-100 text-lg">
            We are in search of opportunities to help as many children as
            possible through our funding programs and community outreach.
          </p>
          <p className="bg-white mt-2 rounded-2"> .</p>
        </div>
        {/* We Educate */}
        <div className="bg-[#7b344f] p-12 text-white min-h-[300px]">
          <h2 className="text-3xl font-bold mb-6">We Educate</h2>
          <p className="text-pink-100 text-lg">
            Today's youth need a helpful hand and right guidance to navigate the
            challenges of the modern world and education.
          </p>
        </div>
        {/* We Provide */}
        <div className="bg-[#8b3d5a] p-12 text-white min-h-[300px]">
          <h2 className="text-3xl font-bold mb-6">We Provide</h2>
          <p className="text-pink-100 text-lg">
            We run small-scale schools for local communities and provide
            essential supplies to ensure no child is left behind.
          </p>
        </div>
        {/* We Consult */}
        <div className="bg-[#7b344f] p-12 text-white min-h-[300px]">
          <h2 className="text-3xl font-bold mb-6">We Consult</h2>
          <p className="text-pink-100 text-lg">
            We are in search of opportunities to help as many youths as
            possible. We approach and fund all those in need.
          </p>
        </div>

        <div className="bg-[#8b3d5a] p-12 text-white min-h-[300px]">
          <h2 className="text-3xl font-bold mb-6">We Build</h2>
          <p className="text-pink-100 text-lg">
            Todays youth need a helpful hand and right guidance . We approach
            and fund all those in need.
          </p>
        </div>

        <div className="bg-[#7b344f] p-12 text-white min-h-[300px]">
          <h2 className="text-3xl font-bold mb-6">We Strengthen</h2>
          <p className="text-pink-100 text-lg">
            We run small-schools for the under priviledged children and youth of
            daily wage workers for a better future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wwd;
