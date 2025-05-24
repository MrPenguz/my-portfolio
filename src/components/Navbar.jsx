import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #333',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <h1
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #00ff9d, #00cc7d)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Moe Masri
            </h1>
          </motion.div>

          {/* Middle - Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#about"
                style={{
                  color: '#ffffff',
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#00ff9d')}
                onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
              >
                About
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#skills"
                style={{
                  color: '#ffffff',
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#00ff9d')}
                onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
              >
                Skills
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#projects"
                style={{
                  color: '#ffffff',
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#00ff9d')}
                onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
              >
                Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#experience"
                style={{
                  color: '#ffffff',
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#00ff9d')}
                onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
              >
                Experience
              </motion.a>
            </div>
          </div>

          {/* Right - Contact and Social Links */}
          <div className="flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#contact"
              style={{
                backgroundColor: '#00ff9d',
                color: '#000000',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#00cc7d')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#00ff9d')}
            >
              Contact
            </motion.a>
            <div className="flex items-center space-x-4">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ffffff', transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.target.style.color = '#00ff9d')}
                onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
              >
                <FaLinkedin style={{ fontSize: '1.25rem' }} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ffffff', transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.target.style.color = '#00ff9d')}
                onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
              >
                <FaGithub style={{ fontSize: '1.25rem' }} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ffffff', transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.target.style.color = '#00ff9d')}
                onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
              >
                <FaInstagram style={{ fontSize: '1.25rem' }} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ffffff', transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.target.style.color = '#00ff9d')}
                onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
              >
                <FaSquareXTwitter style={{ fontSize: '1.25rem' }} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
