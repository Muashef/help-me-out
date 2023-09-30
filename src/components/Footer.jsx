import React from 'react'
import FooterLogo from '../assets/svg/footer_logo.svg';

const Footer = () => {
  return (
    <footer className="px-8 md:px-20 py-14 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#120B48]">
        <img src={FooterLogo} alt="" />
        <div className="grid grid-cols-1 gap-4 [&>a]:decoration-none [&>a]:text-brand-white">
            <h3 className='text-white font-bold text-sm md:text-base feat-one'>Menu</h3>
            <a href="" className="text-white text-sm md:text-base feat-four">Home</a>
            <a href="" className="text-white text-sm md:text-base feat-four">Converter</a>
            <a href="" className="text-white text-sm md:text-base feat-four">How it Works</a>
        </div>
        <div className="grid grid-cols-1 gap-4 [&>a]:decoration-none [&>a]:text-brand-white">
            <h3 className='text-white font-bold text-sm md:text-base feat-one'>About Us</h3>
            <a href="" className="text-white text-sm md:text-base feat-four">About</a>
            <a href="" className="text-white text-sm md:text-base feat-four">Contact Us</a>
            <a href="" className="text-white text-sm md:text-base feat-four">Privacy Policy</a>
        </div>
        <div className="grid grid-cols-1 gap-4 [&>a]:decoration-none [&>a]:text-brand-white">
            <h3 className='text-white font-bold text-sm md:text-base feat-one'>Screen Record</h3>
            <a href="" className="text-white text-sm md:text-base feat-four">Browser Window</a>
            <a href="" className="text-white text-sm md:text-base feat-four">Desktop</a>
            <a href="" className="text-white text-sm md:text-base feat-four">Application</a>
        </div>
    </footer>
  )
}

export default Footer