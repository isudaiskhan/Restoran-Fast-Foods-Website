import React,{useRef} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import image1 from '../Assets/client1.jpg';
import image2 from '../Assets/client2.jpg';
import { motion } from 'framer-motion';




const Testimonials = () => {

    const sliderRef = useRef();

  const images = [image1, image2, image1, image2];
  const productNames = ["Client Name", "Client Name", "Client Name", "Client Name"];
  const prices = ["Profession", "Profession", "Profession", "Profession"];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds
    arrows: false, // Hide default arrows
    pauseOnHover: false, // Pause autoplay on hover

    responsive: [
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        },
      },
    ]

  };


  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

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
   className='container py-12 mx-auto mt-8 relative'>
  <h2 className='text-[#FEA116] text-2xl font-semibold text-center'>Testimonial</h2>
      <h1 className='text-black sm:text-5xl text-3xl font-extrabold font-family text-center mt-4'>Our Clients Say !</h1>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index}>  
          <div className="flex flex-wrap -mx-4 sm:mt-20 mt-24">
          <div className=" mx-auto w-11/12 md:px-3 sm:px-14 px-4 mb-4">
          <div className="rounded bg-[#FEA116] overflow-hidden flex">
        
       {/* Price and Description Column */}
       <div className="w-full px-6 py-5">
        <p className="text-white text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <div className="relative flex flex-wrap mt-4">
            <div className="w-full sm:w-auto">
            <h2 className="text-2xl font-semibold text-white">{productNames[index]}</h2>
            <p className="text-white text-xl mt-2">{prices[index]}</p>
            </div>
        </div>
        </div>
        </div>
        <div className='mt-7'>
        <img className="w-28 rounded-full border-4 border-[#FEA116] object-cover mb-3 sm:mb-0 sm:mr-7" src={image} alt={`Image ${index + 1}`} />
        </div>
        </div>
        </div>
        </div>
        ))}
      </Slider>
      <button className="absolute group top-0 bg-[#FEA116] right-20 sm:mt-28 mt-36 ml-4 rounded-full p-1 shadow-md" onClick={goToPrev}>
        <FiChevronLeft className="text-4xl text-white" />
      </button>
      <button className="absolute top-0 group bg-[#FEA116] right-0 sm:mt-28 mt-36 mr-5 rounded-full p-1 shadow-md" onClick={goToNext}>
        <FiChevronRight className="text-4xl text-white" />
      </button>
    </motion.div>
      
      
    </>
  )
}

export default Testimonials