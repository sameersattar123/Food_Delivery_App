import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {
        pizzas.map((item) => {
          return (
            <Link href={`/product/${item.id}`} key={item.id} className='sm:w-1/2 lg:w-1/3  group  odd:bg-fuchsia-50  p-4 border-r-2 border-b-2 w-full h-[60vh] border-red-500 flex flex-col justify-between'>
              <div className="relative h-[80%]">
                {
                  item.img && <Image src={item.img} alt="" fill className='object-contain' />
                }
              </div>
              <div className="flex items-center justify-between font-bold">
                <h1 className='uppercase text-2xl p-2'>{item.title}</h1>
                <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
                <button className="text-white bg-red-500 rounded-md uppercase group-hover:block p-1 hidden">Add to Cart</button>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default CategoryPage