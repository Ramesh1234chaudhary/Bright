import React from 'react'
import Hero from './Components/Hero';
import Youtubesection from './Components/Youtubesection';
import Choose from './Components/Choose';
import Ratings from './Components/Ratings';
import Footer from './Components/Footer';
import Clients from './Components/Clients';
import Price from './Components/Price';
import Review from './Components/Review';
const Home = () => {
  return (
    <div>
  <Hero/>
   <Youtubesection/>
   <Choose/>
   <Ratings/>
   <Price/>
   <Review/>
   <Clients/>
    <Footer/>
    </div>
  )
}

export default Home;