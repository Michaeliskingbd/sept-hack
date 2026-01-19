import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = () => {
  useEffect(() => Aos.init);
  const data = [
    {
      img: "https://images.unsplash.com/photo-1562917127-52bfc7d186ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9vcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1655578384615-5ed91b979bde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxuaWdlcmElMjBwaWN0dXJlfGVufDB8fDB8fHww",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1683140523610-13deecbd20b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9vcnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  return (
    <div data-aos="zoom-in-up" data-aos-duration="2000">
      <section className="lg:flex grid grid-cols-2 lg:gap-0 gap-5 lg:px-16 lg:mx-0 mx-5 py-10">
        {data.map((d, index) => (
          <div key={index}>
            <img src={d.img} alt="cards" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Card;
