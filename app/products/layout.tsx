import React from 'react'
import BreadCrump from './breadCrump'

function Rootlayout({children}:{children:React.ReactNode}) {
  return (
    <div>
       <BreadCrump />
      {children}
    </div>
  )
}

export default Rootlayout
