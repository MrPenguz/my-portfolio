import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-md border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <h1 className="text-xl font-bold bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] bg-clip-text text-transparent">
              Moe Masri
            </h1>
          </motion.div>

          {/* Middle - Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {['about', 'skills', 'projects', 'experience'].map((section) => (
                <motion.a
                  key={section}
                  whileHover={{ scale: 1.1 }}
                  href={`#${section}`}
                  className="text-white text-sm font-medium px-3 py-2 transition-colors hover:text-[#00ff9d]"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right - Contact & Socials */}
          <div className="flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#contact"
              className="bg-[#00ff9d] text-black text-sm font-medium px-4 py-2 rounded-md transition-colors hover:bg-[#00cc7d]"
            >
              Contact
            </motion.a>
            <div className="flex items-center space-x-4">
              {[
                { icon: <FaLinkedin />, link: 'https://linkedin.com' },
                { icon: <FaGithub />, link: 'https://github.com' },
                { icon: <FaInstagram />, link: 'https://instagram.com' },
                { icon: <FaSquareXTwitter />, link: 'https://twitter.com' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors hover:text-[#00ff9d] text-lg"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
