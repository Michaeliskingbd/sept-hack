import pic from"../assets/people.jpg"
const About = () => {
  return (
    <div>
      <section>
        <div className=" relative">
            <img className="w-screen h-[600px] brightness-75"  src={pic} alt="" />
            </div>
            <span className="absolute lg:top-[50%] top-60 lg:mx-16 mx-28 h-10 ">
                <h2 className=" text-white   text-7xl font-bold ">About us</h2>
            </span>
    </section>
    </div>
  )
}

export default About
