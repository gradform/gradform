
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ValueReveal = ({ title, description, delay, reverse = false }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      className={`w-full py-16 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center`}
    >
      <div className={`flex flex-col md:flex-row items-center justify-center w-full ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className={`md:w-auto ${reverse ? 'text-right' : 'text-left'} px-4`}>
          <h2 className="text-4xl md:text-8xl font-bold bg-white text-[#0000CD] leading-tight font-bricolage-24pt p-4 inline-block rounded-lg">
            {title}
          </h2>
        </div>
        <div className={`md:w-auto ${reverse ? 'text-right' : 'text-left'} p-8 bg-gray-800/20 border border-gray-700 backdrop-blur-lg rounded-lg shadow-xl`}>
          <p className="text-xl md:text-2xl text-white leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ValueReveal;
