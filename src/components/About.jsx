import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants/index.js';
import { motion } from 'framer-motion';
import { Code, PenTool, Smartphone, TrendingUp } from 'lucide-react';
import CountUp from 'react-countup';
import { useState } from 'react';
const About = () => {
  const [viewed, setViewed] = useState(false);
  const services = [
    { label: 'Web Development', icon: <Code size={20} /> },
    { label: 'UI/UX Design', icon: <PenTool size={20} /> },
    { label: 'Mobile Apps', icon: <Smartphone size={20} /> },
    { label: 'Digital Strategy', icon: <TrendingUp size={20} /> },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Circles - Top Right and Bottom Left */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] rounded-full opacity-20 blur-xl animate-pulse"></div>
      </div>

      {/* Animated Background Effect */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
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
              About <span className="text-[#00ff9d]">Me</span>
            </span>
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] rounded-full opacity-20 blur-xl animate-pulse delay-700"></div>
          </h2>
          <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d]"></div>
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
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00ff9d]/20 to-[#00cc7d]/20 rounded-xl blur-[20px]"></div>
              <img
                src={aboutImg}
                alt="About Me"
                className="relative w-full rounded-xl border-2 border-[rgba(0,255,157,0.2)] shadow-[0_0_30px_rgba(0,255,157,0.2)]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-4xl font-bold text-[#00ff9d]">Who Am I?</h2>
            <p className="text-[#999999] text-lg leading-relaxed">
              {ABOUT_TEXT}
            </p>

            <motion.div
              onViewportEnter={() => setViewed(true)}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[rgba(0,255,157,0.2)] hover:scale-105 hover:shadow-[0_0_15px_#00ff9d33] transition-transform duration-300 ease-in-out cursor-pointer">
                <h3 className="text-2xl font-bold text-[#00ff9d]">
                  {viewed ? <CountUp end={50} duration={2} /> : 0}+
                </h3>
                <p className="text-[#999999]">Projects Completed</p>
              </div>

              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[rgba(0,255,157,0.2)] hover:scale-105 hover:shadow-[0_0_15px_#00ff9d33] transition-transform duration-300 ease-in-out cursor-pointer">
                <h3 className="text-2xl font-bold text-[#00ff9d]">
                  {viewed ? <CountUp end={100} duration={2} suffix="%" /> : 0}
                </h3>
                <p className="text-[#999999]">Client Satisfaction</p>
              </div>
            </motion.div>

            {/* Services with Lucide Icons */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {services.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 rounded-full border-2 border-[#00ff9d] text-white bg-[#111]">
                    {item.icon}
                  </div>
                  <span className="text-white text-lg font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-r sm:w-auto w-full from-[#00ff9d] to-[#00cc7d] text-black px-8 py-3   rounded-lg font-medium transition-all duration-300 hover:opacity-90"
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
