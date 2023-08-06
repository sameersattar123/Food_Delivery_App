"use client";

import React from 'react'

type Props = {
    price: number;
    id: number;
    options?: { title: string; additionalPrice: number }[];
  };

const Price = ({price , options , id}: Props) => {
  return (
    <div className=' flex flex-col gap-4  '>
        <h2 className='font-bold text-2xl '>${price.toFixed(2)}</h2>

        {/* OPTION BUTTONS */}
        <div className="flex gap-4">
            {
                options?.map((option) => {
                    return (
                        <button className="ring-1 ring-red-500 rounded-md p-2 " key={option.title}>{option.title}</button>
                    )
                })
            }
        </div>

        {/* QUANTITY AND ADD BUTTON CONTAINER */}
        <div className="flex justify-between items-center ">
            <div className="flex justify-between w-full ring-1 ring-red-500 p-3 ">
            <span>QUANTITY</span>
            <div className='flex gap-4 items-center'> 
                <button>{"<"}</button>
                <span>1</span>
                <button>{">"}</button>
            </div>
            </div>
        <button className='uppercase ring-red-500 ring-1 text-white p-3 w-56 bg-red-500 '>Add to Cart</button>
        </div>
    </div>
  )
}

export default Price