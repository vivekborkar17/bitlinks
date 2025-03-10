import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-14 bg-purple-700 flex justify-between items-center text-white px-4'>
      <Link href='/'><div className='logo font-bold '>Bitlinks</div></Link>
        <ul className='flex justify-center gap-4 items-center' >
           <Link href='/'> <li >Home</li> </Link>
            <Link href='/'> <li>About</li> </Link>
           <Link href='/shorten'> <li>Shorten</li> </Link>
           <Link href='/'> <li>Contact Us</li> </Link>
          <li className='flex gap-3'>
            <Link href="/shorten"><button className='bg-purple-500 p-3 font-bold py-1 rounded-lg'>Try Now </button></Link>
            <Link href="https://github.com/vivekborkar17"><button className='bg-purple-500 p-3 font-bold py-1 rounded-lg'>Github</button></Link>

          </li>
        </ul>
    </nav>
  )
}

export default Navbar
