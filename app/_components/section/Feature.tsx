import React from 'react'
import { products } from '@/app/_utils/feature'
import Image from 'next/image'
function Feature() {


  return (
    <div className='px-[100px] mt-[45px]'>
        <div className='flex justify-between '>
            <h1 className='font-bold text-6xl'>Feature products</h1>
            <button className='bg-blue-500 p-3 '>See all products</button>
        </div>
       <ul className='grid grid-cols-[repeat(3,minmax(200px,1fr))] gap-10 mt-[30px]'>
          {
            products.map((value, key)=> (
                <li key={value.name} className='bg-gray-200 w-full rounded-[20px]'>
                   <Image className='  w-full h-auto drop-shadow-gray-800 ' src={value.image} width={400} height={300} alt={value.name} />
                  <div className='mx-[30px] p-3'>
                    <p>{value.category}</p>
                    <p className='font-bold text-3xl'>{value.name}</p>
                    <p className='font-bold text-2xl text-blue-500'>${value.price} USD</p>
                  </div>
                </li>
            ))
          }
       </ul>
    </div>
  )
}

export default Feature
