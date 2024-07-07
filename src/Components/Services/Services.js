import React from 'react'
import { FaUserTie, FaUtensils, FaCartPlus, FaHeadset } from "react-icons/fa";
import { motion } from 'framer-motion';



const Services = () => {
  return (
    <>  

    <div className='mt-12 py-20 container mx-auto px-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        
        {/* Box 1 */}
      <motion.div
      initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
      whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
      transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
         className='rounded bg-white group hover:bg-[#FEA116] h-80 flex flex-col items-center relative shadow-lg shadow-gray-400'>
        <div className='py-7 px-7 mt-6 rounded-full relative z-10'>
        <FaUserTie className='text-6xl group-hover:text-white text-[#FEA116]' />
        </div>
        <h1 className='text-2xl text-black p-3 group-hover:text-white text-center font-semibold'>Master Chefs</h1>
        <p className='mt-1 text-gray-500 px-7 group-hover:text-white text-center'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </motion.div>


        {/* Box 2 */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
          whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
          transition={{ delay: 0.3, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
         className='rounded bg-white group hover:bg-[#FEA116] h-80 flex flex-col items-center relative shadow-lg shadow-gray-400'>
        <div className='py-7 px-7 mt-6 rounded-full relative z-10'>
        <FaUtensils className='text-6xl group-hover:text-white text-[#FEA116]' />
        </div>
        <h1 className='text-2xl text-black p-3 group-hover:text-white text-center font-semibold'>Quality Food</h1>
        <p className='mt-1 text-gray-500 px-7 group-hover:text-white text-center'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </motion.div>



        {/* Box 3 */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
          whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
          transition={{ delay: 0.4, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
         className='rounded bg-white group hover:bg-[#FEA116] h-80 flex flex-col items-center relative shadow-lg shadow-gray-400'>
        <div className='py-7 px-7 mt-6 rounded-full relative z-10'>
        <FaCartPlus className='text-6xl group-hover:text-white text-[#FEA116]' />
        </div>
        <h1 className='text-2xl text-black p-3 group-hover:text-white text-center font-semibold'>Online Order</h1>
        <p className='mt-1 text-gray-500 px-7 group-hover:text-white text-center'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </motion.div>

 

        {/* Box 4 */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
          whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
          transition={{ delay: 0.4, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
         className='rounded bg-white group hover:bg-[#FEA116] h-80 flex flex-col items-center relative shadow-lg shadow-gray-400'>
        <div className='py-7 px-7 mt-6 rounded-full relative z-10'>
        <FaHeadset className='text-6xl group-hover:text-white text-[#FEA116]' />
        </div>
        <h1 className='text-2xl text-black p-3 group-hover:text-white text-center font-semibold'>24/7 Service</h1>
        <p className='mt-1 text-gray-500 px-7 group-hover:text-white text-center'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </motion.div>
        </div>
        </div>
    

    </>
  )
}

export default Services
