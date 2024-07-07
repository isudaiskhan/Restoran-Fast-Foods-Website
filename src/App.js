import React from 'react'
import {Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Service from './Components/Pages/Service/Service';
import Menu from './Components/Pages/Menu/Menu';
import Booking from './Components/Pages/Pages/Booking';
import OurTeam from './Components/Pages/Pages/OurTeam';
import Testimonial from './Components/Pages/Pages/Testimonial';
import Contact from './Components/Pages/Contact/Contact';



function App() {
  return (
    <>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
     </Routes>

    </>
  );
}

export default App;