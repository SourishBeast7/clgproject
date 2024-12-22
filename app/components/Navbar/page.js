import React from 'react'
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className='flex'>
    <span className='text-2xl'>Blood</span><span className='text-2xl'>Finder</span> <Image className='mx-1' alt="icon" src='/blood.svg' width={38} height={5} />
        
    </nav>
  )
}

export default Navbar