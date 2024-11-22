import React from 'react'
import { HERO_CONTENT } from '../constants/index'
import pfp from "../assets/Pengu.jpg"
const Hero = () => {
    return (
        <div className='border-b  border-black mb-36 '>
            <div className="flex flex-wrap ">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Moe Masri</h1>
                        <span className='bg-gradient-to-r from-green-300 via-slate-400 to-emerald-500 bg-clip-text text-4xl tracking-tight text-transparent'>Full Stack Developer</span>
                        <p className='my-2 max-w-xl  text-lg py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 md:p-8 ">
                    <div className="flex justify-center  lg:justify-end ">
                        <img className='rounded-md  h-[420px]' src={pfp} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero