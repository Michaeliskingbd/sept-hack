const images = [
  "https://websitedemos.net/communities-02/wp-content/uploads/sites/853/2021/05/gallery-001-free-img.jpg",
  "https://websitedemos.net/communities-02/wp-content/uploads/sites/853/2021/05/gallery-002-free-img.jpg",
  "https://websitedemos.net/communities-02/wp-content/uploads/sites/853/2021/05/gallery-003-free-img.jpg",
];

const partners = [
  "https://appclick.ng/portal/uploads/school_content/admin_logo/1692202493-89741823864dcf5fd4617b!appclick-academy-logo-best-tech-training-center-in-ibadan-lagos-nigeria (1).png",
  "https://th.bing.com/th/id/OSB.HUhNQYtTYvLwMeBbN6jtpQ--.png?w=50&h=50&c=6&qlt=90&o=6&dpr=2&pid=BingSports",
  "https://th.bing.com/th/id/OIP.yTOGaQjSvr5iYlA4hXWspgAAAA?w=108&h=108&c=1&bgcl=158e39&r=0&o=7&pid=ImgRC&rm=3",
  "https://th.bing.com/th/id/OSB.VXxjrqWZWwmw2Ju4T8AJJA--.png?w=50&h=50&c=6&qlt=90&o=6&dpr=2&pid=BingSports",
  "https://www.bing.com/th/id/OIP.A99dbAK7zAAYE-N8qLEMSAHaHa?w=182&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
];


const Partnersection1 = () => {
  return (
    <section className="w-full">
      
      
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt="Children community"
                className="w-full h-[420px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <h3 className="text-center text-sm font-bold mb-12">
          OUR PARTNERS
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="border border-gray-200 flex items-center justify-center h-24 bg-white"
            >
              <img
                src={logo}
                alt="Partner logo"
                className="h-10 grayscale"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}


export default Partnersection1