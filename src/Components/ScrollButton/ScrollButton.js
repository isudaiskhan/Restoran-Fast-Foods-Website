import React,{useState,useEffect} from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>

<div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-12 right-7 bg-[#FEA116] p-4 rounded text-white focus:outline-none hover:bg-[#fe9216] transition duration-300"
        >
          <FaArrowUpLong className='text-lg' />
        </button>
      )}
    </div>
      
    </>
  )
}

export default ScrollButton