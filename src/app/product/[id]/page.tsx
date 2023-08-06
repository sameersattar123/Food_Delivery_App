import Price from '@/Components/Price'
import { singleProduct } from '@/data'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col  p-4 lg:px-20 xl:px-40 h-screen justify-around text-red-500 md:flex-row md:items-center md:gap-6'>
      {
        singleProduct.img && 
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image src={singleProduct.img} alt="" className='object-contain' fill />
        </div>
      }
      <div className="h-1/2 flex flex-col gap-4  md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className='uppercase font-bold text-3xl '>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price id={singleProduct.id} options={singleProduct.options} price={singleProduct.price}/>
      </div>
    </div>
  )
}

export default page