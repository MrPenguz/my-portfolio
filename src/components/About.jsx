import React from 'react'
import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants/index.js'
import { motion } from 'framer-motion'
const About = () => {
    return (
        <div>
            <div className="border-b border-neutral-900 pb-4 text-white">
                <h1 className='my-20 text-center text-4xl'>About
                    <span className='text-4xl text-gray-400'> Me</span>
                </h1>
                <div className="flex flex-wrap justify-between items-center  ">
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2 lg:p-8 ">
                        <div className="flex items-center justify-center lg:justify-start ">
                            <img src={aboutImg} alt="" />
                        </div>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2 ">
                        <div className="flex items-center justify-center text-center ">
                            <p className='my-2 max-w-xl  text-lg py-6 font-light tracking-tighter'>{ABOUT_TEXT}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About