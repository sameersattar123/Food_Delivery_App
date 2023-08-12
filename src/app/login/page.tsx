import Image from 'next/image'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
      <div className="h-full shadow-2xl flex flex-col md:flex-row rounded-md md:h-[70%] md:w-full lg:w-[60%] xl:w-1/2">
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt=""  fill className='object-cover'/>
        </div>
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className='font-bold text-xl'>Welcome</h1>
          <p>log into your account or create a new one using social buttons</p>
          <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md'>
          <Image src="/google (1).png" alt="" width={20} height={20} className='object-contain'/>
          <span>Sign in with Google</span>
          </button>
          <button className=' flex gap-4 p-4 ring-1 ring-orange-100 rounded-md'>
            <Image src="/facebook (1).png" alt="" width={20} height={20} className='object-contain' />
            <span>Sign in with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage