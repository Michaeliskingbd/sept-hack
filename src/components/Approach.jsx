import React from 'react'

const Approach = () => {
  return (
    <div className="lg:mx-20 mx-5 py-10">
        <h1 className=" font-bold text-4xl">Our approach</h1>
        <section className="lg:flex grid gap-20">
            <div>
                <h2 className='py-5 text-[#833556] lg:font-bold'>Our Mission</h2>
                 <span className=" grid gap-7 ">
                <p className="font-bold text-black text-xl ">
                    Our mission is to make sure all young people and children get all the support 
                    they need, when they need it, no matter what it is.
                </p>
                <p>Whether it is a reassuring conversation, financial help, education, professional training, 
                    or simply the assurance that they are not alone, we will make sure that everyone gets support that meets
                     them where they’re at as quickly as possible.

                </p>
                </span>
            </div>
            <div>
                <h2 className='py-5 text-[#833556] lg:font-bold'>Our Vision</h2>
                <span className=" grid gap-7">
                <p className="font-bold text-black text-xl ">
                    We want to build a world where no child or youth feels alone
                     and gets every possible help they need as soon as possible.
                </p>
                <p >Our entire team wants to see a world where every youngster struggling in 
                    any way feels able to reach out and has people who’ll help them with education, jobs
                    , and more. We want to spread 
                    out in every region so we’ll be reachable to all.</p>
                </span>
                
            </div>
        </section>
      
    </div>
  )
}

export default Approach
