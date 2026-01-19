import React from 'react'

const Number = () => {
  return (
    <section className='lg:flex gap-20  grid lg:p-20 px-5 bg-slate-50'>
        <div className='py-10 '>
            <h2 className='font-bold text-5xl lg:text-6xl lg:w-10/12 '>Our numbers that speak</h2>
            <p className='text-left lg:w-[400px] py-3  text-slate-600'>We have numbers that push us to give in our best and make sure that we break our own records. We are happy to be growing and helping more day by day.</p>
        </div>
        <div className='grid lg:grid-cols-2  gap-16 font-bold  '>
            <span className='border-b-2 border-red-400 grid gap-3 py-5'>
                <h1 className='lg:text-6xl text-5xl text-[#833556]'>1,000k+</h1>
                <p className='text-xl  text-slate-600'>Members Worldwide</p>
            </span>
            <span className='border-b-2 border-red-400 grid gap-3 py-5'>
                <h1 className='lg:text-6xl text-5xl text-[#833556]'>950,000+</h1>
                <p  className='text-xl  text-slate-600'>Children Helped</p>
            </span>
            <span className='border-b-2 border-red-400 grid gap-3 py-5'>
                <h1 className='lg:text-6xl text-5xl text-[#833556]'>$300M+</h1>
                <p className='text-xl text-slate-600'>Funds Raised</p>
            </span>
            <span className='border-b-2 border-red-400 grid gap-3 py-5 '>
                <h1 className='lg:text-6xl text-5xl text-[#833556]'>50,000T</h1>
                <p className='text-xl text-slate-600'>Food Provided</p>
            </span>
        </div>
    </section>
  )
}

export default Number
