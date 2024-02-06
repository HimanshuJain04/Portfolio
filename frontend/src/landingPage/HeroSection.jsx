import React from 'react';
import image from "../assets/image.jpg";
import Typed from 'typed.js';
import { useEffect, useRef } from "react";

function HeroSection() {

    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Web Developer", "Web Designer"],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true,
        }); return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='h-[100vh] z-[10] w-full bg-black relative'>

            {/* another color box */}
            <div className='w-[65%] h-[90%] z-[-1] bg-[#181824] absolute top-5 right-5 rounded-md'></div>

            {/* Navbar */}
            <div className='w-full  z-[10] flex justify-center items-center h-[80px] '>

                <div className='w-11/12 flex justify-between items-center'>

                    {/* left section for name */}
                    <div className='text-[white] hover:text-xl text-lg transition-all duration-300 ease-in cursor-pointer font-bold'>Himanshu</div>

                    {/* right section for features */}
                    <div className='flex flex-row gap-3 text-[white]/[0.8] font-bold justify-between items-center'>
                        <div className='cursor-pointer  px-5 transition-all duration-200 hover:font-bold rounded-sm ease-in py-2 hover:bg-blue-800 hover:text-white'>Work</div>
                        <div className='cursor-pointer  px-5 transition-all duration-200 hover:font-bold rounded-sm ease-in py-2 hover:bg-blue-800 hover:text-white'>Experience</div>
                        <div className='cursor-pointer  px-5 transition-all duration-200 hover:font-bold rounded-sm ease-in py-2 hover:bg-blue-800 hover:text-white'>Projects</div>
                        <div className='cursor-pointer  px-5 transition-all duration-200 hover:font-bold rounded-sm ease-in py-2 hover:bg-blue-800 hover:text-white'>Contact</div>
                    </div>

                </div>

            </div>

            {/* Image */}
            <div className=' w-full flex justify-start  pl-24 items-start pt-14 h-[calc(100vh-80px)]'>
                <div className='w-[45%] h-[80%] relative'>
                    <img src={image} className='w-full h-full' alt="user-image" />
                    <div className='h-full w-[50%] bg-gradient-to-l from-[black]/[0.8] to-transparent absolute right-0 top-0'></div>
                </div>

            </div>

            {/* Text */}
            <div className='text-white absolute top-[35%]  flex left-[45%] flex-col gap-3 w-[650px] text-6xl font-bold font-sans'>
                <div className='tracking-wider text-3xl'>Hello,I'm</div>
                <div className='tracking-wider'>Himanshu Jain.</div>
                <div className='tracking-wider'>I'm <span ref={el}></span></div>
                <div className='text-[18px] mt-5 text-[#8b8b8e] font-semibold'>I'm probably the most passionate designer you will ever get to work with.If you have a great project that need some amazing skills.</div>
            </div>

        </div>
    )
}

export default HeroSection