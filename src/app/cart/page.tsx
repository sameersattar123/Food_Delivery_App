import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className='  text-red-500 flex flex-col lg:flex-row'>
      {/* PRODUCT PAGE */}
      <div className="flex-1 p-4 flex flex-col justify-center h-1/2 overflow-scrol lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* SINGLE PAGE */}
        <div className="flex items-center mb-4 justify-between">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h2 className='text-xl uppercase font-bold'>Silician</h2>
            <span>Large</span>
          </div>
            <h2 className='font-bold'>$78.99</h2>
            <span className='cursor-ponter'>X</span>
        </div>
        <div className="flex items-center mb-4 justify-between ">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h2 className='text-xl uppercase font-bold'>Silician</h2>
            <span>Large</span>
          </div>
            <h2 className='font-bold'>$78.99</h2>
            <span className='cursor-ponter'>X</span>
        </div>
        <div className="flex items-center mb-4 justify-between ">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h2 className='text-xl uppercase font-bold'>Silician</h2>
            <span>Large</span>
          </div>
            <h2 className='font-bold'>$78.99</h2>
            <span className='cursor-ponter'>X</span>
        </div>
        </div>
      {/* PAYMENT PAGE */}
      <div className="flex-1 p-4 h-1/2 bg-fuchsia-50 flex flex-col gap-4 justify-center">
        <div className="flex justify-between ">
          <span className="">Subtotal (3)</span>
          <span className="">$78.99</span>
        </div>
        <div className="flex justify-between ">
          <span className="">Services cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between ">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr />
        <div className="flex justify-between ">
          <span className="">Total</span>
          <span className="">$78.99</span>
        </div>
        <button className="bg-red-500 rounded-md w-1/2 p-3 text-white self-end">CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartPage