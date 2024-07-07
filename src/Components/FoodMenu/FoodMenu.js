import React,{useState, useEffect} from 'react'
import { FaCartPlus } from 'react-icons/fa';
import image1 from '../Assets/f1.png'
import image2 from '../Assets/f2.png'
import image3 from '../Assets/f3.png'
import image4 from '../Assets/f4.png'
import image5 from '../Assets/f5.png'
import image6 from '../Assets/f6.png'
import image7 from '../Assets/f7.png'
import image8 from '../Assets/f8.png'
import image9 from '../Assets/f9.png'
import { motion } from 'framer-motion';



const FoodMenu = () => {
    
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



    const [activeButton, setActiveButton] = useState('All');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const allProducts = [
    { name: 'Delicious Pizza', price: '20', image: image1, category: 'Pizza' },
    { name: 'Delicious Burger', price: '15', image: image2, category: 'Burgers' },
    { name: 'Delicious Pizza', price: '17', image: image3, category: 'Pizza'},
    { name: 'Delicious Pasta', price: '18', image: image4, category: 'Pasta'},
    { name: 'French Fries', price: '10', image: image5, category: 'Fries'},
    { name: 'Delicious Pizza', price: '15', image: image6, category: 'pizza'},
    { name: 'Tasty Burger', price: '12', image: image7, category: 'Burgers'},
    { name: 'Tasty Burger', price: '14', image: image8, category: 'Burgers'},
    { name: 'Delicious Pasta', price: '10', image: image9, category: 'Pasta' },
     ];

        let filteredProducts;
        if (activeButton === 'All') {
            filteredProducts = allProducts.filter(product => product.category !== 'All').slice(0, 9); // Exclude last two Meat category products
        } else if (activeButton === 'Pasta') {
            filteredProducts = allProducts.filter((product) => product.category === 'Pasta').slice(-3); // Show only last two Meat category products
        } else {
            filteredProducts = allProducts.filter((product) => product.category === activeButton);
        }

        const categories = ['All', 'Burgers', 'Pizza', 'Pasta', 'Fries']; // Add more categories if needed


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
      className='container mx-auto mt-8 py-16 px-5'>
         <div className='text-center'>
            <h4 className='text-2xl font-family font-bold text-[#FEA116]'>Food Menu</h4>
            <h1 className="text-black mb-9 mt-3 text-center font-family sm:text-5xl text-4xl font-bold" style={{ lineHeight: isLargeScreen ? '3.8rem' : '3rem' }}>Most Popular Items</h1>
        </div>
        <div className='flex items-center flex-wrap'>
          <div className='flex flex-wrap justify-center md:justify-start mx-auto space-y-2 md:space-y-0 space-x-4'>
            {categories.map(category => (
              <button
                key={category}
                className={`py-2 min-w-24 rounded-full ${
                  activeButton === category ? 'bg-[#FEA116] text-white' : 'bg-[#f1f2f3] text-gray-500'
                }`}
                onClick={() => handleButtonClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14'>
          {filteredProducts.map((product, index) => (
            <div key={index} className='bg-white border hover:shadow-2xl hover:shadow-gray-700 rounded-lg overflow-hidden shadow-md'>
              <div className='relative bg-[#f1f2f3] rounded-b-full'>
                <img
                  className='mx-auto max-w-64 max-h-64 py-14 transition-transform ease-in-out duration-500 delay-150 hover:scale-110 hover:-translate-y-1'
                  src={product.image}
                  alt={`Image ${index + 1}`}
                />
               
              </div>
              <div className='p-4 bg-[#212529]'>
                <h2 className='text-2xl font-semibold mb-4 mt-5 text-white'>{product.name}</h2>
                <p className='text-white mb-4'>
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                </p>
                <div className='flex items-center justify-between'>
                <p className='text-white text-xl font-semibold'>{`$${product.price}`}</p>
                <button className='p-2.5 bg-[#FEA116] text-white rounded-full flex items-center justify-center'>
                  <FaCartPlus className='text-2xl mr-1' />
                  
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-16 flex justify-center'>
      <button className="hover:bg-[#fe9216] font-family duration-300 font-semibold bg-[#FEA116] text-white py-3.5 px-10 rounded-full">
       VIEW MORE
      </button>
      </div>
      </motion.div>
      
    </>
  )
}

export default FoodMenu