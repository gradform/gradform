import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa'; // For the CTA button arrow
import GradformQuizModal from './GradformQuizModal'; // Import the new quiz modal component
import ServiceDetailModal from './ServiceDetailModal'; // Import the new service detail modal
import ComparisonTable from './ComparisonTable'; // Import the new comparison table
import useIntersectionObserver from '../hooks/useIntersectionObserver'; // Import the hook

const ServiceCard = ({ icon, title, description, delay, onMoreInfoClick, detailedDescription }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={`relative flex flex-col md:flex-row p-6 bg-white/10 rounded-2xl shadow-xl backdrop-blur-xl border border-white/20 max-w-xl w-full mx-auto h-full transition-all duration-200 group text-left
        ${isIntersecting ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 translate-y-20 scale-95 rotate-3'}
        md:hover:scale-[1.01] md:hover:rotate-0.5 md:hover:shadow-2xl md:hover:border-white/30`}
      initial={{ opacity: 0, y: 20, scale: 0.95, rotate: 3 }} // Initial state for mobile animation
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }} // Animation for mobile
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {/* Left Section */}
      <div className="flex-none md:flex-1 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start pb-4 md:pb-0 md:pr-4 relative">
        <img src={icon} alt={title} className="w-12 h-12 object-contain mb-2 md:mb-0 mr-0 md:mr-4" />
        <h3 className="text-2xl md:text-4xl font-bold text-white text-center md:text-left">{title}</h3>
      </div>


      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center pt-4 md:pt-0 md:pl-4 text-left">
        <ul className="text-gray-300 text-sm space-y-1 mb-4">
          {description.map((item, index) => (
            <li key={index} className="flex items-start justify-start transition-colors duration-200 group-hover:text-white">
              <img src="/icons/plans/icon.png" alt="Gradform Icon" className="w-4 h-2 mr-2 mt-1" />
              {item}
            </li>
          ))}
        </ul>
        <button
          onClick={onMoreInfoClick}
          className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium w-fit mx-auto md:mx-0"
        >
          More Info
        </button>
      </div>
    </motion.div>
  );
};

