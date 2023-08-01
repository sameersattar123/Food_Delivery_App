import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'

const Navbar = () => {
  const user = false;
  return (
    <div className="flex justify-between items-center text-red-500 p-4 uppercase border-b-2 border-red-500 h-12 md:h-24 lg:px-20 xl:px-40">

      {/* left Links  */}
      <div className="hidden md:flex gap-4 items-center flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menupage</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* logo  */}
      <div className=" flex-1 md:font-bold md:text-center">
        <Link className='text-xl' href="/" >Massimo</Link>
      </div>

      {/* mobile menu  */}
    <div className='md:hidden'>
      <Menu/>
    </div>

{/* Right Links  */}
<div className="hidden md:flex gap-4 items-center justify-center flex-1">
  <div className="bg-orange-300 px-2 rounded-md cursor-pointer md:absolute top-3 r-2 lg:static" >
    <span>0316106304</span>
  </div>

       {!user ?  <Link href="/login">Login</Link>
         : <Link href="/order">Order</Link>}
        <CartIcon/>
      </div>
    </div>
  )
}


export default Navbar