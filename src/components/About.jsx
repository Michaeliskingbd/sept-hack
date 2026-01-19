import pic from "../assets/people.jpg";
import Navbar1 from "./Navbar1";
const About = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Subzero Section */}
      <header className="relative h-[600px] w-full overflow-hidden">
        {/* Background Image  */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pic})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <Navbar1 />
        {/* Hero Text */}
        <div className="relative z-10 flex items-center h-full px-10">
          <h1 className="text-white text-7xl md:text-8xl font-black">
            About Us
          </h1>
        </div>
      </header>
    </div>
  );
};

export default About;
