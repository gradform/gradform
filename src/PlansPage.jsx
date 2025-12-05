import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import MagicBento from './components/MagicBento'; // Import MagicBento for tile styling
import { cn } from './lib/utils'; // Import cn utility
import CardSwap, { Card } from './components/CardSwap'; // Import CardSwap and Card
import ServicesJourney from './components/ServicesJourney';
import { Stepper, Step } from './components/Stepper'; // Import Stepper and Step
import PlansQuizModal from './components/PlansQuizModal'; // Import PlansQuizModal

const originalServicesData = [
  {
    id: 'compass',
    title: 'Compass Session',
    description: 'Gain crystal-clear clarity on your definitive next steps and a personalized roadmap tailored to your specific goals. Discover how to achieve your academic aspirations.',
    icon: <img src="/icons/compass session.png" alt="Compass Session" className="w-10 h-10" />,
  },
  {
    id: 'vault',
    title: 'Vault',
    description: 'Organize and perfect all your application documents. Vault ensures your SOPs, CVs, and forms present your story compellingly, reducing stress and maximizing impact.',
    icon: <img src="/icons/vault.png" alt="Vault" className="w-10 h-10" />,
  },
  {
    id: 'ascend',
    title: 'Ascend',
    description: 'Receive dedicated expert guidance to stay on track. Ascend ensures every critical application step is handled with care, building your confidence and clarity.',
    icon: <img src="/icons/ascend.png" alt="Ascend" className="w-10 h-10" />,
  },
  {
    id: 'pinnacle',
    title: 'Pinnacle',
    description: 'Benefit from a dedicated mentor fully invested in your success. Pinnacle provides unlimited support and personalized strategy throughout your entire admissions journey.',
    icon: <img src="/icons/pinnacle.png" alt="Pinnacle" className="w-10 h-10" />,
  },
];

const cardSwapServicesData = [
  {
    id: 'compass',
    title: 'Compass Session™',
    description: 'Find Your Direction',
    icon: <img src="/icons/compass session.png" alt="Compass Session" className="w-11 h-11" />,
  },
  {
    id: 'vault',
    title: 'Vault™',
    description: 'Make Your Documents Unforgettable',
    icon: <img src="/icons/vault.png" alt="Vault" className="w-11 h-11" />,
  },
  {
    id: 'ascend',
    title: 'Ascend™',
    description: 'Your Guided Path to Success',
    icon: <img src="/icons/ascend.png" alt="Ascend" className="w-11 h-11" />,
  },
  {
    id: 'pinnacle',
    title: 'Pinnacle™',
    description: 'Your Dedicated Mentor, Every Step of the Way',
    icon: <img src="/icons/pinnacle.png" alt="Pinnacle" className="w-11 h-11" />,
  },
];

const PlansPage = () => { // Component name matches file name
  const [showPlansQuizModal, setShowPlansQuizModal] = useState(false);

  const handleOpenPlansQuizModal = () => {
    setShowPlansQuizModal(true);
  };

  const handleClosePlansQuizModal = () => {
    setShowPlansQuizModal(false);
  };

  useEffect(() => {
    console.log('PlansPage mounted');
  }, []);

  return (
    <div className="bg-linear-to-r from-[#0000CD] via-[#0000B0] to-[#4B0082] text-white min-h-screen flex flex-col">
      {/* Header and Ribbons are rendered in App.jsx */}
      <main className="grow container mx-auto px-0 py-20">
        {/* Hero Section for Services Page */}
        <section className="w-full py-0 flex justify-center items-center">
          <div className={cn(
            "relative w-full overflow-hidden rounded-2xl p-4 md:p-8 shadow-xl",
            "bg-linear-to-br from-gray-800/20 to-gray-900/20 border border-gray-700 backdrop-blur-lg"
          )}>
            <div className="relative z-10 p-4 flex flex-col md:flex-row items-center justify-center md:space-x-12 w-full">
              {/* Left side: Logo and Headline */}
              <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:translate-x-[10%]">
                <img src="/images/logo-large.png" alt="Gradform Logo" className="h-24 mx-auto md:mx-0 mb-4 animate-fadeInUp drop-shadow-lg" style={{ animationDelay: '0s' }} />
                <h1 className="text-3xl md:text-5xl font-bricolage-24pt text-white animate-fadeInUp font-bold leading-tight" style={{ animationDelay: '0.2s', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                  Unlock Your <br /> Global Future
                </h1>
                <p className="text-lg text-blue-100 leading-relaxed mt-4 animate-fadeInUp text-center md:text-justify" style={{ animationDelay: '0.4s' }}>
                  Explore our tailored services, meticulously designed to guide you through every intricate step of your international academic journey. We provide comprehensive support, ensuring you navigate global admissions with confidence and clarity.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-8 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                  <h2 className="text-2xl md:text-3xl font-bricolage-24pt text-white font-bold leading-tight text-center md:text-left mr-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                    Book Your Free Discovery Call
                  </h2>
                  <button id="get-started-button" onClick={handleOpenPlansQuizModal} className="mt-4 md:mt-0 bg-white text-[#0000CD] px-6 py-2.5 rounded-xl hover:bg-blue-100 hover:shadow-2xl hover:shadow-[#0000CD]/70 transition-all duration-300 text-base font-medium">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Right side: CardSwap animation */}
              <div className="md:w-1/2 h-96 flex items-center justify-center relative">
                <CardSwap width={500} height={350} cardDistance={35} verticalDistance={35} delay={3000}>
                  {cardSwapServicesData.map((service) => (
                    <Card key={service.id} className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="mb-1">{service.icon}</div>
                      <h3 className="text-[2.5em] font-semibold text-white w-[95%] mx-auto text-center" style={{ fontSize: '3.0em' }}>{service.title}</h3>
                      <p className="text-lg text-indigo-300 mt-1">{service.description}</p>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </div>
          </div>
        </section>

        <ServicesJourney />

      </main>

      {showPlansQuizModal && (
        <PlansQuizModal showModal={showPlansQuizModal} onClose={handleClosePlansQuizModal} />
      )}
    </div>
  );
};

export default PlansPage;
