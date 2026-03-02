import { Package, ShoppingBag, Verified } from 'lucide-react'
import React from 'react'

function CTA() {

    const flow = [

        {
            emoji:<Package size={24} />,
            name:"Free Delivery",
            description:"Lorem ipsum dolor sit Rerum ipsa labore error hic minus eos doloribus vero eveniet nihil cumque?"
        },
        {
            emoji:<ShoppingBag size={24} />,
            name:"Self-Pickup",
            description:"Lorem ipsum dolor sit quia exercitationem laudantium voluptatem delectus. Rerum ipsa labore error hic minus eos doloribus vero eveniet nihil cumque?"
       
        },
        {
            emoji:<Verified size={24} />,
            name:"Warrent",
            description:"Lorem ipsum dolor sit Rerum ipsa labore error hic minus eos doloribus vero eveniet nihil cumque?"
       
        }
    ]

  return (
    <div>
      <section className='bg-gray-200 p-[88px] mt-15 mx-[67px] rounded-[20px]'>
        <h1 className='text-6xl font-bold text-center px-40 '>Experience streamlined shopping with Crescendo</h1>
        <ul className='grid grid-cols-3 gap-15 justify-center items-center mt-8'>
                {
                    flow.map((value)=>(
                        <li className='flex text-center flex-col justify-center items-center'>
                            <p>{value.emoji}</p>
                            <h1 className='text-3xl font-bold py-[7px]'>{value.name}</h1>
                            <p className='text-[16px]'>{value.description}</p>
                        </li>
                    ))
                }
        </ul>
      </section>
    </div>
  )
}

export default CTA
