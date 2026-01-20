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
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1620969910995-4bbe4eaa32c1?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
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
