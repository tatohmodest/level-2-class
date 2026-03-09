'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
function BreadCrump() {

    const pathname = usePathname()
    const pathSegments = pathname.split('/').filter(Boolean)
  return (
    <div>
      <header className='w-full p-3 px-8'>

       <ul className='flex gap-3 '>
           {
            pathSegments.map((segment, index) => {
                const href = '/' + pathSegments.slice(0, index+1).join('/')
                console.log(href, 'ref')
                console.log(pathname,'pathname')
                return (
                    <li key={href} className={`text-gray-300 text-[18px] `}>
                    /<Link href={href} className={`${pathname==href ?"text-blue-500":""}`}>
                     {segment}
                    </Link>
                    </li>
                )

            })
           }
       </ul>
      </header>
    </div>
  )
}

export default BreadCrump
