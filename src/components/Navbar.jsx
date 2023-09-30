import React from 'react'
import Logo from '../assets/svg/out-logo.svg';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='w-full h-full bg-white border-2 border-b-blue px-8 md:px-20 py-3'>
        <div className='flex items-center justify-between'>
            <img src={Logo} alt="HelpMeOut-logo" />
            <div className='hidden md:flex items-center gap-10 nav-item '>
                <a href="#features">Features</a>
                <a href="#works">How It Works</a>
            </div>
            <Link to='/auth'>
                <button className='btn flex items-center gap-2 w-[fit-content] py-[0.4475rem] px-2 text-[#120B48] text-base md:text-lg font-bold rounded-md md:py-[0.6875rem] md:px-6'>
                Get Started
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar