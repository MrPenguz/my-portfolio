import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

const TechCard = ({ icon: Icon, name, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group h-full"
    >
      <motion.div
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
        style={{
          height: '100%',
          borderRadius: '1rem',
          border: '1px solid rgba(0, 255, 157, 0.2)',
          backgroundColor: 'rgba(26, 26, 26, 0.5)',
          padding: '2rem',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.3s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 6px -1px rgba(0, 255, 157, 0.1)',
        }}
        onMouseEnter={(e) => {
          e.target.style.borderColor = '#00ff9d';
          e.target.style.boxShadow = '0 8px 12px -1px rgba(0, 255, 157, 0.2)';
          e.target.style.transform = 'translateY(-5px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.borderColor = 'rgba(0, 255, 157, 0.2)';
          e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 255, 157, 0.1)';
          e.target.style.transform = 'translateY(0)';
        }}
      >
        <Icon
          style={{
            fontSize: '4rem',
            color: color,
            transition: 'all 0.3s',
            transform: 'scale(1)',
          }}
          className="group-hover:scale-110 group-hover:rotate-[360deg]"
        />
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#ffffff',
            marginTop: '1rem',
          }}
        >
          {name}
        </h3>
      </motion.div>
    </motion.div>
  );
};

TechCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
};

const Technologies = () => {
  const technologies = [
    {
      icon: RiReactjsLine,
      name: 'React',
      color: '#61DAFB', // React blue
    },
    {
      icon: TbBrandNextjs,
      name: 'Next.js',
      color: '#ffffff', // Next.js white
    },
    {
      icon: SiMongodb,
      name: 'MongoDB',
      color: '#47A248', // MongoDB green
    },
    {
      icon: BiLogoPostgresql,
      name: 'PostgreSQL',
      color: '#336791', // PostgreSQL blue
    },
    {
      icon: FaNodeJs,
      name: 'Node.js',
      color: '#339933', // Node.js green
    },
    {
      icon: SiTailwindcss,
      name: 'Tailwind',
      color: '#38B2AC', // Tailwind teal
    },
    {
      icon: SiTypescript,
      name: 'TypeScript',
      color: '#3178C6', // TypeScript blue
    },
    {
      icon: SiRedux,
      name: 'Redux',
      color: '#764ABC', // Redux purple
    },
    {
      icon: FaGitAlt,
      name: 'Git',
      color: '#F05032', // Git orange
    },
    {
      icon: FaDocker,
      name: 'Docker',
      color: '#2496ED', // Docker blue
    },
  ];

  return (
    <section id="skills" className="relative py-20">
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
              Technical <span className="text-[#00ff9d]">Skills</span>
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
            Proficient in modern web technologies and frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 auto-rows-fr">
          {technologies.map((tech, index) => (
            <TechCard
              key={tech.name}
              icon={tech.icon}
              name={tech.name}
              color={tech.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
