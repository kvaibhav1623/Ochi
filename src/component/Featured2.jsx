import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Featured2() {
  const [hover,sethover]=useState(false)
  const [hover2,sethover2]=useState(false)
  return (
    
    <div 
    
    className='w-full ' style={{fontFamily:'NM'}}>
        
       <div className='px-10'>
       <div className='cards w-full flex gap-10 mt-10'>

       <div onMouseEnter={()=>{sethover(true)}} onMouseLeave={()=>{
        sethover(false)
       }} className='w-1/2'>

       <div className='flex items-center gap-2 mb-2'><div className='w-2 h-2 rounded-full bg-white'></div><h1 className='uppercase'>trawa</h1></div>

       <div className='cardContainer w-full h-[75vh]'>
      
      <div className='relative card w-full h-full rounded-xl'>

      <h1 className='absolute text-[#c6f02e] left-full -translate-x-1/2 top-1/2 z-10 text-7xl tracking-tighter leading-none font-bold flex overflow-hidden'>{'trawa'.split('').map((item,index)=>{
        return <motion.span 
        initial={{y:'100%'}}
        animate={hover?{y:"0%"}:{y:"100%"}}
        transition={{ease:[0.65, 0, 0.35, 1],delay:0.06*index}}
        className='uppercase inline-block translate-y-full'>{item}</motion.span>
      })}</h1>

       <img className='bg-cover h-full w-full rounded-md ' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="trawa" />
      </div></div>


      <div className='flex items-center gap-2 mt-3'>
      {['brand identity','Design research','investor deck'].map((items,index)=>{
        return(<div className='border-[2px] rounded-full p-2 uppercase leading-none'>
        {items}
        </div>)
      })}
      </div>



       </div>

       <div onMouseEnter={()=>{sethover2(true)}} onMouseLeave={()=>{
        sethover2(false)}} className='w-1/2'>

       <div className='flex items-center gap-2 mb-2'><div className='w-2 h-2 rounded-full bg-white'></div><h1 className='uppercase'>PREMIUM BLEND</h1></div>

       <div className='relative cardContainer w-full h-[75vh]'><div className='card w-full h-full rounded-xl '> 
       <h1 className='absolute text-[#c6f02e] right-full translate-x-1/2 top-1/2 z-10 text-7xl tracking-tighter leading-none font-bold flex overflow-hidden'>{'PREMIUM BLEND'.split('').map((item,index)=>{
        return <motion.span 
        initial={{y:'100%'}}
        animate={hover2?{y:"0%"}:{y:"100%"}}
        transition={{ease:[0.65, 0, 0.35, 1],delay:0.06*index}}
        className='uppercase inline-block translate-y-full'>{item}</motion.span>
      })}</h1>

       <img className='bg-cover h-full w-full  rounded-md' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" alt="Premimum blend" />
       </div></div>

       <div className='flex items-center gap-2 mt-3'>
      {['Branded template'].map((items,index)=>{
        return(<div className='border-[2px] rounded-full p-2 uppercase leading-none'>
        {items}
        </div>)
      })}
      </div>
       </div>
            

            
        </div>
       </div>

    </div>
  )
}

export default Featured2;