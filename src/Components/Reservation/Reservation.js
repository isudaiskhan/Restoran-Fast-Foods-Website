import React,{useState, useEffect} from 'react'
import bgimage from '../Assets/video.jpg';
import { BsPlayCircleFill } from 'react-icons/bs';
import { FaTimes, FaAngleDown } from 'react-icons/fa';
import {motion} from 'framer-motion';
import { FiUser , FiMail, FiMessageSquare } from "react-icons/fi";


const Reservation = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleIconClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleCloseClick = () => {
    setIsPlaying(false);
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
    className="grid grid-cols-1 lg:grid-cols-2 mt-16">
        {/* Left Column */}
        <div className="relative">
          <div
            className={`bg-no-repeat bg-cover bg-center h-[640px] lg:h-full`}
            style={{ backgroundImage: `url(${bgimage})` }}
          ></div>
          {/* Play Button */}
          <button
            className="bg-[#FEA116] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full py-3 px-3"
            onClick={handleIconClick}
          >
            <BsPlayCircleFill
              className={`text-7xl rounded-full text-white ${
                isPlaying ? 'animate-wobble' : ''
              }`}
            />
          </button>
        </div>

        {/* Right Column */}
        <div className="relative">
          {/* YouTube video player */}
          {isPlaying && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
              <div className="relative">
                <button
                  className="absolute -mt-6 right-0 text-white hover:text-gray-300"
                  onClick={handleCloseClick}
                >
                  <FaTimes className="w-6 h-6" />
                </button>
                <iframe
                  className="w-full h-full sm:w-[500px] sm:h-72"
                  src="https://www.youtube.com/embed/JGwWNGJdvx8?si=MO9xc9hdtkTLj5X4" 
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}



<div className='w-full sm:px-5 px-2 bg-[#0F172B]'>
 <div className='container mx-auto overflow-hidden'>

 <div className='flex flex-col justify-center p-7'>
     
    <h4 className='text-2xl font-family font-bold text-[#FEA116]'>Reservation</h4>
   <h1 className='lg:text-5xl text-white mt-2 font-family sm:text-4xl text-3xl font-bold' style={{ lineHeight: isLargeScreen ? '4rem' : '3rem' }}>
   Book A Table Online
   </h1>


   {/* Form Section */}
   <form className='mt-6 space-y-6 mb-4 md:mb-0'>

<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
  <div className='w-full md:w-1/2 relative'>
    <input type="text" id="input1" name="user_name" placeholder='Your Name' required className="w-full rounded bg-white border px-4 py-3 placeholder:text-gray-500 text-black focus:border-[#FEA116] focus:outline-none" />
    <FiUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
  </div>



<div className='w-full md:w-1/2 relative'>
    <input type="email" id="input2" name="user_Email" placeholder='Your Email' required className="w-full rounded bg-white border px-4 py-3 placeholder:text-gray-500 text-black focus:border-[#FEA116] focus:outline-none" />
    <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
  </div>
  </div>

  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
  
<div className='w-full md:w-1/2 relative'>
    <input type="datetime-local" id="input3" name="user_datetime" placeholder='Date & Time' required className="w-full rounded bg-white border px-4 py-3 placeholder:text-gray-500 text-black focus:border-[#FEA116] focus:outline-none" />
  </div>


  <div className='w-full md:w-1/2 relative'>
  <select defaultValue="" className="w-full block appearance-none rounded bg-white border px-4 py-3 placeholder:text-gray-500 text-black focus:border-[#FEA116] focus:outline-none" id="country">
        <option value="" disabled>No of People</option>
        <option value="usa">People 1</option>
        <option value="canada">People 2</option>
        <option value="uk">People 3</option>
        <option value="australia">People 4</option>
        {/* Add more options for other countries */}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <FaAngleDown />
    </div>
  </div>


  </div>

<div className='w-full relative'>
  <textarea id="textarea" placeholder='Message' name="message" required rows="6" className="p-2 px-4 py-3 w-full rounded bg-white border placeholder:text-gray-500 focus:border-[#FEA116] focus:outline-none" />
  <FiMessageSquare className="absolute right-3 bottom-3 text-gray-500" />
</div>
<div className='flex justify-center mt-8'>
<button className="hover:bg-[#fe9216] font-family w-full duration-300 font-semibold bg-[#FEA116] text-white py-5 px-12 rounded">
       BOOK NOW
      </button>
        </div>
   </form>


   </div>

   </div>

   </div>

   </div>
      </motion.div>
      
    </>
  )
}

export default Reservation