import React from "react";
import { Link } from "react-router-dom";
import FB from '../assets/svg/fb.svg';
import ggle from '../assets/svg/ggle.svg'

const Auth = () => {
  return (
    <main className="relative top-10 w-full flex items-center justify-center pt-6 bg-white">
      <section className="grid grid-cols-1 place-items-center gap-2 w-30%">
        <h1 className="text-[2rem] text-[#141414] font-bold text-center feat-three">Log in or Sign up</h1>
        <p className="text-sm font-normal text-center text-[#141414] mb-4 w-[70%] feat-three">Join millions of others in sharing successful moves on HelpMeOut.</p>
        <button className="w-full p-2.5 border border-[#141414] outline-none rounded-md bg-brand-white text-3.5 font-600 flex items-center justify-center cursor-pointer"> 
        <img src={ggle} alt="Google-icon"  className="mr-2 w-5"/>Continue with Google
        </button>
        <button className="w-full p-2.5 border border-[#141414] outline-none rounded-md bg-brand-white text-3.5 font-600 flex items-center justify-center cursor-pointer mt-2"><img src={FB} alt="Facebook-icon" className="mr-2 w-5" />Continue with Facebook</button>

        <div className="my-4 flex items-center justify-center w-full">
            <hr className="w-[50%] border border-[#B9C2C8] h-0" />
            <p className="mx-2">or</p>
            <hr className="w-[50%] border border-[#B9C2C8] h-0" />
        </div>


        <form action="" className="w-full grid grid-cols-1 gap-4">
          <label htmlFor="" className="grid grid-cols-1 text-sm text-[#141414] font-medium gap-1  outline-none feat-four">
            Email
            </label>
            <input className="border border-[#B6B3C6] p-2.5 rounded-xl outline-none" type="email" placeholder="Enter your email address " required />
        
          <label htmlFor="" className="grid grid-cols-1 gap-1 text-sm text-[#141414] font-medium feat-four">
            Password
            </label>
            <input type="password" className="border border-[#B6B3C6] p-2.5 rounded-xl outline-none" placeholder="Enter your Password" required />
          <Link to="" className="p-2.5 border-solid border-brand-blue rounded-md bg-[#120B48] text-4 text-[#F9F9FF] text-center decoration-none cursor-pointer transition-all mt-3">Sign Up</Link>
        </form>
      </section>
    </main>
  );
};

export default Auth;