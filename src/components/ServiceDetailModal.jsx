import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'; // Import scroll icons
import { cn } from '../../src/lib/utils'; // Import cn utility for class merging

const ServiceDetailModal = ({ showModal, onClose, serviceTitle, serviceDescription, universityLogos = [] }) => {
  const contentRef = useRef(null);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const handleScroll = () => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      setShowScrollUp(scrollTop > 0);
      setShowScrollDown(scrollTop + clientHeight < scrollHeight);
    }
  };

  const scrollTo = (direction) => {
    if (contentRef.current) {
      const scrollAmount = 100; // Adjust scroll amount as needed
      if (direction === 'up') {
        contentRef.current.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
      } else {
        contentRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (showModal) {
      // Reset scroll position and check scroll visibility when modal opens
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
        handleScroll(); // Initial check
      }
    }
  }, [showModal]);

  if (!showModal) {
    return null;
ic  }

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full text-center max-h-[90vh] overflow-y-auto hide-scrollbar"
            ref={contentRef}
            onScroll={handleScroll}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl z-10"
              aria-label="Close"
            >
              &times;
            </button>
            {showScrollUp && (
              <button
                onClick={() => scrollTo('up')}
                className="absolute top-16 right-4 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 z-10"
                aria-label="Scroll up"
              >
                <FaChevronUp className="w-4 h-4 text-gray-600" />
              </button>
            )}
            {showScrollDown && (
              <button
                onClick={() => scrollTo('down')}
                className="absolute bottom-16 right-4 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 z-10"
                aria-label="Scroll down"
              >
                <FaChevronDown className="w-4 h-4 text-gray-600" />
              </button>
            )}
            <h2 className="text-xl font-bold text-gray-800 mb-3">{serviceTitle}</h2>
            {serviceTitle === "Compass Session" && (
              <>
                <p className="text-gray-600 text-sm mb-3 text-justify">Say goodbye to confusion and endless second-guessing. With the Compass Session, you gain crystal-clear clarity on your next steps, a personalized roadmap tailored to your goals, and the confidence to move forward without hesitation.</p>
                <p className="text-gray-600 font-bold mb-1 text-justify">Perfect for you if</p>
                <p className="text-gray-600 text-xs mb-3 text-justify">You’re in the early stages of your journey and not quite sure which direction to take. Maybe you’re torn between countries, unsure about which programs best match your goals, or simply feeling stuck because of too many options. This service is designed for those who want clarity and confidence before committing to a path forward.</p>
                <p className="text-gray-600 font-bold mb-1 text-justify">What you’ll get</p>
                <ul className="text-gray-600 text-xs space-y-1 mb-3 text-justify">
                  <li className="flex items-start">
                    <img src="/icons/plans/blue.png" alt="Bullet" className="w-3 h-1.5 mr-1.5 mt-1" />
                    <span>Free Alignment Call – we listen to your goals and concerns.</span>
                  </li>
                  <li className="flex items-start">
                    <img src="/icons/plans/blue.png" alt="Bullet" className="w-3 h-1.5 mr-1.5 mt-1" />
                    <span>Personalized Gradform Decision Kit – a tailored roadmap with recommended countries, programs, and universities.</span>
                  </li>
                  <li className="flex items-start">
                    <img src="/icons/plans/blue.png" alt="Bullet" className="w-3 h-1.5 mr-1.5 mt-1" />
                    <span>1:1 Consultation Call – where we review your kit together and plan your next steps.</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-xs mb-3 text-justify">Think of it as your professional compass, a research-driven session that helps you make smarter choices without second-guessing.</p>
              </>
            )}
            {serviceTitle === "Vault" && (
              <>
                <p className="text-gray-600 text-sm mb-3 text-justify">Imagine having all your application documents perfectly organized, polished, and stress-free so you can focus entirely on your future. Vault ensures your SOPs, CVs, and forms tell your story in the most compelling way, giving you confidence at every stage.</p>
                <p className="text-gray-600 font-bold mb-1 text-justify">Perfect for you if</p>
                <p className="text-gray-600 text-xs mb-3 text-justify">You already know the direction you want to pursue but need your applications to truly shine. This service is ideal if you want your documents to reflect your unique story, highlight your strengths, and leave a lasting impression. It’s for anyone who wants to remove the stress of editing and organizing, and instead feel fully confident that their applications are presented at the highest standard.</p>
                <p className="text-gray-600 font-bold mb-1 text-justify">What you’ll get</p>
                <ul className="text-gray-600 text-xs space-y-1 mb-3 text-justify">
                  <li className="flex items-start">
                    <img src="/icons/plans/blue.png" alt="Bullet" className="w-3 h-1.5 mr-1.5 mt-1" />
                    <span>Expert Document Crafting* – SOPs, CVs, checklists, and application forms shaped by mentors and reviewed by top university graduates.</span>
                  </li>
                  <li className="flex items-start">
                    <img src="/icons/plans/blue.png" alt="Bullet" className="w-3 h-1.5 mr-1.5 mt-1" />
                    <span>Gradform Confidence Stamp – every submission checked for compliance and impact.</span>
                  </li>
                  <li className="flex items-start">
                    <img src="/icons/plans/blue.png" alt="Bullet" className="w-3 h-1.5 mr-1.5 mt-1" />
                    <span>Up to 2 Revisions – for CVs, SOPs, and forms.</span>
                  </li>
                  <li className="flex items-start">
                    <img src="/icons/plans/blue.png" alt="Bullet" className="w-3 h-1.5 mr-1.5 mt-1" />
                    <span>Optional Extra Reviews – available for a one-time fee.</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-xs mb-3 text-justify">Vault is more than form-filling, it’s storytelling with precision and strategy.</p>
                <p className="text-gray-500 text-[0.6rem] mt-3 text-justify">* Vault is valid for one full application cycle.</p>
              </>
            )}
            {serviceTitle === "Ascend" && (
              <>
                <p className="text-gray-600 text-sm mb-3 text-justify">Elevate your application with structured guidance and expert support. Ascend ensures every step of your journey is clear, accountable, and optimized for success, giving you the confidence to achieve your academic dreams.</p>
                <p className="text-gray-600 font-bold mb-1 text-justify">Perfect for you if</p>
                <p className="text-gray-600 text-xs mb-3 text-justify">You have a clear vision for your academic goals but need consistent support and accountability to stay on track. This service is ideal if you want to refine your decisions, perfect your documents, and navigate the application process with expert guidance, ensuring you don’t miss a single step.</p>
                <p className="text-gray-600 font-bold mb-1 text-justify">What you’ll get</p>
                <ul className="text-gray-600 text-xs space-y-1 mb-3 text-justify">
                  <li className="flex items-start">
                    <img src="/icons/plans/blue.png" alt="Bullet" className="w-3 h-1.5 mr-1.5 mt-1" />
                    <span>All Compass and Vault benefits included.</span>
                  </li>
                  <li className="flex items-start">
                    <img src="/icons/plans/blue.png" alt="Bullet" className="w-3 h-1.5 mr-1.5 mt-1" />
                    <span>Weekly 1:1 sessions with your dedicated mentor for strategy, document review, and progress tracking.</span>
                  </li>
                  <li className="flex items-start">
                    <img src="/icons/plans/blue.png" alt="Bullet" className="w-3 h-1.5 mr-1.5 mt-1" />
                    <span>Personalized timeline and checklist to keep you organized.</span>
                  </li>
                  <li className="flex items-start">
                    <img src="/icons/plans/blue.png" alt="Bullet" className="w-3 h-1.5 mr-1.5 mt-1" />
                    <span>Interview preparation and mock sessions.</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-xs mb-3 text-justify">Ascend is your comprehensive partner, providing the structure and expertise to confidently navigate the entire application process.</p>
              </>
            )}
            {serviceTitle === "Pinnacle" && (
              <>
                <p className="text-gray-600 text-sm mb-3 text-justify">Experience the ultimate level of support and guidance for your academic journey. Pinnacle provides you with a dedicated mentor, unlimited resources, and a personalized strategy to ensure nothing is left to chance in your pursuit of top universities and scholarships.</p>
                <p className="text-gray-600 font-bold mb-1 text-justify">Perfect for you if</p>
                <p className="text-gray-600 text-xs mb-3 text-justify">You are a top achiever aiming for elite universities and highly competitive scholarships, and you want a comprehensive, personalized approach. This service is for those who desire a dedicated mentor to provide unlimited support, strategic planning, and meticulous attention to every detail from start to acceptance.</p>
                <p className="text-gray-600 font-bold mb-1 text-justify">What you’ll get</p>
                <ul className="text-gray-600 text-xs space-y-1 mb-3 text-justify">
                  <li className="flex items-start">
                    <img src="/icons/plans/blue.png" alt="Bullet" className="w-3 h-1.5 mr-1.5 mt-1" />
                    <span>All Compass, Vault, and Ascend benefits included.</span>
                  </li>
                  <li className="flex items-start">
                    <img src="/icons/plans/blue.png" alt="Bullet" className="w-3 h-1.5 mr-1.5 mt-1" />
                    <span>Dedicated mentor providing unlimited 1:1 sessions and priority responses.</span>
                  </li>
                  <li className="flex items-start">
                    <img src="/icons/plans/blue.png" alt="Bullet" className="w-3 h-1.5 mr-1.5 mt-1" />
                    <span>Personalized strategy for top university admissions and scholarship maximization.</span>
                  </li>
                  <li className="flex items-start">
                    <img src="/icons/plans/blue.png" alt="Bullet" className="w-3 h-1.5 mr-1.5 mt-1" />
                    <span>Holistic guidance for every detail, from program choices to final approvals.</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-xs mb-3 text-justify">Pinnacle is your ultimate advantage, ensuring you have every resource and expert insight to secure your place at your dream institution.</p>
              </>
            )}
            {serviceTitle !== "Compass Session" && serviceTitle !== "Vault" && serviceTitle !== "Ascend" && serviceTitle !== "Pinnacle" && (
              <>
                <p className="text-gray-600 text-sm mb-3 text-justify">{serviceDescription}</p>
                {universityLogos.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Top Universities</h3>
                    <div className="relative w-full overflow-hidden py-4">
                      <div className="flex animate-scroll-left whitespace-nowrap">
                        {/* Duplicate logos multiple times to create a longer, seamless loop with faster perceived movement */}
                        {universityLogos.concat(universityLogos).concat(universityLogos).concat(universityLogos).concat(universityLogos).concat(universityLogos).map((logo, index) => (
                          <img
                            key={index}
                            src={logo}
                            alt={`University Logo ${index}`}
                            className="h-12 mx-2 inline-block object-contain"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
            <a
              href="#contact"
              className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-block"
              onClick={onClose}
            >
              Get Started
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceDetailModal;
