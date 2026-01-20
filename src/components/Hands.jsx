import React from "react";
import { Link } from "react-router-dom";

const Hands = () => {
  return (
    <section className="bg-[#833556]">
      <div className=" grid justify-center  text-center py-28 gap-5 font-bold text-white">
        <h1 className="text-xl">GIVE US A HAND</h1>
        <p className="lg:text-7xl text-3xl px-16">
          Support us and change the course of a child's life today!{" "}
        </p>
      </div>
      <span className=" flex justify-center pb-28">
        <Link to="/donate">
          {" "}
          <button className="bg-white py-5 px-10 justify-center font-bold space-x-2 text-[rgb(80,31,52)]">
            DONATE
          </button>
        </Link>
      </span>
    </section>
  );
};

export default Hands;
