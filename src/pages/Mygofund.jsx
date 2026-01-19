import React, { useState } from "react";
import ahhkids from "../assets/gzaaa.avif";
import logo from "../assets/charity.png";
const Gofundme = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 bg-gray-50">
      <header className="relative bg-blue-600 p-4 rounded-t-lg">
        <h1 className="text-3xl font-light text-white">
          <img src={logo} alt="Logo" className="rounded-lg" /> fundraiser
        </h1>
      </header>
      <div className="main-content flex flex-col md:flex-row gap-8 p-4">
        {/* Left Side: Image and Story */}
        <section className="left-panel w-full md:w-1/2">
          <img
            src={ahhkids}
            alt="Smiling child"
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="organizer-info mt-4">
            <p>
              <strong>Appclick September 2025 cohort</strong> are the organizers
              of this fundraiser.
            </p>
          </div>
          <hr className="my-4" />
          <p className="story-text">
            {" "}
            Help orphans from all around the world get a better life!
            <br />
            Your donation will provide food that are either grown or bought,
            shelter in our foster homes, education from qualified teachers from
            our schools, and medical care from hired practitioners to children
            in need. Our goal is to raise $200,000 to support these vulnerable
            children who are victims of war, and give them a chance at a
            brighter future. Every contribution, big or small, makes a
            difference in their lives. Join us in making a positive impact and
            giving these children hope for a brighter future.
          </p>
        </section>
        {/* Right Side: Donation Panel */}
        <aside className="right-panel w-full md:w-1/2">
          <div className="stats-box bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-600">
              $53,643{" "}
              <span className="goal-text text-sm text-gray-500">
                raised of $200,000 goal
              </span>
            </h2>
            <div className="progress-bar-bg bg-gray-200 h-2 w-full rounded-full mt-2">
              <div
                className="progress-bar-fill bg-green-600 h-2 rounded-full"
                style={{ width: "27%" }}
              ></div>
            </div>

            <div className="stats-row flex justify-between mt-2">
              <span>
                <strong>441</strong> donors
              </span>
              <span>
                <strong>2.8K</strong> shares
              </span>
            </div>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-full mt-4">
              Donate now
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full mt-2">
              Share
            </button>
          </div>
          <div className=" mt-4">
            {/* Map through your donor data here */}
            <div className="donor-item flex items-center gap-2">
              <div className=" bg-gray-200 p-2 rounded-full">👤</div>
              <div>
                <strong>Anonymous</strong> donated $50
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Gofundme;
