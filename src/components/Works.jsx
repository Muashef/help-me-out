import React from 'react'
import one from '../assets/svg/one.svg';
import two from '../assets/svg/two.svg';
import three from '../assets/svg/three.svg';
import RecImg from '../assets/svg/rec_img.svg';

const Works = () => {
  return (
    <div className='w-full h-full px-8 md:px-20 py-8 md:py-16 bg-white' id='works'>
        <h1 className='font-bold text-2xl md:text-5xl feat-one text-center'>How It Works</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14'>
            <div className='flex flex-col items-center justify-center'>
                <img src={one} alt="" />
                <h3 className='text-[#1B233D] text-[1.75rem] font-semibold feat-three mt-4'>Record Screen</h3>
                <p className='text-[#616163] text-xl font-normal feat-four mt-3 text-center mb-5'>
                Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.
                </p>
                <img src={RecImg} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img src={two} alt="" />
                <h3 className='text-[#1B233D] text-[1.75rem] font-semibold feat-three mt-4'>Share Your Recording</h3>
                <p className='text-[#616163] text-xl font-normal feat-four mt-3 text-center mb-5'>
                We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.
                </p>
                <img src={RecImg} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img src={three} alt="" />
                <h3 className='text-[#1B233D] text-[1.75rem] font-semibold feat-three mt-4'>Learn Effortlessly</h3>
                <p className='text-[#616163] text-xl font-normal feat-four mt-3 text-center mb-5'>
                Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.
                </p>
                <img src={RecImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Works