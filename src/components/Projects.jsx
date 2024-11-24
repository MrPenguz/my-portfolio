import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
    return (
        <div><h1 className='my-20 text-center text-4xl '>Projects</h1>
            <div className="">{PROJECTS.map((project, index) => {
                return <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                    <div className="w-full lg:w-1/4">
                        <img src={project.image} width={150} height={150} alt='Not Found' className='mb-6 rounded' />
                    </div>
                    <div className="w-ful max-w-xl lg:w-3/4">
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        {project.technologies.map((tech, index) => {
                            return <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
                        })}
                    </div>
                </div>
            })}</div>
        </div>
    )
}

export default Projects