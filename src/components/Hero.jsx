import React from 'react'
import HeroImg from '../assets/svg/out_img.svg';

const Hero = () => {
  return (
    <div className='w-full h-full px-8 md:px-20 py-8 md:py-16 mb-10 bg-white'>
        <div className='w-full flex flex-col md:flex-row items-center justify-between'>
            <div className='w-full flex flex-col items-center justify-center md:items-start text-center md:text-start mb-10 md:mb-0'>
                <h2 className='text-3xl md:text-[3.5rem] font-bold hero-one md:leading-[4rem] '>Show Them Don’t Just Tell</h2>
                <p className='text-xl font-normal leading-[1.75rem] hero-two mt-6 w-[100%]'>
                Help your friends and loved ones by creating and sending videos on how to get things done on a website.
                </p>
                <button className='btn-one hidden md:flex items-center gap-2 w-[fit-content] py-[0.4475rem] px-2 text-white text-base md:text-lg bg-[#120B48] font-medium rounded-md md:py-[0.6875rem] md:px-6 mt-10'>
                    Install HelpMeOut
                </button>
            </div>
                <img src={HeroImg} className='object-cover w-full' alt="" />
                <button className='btn-one flex md:hidden items-center text-center gap-2 w-full md:w-[fit-content] py-[0.4475rem] px-2 text-white text-base md:text-lg bg-[#120B48] font-medium rounded-md md:py-[0.6875rem] md:px-6 mt-10'>
                    Install HelpMeOut
                </button>
        </div>
    </div>
  )
}

export default Hero