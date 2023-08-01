import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll  text-red-500 '>
      <div className="w-max flex">
       {featuredProducts.map((item) => {
        return (
          <div className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]" key={item.id}>
          {/* Image Container */}
        {item.img && <div className="relative flex-1 w-full">
          <Image src={item.img} alt="" fill className='object-contain transition-all duration-600 hover:rotate-[360deg]'/>
        </div>}
          {/* Text Container */}
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 ">
            <h1 className='text-xl font-bold uppercase xl:text-2xl  2xl:text-3xl'>{item.title}</h1>
            <p className='p-4 2xl:p-8'>{item.desc}</p>
            <span className='text-xl font-bold'>${item.price}</span>
            <button className='rounded-md  bg-red-500 text-white p-2'>Add to Cart</button>
          </div>
        </div>
          )
      })  
      }
      </div>
    </div>
  )
}

export default Featured