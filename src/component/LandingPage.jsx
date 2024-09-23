import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    
  return (
    <div className='w-full  bg-zinc-900 pt-1 pb-2 ' data-scroll data-scroll-section data-scroll-speed='-.6'>

    <dir className='lw-div-landing_page textstructure mt-40 px-20'>


        {
            ['we create','eye-opening','persentations'].map((item,index)=>{
                return <div className="masker ">
            <div className='w-fit flex items-center'>
            {(index===1)&&(<motion.div initial={{width:0}} animate={{width:'8.5vw'}} transition={{ease:[0.65, 0, 0.35, 1],duration:1}} className='mr-[1vw] rounded-md w-[8.5vw] h-[6vw] relative top-[.2vw]'>
                <img className='h-full w-full rounded-xl' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="landing_page_img" />
            </motion.div>)}
            <h1 className='uppercase text-[9.5vw] leading-[7vw] font-semibold'
            style={{fontFamily:'fgs'}}>{item}</h1>
            </div>
        </div>

            })
        }
        
    </dir>  

    <div className="lw-div-landing border-t-[1px] mt-20 mb-10 border-zinc-800 flex justify-between  items-center py-5 px-20" style={{fontFamily:'NM'}}>

        {
            ['for public and private companies','from the first pitch to the IPO'].map((item,index)=>{
                return <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            })
        }

        <div className="start flex  items-center  gap-5">
            <div className='uppercase border-[2px] border-zinc-500 text-sm font-light rounded-full p-[5px]'>start the project</div>
            <div className='w-8 h-8 rounded-full border-[1px] border-zinc-500 flex items-center justify-center'>
            <span className='rotate-[45deg]'><FaArrowUpLong /></span>
            </div>
            
            
        </div>
    </div>
    </div>
  )
}

export default LandingPage