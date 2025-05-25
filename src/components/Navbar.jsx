import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const sections = ['home', 'about', 'skills', 'projects'];

const fillVariants = {
  hidden: { height: 0 },
  visible: { height: '100%' },
};

const drawerVariants = {
  hidden: { x: '100%' },
  visible: { x: 0 },
  exit: { x: '100%' },
};

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const observer = useRef(null);

  // Intersection Observer to highlight active section on scroll
  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
          window.history.replaceState(null, '', `#${entry.target.id}`);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    });

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.current.observe(el);
    });

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  // Smooth scroll & close mobile menu
  const handleClick = (e, section) => {
    e.preventDefault();
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setActive(section);
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-md border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-auto">
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <a href="#home">
              <img
                src="/Logo.png"
                alt="Logo"
                className="h-20 w-auto  object-contain cursor-pointer"
              />
            </a>
          </div>

          {/* Middle - Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 relative">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => handleClick(e, section)}
                className="relative px-3 py-2 text-sm font-medium cursor-pointer overflow-hidden"
              >
                <span
                  className={`relative z-20 transition-colors hover:text-[#229367] duration-300 ${
                    active === section ? 'text-black' : 'text-white'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>

                <AnimatePresence mode="wait">
                  {active === section && (
                    <motion.span
                      key="fill"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={fillVariants}
                      transition={{ duration: 0.5 }}
                      className="absolute left-0 bottom-0 w-full bg-gradient-to-b from-[#00ff9d] to-[#00cc7d] rounded-md z-10"
                      style={{ transformOrigin: 'bottom' }}
                    />
                  )}
                </AnimatePresence>
              </a>
            ))}
          </div>

          {/* Right - Contact & Socials + Hamburger */}
          <div className="flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="hidden md:inline bg-[#00ff9d] text-black text-sm font-medium px-4 py-2 rounded-md transition-colors hover:bg-[#00cc7d]"
            >
              Contact
            </motion.a>

            <div className="hidden md:flex items-center space-x-4">
              {[
                {
                  icon: <FaLinkedin />,
                  link: 'https://www.linkedin.com/in/moe-masri-b7a312324',
                },
                {
                  icon: <FaGithub />,
                  link: 'https://github.com/MrPenguz',
                },
                { icon: <FaTelegram />, link: 'https://t.me/moe_masri' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.2 }}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#00ff9d] text-lg transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Hamburger Button for mobile */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-white focus:outline-none"
              aria-label="Open menu"
            >
              <HiOutlineMenu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sliding drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-drawer"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={drawerVariants}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 max-w-xs bg-[#0a0a0a] z-50 shadow-lg flex flex-col"
            style={{ height: '100vh' }}
          >
            {/* Close button inside drawer */}
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="absolute top-4 right-4 text-[#00ff9d] p-2 rounded-md hover:bg-[#004d2a] focus:outline-none"
            >
              <HiOutlineX size={28} />
            </button>

            {/* Nav Links centered vertically and horizontally */}
            <nav className="flex flex-col flex-grow justify-center items-center space-y-8 px-8 text-center">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => handleClick(e, section)}
                  className={`text-white text-2xl font-medium cursor-pointer hover:text-[#00ff9d] ${
                    active === section ? 'text-[#00ff9d]' : ''
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </nav>

            {/* Socials + Contact button at bottom */}
            <div className="px-8 py-6 border-t border-[#222] flex flex-col space-y-4">
              <div className="flex space-x-6 justify-center">
                {[
                  {
                    icon: <FaLinkedin />,
                    link: 'https://www.linkedin.com/in/moe-masri-b7a312324',
                  },
                  {
                    icon: <FaGithub />,
                    link: 'https://github.com/MrPenguz',
                  },
                  { icon: <FaTelegram />, link: 'https://t.me/moe_masri' },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00ff9d] text-3xl transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="bg-[#00ff9d] text-black text-center text-lg font-semibold py-3 rounded-md hover:bg-[#00cc7d] transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
