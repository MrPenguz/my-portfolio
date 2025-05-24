import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';
import PropTypes from 'prop-types';

const ContactInfo = ({ icon: Icon, text, href }) => (
  <motion.a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    whileHover={{ scale: 1.05 }}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem',
      backgroundColor: '#1a1a1a',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 255, 157, 0.1)',
      transition: 'all 0.3s',
      border: '1px solid #1a1a1a',
      textDecoration: 'none',
    }}
    onMouseEnter={(e) => {
      e.target.style.boxShadow = '0 8px 12px -1px rgba(0, 255, 157, 0.2)';
      e.target.style.borderColor = '#00ff9d';
    }}
    onMouseLeave={(e) => {
      e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 255, 157, 0.1)';
      e.target.style.borderColor = '#1a1a1a';
    }}
  >
    <div
      style={{
        background: 'linear-gradient(45deg, #00ff9d, #00cc7d)',
        padding: '0.75rem',
        borderRadius: '9999px',
      }}
    >
      <Icon style={{ fontSize: '1.5rem', color: '#000000' }} />
    </div>
    <span style={{ color: '#ffffff' }}>{text}</span>
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
              Get in <span className="text-[#00ff9d]">Touch</span>
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
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #333333',
                    color: '#ffffff',
                    outline: 'none',
                    transition: 'all 0.3s',
                  }}
                  placeholder="Your Name"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00ff9d';
                    e.target.style.boxShadow =
                      '0 0 0 2px rgba(0, 255, 157, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#333333';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #333333',
                    color: '#ffffff',
                    outline: 'none',
                    transition: 'all 0.3s',
                  }}
                  placeholder="your@email.com"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00ff9d';
                    e.target.style.boxShadow =
                      '0 0 0 2px rgba(0, 255, 157, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#333333';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #333333',
                    color: '#ffffff',
                    outline: 'none',
                    transition: 'all 0.3s',
                    resize: 'vertical',
                  }}
                  placeholder="Your message..."
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00ff9d';
                    e.target.style.boxShadow =
                      '0 0 0 2px rgba(0, 255, 157, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#333333';
                    e.target.style.boxShadow = 'none';
                  }}
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                style={{
                  width: '100%',
                  background: 'linear-gradient(45deg, #00ff9d, #00cc7d)',
                  color: '#000000',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px -1px rgba(0, 255, 157, 0.2)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow =
                    '0 8px 12px -1px rgba(0, 255, 157, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow =
                    '0 4px 6px -1px rgba(0, 255, 157, 0.2)';
                }}
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
              icon={FaMapMarkerAlt}
              text={CONTACT.address}
              href={`https://maps.google.com/?q=${encodeURIComponent(
                CONTACT.address,
              )}`}
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
              <h3 className="text-lg font-semibold text-light-DEFAULT mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(45deg, #00ff9d, #00cc7d)',
                    padding: '0.75rem',
                    borderRadius: '9999px',
                    color: '#000000',
                    boxShadow: '0 4px 6px -1px rgba(0, 255, 157, 0.2)',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow =
                      '0 8px 12px -1px rgba(0, 255, 157, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow =
                      '0 4px 6px -1px rgba(0, 255, 157, 0.2)';
                  }}
                >
                  <FaLinkedin style={{ fontSize: '1.25rem' }} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(45deg, #00ff9d, #00cc7d)',
                    padding: '0.75rem',
                    borderRadius: '9999px',
                    color: '#000000',
                    boxShadow: '0 4px 6px -1px rgba(0, 255, 157, 0.2)',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow =
                      '0 8px 12px -1px rgba(0, 255, 157, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow =
                      '0 4px 6px -1px rgba(0, 255, 157, 0.2)';
                  }}
                >
                  <FaGithub style={{ fontSize: '1.25rem' }} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(45deg, #00ff9d, #00cc7d)',
                    padding: '0.75rem',
                    borderRadius: '9999px',
                    color: '#000000',
                    boxShadow: '0 4px 6px -1px rgba(0, 255, 157, 0.2)',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow =
                      '0 8px 12px -1px rgba(0, 255, 157, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow =
                      '0 4px 6px -1px rgba(0, 255, 157, 0.2)';
                  }}
                >
                  <FaTwitter style={{ fontSize: '1.25rem' }} />
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
