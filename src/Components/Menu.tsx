"use client";


import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import CartIcon from './CartIcon';

const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
  ];

const Menu = () => {
    const user = false;
    const [open, setOpen] = useState(false)
  return (
    <div>
        {
            !open ? 
            <Image src="/open.png" alt="" width={20} height={20} onClick={() => setOpen(true)} />:  <Image src="/close.png" alt="" width={20} height={20} onClick={() => setOpen(false)} />
        }
        { open && <div className=" flex flex-col justify-center items-center text-3xl bg-red-500 absolute left-0 top-24 text-white gap-8  h-[calc(100vh-6rem)] z-10 w-full">
            {
                links.map((item) => {
                    return(
                        <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>{item.title}</Link>
                    )
                })
            }
            {
                !user ? <Link href="/login" onClick={() => setOpen(false)}>Login</Link> : <Link href="/" onClick={() => setOpen(false)}></Link>
            }
            <Link href="/cart">
                <CartIcon/>
            </Link>
        </div>}
    </div>
  )
}

export default Menu