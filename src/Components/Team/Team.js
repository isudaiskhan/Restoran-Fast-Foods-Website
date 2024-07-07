import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import image1 from '../Assets/team-1.jpg'
import image2 from '../Assets/team-2.jpg'
import image3 from '../Assets/team-3.jpg'
import image4 from '../Assets/team-4.jpg'
import {motion} from 'framer-motion';




const Team = () => {
  return (
    <>

 
  <div className='container mx-auto px-5 py-20 mt-28 overflow-hidden'>
 
    {/* Top Content */}
    <motion.div
     initial={{ y: 100, opacity: 0 }} // Initial position: below its final position and hidden
      whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
      transition={{ 
    delay: 0.4, 
    y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
    opacity: { duration: 0.2 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
   className="text-center mb-5 py-5 w-full mx-auto">
        <h2 className="text-2xl font-family font-bold text-[#FEA116] mb-5">Team Members</h2>
        <h1 className="text-black font-family sm:text-5xl text-4xl font-extrabold">Our Master Chefs</h1>
  </motion.div>
      
 
    

  <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-6 sm:gap-8 gap-14 py-20">

  {/* Card 1 */}
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
   className="bg-white border-t-[6px] group hover:border-t-[#FEA116] border-t-white rounded-lg shadow-lg hover:shadow-[#FEA116] shadow-gray-400 relative">
   <img src={image1} className='rounded-full w-52 h-52 mx-auto mt-8' />
  <h1 className="text-2xl font-bold font-family mt-8 text-black text-center">Full Name</h1>
  <p className='text-center text-gray-500 text-lg mt-2'>Designation</p>

  <div className="flex items-center py-6 justify-center space-x-4 rounded-b-lg mt-2">
      <div className='p-3 rounded-md group-hover:bg-[#FEA116] cursor-pointer'>
      <FaFacebookF className="text-[#FEA116] group-hover:text-white text-xl" />
      </div>
      <div className='p-3 rounded-md group-hover:bg-[#FEA116] cursor-pointer'>
      <FaTwitter className="text-[#FEA116] group-hover:text-white text-xl" />
      </div>
      <div className='p-3 rounded-md group-hover:bg-[#FEA116] cursor-pointer'>
      <FaInstagram className="text-[#FEA116] group-hover:text-white text-xl" />
      </div>
    </div>
  
   </motion.div>




  {/* Card 2 */}
  <motion.div
     initial={{ y: 250, opacity: 0 }} // Initial position: below its final position and hidden
      whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
      transition={{ 
    delay: 0.4, 
    y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
    opacity: { duration: 0.2 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
   className="bg-white border-t-[6px] group hover:border-t-[#FEA116] border-t-white rounded-lg shadow-lg hover:shadow-[#FEA116] shadow-gray-400 relative">
   <img src={image2} className='rounded-full w-52 h-52 mx-auto mt-8' />
  <h1 className="text-2xl font-bold font-family mt-8 text-black text-center">Full Name</h1>
  <p className='text-center text-gray-500 text-lg mt-2'>Designation</p>

  <div className="flex items-center py-6 justify-center space-x-4 rounded-b-lg mt-2">
      <div className='p-3 rounded-md group-hover:bg-[#FEA116] cursor-pointer'>
      <FaFacebookF className="text-[#FEA116] group-hover:text-white text-xl" />
      </div>
      <div className='p-3 rounded-md group-hover:bg-[#FEA116] cursor-pointer'>
      <FaTwitter className="text-[#FEA116] group-hover:text-white text-xl" />
      </div>
      <div className='p-3 rounded-md group-hover:bg-[#FEA116] cursor-pointer'>
      <FaInstagram className="text-[#FEA116] group-hover:text-white text-xl" />
      </div>
    </div>
  
</motion.div>





  {/* Card 3 */}
  <motion.div
     initial={{ y: 350, opacity: 0 }} // Initial position: below its final position and hidden
      whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
      transition={{ 
    delay: 0.4, 
    y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
    opacity: { duration: 0.2 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
  className="bg-white border-t-[6px] group hover:border-t-[#FEA116] border-t-white rounded-lg shadow-lg hover:shadow-[#FEA116] shadow-gray-400 relative">
   <img src={image3} className='rounded-full w-52 h-52 mx-auto mt-8' />
  <h1 className="text-2xl font-bold font-family mt-8 text-black text-center">Full Name</h1>
  <p className='text-center text-gray-500 text-lg mt-2'>Designation</p>

  <div className="flex items-center py-6 justify-center space-x-4 rounded-b-lg mt-2">
      <div className='p-3 rounded-md group-hover:bg-[#FEA116] cursor-pointer'>
      <FaFacebookF className="text-[#FEA116] group-hover:text-white text-xl" />
      </div>
      <div className='p-3 rounded-md group-hover:bg-[#FEA116] cursor-pointer'>
      <FaTwitter className="text-[#FEA116] group-hover:text-white text-xl" />
      </div>
      <div className='p-3 rounded-md group-hover:bg-[#FEA116] cursor-pointer'>
      <FaInstagram className="text-[#FEA116] group-hover:text-white text-xl" />
      </div>
    </div>
  
   </motion.div>







  {/* Card 4 */}
  <motion.div
     initial={{ y: 400, opacity: 0 }} // Initial position: below its final position and hidden
      whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
      transition={{ 
    delay: 0.4, 
    y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
    opacity: { duration: 0.2 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
   className="bg-white border-t-[6px] group hover:border-t-[#FEA116] border-t-white rounded-lg shadow-lg hover:shadow-[#FEA116] shadow-gray-400 relative">
   <img src={image4} className='rounded-full w-52 h-52 mx-auto mt-8' />
  <h1 className="text-2xl font-bold font-family mt-8 text-black text-center">Full Name</h1>
  <p className='text-center text-gray-500 text-lg mt-2'>Designation</p>

  <div className="flex items-center py-6 justify-center space-x-4 rounded-b-lg mt-2">
      <div className='p-3 rounded-md group-hover:bg-[#FEA116] cursor-pointer'>
      <FaFacebookF className="text-[#FEA116] group-hover:text-white text-xl" />
      </div>
      <div className='p-3 rounded-md group-hover:bg-[#FEA116] cursor-pointer'>
      <FaTwitter className="text-[#FEA116] group-hover:text-white text-xl" />
      </div>
      <div className='p-3 rounded-md group-hover:bg-[#FEA116] cursor-pointer'>
      <FaInstagram className="text-[#FEA116] group-hover:text-white text-xl" />
      </div>
    </div>
  
    </motion.div>
    </div>

   </div>


    </>
  )
}

export default Team