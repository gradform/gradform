import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FAQItem from './FAQItem'; // Assuming FAQItem is in the same directory

const FAQCategory = ({ category, questions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="mb-6">
      <motion.button
        className="w-full flex justify-between items-center p-5 rounded-xl bg-white/10 backdrop-blur-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out text-left border border-white/20"
        onClick={toggleOpen}
        initial={false}
        animate={{
          backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.1)',
          borderColor: isOpen ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)',
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h3 className="text-white font-bold text-lg font-bricolage-24pt">{category}</h3>
        <motion.span
          className="text-white text-xl"
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
            className="overflow-hidden mt-4 px-2"
          >
            {questions.map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQCategory;
