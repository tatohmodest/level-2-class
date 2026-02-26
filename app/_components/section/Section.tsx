import React from 'react'
import hero from "@/public/hero.png";
import Image from 'next/image'
function Section() {
  return (
    <div>
      <section className="bg-blue-900 text-white h-[60vh] mt-[57px] grid md:grid-cols-2 rounded-2xl mx-[67px]">

        <div className='p-[67px] w-full h-full flex flex-col justify-center items-center  '>
            <div className=''>
            <div className='mb-[50px]'>
                <h1 className="text-6xl">Elevate your audio Journey</h1>
                <p className="mt-[50px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eius dolorum et illo! Expedita sint asperiores excepturi, qui a eius reiciendis ullam adipisci vel ipsam quo quis doloribus sunt ipsum?</p>
            </div>
            <div className='flex gap-[10px] '>
                <button className='border-white p-[7px] rounded-[4px] bg-blue-500'>
                    Show now
                </button>
                <button className="border-white p-[7px] rounded-[4px]">
                    Learn more
                </button>
            </div>
            </div>
            </div>
         
            <div className="w-full h-[60vh] overflow-hidden">
                 <Image className='w-full object-cover h-full' src={hero} width={600} height={600} alt='hero' />

        </div>
      </section>
    </div>
  )
}

export default Section
