import React from "react";

function Cards() {
  return (
    <div 
    
    className="card_page w-full flex p-5 py-10">
      <div className="cardContainerss h-[60vh] w-1/2 flex justify-center items-center">
        <div className="relative bg-[#004D43] w-full h-full m-5 rounded flex justify-center items-center">
          <img className="h-5vw object-cover" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />

          <div className="absolute bottom-7 left-5 text-[#CDEA68] border-[#CDEA68] border-[1px] rounded-full p-2">
            &copy; 2019-2022
          </div>
        </div>
      </div>
      <div className=" cardContainerss w-1/2 h-[60vh] flex gap-5">
        <div className="relative flex justify-center items-center h-full w-full bg-[#212121] rounded ">
          <img
            className="cover-full h-[5vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="card2"
          />

          <div className="absolute bottom-7 border-[1px] border-white rounded-full p-2  uppercase">
            rating on 5.0 on clutch
          </div>
        </div>
        <div className="relative flex justify-center items-center h-full w-full bg-[#212121] rounded">
          <img
            className="cover-full h-[8vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="card2"
          />

          <div className="absolute bottom-7 border-[1px] border-white rounded-full p-2  uppercase">
            rating on 5.0 on clutch
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
