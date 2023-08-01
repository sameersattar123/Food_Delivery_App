"use-client";

import React from 'react'
import Countdown from "react-countdown"
const Timer = () => {
    const endingDate = new Date('2023-7-31')
  return (
    <div>
        <Countdown className='text-yellow-300 text-5xl font-bold ' date={endingDate}/>
    </div>
  )
}

export default Timer