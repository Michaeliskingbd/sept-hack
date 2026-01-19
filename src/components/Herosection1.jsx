import React from "react";
import { Link } from "react-router-dom";
import Navbar1 from "./Navbar1";

const Herosection1 = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <Navbar1 />

      <div className="relative flex items-center px-20">
        <div className="max-w-5xl text-white">
          <p className="mt-10 mb-4 text-xl font-extrabold">Together, we can</p>

          <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mt-6">
            Build a world where <br />
            all youth are safe
          </h1>

          <button className="mt-16 bg-white px-8 py-3 text-sm font-semibold text-[#833556] hover:text-black transition">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Herosection1;
