const stats = [
  {
    value: "1,000K+",
    label: "Members Worldwide",
  },
  {
    value: "950,000+",
    label: "Children Helped",
  },
  {
    value: "$300M+",
    label: "Funds Raised",
  },
  {
    value: "50,000T",
    label: "Food Provided",
  },
];

const Ournumber1 = () => {
  return (
   <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        

        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our numbers <br /> that speak
          </h2>
          <p className="text-gray-600 max-w-md">
            We have numbers that push us to give in our best and make sure
            that we break our own records. We are happy to be growing and
            helping more day by day.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
          {stats.map((item, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold text-[#7a2f4f] mb-2">
                {item.value}
              </h3>
              <p className="font-semibold text-gray-800 mb-6">
                {item.label}
              </p>
              <div className="h-px bg-[#f0b6c2] w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
  

export default Ournumber1