import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4">
      <motion.button
        className="w-full flex justify-between items-center p-5 rounded-xl bg-white/15 backdrop-blur-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out text-left"
        onClick={toggleOpen}
        initial={false}
        animate={{
          backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.15)',
          borderColor: isOpen ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.3)',
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <span className="text-white font-medium text-sm font-inter">{question}</span>
        <motion.span
          className="text-white text-lg"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          +
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.p
              className="text-white/70 text-xs mt-3 px-5 font-inter text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
