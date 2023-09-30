import React from 'react'
import Rec from '../assets/svg/rec.svg';
import URL from '../assets/svg/url.svg';
import revisit from '../assets/svg/revisit.svg';
import Feat from '../assets/svg/feat_img.svg';

const Features = () => {
  return (
    <div className='w-full h-full px-8 md:px-20 py-8 md:py-16 mb-10 bg-white' id='features'>
        <div className='text-center'>
            <h1 className='font-bold text-5xl feat-one'>Features</h1>
            <p className='text-[#616163] text-xl mt-3 font-normal feat-two'>Key Highlights of Our Extension</p>
        </div>
        <div className='w-full flex flex-col md:flex-row gap-6 justify-between mt-4 md:mt-16'>
            <div className='flex flex-col items-center'>
                <div className='flex '>
                    <img src={Rec} alt="" />
                    <div className='ml-3 mt-10'>
                        <span className='text-[#1B233D] text-sm md:text-[1.75rem]  feat-three font-semibold'>Simple Screen Recording</span>
                        <p className='text-sm md:text-xl text-[#616163] font-normal feat-four '>
                            Effortless screen recording for everyone. Record with ease, no tech expertise required.
                        </p>
                    </div>
                </div>
                <div className='flex '>
                    <img src={URL} alt="" />
                    <div className='ml-3 mt-10'>
                        <span className='text-[#1B233D] text-sm md:text-[1.75rem]  feat-three font-semibold'>Easy-to-Share URL</span>
                        <p className='text-sm md:text-xl text-[#616163] font-normal feat-four'>
                        Share your recordings instantly with a single link. No attachments, no downloads.
                        </p>
                    </div>
                </div>
                <div className='flex '>
                    <img src={revisit} alt="" />
                    <div className='ml-3 mt-10'>
                        <span className='text-[#1B233D] text-sm md:text-[1.75rem]  feat-three font-semibold'>Revisit Recordings</span>
                        <p className='text-sm md:text-xl text-[#616163] font-normal feat-four'>
                        Access and review your past content effortlessly. Your recordings, always at your fingertips.
                        </p>
                    </div>
                </div>
            </div>
            <img src={Feat} alt="" />
        </div>
    </div>
  )
}

export default Features