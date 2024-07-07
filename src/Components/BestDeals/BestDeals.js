import React,{useState, useEffect} from 'react'
import bgimage from '../Assets/cta-two-bg.png'
import {motion} from 'framer-motion';
import { FaChevronRight } from "react-icons/fa";



const BestDeals = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia("(min-width: 640px)").matches);

    useEffect(() => {
      const mediaQuery = window.matchMedia("(min-width: 640px)");
  
      const handleScreenChange = () => {
        setIsLargeScreen(mediaQuery.matches);
      };
  
      // Initial check
      handleScreenChange();
  
      // Listen for changes
      mediaQuery.addListener(handleScreenChange);
  
      // Clean up
      return () => {
        mediaQuery.removeListener(handleScreenChange);
      };
    }, []); // Empty dependency array to run only once on mount
  
  return (
    <>


   <motion.div
     initial={{ y: 150, opacity: 0 }} // Initial position: below its final position and hidden
     whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
     transition={{ 
      delay: 0.4, 
      y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
      opacity: { duration: 0.2 }, // Smooth opacity transition
      ease: "easeIn", // Easing function
      duration: 1 // Overall animation duration
      }}
    className="relative mt-14 overflow-hidden">
  <div
    className="bg-no-repeat bg-cover bg-blend-multiply bg-[#b3b3b8de] bg-center h-96 py-6"
    style={{ backgroundImage: `url(${bgimage})` }}
  >
     <motion.div
     initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
     className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
     <div className='ps-3 pe-4'>
        <h1 className='sm:text-5xl text-3xl font-family text-white font-bold text-center' style={{ lineHeight: isLargeScreen ? '4rem' : '3rem' }}>Are you ready to order <br/> with the best deals?</h1>
      </div>
     <div className='mt-14 ps-4 pe-4 mx-auto'>
     <button className="flex items-center hover:bg-[#fe9216] font-family font-semibold bg-[#FEA116] text-white px-6 py-3 text-sm sm:text-base duration-300">
              <span className="mr-3 font-semibold">PROCEED ORDER</span>
              <FaChevronRight className='text-lg' />
            </button>
      </div>
    </motion.div>
  </div>
</motion.div>
      
    </>
  )
}

export default BestDeals