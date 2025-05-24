import { EXPERIENCES } from '../constants/index.js';
import { motion } from 'framer-motion';
import { BsBriefcase } from 'react-icons/bs';
import PropTypes from 'prop-types';

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          viewport={{ once: true }}
          className="absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] -translate-x-1/2 shadow-[0_0_10px_rgba(0,255,157,0.5)] z-10"
        ></motion.div>

        <div className="ml-16 relative group">
          <div className="bg-[rgba(26,26,26,0.5)] backdrop-blur-sm p-6 rounded-lg border-2 border-[#1a1a1a] transition-all duration-300  hover:border-[#00ff9d] ">
            <div className="absolute -right-3 -top-3 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] p-3 rounded-lg shadow-[0_4px_6px_-1px_rgba(0,255,157,0.3)]">
              <BsBriefcase className="text-black text-xl" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="text-[#00ff9d] font-semibold"
              >
                {experience.year}
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                viewport={{ once: true }}
                className="text-xl font-bold text-white"
              >
                {experience.role}
              </motion.h3>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
                className="text-[#00cc7d]"
              >
                {experience.company}
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
              viewport={{ once: true }}
              className="text-[#999999] mb-6"
            >
              {experience.description}
            </motion.p>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((technology, techIndex) => (
                <motion.span
                  key={techIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.2 + 0.7 + techIndex * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="px-3 py-2 bg-[rgba(0,255,157,0.1)] text-[#00ff9d] rounded-full text-sm font-medium transition-all duration-300 hover:bg-[rgba(0,255,157,0.2)]"
                >
                  {technology}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    year: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-20">
      {/* Animated Background Effect */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,157,0.15)_0%,transparent_70%)] blur-[60px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="relative inline-block">
            <span className="text-4xl md:text-5xl font-bold text-white">
              Professional <span className="text-[#00ff9d]">Journey</span>
            </span>
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] rounded-full opacity-20 blur-xl animate-pulse delay-700"></div>
          </h2>
          <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d]"></div>
          <p className="text-lg text-[#999999] max-w-[42rem] mx-auto my-6">
            A timeline of my professional experience and growth in the tech
            industry.
          </p>
        </motion.div>

        <div className="space-y-12 relative">
          {/* Continuous timeline line */}
          <div
            className="absolute left-[1.95rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#00ff9d] via-[#00cc7d] to-[#00ff9d]"
            style={{
              background:
                'linear-gradient(180deg, #00ff9d 0%, #00cc7d 50%, #00ff9d 100%)',
            }}
          ></div>

          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
