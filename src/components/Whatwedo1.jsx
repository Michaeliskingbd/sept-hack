const cards = [
  {
    title: "We Find & Fund",
    text: "We are in search of opportunities to help as many youth as possible. We approach and fund all those who are in need.",
    bg: "bg-[#a87488]",
  },
  {
    title: "We Provide Care",
    text: "Today's youth need a helpful hand and right guidance at every stage. Here’s where we take care of them like our own.",
    bg: "bg-[#8f4f68]",
  },
  {
    title: "We Provide Education",
    text: "We run small-scale schools for the underprivileged children and youth of daily wage workers for a better future.",
    bg: "bg-[#84405d]",
  },
  {
    title: "We Employ Inclusively",
    text: "We run organizations where we employ youngsters so they can live their dreams for themselves and their families.",
    bg: "bg-[#742f4f]",
  },
];

const Whatwedo1 = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:mt-16 lg:mt-0">
      {/* Heading */}
      <h2 className="text-6xl font-bold mb-6">What we do</h2>
      <div className="mt-12 border-b border-black mb-12" />

      {/* Intro text */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div />
        <div>
          <p className="text-lg font-semibold mb-6">
            We plan and support amazing projects that help change the lives of
            disadvantaged children and young people from across different
            regions of the world.
          </p>
          <a href="#" className="text-sm font-semibold">
            READ MORE
          </a>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} text-white p-8 flex flex-col justify-between min-h-[320px]`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-2xl lg:text-sm">{card.text}</p>
            </div>

            {/* Decorative line */}
            <div className="w-10 h-1 bg-white mt-8" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whatwedo1;
