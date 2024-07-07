import React,{useRef} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../Assets/search-pizza.png';
import image2 from '../Assets/burger.png';
import image3 from '../Assets/noodles.png';
import image4 from '../Assets/sub-sandwich.png';
import image5 from '../Assets/chowmein.png';
import image6 from '../Assets/steak.png';
import { motion } from 'framer-motion';




const SearchFood = () => {

    const sliderRef = useRef();
    
    const images = [image1, image2, image3,image4,image5,image6];
    const imageNames = ['Pizza', 'Burger', 'Noodles', 'Sub Sandwich', 'Chowmein', 'Steak'];


  
    const settings = {
      infinite: true,
      speed: 3000, // Adjust the speed of scrolling
      autoplaySpeed: 3000, // Set to 0 for continuous scrolling
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true, // Enable autoplay
      arrows: false, // Hide default arrows
      pauseOnHover: false, // Pause autoplay on hover
      
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
    },
  },
  {
    breakpoint: 1280,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 1,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 1,
    },
  },

  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
    },
  },
],
};
  

  return (
    <>


   <div className="relative">
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
      className="mt-32 px-5">
     <div className='px-8'>
      <h1 className='text-black text-4xl font-family font-extrabold'>Search by Food</h1>
      </div>

    <Slider ref={sliderRef} {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <div className="flex flex-wrap py-20 relative">
            <div className="mx-auto w-11/12 px-4 mb-4">
              <div className="overflow-hidden relative">
                
                <img className="object-contain rounded-full cursor-pointer mx-auto" src={image} alt={`Image ${index + 1}`} />
              </div>

              <div className="text-center font-bold font-family text-lg mt-4">
                  <p>{imageNames[index]}</p> 
               </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    </motion.div>
  </div>

      
      
    </>
  )
}

export default SearchFood