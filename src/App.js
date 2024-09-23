import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import LandingPage from "./component/LandingPage";
import Marquee from "./component/Marquee";
import About from "./component/About";
import Eye from "./component/Eye";
import Featured from "./component/Featured";
import Featured2 from "./component/Featured2";
import Button from "./component/Button";
import Cards from "./component/Cards";
import Ready from "./component/Ready";
import Footer from "./component/Footer";
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  useEffect(() => {
    

    const initializeLocomotiveScroll = () => {
     var locomotiveScroll = new LocomotiveScroll()
    };

    

    // Initialize or destroy Locomotive Scroll based on screen width
    const handleResize = () => {
      if (window.innerWidth > 950) {
        initializeLocomotiveScroll();
        console.log(window.innerWidth)
        
      }
    };

    // Initial setup
    handleResize();
    
    

    // Event listener for window resize
   

    // Cleanup when the component is unmounted
    
  }, []);


  return <div className="app-main_page  w-full bg-zinc-950 text-white overflow-hidden" style={{width:'100%'}}>

  <Navbar/>
  <LandingPage/>
  <Marquee/>
  <About/>
  {((window.innerWidth>700)&&<Eye/>)}
  <Featured/>
  <Featured2/>
  <Button/>
  <Cards/>
  {((window.innerWidth>700)&&<Ready/>)}

  <Footer/>


  </div>;
}

export default App;
