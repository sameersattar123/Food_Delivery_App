"use client";

import React, { useEffect, useState } from 'react'

type Props = {
    price: number;
    id: number;
    options?: { title: string; additionalPrice: number }[];
  };

const Price = ({price , options , id}: Props) => {
    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected , setSelected] = useState(0);

    useEffect(() => {
        setTotal(
            quantity * (options ? price + options[selected].additionalPrice : price)
        )
    },[selected , options , quantity , price])
  return (
    <div className=' flex flex-col gap-4  '>
        <h2 className='font-bold text-2xl '>${total.toFixed(2)}</h2>

        {/* OPTION BUTTONS */}
        <div className="flex gap-4">
            {
                options?.map((option , index) => {
                    return (
                        <button
                         className="ring-1
                         ring-red-500
                         rounded-md p-2  min-w-[6rem]"
                         style={{
                            backgroundColor : selected === index ? "rgb(239 ,68 ,68)" : "white",
                            color : selected === index ? "white" : "red"
                         }}
                         onClick={() => setSelected(index)}
                         key={option.title}>{option.title}</button>
                    )
                })
            }
        </div>

        {/* QUANTITY AND ADD BUTTON CONTAINER */}
        <div className="flex justify-between items-center ">
            <div className="flex justify-between w-full ring-1 ring-red-500 p-3 ">
            <span>QUANTITY</span>
            <div className='flex gap-4 items-center'> 
                <button onClick={() => setQuantity((prev) => prev > 1 ? prev - 1 : 1)}>{"<"}</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((prev) => prev < 9 ? prev + 1 : 9)}>{">"}</button>
            </div>
            </div>
        <button className='uppercase ring-red-500 ring-1 text-white p-3 w-56 bg-red-500 '>Add to Cart</button>
        </div>
    </div>
  )
}

export default Price