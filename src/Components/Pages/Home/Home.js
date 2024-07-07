import React from 'react'
import AboutUs from "../../AboutUs/AboutUs";
import BestDeals from "../../BestDeals/BestDeals";
import FoodMenu from "../../FoodMenu/FoodMenu";
import Footer from "../../Footer/Footer";
import Hero from "../../Hero/Hero";
import Reservation from "../../Reservation/Reservation";
import ScrollButton from "../../ScrollButton/ScrollButton";
import SearchFood from "../../SearchFood/SearchFood";
import Services from "../../Services/Services";
import Team from "../../Team/Team";
import Testimonials from "../../Testimonials/Testimonials";
import Layout from '../../Layout/Layout';

const Home = () => {
  return (
    <>

    <Layout>
     <Hero />
     <Services />
     <AboutUs />
     <FoodMenu />
     <Reservation />
     <SearchFood />
     <BestDeals />
     <Team />
     <Testimonials />
     <Footer />
     <ScrollButton />
     </Layout>
      
    </>
  )
}

export default Home