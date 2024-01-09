import React from 'react'
import Link from 'next/link'

const HomeBtn = () => {

   
  return (
    <div>
         <button className='btn btn-primary'><Link href="/">Home</Link></button>
    </div>
  )
}

export default HomeBtn;
