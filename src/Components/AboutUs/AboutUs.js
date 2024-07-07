import React,{useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import image1 from '../Assets/about-1.jpg'
import image2 from '../Assets/about-2.jpg'
import image3 from '../Assets/about-3.jpg'
import image4 from '../Assets/about-4.jpg'
import { FaUtensils } from "react-icons/fa";



const AboutUs = () => {

    
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

  const initialXRight = windowSize.width >= 640 ? 200 : 100; // Initial X position for right animation


  const initialRight = {
    x: initialXRight, // Set initial position for right element
    opacity: 0
  };


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



  const [experience, setExperience] = useState({
    years: 0,
    clients: 0,
    projects: 0,
  });

  useEffect(() => {
    const durations = {
      years: 150, // 1 second
      clients: 50, // 2 seconds
      projects: 70, // 3 seconds
    };

    const resetExperience = () => {
      setExperience({
        years: 0,
        clients: 0,
        projects: 0,
      });
    };

    const intervals = Object.keys(experience).map(property => {
      return setInterval(() => {
        setExperience(prevExperience => ({
          ...prevExperience,
          [property]: Math.min(prevExperience[property] + 1, property === 'years' ? 15 : property === 'clients' ? 50 : 50),
        }));
      }, durations[property]);
    });

    // Add event listener for visibility change
    document.addEventListener('visibilitychange', resetExperience);

    // Cleanup: remove event listener and clear intervals
    return () => {
      document.removeEventListener('visibilitychange', resetExperience);
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);


  return (
    <>


<div className="container mx-auto sm:px-5 px-3 py-20 mt-8 overflow-hidden">
  <div className="flex flex-wrap -mx-6">
    {/* Left side - Image */}
    <div className="w-full sm:w-1/2 px-4 mb-8 md:mb-0">
     <div className="container mx-auto p-4">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <motion.img
        initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
        whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
        transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
         src={image1} alt="Image 1" className="" />
      </div>

      <div>
      <motion.img
        initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
        whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
        transition={{ delay: 0.3, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
         src={image2} alt="Image 2" className="" />
      </div>

      <div>
      <motion.img
        initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
        whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
        transition={{ delay: 0.4, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
         src={image3} alt="Image 3" className="" />
      </div>
      
      <div>
      <motion.img
        initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
        whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
        transition={{ delay: 0.4, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
         src={image4} alt="Image 4" className="" />
      </div>
    </div>
  </div>
    </div> 


    
    {/* Right side - Text */}
    <motion.div
        initial={initialRight} // Initial position: off-screen to the left, hidden, starting from a greater distance
        whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
        transition={{ 
        delay: 0.2, 
        x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
        opacity: { duration: 1 }, // Smooth opacity transition
        ease: "easeIn", // Easing function
        duration: 1 // Overall animation duration
      }}
     className="w-full lg:w-1/2 lg:px-4 px-5 lg:mt-12 md:mt-5">
      <div className="mb-8 px-3">
        <h2 className="text-2xl font-family font-bold text-[#FEA116] mb-3">About Us</h2>
        <h1 className="text-black flex mt-5 flex-wrap font-family sm:text-5xl text-4xl font-bold" style={{ lineHeight: isLargeScreen ? '3.8rem' : '3rem' }}>
        Welcome to  
        <span className='px-2'>
         <FaUtensils className="text-[#FEA116]" />
         </span>

          Restoran

        </h1>
            
        <p className="text-gray-600 font-family text-lg mt-4">
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        </p>

            
        <p className="text-gray-600 font-family text-lg mt-4">
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

      </div>
    
    
        {/* Right side - Additional Text */}
       <div className="w-full sm:flex px-4 mt-8">
        <div className="sm:w-1/2 sm:p-2 border-s-4 border-s-[#FEA116]">
          {/* Box 1 - Experience */}
          <div className="flex items-center ml-5">
            <h2 className="sm:text-5xl text-4xl font-family font-extrabold text-[#FEA116] mb-2 mr-2">{experience.years}</h2>
            <div className="flex flex-col items-start ps-5">
                <h3 className="text-lg font-family text-gray-600">Years of</h3>
                <h2 className="font-family font-bold">EXPERIENCE</h2>
            </div>
        </div>
        </div>


        <div className="sm:w-1/2 sm:p-2 sm:mt-0 mt-5 border-s-4 border-s-[#FEA116]">
           {/* Box 2 - Happy Clients */}
           <div className="flex items-center ml-5">
            <h2 className="sm:text-5xl text-4xl font-family font-extrabold text-[#FEA116] mb-2 mr-2">{experience.clients}</h2>
            <div className="flex flex-col items-start ps-5">
                <h3 className="text-lg text-gray-600 font-family">Popular</h3>
                <h2 className="font-family font-bold">MASTER CHEFS</h2>
            </div>
            </div>
        </div>
    
      </div>
      <div className='mt-8 px-2'>
      <button className="hover:bg-[#fe9216] font-family duration-300 font-semibold bg-[#FEA116] text-white mt-8 py-5 px-12 rounded">
       READ MORE
      </button>
      </div>
      </motion.div>

        
    </div>
    </div>
      
    </>
  )
}

export default AboutUs