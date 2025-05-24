import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        backgroundColor: '#1a1a1a',
        borderRadius: '0.75rem',
        overflow: 'hidden',
        boxShadow: '0 4px 6px -1px rgba(0, 255, 157, 0.1)',
        transition: 'all 0.3s',
        border: '1px solid #1a1a1a',
      }}
      onMouseEnter={(e) => {
        e.target.style.boxShadow = '0 8px 12px -1px rgba(0, 255, 157, 0.2)';
        e.target.style.borderColor = '#00ff9d';
        e.target.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={(e) => {
        e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 255, 157, 0.1)';
        e.target.style.borderColor = '#1a1a1a';
        e.target.style.transform = 'translateY(0)';
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '16rem',
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '1.5rem',
          }}
        >
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '0.5rem',
            }}
          >
            {project.title}
          </h3>
        </div>
      </div>
      <div style={{ padding: '1.5rem' }}>
        <p style={{ color: '#999999', marginBottom: '1.5rem' }}>
          {project.description}
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '1.5rem',
          }}
        >
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
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
              {tech}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(45deg, #00ff9d, #00cc7d)',
              color: '#000000',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              fontWeight: '500',
              textDecoration: 'none',
              boxShadow: '0 4px 6px -1px rgba(0, 255, 157, 0.2)',
            }}
          >
            <FaGithub style={{ fontSize: '1.25rem' }} />
            <span>View Code</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(45deg, #00ff9d, #00cc7d)',
              color: '#000000',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              fontWeight: '500',
              textDecoration: 'none',
              boxShadow: '0 4px 6px -1px rgba(0, 255, 157, 0.2)',
            }}
          >
            <FaExternalLinkAlt style={{ fontSize: '1.25rem' }} />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-20">
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
              Featured <span className="text-[#00ff9d]">Projects</span>
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
            Here are some of my recent projects that showcase my skills and
            experience in web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
