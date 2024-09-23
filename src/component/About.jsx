import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function About() {

  const [animation,setAnimation]=useState(false)
  return (
    <div className="w-full  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl" data-scroll data-scroll-section data-scroll-speed='-0.1'>
      <div className="lw-div1 p-20">
        <h1
          className="text-black text-[4.5vw] leading-[5vw] tracking-tighter"
          style={{ fontFamily: "NM" }}
        >
          Ochi is a strategic partner for fast-grow­ing tech <br></br>businesses
          that need to raise funds, sell prod­ucts,
          <br /> ex­plain com­plex ideas, and hire great peo­ple
        </h1>
      </div>

      <hr className="border-zinc-400 h-1" />

      <div className="lw-div2 h-[50vh] px-20 flex w-full" style={{ fontFamily: "NM" }}>
        <div className="w-2/4 h-full text-black py-3">
          <h2>What you can expect:</h2>
        </div>
        <div className="w-1/4 h-full text-black py-3 flex flex-col gap-y-10">
          <h2>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </h2>
          <h2>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </h2>
        </div>
        <div className="w-1/4 h-full text-black py-3 flex flex-col justify-center items-center">
          <h3 className="text-start">S:</h3>
          <h3 className="underline-offset-1 underline">Instagram</h3>
          <h3 className="underline-offset-1 underline">Behance</h3>
          <h3 className="underline-offset-1 underline">Facebook</h3>
          <h3 className="underline-offset-1 underline">Linkedin</h3>
        </div>
      </div>
      <div className="lw-div3 tb-flex lower-about-tb w-full flex gap-10 border-t-[2px] px-20 py-5 border-[#bfd674] mt-5">
        <div className="w-1/2">
          <h1 className="text-6xl mt-10 text-black tracking-tighter ease-linear">
            Our approach:
          </h1>
          <button 
          onMouseEnter={() => setAnimation(true)}
          onMouseLeave={() => setAnimation(false)} 
          className="uppercase flex items-center w-[14vw] h-[5vw] px-5 py-5 bg-zinc-900 mt-10 rounded-full gap-5 animate">
            read more
            <div className={`animate ease-in text-black flex justify-center items-center bg-white rounded-full overflow-hidden ${animation ? 'w-7 h-7': 'w-2 h-2 text-white'} `}><FaArrowRight /></div>
          </button>
        </div>
        <div className="w-1/2 h-[65vh] mt-5">
          <img
            className="w-full h-full rounded-[1vw] object-cover"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt="Men and Women"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
