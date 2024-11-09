"use client";
import React from 'react'



const Hero = () => {
  return (
    <section className=''>
        <div  style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
      }} className='flex justify-center'>
            <div className=' place-self-center text-center justify-center'>      
            
    <h1 className='text-white mb-4 text-6xl sm:text-5xl lg:text-6xl font-extrabold'>
         My Cafe
         </h1>
         <p className='text-gray-400 mb-4 text-2xl sm:text-xl lg:text-3xl font-bold'>Discover the taste of real coffee</p>
    <p className='text-[#ccc8f3fb] m-9 text-base sm:text-lg lg-text-2xl'>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quis quisquam eum itaque consectetur quas. consectetur adipisicing elit. Esse, mollitia! Consequatur natus ipsum distinctio temporibus.</p>
    <div>
      <button className="px-6 py-3 rounded-full bg-green-900 hover:bg-slate-700 text-white" type="button">Order Now</button>
    </div>
    
    </div>
 
    </div>
    </section>

  )
}

export default Hero;