const JourneySeparator = ({ delay }) => (
  <motion.div
    className="relative w-full h-full flex items-center justify-center" // Use h-full to fill parent div (h-32)
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {/* Top dashed line segment */}
    <motion.div
      className="absolute top-0 h-[60px] w-0.5 border-l-2 border-dashed border-white/40 left-1/2 -translate-x-1/2" // Adjusted height for longer lines within h-32
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      style={{ originY: "top" }}
    ></motion.div>
    {/* Bottom dashed line segment */}
    <motion.div
      className="absolute bottom-0 h-[60px] w-0.5 border-l-2 border-dashed border-white/40 left-1/2 -translate-x-1/2" // Adjusted height for longer lines within h-32
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      style={{ originY: "bottom" }}
    ></motion.div>
    {/* The pulsing dot, centered in the gap */}
    <motion.div
      className="absolute w-4 h-4 rounded-full bg-blue-400 shadow-lg left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" // Centered vertically
      initial={{ scale: 0 }}
      whileInView={{ scale: [0, 1, 0.9, 1.1, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1.2,
        delay: delay + 0.3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
  </motion.div>
);

const CTACard = ({ delay, setShowGradformQuizModal }) => (
  <motion.div
    className="relative bg-linear-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md p-8 rounded-3xl shadow-xl text-center max-w-2xl mx-auto border border-white/10"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    <motion.h3
      className="text-3xl md:text-4xl font-bold text-white mb-4"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: delay + 0.2, ease: "easeOut" }}
    >
      Still don’t know what’s the right service for you?
    </motion.h3>
    <motion.p
      className="text-lg text-gray-200 mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: delay + 0.4, ease: "easeOut" }}
    >
      Take our quick quiz to find the perfect academic journey tailored just for you.
    </motion.p>
    <motion.button
      onClick={() => setShowGradformQuizModal(true)}
      className="mt-4 md:mt-0 bg-white text-[#0000CD] px-6 py-2.5 rounded-xl hover:bg-blue-100 hover:shadow-2xl hover:shadow-[#0000CD]/70 transition-all duration-300 text-base font-medium"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      Gradform Quiz
    </motion.button>
  </motion.div>
);

const ServicesJourney = () => {
  const [showGradformQuizModal, setShowGradformQuizModal] = useState(false);
  const [showServiceDetailModal, setShowServiceDetailModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: "/icons/compass session.png",
      title: "Compass Session",
      description: [
        "Personalized roadmap for your academic journey.",
        "Guidance to pick the right country, program, and path.",
        "One alignment call + tailored Decision Kit.",
        "Walk away with clear next steps and full confidence."
      ],
      detailedDescription: "Compass Session offers a personalized 1-on-1 consultation to provide a strategic roadmap for your academic goals. Get expert guidance on university selection and an overview of the application process with essential tips. This service is perfect for those just starting out, still figuring out countries, programs, or even if they should go abroad."
    },
    {
      icon: "/icons/vault.png",
      title: "Vault",
      description: [
        "Polished, high-impact application package.",
        "Story crafted with precision to strengthen your profile.",
        "Expert-reviewed SOPs, CVs, and forms to stand out.",
        "Submit with confidence: organized, refined, error-free."
      ],
      detailedDescription: "Vault provides secure document management and organized storage for all your applications. Your story is crafted with precision, ensuring every detail strengthens your profile. Benefit from expert-reviewed SOPs, CVs, and forms built to stand out in competitive admissions. Submit with confidence, knowing everything is organized, refined, and error-free."
    },
    {
      icon: "/icons/ascend.png",
      title: "Ascend",
      description: [
        "Structured guidance to keep your application on track.",
        "Expert check-ins, steady support, and clear accountability.",
        "Includes Compass & Vault benefits + weekly refinement sessions.",
        "Move through admissions with clarity, consistency, and confidence."
      ],
      detailedDescription: "Ascend offers structured guidance to keep your entire application on track. You'll receive expert check-ins, steady support, and clear accountability at every step. This service includes all Compass and Vault benefits, plus weekly sessions to refine decisions and documents. Move through the admission process with clarity, consistency, and confidence."
    },
    {
      icon: "/icons/pinnacle.png",
      title: "Pinnacle",
      description: [
        "Dedicated mentor from start to acceptance.",
        "Unlimited support, personalized strategy, priority responses.",
        "Full guidance: program choices to final approvals.",
        "For top achievers: leave nothing to chance in admissions."
      ],
      detailedDescription: "Pinnacle provides a dedicated mentor who walks with you from start to acceptance. Enjoy unlimited support, personalized strategy, and priority responses every day. Get full guidance for every detail, from program choices to final approvals. This service is designed for top achievers who want nothing left to chance in their admissions journey."
    }
  ];

  const handleMoreInfoClick = (service) => {
    setSelectedService(service);
    setShowServiceDetailModal(true);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Decorative Blurred Circles */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl opacity-50"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [-40, 0, -40],
          y: [-40, 0, -40]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Your Guided Academic Journey</h2>

        <div className="relative flex flex-col items-center justify-center mb-20">
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col items-center space-y-4 w-full max-w-4xl mx-auto"> {/* Reduced space-y to bring tiles closer */}
            {services.map((service, index) => (
              <React.Fragment key={service.title}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index * 0.15}
                  onMoreInfoClick={() => handleMoreInfoClick(service)}
                />
                {index < services.length - 1 && (
                  <div className="h-32 flex justify-center"> {/* Increased height for separator container to allow longer lines */}
                    <JourneySeparator delay={index * 0.15 + 0.1} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center space-y-4 w-full"> {/* Reduced space-y for mobile as well */}
            {services.map((service, index) => (
              <React.Fragment key={service.title}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index * 0.15}
                  onMoreInfoClick={() => handleMoreInfoClick(service)}
                />
                {index < services.length - 1 && (
                  <div className="h-16 flex justify-center"> {/* Reverted height for separator container */}
                    <JourneySeparator delay={index * 0.15 + 0.1} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <CTACard delay={services.length * 0.15} setShowGradformQuizModal={setShowGradformQuizModal} />
        </div>

        {/* Comparison Table Section */}
        <div className="mt-20">
          <ComparisonTable />
        </div>
      </div>
      <GradformQuizModal showModal={showGradformQuizModal} onClose={() => setShowGradformQuizModal(false)} />
      {selectedService && (
        <ServiceDetailModal
          showModal={showServiceDetailModal}
          onClose={() => setShowServiceDetailModal(false)}
          serviceTitle={selectedService.title}
          serviceDescription={selectedService.detailedDescription ? [selectedService.detailedDescription] : selectedService.description}
        />
      )}
    </section>
  );
};

export default ServicesJourney;
