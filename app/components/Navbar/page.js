import React from 'react'
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className='sticky flex '>
    <span className='text-2xl'>Blood</span><span className='text-2xl'>Finder</span> <Image className='mx-1' alt="icon" src='/bee.png' width={38} height={5} />
        
    </nav>
  )
}

export default Navbar