'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
function BreadCrump() {

    const pathname = usePathname()
    const pathSegments = pathname.split('/').filter(Boolean)
  return (
    <div>
      <header className='w-full p-7 border px-8'>

       <ul className='flex gap-3 '>
           {
            pathSegments.map((segment, index) => {
                const href = '/' + pathSegments.slice(0, index+1).join('/')
                return (
                    <li key={href}>
                    /<Link href={href}>
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
