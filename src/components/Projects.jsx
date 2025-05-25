import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import PropTypes from 'prop-types';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,255,157,0.1)] border border-[#1a1a1a] transition-all duration-300 hover:shadow-[0_8px_12px_-1px_rgba(0,255,157,0.2)] hover:border-[#00ff9d] hover:-translate-y-1 flex flex-col justify-between h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between flex-1">
        <p className="text-[#999999] mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-2 bg-[rgba(0,255,157,0.1)] text-[#00ff9d] rounded-full text-sm font-medium hover:bg-[rgba(0,255,157,0.2)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] text-black px-4 py-3 rounded-lg font-medium no-underline shadow-[0_4px_6px_-1px_rgba(0,255,157,0.2)]"
          >
            <span className="p-1 rounded-full">
              <Github className="text-black w-5 h-5" />
            </span>
            <span>View Code</span>
          </motion.a>

          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] text-black px-4 py-3 rounded-lg font-medium no-underline shadow-[0_4px_6px_-1px_rgba(0,255,157,0.2)]"
            >
              <span className="p-1 rounded-full">
                <ExternalLink className="text-black w-5 h-5" />
              </span>
              <span>Live Demo</span>
            </motion.a>
          )}
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
    codeUrl: PropTypes.string.isRequired,
    liveUrl: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-20">
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
              Featured <span className="text-[#00ff9d]">Projects</span>
            </span>
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] rounded-full opacity-20 blur-xl animate-pulse delay-700"></div>
          </h2>
          <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d]"></div>
          <p className="text-lg text-[#999999] max-w-[42rem] mx-auto my-6">
            Here are some of my recent projects that showcase my skills and
            experience in web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="h-full">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
