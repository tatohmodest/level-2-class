'use client'
import React, {useEffect, useState} from 'react'
import { Products as pds } from '@/app/_utils/products'
import Image from 'next/image'
import { preCategory } from '@/app/_utils/category'

import { ShoppingBasket, Star } from 'lucide-react'
function Products() {
   const [list , setList ] = useState<string[]>([])
   const [filter, setFilter] = useState(pds)
   const [currentPage, setCurrentPage] = useState(1)

   const itemsPerPage = 6
   
   const indexOfLastItem = currentPage * itemsPerPage

   const indexOfFirstItem = indexOfLastItem - itemsPerPage

   const currentItems = filter.slice(indexOfFirstItem, indexOfLastItem)
   const addToList = (value :string) => {
      
      setList(
        prev =>
        prev.includes(value) ?
        prev.filter((item)=> item != value) : [...prev, value]
    )

      console.log(list)
   }

 

 useEffect(()=>{

    if (list?.length == 0 ) {
        setFilter(pds)
    }
    else{
       const result =  pds.filter((item)=> list?.some((keyword)=>
        item.name.includes(keyword) || item.category.includes(keyword)
))

    setFilter(result.length == 0? pds: result)
    
}

 
setCurrentPage(1)
   


}, [list])

const pages = []
for (let i = 0; i< filter.length/itemsPerPage ;i++) {
   pages.push(i)
}
   

  return (
    <div>
      <section className='grid bg-gray-200  p-24 grid-cols-[1fr_4fr]'>
        {/*Category filter */}
        <div className='px-[30px]  '>
           <div className=' bg-white border-2 border-gray-200 '>
           <h1 className='font-bold p-3 text-xl'>Product category</h1>
           <ul className='px-6 flex  flex-col justify-center items-start   '>


                  {
                    preCategory.map((value)=>(
                        <>
                        <li key={value}  className='flex justify-start items-center gap-6 '>
                           <input type='checkbox'checked={list.includes(value)} onChange={()=>addToList(value)} value={value} />
                           <span>{value}</span>
                        </li>
                        </>
                    ))
                  }
            </ul>
            </div>
          
        </div>



        <div className=' px-20'>
            <div>
                Search panels
            </div>
            <div>
                <div>
                    <ul className='flex justify-start items-center gap-6 p-5  '>
                        {
                            list.map((lis)=> (
                                <li key={lis} className="p-3 bg-white border text-gray-400 border-gray-200 rounded-full">
                                    {lis}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <ul className='grid grid-cols-3 gap-7 '>
                    {
                    currentItems.map((value)=> (
                        <li className="border bg-white  border-gray-300 rounded-xl">
                            <Image className='w-full h-[200px] rounded-t-xl object-cover' src={value.imageUrl} width={200} height={100} alt='something' />
                            <div className='px-8 p-5 '>
                                <div className='flex gap-5 justify-start items-center'>
                                    <span className="font-bold text-xl">{value.currency} {value.price}</span>
                                    <span className='text-gray-500 line-through decoration-blue-400 '>{value.currency} {value.price + 239}</span>
                                </div>
                                <p className='text-lg'>{value.name}</p>
                                <div className='flex gap-4 items-center w-full justify-between'>
                                    <span className='flex gap-2 px-6 font-bold justify-start items-center rounded-full p-[2px] bg-blue-300 text-white'><Star size={15} />{value.rating}</span>
                                    <p className='border-l border-gray-400 text-gray-400 pl-5 truncate'>{value.category}</p>
                                    <button className='text-white  flex justify-center items-center rounded-full p-3 bg-blue-600' ><ShoppingBasket size={15} /></button>
                                </div>
                            </div>
                        </li>
                    ))
                    }
                   
                </ul>
                 <div className=' mt-6'>
                     <ul className=' bg-white flex'>
                        {
                          pages.map((value)=> (
                            <li  className={`border list-none border-gray-300 p-4 ${currentPage == value+1 ? "bg-blue-500 text-white":""}`} onClick={()=>setCurrentPage(value+1)}>
                                {value + 1}
                            </li>
                          ))
                        }
                    </ul>
                    </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Products
