import React, { useEffect, useState } from "react";

function Eye() {
  const [rotate, setRotate] = useState(0);

  const handle_move=(e)=>{
    let positionx = e.clientX ;
        let positiony = e.clientY;
  
        let deltax = positionx - window.innerWidth / 2;
        let deltay = positiony - window.innerHeight / 2;
  
        
  
        let angle = Math.atan2(deltay, deltax)*(180 / Math.PI);
        setRotate(angle-180);
  

  }
  return (
    <div className="w-full h-screen overflow-hidden" onMouseMove={handle_move}>
      <div  data-scroll  data-scroll-speed='-1' className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div className="flex items-center justify-center bg-zinc-100 h-[15vw] w-[15vw] rounded-full">
            <div className="relative w-2/3  h-2/3  bg-zinc-900 rounded-full">
              <div className="absolute line w-full h-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] " style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}>
                <div className="h-full w-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-zinc-100 h-[15vw] w-[15vw] rounded-full">
            <div className="relative  w-2/3  h-2/3  bg-zinc-900 rounded-full">
              <div
                className="absolute line w-full h-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
              >
                <div className="h-full w-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eye;
