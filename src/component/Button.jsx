import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";


function Button() {
  const [animation,setAnimation]=useState(false)

  return (
    <div className='flex justify-center items-start w-full px-5 py-5 '>
    <button
    onMouseEnter={() => setAnimation(true)}
          onMouseLeave={() => setAnimation(false)} 
     className='button_page text-black bg-white uppercase rounded-full my-10 mx-5 p-5 flex gap-5 justify-center items-center w-[24vw] h-[5vw] px-5 py-5'>
    <h1>view all case studies</h1>
    <div className='w-8 h-8 flex justify-center items-center'>
    <div className={`animate ease-in flex justify-center items-center bg-black rounded-full overflow-hidden ${animation ? 'w-7 h-7  text-white': 'w-2 h-2 text-black'} `}><FaArrowRight /></div>

    </div>
    
    </button>
    </div>
  )
}

export default Button