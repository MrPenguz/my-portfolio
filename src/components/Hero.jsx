import React from 'react'
import { HERO_CONTENT } from '../constants/index'
import pfp from "../assets/Pengu.jpg"
import { motion } from 'framer-motion'
const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    },
});
const Hero = () => {
    return (
        <div className='border-b  border-black mb-36 '>
            <div className="flex flex-wrap ">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Moe Masri</motion.h1>
                        <motion.span variants={container(0.5)} initial="hidden" animate="visible" className='bg-gradient-to-r from-green-300 via-slate-400 to-emerald-500 bg-clip-text text-3xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
                        <motion.p variants={container(1)} initial="hidden" animate="visible" className='my-2 max-w-xl  text-lg py-6 font-light tracking-tighter lg:text-start text-center'>{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 md:p-8 ">
                    <div className="relative flex justify-center lg:justify-end">
                        <motion.img initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.2 }} className="rounded-md h-[420px]" src={pfp} alt="" />
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b from-transparent to-black rounded-md"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero