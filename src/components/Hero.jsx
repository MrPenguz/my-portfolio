import { motion } from 'framer-motion';
import pfp from '../assets/Pengu.jpg';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const bounceVariants = {
    bounceY: {
      y: [0, -15, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    bounceRadius: {
      borderRadius: ['1rem', '2rem', '1rem'],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex md:mt-12 sm:mt-16 mt-16 items-center justify-center relative"
    >
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

      {/* Additional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] rounded-full opacity-20 blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] blur-md opacity-70 animate-pulse" />
              <div className="relative rounded-full overflow-hidden border-4 border-[#00ff9d] w-full h-full">
                <img
                  src={pfp}
                  alt="Moe Masri"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-4 right-0 bg-[#1a1a1a] p-3 rounded-xl shadow-xl border border-[#00ff9d33]"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00ff9d] rounded-full animate-pulse" />
                <span className="text-sm text-white font-medium">
                  Available for work
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="space-y-3">
            <motion.h1
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-bold text-white"
            >
              Hi, I&apos;m <span className="text-[#00ff9d]">Moe Masri</span>
            </motion.h1>

            <motion.div
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-xl md:text-2xl font-light text-[#cccccc]"
            >
              Full Stack Developer
            </motion.div>

            <motion.p
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-lg text-[#999999] max-w-2xl mx-auto"
            >
              Crafting beautiful, responsive, and user-friendly web applications
              with modern technologies and best practices.
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] text-black px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-90"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="border border-[#00ff9d] text-[#00ff9d] px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[#00ff9d15]"
            >
              View Projects
            </a>
          </motion.div>

          {/* Bouncing Chevron */}
          <motion.div
            className="mt-12 mx-auto w-12 h-12 bg-[#00ff9d] flex items-center justify-center cursor-pointer"
            animate={['bounceY', 'bounceRadius']}
            variants={bounceVariants}
            initial="bounceY"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
