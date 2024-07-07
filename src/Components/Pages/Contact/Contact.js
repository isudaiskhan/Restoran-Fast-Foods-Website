import React from 'react'
import {motion} from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import bgimage from '../../Assets/bg-hero.jpg'
import Navbar from '../../Navbar/Navbar';
import {FiUser, FiMail, FiMessageSquare} from 'react-icons/fi'
import { FaPen  } from "react-icons/fa6";
import { FaRegEnvelopeOpen,FaMapLocationDot } from "react-icons/fa6";
import { FiPhoneCall  } from "react-icons/fi";
import Footer from '../../Footer/Footer';
import ScrollButton from '../../ScrollButton/ScrollButton';




const Contact = () => {
  return (
    <>

   <Navbar />
   <div className="relative">
      <div className="relative h-96 flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 h-96 bg-no-repeat bg-cover bg-center bg-blend-multiply bg-[#0f172bde]" style={{ backgroundImage: `url(${bgimage})` }}>

         <motion.div
               initial={{x:-100,opacity:0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
                duration:1}}
           className="flex flex-col items-center pt-14 sm:ps-10 sm:px-0 px-5 h-full">
             <h1 className="sm:text-7xl text-5xl font-family font-extrabold text-center text-white mt-28">Contact Us</h1>
             <div className="flex flex-wrap items-center font-semibold text-lg mt-6 justify-center">
             <h2 className="text-[#FEA116] mr-3">Home</h2>
             <RxSlash className="text-white mr-3" />

             <h2 className="text-[#FEA116] mr-3">Pages</h2>
             <RxSlash className="text-white mr-3" />

            
               <h2 className="text-white">Contact</h2>

                  </div>
                  </motion.div>
                </div>
             </div>


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
      className="text-center mb-5 py-5 mt-36 w-full mx-auto">
       <h2 className="text-2xl font-family font-bold text-[#FEA116] mb-5">Contact Us</h2>
       <h1 className="text-black font-family sm:text-5xl text-4xl font-extrabold">Contact For Any Query</h1>
      </motion.div>
      
              

    


      {/* Mobile number And Icons */}
      <div class="lg:flex mx-auto max-w-[1240px] overflow-hidden mt-10 lg:px-10 md:px-20 sm:px-10 px-4 lg:space-y-0 space-y-12">
          <motion.div
              initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
              whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
              transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
            className="md:w-1/2 lg:w-2/6">
             <div className="flex items-center">
                 <div className="mr-4">
                 <FiPhoneCall className='text-[#FEA116] text-4xl' />       
                 </div>
                 <div>
                     <a href="#" className="text-xl text-[#FEA116] font-semibold">Hotline</a>
                     <p className="text-gray-600 text-lg">1-677-124-44227</p>
                 </div>
             </div>
         </motion.div>
     
     
         <motion.div
              initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
              whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
              transition={{ delay: 0.3, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
             className="md:w-1/2 lg:w-2/6">
             <div className="flex items-center lg:justify-center">
                 <div className="mr-4">
                 <FaRegEnvelopeOpen className='text-[#FEA116] text-4xl' />
                     
                 </div>
                 <div>
                     <a href="#" className="text-xl text-[#FEA116] font-semibold]">Email</a>
                     <p className="text-gray-600 text-lg">Support@gmail.com</p>
                 </div>
             </div>
         </motion.div>
     
     
     
         <motion.div
             initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
              whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
              transition={{ delay: 0.3, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
             className="md:w-1/2 lg:w-2/6">
             <div className="flex items-center">
                 <div className="mr-4 lg:mx-auto">
                 <FaMapLocationDot className='text-[#FEA116] text-4xl' />
                     
                 </div>
                 <div>
                     <a href="#" className="text-xl text-[#FEA116] font-semibold">Address</a>
                     <p className="text-gray-600">Los Angeles Gournadi, 1230 Bariasl</p>
                 </div>
             </div>
         </motion.div>
     </div>




             <div className='w-full py-12 overflow-hidden'>   

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
    className='w-full py-16 lg:px-20 md:px-20 sm:px-10 px-4'>
   <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2'>

   
       {/* Map */}
       <div className='overflow-hidden p-5 rounded'>
          <div className="relative h-full" style={{ paddingBottom: "36.25%" }}>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.70774619764!2d150.60231475069824!3d-33.84723483950044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2s!4v1719140342432!5m2!1sen!2s"    
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute top-0 left-0 w-full"
                ></iframe>
              </div>
            </div>
  

    <div className='flex flex-col justify-center p-5'>
    

         {/* Form Section */}
    <form
     className='space-y-6 mb-4 md:mb-0'>
   
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className='w-full md:w-1/2 relative'>
          <input type="text" id="input1" name="user_name" placeholder='Your Name' required className="w-full bg-transparent border rounded border-gray-400 px-4 py-3 placeholder:text-gray-500 text-black focus:border-[#FEA116] focus:outline-none" />
          <FiUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8488a0]" />
        </div>
      
      

      <div className='w-full md:w-1/2 relative'>
          <input type="email" id="input2" name="user_Email" placeholder='Your Email' required className="w-full border bg-transparent rounded border-gray-400 px-4 py-3 placeholder:text-gray-500 text-black focus:border-[#FEA116] focus:outline-none" />
          <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8488a0]" />
        </div>
        </div>

        <div className='w-full relative'>
          <input type="email" id="input2" name="user_Subject" placeholder='Subject' required className="w-full border bg-transparent rounded border-gray-400 px-4 py-3 placeholder:text-gray-500 text-black focus:border-[#FEA116] focus:outline-none" />
          <FaPen className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8488a0]" />
        </div>

      <div className='w-full relative'>
        <textarea id="textarea" placeholder='Message' name="message" required rows="6" className="p-2 px-4 py-3 w-full bg-transparent rounded border border-gray-400 placeholder:text-gray-500 focus:border-[#FEA116] focus:outline-none" />
        <FiMessageSquare className="absolute right-3 bottom-3 text-[#8488a0]" />
      </div>

      <div className="flex justify-center">
  <button type="submit" className="font-semibold flex items-center justify-center px-8 py-3.5 w-full bg-[#FEA116] hover:bg-[#fe9216] rounded text-white">
    Send Message
  </button>
</div>
 </form>
     </div>

          
        </div>
      </motion.div>
      </div>
      </div>


      <Footer />
      <ScrollButton />

      
    </>
  )
}

export default Contact
