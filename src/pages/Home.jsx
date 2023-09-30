import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Works from '../components/Works'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Hero />
        <Features />
        <Works />
        <Footer />
    </div>
  )
}

export default Home