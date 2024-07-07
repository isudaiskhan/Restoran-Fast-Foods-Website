import React from 'react'
import {motion} from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import bgimage from '../../Assets/bg-hero.jpg'
import Navbar from '../../Navbar/Navbar';
import Reservation from '../../Reservation/Reservation';
import Footer from '../../Footer/Footer';
import ScrollButton from '../../ScrollButton/ScrollButton';

const Booking = () => {
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
             <h1 className="sm:text-7xl text-5xl font-family font-extrabold text-center text-white mt-28">Booking</h1>
             <div className="flex flex-wrap items-center font-semibold text-lg mt-6 justify-center">
             <h2 className="text-[#FEA116] mr-3">Home</h2>
             <RxSlash className="text-white mr-3" />

             <h2 className="text-[#FEA116] mr-3">Pages</h2>
             <RxSlash className="text-white mr-3" />

            
               <h2 className="text-white">Booking</h2>

                  </div>
                  </motion.div>
                </div>
             </div>

             </div>
             <div className='mt-32'>
             <Reservation />
             </div>
             <Footer />
             <ScrollButton />
      
    </>
  )
}

export default Booking
