import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants/index.js';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-20">
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
              About <span className="text-[#00ff9d]">Me</span>
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
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div
                style={{
                  position: 'absolute',
                  inset: '-1rem',
                  background:
                    'linear-gradient(45deg, rgba(0, 255, 157, 0.2), rgba(0, 204, 125, 0.2))',
                  borderRadius: '1rem',
                  filter: 'blur(20px)',
                }}
              ></div>
              <img
                src={aboutImg}
                alt="About Me"
                style={{
                  position: 'relative',
                  width: '100%',
                  borderRadius: '1rem',
                  border: '2px solid rgba(0, 255, 157, 0.2)',
                }}
                className="shadow-[0_0_30px_rgba(0,255,157,0.2)]"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  bottom: '-1.5rem',
                  right: '-1.5rem',
                  backgroundColor: '#1a1a1a',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(0, 255, 157, 0.2)',
                }}
                className="shadow-[0_0_20px_rgba(0,255,157,0.1)]"
              >
                <div className="flex items-center gap-3">
                  <div
                    style={{
                      width: '0.75rem',
                      height: '0.75rem',
                      backgroundColor: '#00ff9d',
                      borderRadius: '50%',
                    }}
                    className="animate-pulse"
                  ></div>
                  <span
                    style={{
                      color: '#ffffff',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                    }}
                  >
                    5+ Years Experience
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="prose prose-lg">
              <p
                style={{
                  color: '#999999',
                  fontSize: '1.125rem',
                  lineHeight: '1.75',
                }}
              >
                {ABOUT_TEXT}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div
                style={{
                  backgroundColor: '#1a1a1a',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(0, 255, 157, 0.2)',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#00ff9d',
                  }}
                >
                  50+
                </h3>
                <p style={{ color: '#999999' }}>Projects Completed</p>
              </div>
              <div
                style={{
                  backgroundColor: '#1a1a1a',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(0, 255, 157, 0.2)',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#00ff9d',
                  }}
                >
                  100%
                </h3>
                <p style={{ color: '#999999' }}>Client Satisfaction</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                marginTop: '2rem',
                background: 'linear-gradient(45deg, #00ff9d, #00cc7d)',
                color: '#000000',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
              }}
              className="transition-all duration-300 hover:opacity-90"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
