import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FAQItem from './FAQItem';

const FAQCategory = ({ category, questions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="mb-8">
      <motion.button
        className="w-full flex justify-between items-center p-6 rounded-2xl bg-white/10 backdrop-blur-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out text-left mb-4"
        onClick={toggleOpen}
        initial={false}
        animate={{
          backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.1)',
          borderColor: isOpen ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)',
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <span className="text-white font-bold text-sm font-inter">{category}</span>
        <motion.span
          className="text-white text-base"
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
            <div className="px-2"> {/* Added padding for nested FAQ items */}
              {questions.map((faq, faqIndex) => (
                <FAQItem key={faqIndex} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQCategory;
