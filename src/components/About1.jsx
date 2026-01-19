import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const About1 = () => {
  return (
     <footer className="bg-black text-white">
      
      <div className="h-24 bg-[#7a3552]" />

      
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

         
          <div>
            <h3 className="text-lg font-semibold mb-6">Address</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>A: 123 Fifth Avenue, New York, NY 10160</li>
              <li>P: 929-242-6868</li>
              <li>E: contact@info.com</li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-6">Get Involved</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Donate Now</li>
              <li>Volunteer With Us</li>
              <li>Sponsor a Child</li>
              <li>Become a Partner</li>
              <li>Fundraise for Us</li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-xl font-semibold mb-6">Stay up to date</h3>

            <input type="email" placeholder="Email address" className="w-full px-4 py-3 mb-6 text-black focus:outline-none"/>

            <button className="bg-white text-[#7a3552] px-10 py-3 font-semibold hover:bg-gray-100 transition">
              SUBMIT
            </button>
          </div>
        </div>
      </div>

    
      <div className="border-t border-gray-800" />
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>Copyright © 2026 Goodwill | Powered by Goodwill</p>

        
        <div className="flex space-x-5 mt-4 md:mt-0">
        <FaLinkedin className="hover:text-white cursor-pointer" />  
        <FaTwitter className="hover:text-white cursor-pointer" />
        <FaFacebook className="hover:text-white cursor-pointer" />
        <FaYoutube  className="hover:text-white cursor-pointer" />
        <FaInstagram className="hover:text-white cursor-pointer" />
            
          
        </div>
      </div>
    </footer>
  );
};


export default About1