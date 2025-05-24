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
        <div
          style={{
            position: 'absolute',
            left: '2rem',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, #00ff9d, #00cc7d)',
          }}
        ></div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          viewport={{ once: true }}
          style={{
            position: 'absolute',
            left: '1.5rem',
            top: '2rem',
            width: '1.25rem',
            height: '1.25rem',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #00ff9d, #00cc7d)',
            transform: 'translateX(-50%)',
            boxShadow: '0 0 10px rgba(0, 255, 157, 0.5)',
          }}
        ></motion.div>

        <div style={{ marginLeft: '4rem' }} className="relative group">
          <div
            style={{
              backgroundColor: 'rgba(26, 26, 26, 0.5)',
              backdropFilter: 'blur(8px)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '2px solid #1a1a1a',
              transition: 'all 0.3s',
              boxShadow: '0 4px 6px -1px rgba(0, 255, 157, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#00ff9d';
              e.target.style.boxShadow =
                '0 8px 12px -1px rgba(0, 255, 157, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = '#1a1a1a';
              e.target.style.boxShadow =
                '0 4px 6px -1px rgba(0, 255, 157, 0.1)';
            }}
          >
            <div
              style={{
                position: 'absolute',
                right: '-0.75rem',
                top: '-0.75rem',
                background: 'linear-gradient(45deg, #00ff9d, #00cc7d)',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 255, 157, 0.3)',
              }}
            >
              <BsBriefcase style={{ color: '#000000', fontSize: '1.25rem' }} />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                style={{ color: '#00ff9d', fontWeight: '600' }}
              >
                {experience.year}
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                viewport={{ once: true }}
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#ffffff',
                }}
              >
                {experience.role}
              </motion.h3>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
                style={{ color: '#00cc7d' }}
              >
                {experience.company}
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
              viewport={{ once: true }}
              style={{ color: '#999999', marginBottom: '1.5rem' }}
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
                  style={{
                    padding: '0.5rem 0.75rem',
                    backgroundColor: 'rgba(0, 255, 157, 0.1)',
                    color: '#00ff9d',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(0, 255, 157, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(0, 255, 157, 0.1)';
                  }}
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
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at center, rgba(0, 255, 157, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
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
          <div
            style={{
              width: '6rem',
              height: '0.25rem',
              margin: '1.5rem auto',
              background: 'linear-gradient(to right, #00ff9d, #00cc7d)',
            }}
          ></div>
          <p
            style={{
              fontSize: '1.125rem',
              color: '#999999',
              maxWidth: '42rem',
              margin: '1.5rem auto',
            }}
          >
            A timeline of my professional experience and growth in the tech
            industry.
          </p>
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
