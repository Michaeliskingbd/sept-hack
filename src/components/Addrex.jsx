import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
const Addrex = () => {
  return (
    <div className="  bg-black justify-center p-20 ">
      <div className="lg:flex grid lg:justify-start justify-center lg:text-left lg:text-xl text-center lg:gap-52 text-white">
        <small className="lg:flex gap-20">
          <div className="  font-extralight grid">
            <h1 className="lg:text-2xl text-xl ">Address</h1>
            <span className=" ">
              <p>N0.16 Soun ajagungbade, Bodija, Ibadan, Nigeria</p>
              <p>P: 929-242-6868</p>
              <a href="">E: contact@info.com</a>
            </span>
          </div>

          <div className="grid lg:gap-10 lg:my-0  my-9 gap-3">
            <h1 className="lg:text-2xl text-xl">Get Involved</h1>
            <span>
              <p className="lg:w-40 font-mono ">
                {" "}
                Donate Now Volunteer With Us Sponsor a Child Become a Partner
                Fundraise for Us
              </p>
            </span>
          </div>
        </small>
        <span className="grid gap-5 ">
          <h2 className="text-2xl font-mono">Stay up to date</h2>

          <form className=" grid lg:text-start text-center gap-2" action="">
            <input
              className="lg:py-2 py-3 px-24 lg:px-40 text-black"
              type="email"
              required
              placeholder="Email address"
            />
            <span>
              <button className="py-3 text-sm font-bold px-10 lg:px-8 bg-white text-black lg:my-6">
                SUBMIT
              </button>
            </span>
          </form>
        </span>
      </div>
      <div className="my-10 gap-3 grid text-center brightness-50">
        <hr />
        <div className=" lg:flex lg:justify-between text-center lg:p-10">
          <p className="text-sm text-white ">
            Copyright © 2026 Charity | Powered by Charity
          </p>
          <div className="text-white lg:mx-0 lg:my-0 my-7 mx-20  gap-2 flex">
            <a href="">
              <FaLinkedinIn />
            </a>
            <a href="">
              <IoLogoTwitter />
            </a>
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <IoLogoYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addrex;
