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

const TechCard = ({ icon: Icon, name, color, delay, floatDelay }) => {
  const customFloatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
        delay: floatDelay,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group h-full"
    >
      <motion.div
        variants={customFloatingAnimation}
        initial="initial"
        animate="animate"
        className="h-full rounded-xl border border-[rgba(0,255,157,0.2)] bg-[rgba(26,26,26,0.5)] p-8 backdrop-blur-sm transition-all duration-300 flex flex-col items-center justify-center shadow-[0_4px_6px_-1px_rgba(0,255,157,0.1)] hover:border-[#00ff9d] hover:shadow-[0_8px_12px_-1px_rgba(0,255,157,0.2)] hover:-translate-y-1"
      >
        <Icon
          style={{ color }}
          className="text-6xl transition-all duration-300 group-hover:scale-110 "
        />
        <h3 className="text-xl font-semibold text-white mt-4">{name}</h3>
      </motion.div>
    </motion.div>
  );
};

TechCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  floatDelay: PropTypes.number.isRequired,
};

const Technologies = () => {
  const technologies = [
    {
      icon: RiReactjsLine,
      name: 'React',
      color: '#61DAFB',
    },
    {
      icon: TbBrandNextjs,
      name: 'Next.js',
      color: '#ffffff',
    },
    {
      icon: SiMongodb,
      name: 'MongoDB',
      color: '#47A248',
    },
    {
      icon: BiLogoPostgresql,
      name: 'PostgreSQL',
      color: '#336791',
    },
    {
      icon: FaNodeJs,
      name: 'Node.js',
      color: '#339933',
    },
    {
      icon: SiTailwindcss,
      name: 'Tailwind',
      color: '#38B2AC',
    },
    {
      icon: SiTypescript,
      name: 'TypeScript',
      color: '#3178C6',
    },
    {
      icon: SiRedux,
      name: 'Redux',
      color: '#764ABC',
    },
    {
      icon: FaGitAlt,
      name: 'Git',
      color: '#F05032',
    },
    {
      icon: FaDocker,
      name: 'Docker',
      color: '#2496ED',
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
              Technical <span className="text-[#00ff9d]">Skills</span>
            </span>
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] rounded-full opacity-20 blur-xl animate-pulse delay-700"></div>
          </h2>
          <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d]"></div>
          <p className="text-lg text-[#999999] max-w-[42rem] mx-auto my-6">
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
              delay={index * 0.1} // fade-in delay
              floatDelay={(index % 5) * 0.2} // floating motion offset
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
