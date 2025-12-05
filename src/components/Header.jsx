
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Plans', href: '/plans' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Explore', href: '/explore' },
    { name: 'About', href: '/about' },
    { name: 'FAQs', href: 'faqs.html' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0000CD] px-6 py-2 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#home" className="ml-4">
          <img src="/images/logo-large.png" alt="Gradform Logo" className="h-9" />
        </a>
        <nav className="hidden md:flex items-center space-x-4 font-inter grow justify-center translate-x-3">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="header-nav-link text-white text-xs">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center">
          <a href="#get-started" className="bg-white text-[#0000CD] px-5 py-2.5 rounded-xl hover:bg-blue-100 hover:shadow-2xl hover:shadow-[#0000CD]/70 transition-all duration-300 text-xs font-medium">Get Started</a>
        </div>
        <button
          className="md:hidden text-white relative w-8 h-8 flex items-center justify-center focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <motion.span
            className="block w-6 h-0.5 bg-white absolute rounded-full"
            animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 0 : -6 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          ></motion.span>
          <motion.span
            className="block w-6 h-0.5 bg-white absolute rounded-full"
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          ></motion.span>
          <motion.span
            className="block w-6 h-0.5 bg-white absolute rounded-full"
            animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? 0 : 6 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          ></motion.span>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }} // Start slightly above to appear from under
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} // Exit slightly above
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/10 backdrop-blur-lg shadow-xl py-4 px-6 space-y-3 border-t border-white/20" // Positioned below header
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-white text-base font-medium hover:text-blue-200 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                {link.name}
              </a>
            ))}
            <a href="#get-started" className="block bg-white text-[#0000CD] px-5 py-2.5 rounded-xl hover:bg-blue-100 hover:shadow-2xl hover:shadow-[#0000CD]/70 transition-all duration-300 text-sm font-medium text-center mt-4">Get Started</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
