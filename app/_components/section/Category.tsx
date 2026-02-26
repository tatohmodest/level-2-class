import React from 'react'
import { Category as ctg } from '@/app/_utils/category'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
function Category() {
  return (
    <div>
      <div className='px-[100px] mt-[45px]'>
              <div className='flex justify-between '>
                  <h1 className='font-bold text-6xl'>Shop by Category</h1>
                  <button className='bg-blue-500 p-3 '>See all Categories</button>
              </div>
             <ul className='grid grid-cols-[repeat(3,minmax(200px,1fr))] gap-10 mt-[30px]'>
                {
                  ctg.map((value, key)=> (
                      <li key={key} className='bg-gray-200 w-full rounded-[20px]'>
                        <div className='mx-[30px] text-gray-600 p-3'>
                          <p className='font-bold text-3xl'>{value.name}</p>
                          <p className='text-[14px] my-7'>{value.description}</p>
                          <Link href={value.url}> <p className='font-bold text-xl text-blue-500 flex gap justify-start items-center'><span>View Accessories</span> <ArrowRight/> </p></Link>
                        </div>
                         <Image className='w-full h-auto drop-shadow-gray-800 ' src={value.image} width={400} height={300} alt={value.name} />
                        
                      </li>
                  ))
                }
             </ul>
    </div>
    </div>
  )
}

export default Category
