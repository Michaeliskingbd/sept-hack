import { useState } from "react"
import pic1 from"../assets/pic1.jpg"
import pic2 from"../assets/pic2.jpg"
import pic3 from"../assets/pic3.jpg"
import pic4 from"../assets/pic4.jpg"
import Aos from "aos"
import "aos/dist/aos.css"
const Partners = () => {
  useState(()=>(Aos.init))
  return (
    <div className="grid mx-10 my-10 justify-center"> 
      <h1 className="font-bold text-black text-2xl flex justify-center">OUR PARTNERS</h1>
      <article className="lg:flex grid grid-cols-2 gap-10  py-10">
        <span data-aos="fade-up"
          data-aos-duration="3000" >
            <img className="w-40 h-72 rounded-2xl" src={pic1} alt="logo" />
        </span>
        <span  data-aos="zoom-out-up">
            <img className="w-40 h-72 rounded-2xl"src={pic2} alt="" srcset="" />
        </span>
        <span  data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <img className="w-40 h-72 rounded-2xl" src={pic3} alt="" />
        </span>
        <span data-aos="fade-right"
          data-aos-duration="3000">
          <img className="w-40 h-72 rounded-2xl" src={pic4} alt="logo" />
        </span>
      </article>
    </div>
  )
}

export default Partners
