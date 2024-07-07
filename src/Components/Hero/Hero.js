import React,{useState, useEffect} from 'react'
import image from '../Assets/hero.png'
import bgimage from '../Assets/bg-hero.jpg'
import {motion} from 'framer-motion';
import { IoMdCall } from "react-icons/io";



const Hero = () => {

  
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures that effect runs only once after mount

  const initialX = windowSize.width >= 640 ? -300 : -170;



  return (
    <>


      <div
        className='bg-no-repeat h-full py-10 bg-cover bg-blend-multiply bg-[#0f172bde] bg-center'
        style={{ backgroundImage: `url(${bgimage})` }}>


   <div className='relative w-full mt-16 py-16 px-4 overflow-hidden' id='home'>
     <div className='max-w-[1240px] mx-auto lg:space-x-16 flex flex-col lg:flex-row'>
     {/* First Div */}
     <motion.div
      initial={{ x: initialX, opacity: 0 }} // Initial position: off-screen to the left, hidden, starting from a greater distance
      whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
      transition={{ 
      delay: 0.2, 
      x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
      opacity: { duration: 1 }, // Smooth opacity transition
      ease: "easeIn", // Easing function
      duration: 1 // Overall animation duration
    }}

     className='lg:w-2/3 lg:mt-14 px-5'>
      <h1 className='md:text-6xl text-white text-5xl lg:text-start sm:text-center font-family font-extrabold tracking-wide py-2' style={{lineHeight:'4.7rem'}}>Enjoy Our <br></br> Delicious Meal</h1>
      <div className='mt-1'>
     <p className='text-lg font-family text-white lg:text-start sm:text-center mt-1 py-2'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

        <div className='flex sm:justify-center justify-start lg:justify-start'>
       <button className="hover:bg-[#fea116c7] font-semibold bg-[#FEA116] text-white mt-8 py-5 px-12 shadow-2xl shadow-[#feb445] hover:shadow-none rounded">
          BOOK A TABLE
      </button>
      </div>

      </div>
    </motion.div>

        <div>
        <motion.img
         initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
        whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
        animate={{ rotate: 360 }} // Rotate the image
        transition={{
          scale: { delay: 0.2, type: "spring", stiffness: 60, duration: 1 },
          rotate: { repeat: Infinity, duration: 30, ease: "linear" }
        }} // Define transition for both scale and rotate properties
         src={image} className="lg:w-[700px] lg:mt-0 mt-14 w-[500px] rounded-full mx-auto my-4 lg:ml-auto" />
      </div>
    </div>
      </div>
    </div>
          
    </>
  )
}

export default Hero
