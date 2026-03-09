import React from 'react'
import hero from "@/public/hero.png";
import Image from 'next/image';

function Section() {
  return (
    <div>
      <section className={`bg-blue-900 text-white md:mt-[57px] mt-5  grid grid-cols-2 rounded-2xl mx-7 md:mx-[67px] hero-mobile`}>

        <div className=' content-text ml-5 w-full h-full flex flex-col justify-center  items-center  '>
            <div className=' w-full md:w-[500px]'>
            <div className=''>
                <h1 className="md:text-6xl p-1 text-2xl ">Elevate your audio Journey</h1>
                <p className="p-3 hidden md:block">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eius dolorum et illo! Expedita sint asperiores excepturi, qui a eius reiciendis ullam adipisci vel ipsam quo quis doloribus sunt ipsum?</p>
            </div>
            <div className='flex md:flex-row  flex-col'>
                <button className='border-white text-[12px]  p-1 md:p-[7px] rounded-[4px] bg-blue-500'>
                    Show now
                </button>
                <button className="border-white p-1 text-[12px] md:p-[7px] rounded-[4px]">
                    Learn more
                </button>
            </div>
            </div>
            </div>
         
            <div className="w-full people ">
                 <Image className=' md:object-cover object-contain h-[200px] md:h-[500px]' src={hero} width={400} height={300} alt='hero' />

            </div>
      </section>
    </div>
  )
}

export default Section
