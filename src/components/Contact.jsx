import React from "react";
import charity from "../assets/charity picture.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import Navbar1 from "./Navbar1";
import Addrex from "./Addrex";

const Contact = () => {
  return (
    <div className="sm:items-center">
      <div className="font-sans text-gray-900">
        {/* Subzero Section */}
        <header className="relative h-[600px] w-full overflow-hidden">
          {/* Background Image  */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1569420626546-55b02c8376b1?q=80&w=868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <Navbar1 />
          {/* Hero Text */}
          <div className="relative z-10 flex items-center h-full px-10">
            <h1 className="text-white text-7xl md:text-8xl font-black">
              Contact
            </h1>
          </div>
        </header>
      </div>

      <div className=" lg:grid-cols-2 grid grid-cols-1 gap-14 px-8 sm:">
        <div className="mt-32">
          <h2 className="text-black text-6xl  font-bold mb-10 md:text-4xl">
            Get in touch
          </h2>

          <p className="mb-4 mr-4 flex items-center gap-5 ">
            <FaMapMarkerAlt size={15} className="mt-1  text-rose-900" />{" "}
            <span className="text-gray-900 text-xl  ">
              {" "}
              16A Soun Ajagungbade Ave,New Bodija Esate Ibadan
            </span>
          </p>

          <p className="mb-3 mr-4 flex items-center gap-5">
            <FaEnvelope size={15} className="mt-1  text-rose-900" />{" "}
            <span className="text-gray-900 text-xl  ">contact@info.com</span>
          </p>

          <p className="mb-4 mr-4 flex items-center gap-5">
            <FaPhone size={15} className="mt-1  text-rose-900" />{" "}
            <span className="text-gray-900 text-xl ">+2348166706741</span>
          </p>
        </div>

        <div className="mt-32 sm:">
          <h2 className="text-black text-6xl font-bold mb-10">Message us</h2>

          <form>
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-200 p-4 outline-none focus:border-black"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-200 p-4 outline-none focus:border-black"
              />
            </div>

            <input
              type="text"
              placeholder="Email"
              className="border border-gray-200 p-4 w-full outline-none focus:border-black mt-8"
            />

            <form>
              <textarea
                placeholder="Message"
                className="border border-gray-200 p-8 w-full outline-none focus:border-black mt-8"
              ></textarea>
            </form>

            <button className="bg-slate-100 mb-10 text-rose-900  px-4 py-2 cursor-pointer:black mt-8 hover:text-black font-semibold">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Addrex />
    </div>
  );
};

export default Contact;
