import { motion } from 'framer-motion'
import React from 'react'


function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.08' className='w-full py-10 rounded-tl-3xl rounded-tr-3xl flex bg-[#004D43] overflow-hidden'>
        <div className='w-full text border-t-2 border-b-2 flex  overflow-hidden justify-between'>
        <motion.h1  initial={{x:0}} animate={{x:'-100%'}} transition={{ ease:'linear', repeat:Infinity, duration:5}} className='uppercase text-[20vw] font-semibold leading-none  whitespace-nowrap  pr-20' style={{fontFamily:'fgs'}}>we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ ease:'linear', repeat:Infinity, duration:5}} className='uppercase text-[20vw] leading-none font-semibold  whitespace-nowrap pr-20' style={{fontFamily:'fgs'}}>we are ochi</motion.h1>
        </div>

        
    </div>
  )
}

export default Marquee