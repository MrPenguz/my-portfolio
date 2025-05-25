import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTelegram,
} from 'react-icons/fa';
import PropTypes from 'prop-types';

const ContactInfo = ({ icon: Icon, text, href }) => (
  <motion.a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg shadow-[0_4px_6px_-1px_rgba(0,255,157,0.1)] border border-[#1a1a1a] transition-all duration-300 hover:shadow-[0_8px_12px_-1px_rgba(0,255,157,0.2)] hover:border-[#00ff9d] no-underline"
  >
    <div className="bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] p-3 rounded-full">
      <Icon className="text-xl text-black" />
    </div>
    <span className="text-white">{text}</span>
  </motion.a>
);

ContactInfo.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="relative py-20">
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
              Get in <span className="text-[#00ff9d]">Touch</span>
            </span>
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] rounded-full opacity-20 blur-xl animate-pulse delay-700"></div>
          </h2>
          <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d]"></div>
          <p className="text-lg text-[#999999] max-w-[42rem] mx-auto my-6">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333333] text-white outline-none transition-all duration-300 focus:border-[#00ff9d] focus:ring-2 focus:ring-[#00ff9d]/20"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333333] text-white outline-none transition-all duration-300 focus:border-[#00ff9d] focus:ring-2 focus:ring-[#00ff9d]/20"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333333] text-white outline-none transition-all duration-300 focus:border-[#00ff9d] focus:ring-2 focus:ring-[#00ff9d]/20 resize-y"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] text-black px-4 py-3 rounded-lg font-medium border-none cursor-pointer shadow-[0_4px_6px_-1px_rgba(0,255,157,0.2)] transition-all duration-300 hover:shadow-[0_8px_12px_-1px_rgba(0,255,157,0.3)]"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <ContactInfo
              icon={FaTelegram}
              text={`@${CONTACT.telegram}`} // display with @
              href={`https://t.me/${CONTACT.telegram}`} // link without @
            />

            <ContactInfo
              icon={FaPhone}
              text={CONTACT.phoneNo}
              href={`tel:${CONTACT.phoneNo}`}
            />
            <ContactInfo
              icon={FaEnvelope}
              text={CONTACT.email}
              href={`mailto:${CONTACT.email}`}
            />

            <div className="pt-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.linkedin.com/in/moe-masri-b7a312324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] p-3 rounded-full text-black shadow-[0_4px_6px_-1px_rgba(0,255,157,0.2)] transition-all duration-300 hover:shadow-[0_8px_12px_-1px_rgba(0,255,157,0.3)]"
                >
                  <FaLinkedin className="text-xl" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/MrPenguz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] p-3 rounded-full text-black shadow-[0_4px_6px_-1px_rgba(0,255,157,0.2)] transition-all duration-300 hover:shadow-[0_8px_12px_-1px_rgba(0,255,157,0.3)]"
                >
                  <FaGithub className="text-xl" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
