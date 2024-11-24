import React from 'react'
import aboutImg from '../assets/about.jpg'
import { HERO_CONTENT } from '../constants/index.js'
const About = () => {
    return (
        <div>
            <div className="border-b border-neutral-900 pb-4 text-white">
                <h1 className='my-20 text-center text-4xl'>About
                    <span className='text-4xl text-gray-400'> Me</span>
                </h1>
                <div className="flex flex-wrap justify-between items-center  ">
                    <div className="w-full lg:w-1/2 lg:p-8 ">
                        <div className="flex items-center justify-center lg:justify-start ">
                            <img src={aboutImg} alt="" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 ">
                        <div className="flex items-center justify-center text-center ">
                            <p className='my-2 max-w-xl  text-lg py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About