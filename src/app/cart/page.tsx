import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div>
      {/* PRODUCT PAGE */}
      <div className="">
        {/* SINGLE PAGE */}
        <div className=" relative">
          <Image src="/temporary/p1.png" alt="" fill className='object-contain' />
          <div className="">
            <h2>Silician</h2>
            <span>Large</span>
          </div>
            <h2>$78.99</h2>
            <span>X</span>
        </div>
      </div>
      {/* PAYMENT PAGE */}
      <div className="">

      </div>
    </div>
  )
}

export default CartPage