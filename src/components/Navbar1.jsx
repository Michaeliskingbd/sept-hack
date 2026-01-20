import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <>
      <nav className="relative flex items-center justify-between px-10 py-6 text-white bg-transparent">
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="">❤</span>
          GOODWILL
        </div>

        <div className="flex items-center justify-between gap-5">
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <Link to="/">
              {" "}
              <li className="hover:text-pink-400 cursor-pointer">Home</li>
            </Link>
            <Link to="/about">
              <li className="hover:text-pink-400 cursor-pointer">About</li>
            </Link>
            <Link to="/what-we-do">
              {" "}
              <li className="hover:text-pink-400 cursor-pointer">What we do</li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-pink-400 cursor-pointer">Contact</li>
            </Link>
          </ul>
          <Link to="/donate">
            <button className="border border-white px-8 py-4 text-sm text-[#833556] font-semibold bg-white hover:bg-white hover:text-black transition">
              DONATE
            </button>
          </Link>

          <>
            {showMobileNav ? (
              <IoMdClose
                onClick={toggleMobileNav}
                className="lg:hidden flex text-5xl text-red-300"
              />
            ) : (
              <MdMenu
                onClick={toggleMobileNav}
                className="lg:hidden flex text-5xl text-red-300"
              />
            )}
          </>
        </div>
      </nav>

      {showMobileNav && (
        <nav className="lg:hidden absolute flex h-fit w-full z-50 bg-white text-black px-4 py-2">
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li className="hover:text-pink-400 cursor-pointer">Home</li>
            <li className="hover:text-pink-400 cursor-pointer">About</li>
            <li className="hover:text-pink-400 cursor-pointer">What we do</li>
            <li className="hover:text-pink-400 cursor-pointer">Contact</li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar1;
