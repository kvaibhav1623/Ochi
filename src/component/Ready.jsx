import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";


function Ready() {
  const [animation,setAnimation]=useState(false);
  const [animation2,setAnimation2]=useState(false);

const [rotates, setRotates] = useState(0);

const handle_move_eye=(e)=>{
let positionx=e.clientX;
let positiony=e.clientY;

let deltax=positionx-window.innerWidth/2;
let deltay=positiony-window.innerHeight/2;

let angle=Math.atan2(deltay,deltax)*(180/Math.PI);
setRotates(angle-180)
console.log(angle)
}



  return (
    <div className='relative w-full bg-[#CDEA68]  flex py-20 items-center flex-col ready_page overflow-hidden' onMouseMove={handle_move_eye} >

      <div className='relative' data-scroll  data-scroll-speed='-0.3'>
      <div  className='ready_height w-full my-10 h-screen flex flex-col items-center text-[#212121] '>

       <h1 className='uppercase text-[15vw] leading-none  font-semibold' style={{ fontFamily: 'fgs' }}>ready</h1>
       <h1 className='uppercase text-[15vw] leading-none  font-semibold' style={{ fontFamily: 'fgs' }}>to start</h1>
       <h1 className='uppercase text-[15vw] leading-none  font-semibold' style={{ fontFamily: 'fgs' }}>the project?</h1>

     </div>

     <div className='buttons flex flex-col gap-5 justify-center items-center '>
     <button 
          onMouseEnter={() => setAnimation(true)}
          onMouseLeave={() => setAnimation(false)} 
          className="uppercase flex items-center w-[18vw] h-[5vw] px-5 py-5 bg-zinc-900 mt-10 rounded-full gap-5 animate">
            start the project
            <div className={`animate ease-in text-black flex justify-center items-center bg-white rounded-full overflow-hidden ${animation ? 'w-7 h-7': 'w-2 h-2 text-white'} `}><FaArrowRight /></div>
          </button>

       <h1 className='text-[#212121]'>OR</h1>


       <button 
          onMouseEnter={() => setAnimation2(true)}
          onMouseLeave={() => setAnimation2(false)} 
          className="uppercase flex items-center w-[19.3vw] h-[5vw] px-5 text-black border-[1px] border-black rounded-full gap-5 animate">
            hello@ochi.design
            <div className={`animate ease-in  flex justify-center items-center bg-black rounded-full overflow-hidden ${animation2 ? 'w-7 h-7 text-white': 'w-2 h-2 text-black'} `}><FaArrowRight /></div>
          </button>

       
     </div>

     <dir className='absolute top-[13vw] left-1/2 -translate-x-1/2 flex  gap-5'>

       <div className="relative circle h-60 w-60 rounded-full white bg-white flex justify-center items-center">
         <div className="relative circle h-40 w-40 flex justify-center items-center rounded-full white bg-black" >

           <div className={`w-full h-10 `} style={{
                 transform: ` rotate(${rotates}deg)`,
               }}>
             <div className='h-full w-10 rounded-full bg-white'>

             </div>
           </div>
         </div>
       </div>

       <div className="relative circle h-60 w-60 rounded-full white bg-white flex justify-center items-center">
         <div className="relative circle h-40 w-40 flex justify-center items-center rounded-full white bg-black" >

           <div className={`w-full h-10 `}  style={{
                 transform: ` rotate(${rotates}deg)`,
               }}>
             <div className='h-full w-10 rounded-full bg-white'>

             </div>
           </div>
         </div>
       </div>

     </dir>
      </div>
    </div>
  );
}

export default Ready;
