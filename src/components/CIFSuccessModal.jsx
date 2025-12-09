import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CIFSuccessModal = ({ showModal, onClose }) => {
  if (!showModal) {
    return null;
  }

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mx-auto w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-gray-200 relative flex flex-col md:h-auto overflow-hidden"
          >
            {/* Gradform Icon */}
            <img
              src="/icons/gradform-icon.png"
              alt="Gradform Icon"
              className="absolute top-4 left-1/2 -translate-x-1/2 w-20 object-contain"
            />

            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-2 right-4 text-black hover:text-gray-900 text-xs z-20 w-5 h-5 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 leading-none"
                aria-label="Close modal"
            >
              &times;
            </button>
            <div className="text-center text-gray-800 pt-8">
              <h2 className="text-3xl font-bold mb-4">Thank you!</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our team will contact you directly.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CIFSuccessModal;
