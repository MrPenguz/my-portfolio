import { EXPERIENCES } from "../constants/index.js"

const Experience = () => {
    console.log(EXPERIENCES)
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl ">Experiences</h1>
            <div className="">
                {EXPERIENCES.map((experience, index) => {

                    return <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4 ">
                            <h6 className="mb-2 font-semibold">{experience.role} - <span className="text-sm text-purple-100">{experience.com}</span></h6>
                            <p className="mb-2">{experience.description}</p>
                            {experience.technologies.map((technology, index) => {
                                return <span key={index} className="mr-4 mt-5rounded bg-neutral-900 px-2 py-1  text-sm font-medium text-purple-800">{technology}</span>
                            })}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Experience