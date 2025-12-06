import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import MagicBento from './components/MagicBento'; // Import MagicBento for tile styling
import { cn } from './lib/utils'; // Import cn utility
import CardSwap, { Card } from './components/CardSwap'; // Import CardSwap and Card
import ServicesJourney from './components/ServicesJourney';
import { Stepper, Step } from './components/Stepper'; // Import Stepper and Step

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
    title: 'Compass Session',
    description: 'Find Your Direction',
    icon: <img src="/icons/compass session.png" alt="Compass Session" className="w-11 h-11" />,
  },
  {
    id: 'vault',
    title: 'Vault',
    description: 'Make Your Documents Unforgettable',
    icon: <img src="/icons/vault.png" alt="Vault" className="w-11 h-11" />,
  },
  {
    id: 'ascend',
    title: 'Ascend',
    description: 'Your Guided Path to Success',
    icon: <img src="/icons/ascend.png" alt="Ascend" className="w-11 h-11" />,
  },
  {
    id: 'pinnacle',
    title: 'Pinnacle',
    description: 'Your Dedicated Mentor, Every Step of the Way',
    icon: <img src="/icons/pinnacle.png" alt="Pinnacle" className="w-11 h-11" />,
  },
];

const ServicesPage = () => { // Component name matches file name
  const [showDiscoveryCallModal, setShowDiscoveryCallModal] = useState(false);
  const [showGradformQuizModal, setShowGradformQuizModal] = useState(false); // New state for Gradform Quiz modal
  const [currentStep, setCurrentStep] = useState(0);
  const [serviceIntent, setServiceIntent] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [studyCareerGoal, setStudyCareerGoal] = useState('');

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleCloseDiscoveryCallModal = () => {
    setShowDiscoveryCallModal(false);
    setCurrentStep(0); // Reset to first step on close
    setServiceIntent('');
    setClientName('');
    setClientEmail('');
    setStudyCareerGoal('');
  };

  const handleCloseGradformQuizModal = () => {
    setShowGradformQuizModal(false);
    // Reset stepper state if needed for the quiz
  };

  useEffect(() => {
    console.log('ServicesPage mounted');
  }, []);

  const totalQuizSteps = 7; // Intro (1) + Steps (5) + Result (1) = 7 steps
  const [currentQuizStep, setCurrentQuizStep] = useState(1);

  const handleQuizStepChange = (newStep) => {
    setCurrentQuizStep(newStep);
  };

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
                  <button id="discovery-call-button" onClick={() => setShowDiscoveryCallModal(true)} className="mt-4 md:mt-0 bg-white text-[#0000CD] px-6 py-2.5 rounded-xl hover:bg-blue-100 hover:shadow-2xl hover:shadow-[#0000CD]/70 transition-all duration-300 text-base font-medium">
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

        <ServicesJourney setShowGradformQuizModal={setShowGradformQuizModal} />

      </main>

      {showDiscoveryCallModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-filter backdrop-blur-sm p-4">
          <div className="relative bg-white rounded-lg p-8 max-w-lg w-full shadow-xl overflow-auto max-h-[90vh]">
            <button
              onClick={handleCloseDiscoveryCallModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>

            {/* Step 1: Service Intent */}
            {currentStep === 0 && (
              <div className="text-center text-gray-800">
                <h2 className="text-3xl font-bold mb-4">Have you decided what service you’re interested in?</h2>
                <div className="flex flex-col space-y-4 mt-6">
                  <button
                    onClick={() => { setServiceIntent('Yes, I know what I need'); handleNextStep(); }}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Yes, I know what I need
                  </button>
                  <button
                    onClick={() => { setServiceIntent('Not sure yet, help me decide'); handleNextStep(); }}
                    className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Not sure yet, help me decide
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Client Intake Info */}
            {currentStep === 1 && (
              <div className="text-gray-800">
                <h2 className="text-3xl font-bold mb-4 text-center">Client Intake Information</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-left text-lg font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-left text-lg font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="Your Email Address"
                    />
                  </div>
                  <div>
                    <label htmlFor="studyCareerGoal" className="block text-left text-lg font-medium text-gray-700">Study/Career Goal</label>
                    <input
                      type="text"
                      id="studyCareerGoal"
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      value={studyCareerGoal}
                      onChange={(e) => setStudyCareerGoal(e.target.value)}
                      placeholder="e.g., Master's in AI, Career Change to Tech"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-8">
                  <button
                    onClick={handlePreviousStep}
                    className="px-6 py-2 rounded-full font-semibold transition-all duration-300 bg-gray-300 text-gray-800 hover:bg-gray-400"
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation/Booking (Placeholder) */}
            {currentStep === 2 && (
              <div className="text-center text-gray-800">
                <h2 className="text-3xl font-bold mb-4">Confirm Your Details</h2>
                <p className="text-lg mb-4">Thank you for providing your information!</p>
                <p className="text-md">We will contact you shortly to schedule your Discovery Call.</p>
                <div className="mt-6">
                  <p><strong>Name:</strong> {clientName}</p>
                  <p><strong>Email:</strong> {clientEmail}</p>
                  <p><strong>Goal:</strong> {studyCareerGoal}</p>
                  <p><strong>Service Intent:</strong> {serviceIntent}</p>
                </div>
                <button
                  onClick={handleCloseDiscoveryCallModal}
                  className="mt-8 px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Finish
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {showGradformQuizModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-filter backdrop-blur-sm p-4">
          <Stepper
            initialStep={1}
            onStepChange={handleQuizStepChange}
            onFinalStepCompleted={() => { setCurrentQuizStep(totalQuizSteps); }}
            onClose={handleCloseGradformQuizModal}
            nextButtonText={"Next Step"}
          >
            {/* Step 1: Intro (Not numbered in the indicator) */}
            <Step>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Gradform Quiz</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Take this quick quiz to help us understand your needs and recommend the best services for you.
              </p>
            </Step>

            {/* Steps 2-5: Core Content Steps (Mapped to Indicator 1, 2, 3, 4) */}
            <Step>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">1. Your Academic Goals</h3>
              <p className="text-gray-600 text-sm">What are your primary academic aspirations?</p>
              {/* Placeholder for quiz question */}
              <div className="h-20 bg-gray-100 rounded-lg mt-4 flex items-center justify-center text-xs text-gray-500">
                Question 1 content here.
              </div>
            </Step>
            <Step>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">2. Current Application Status</h3>
              <p className="text-gray-600 text-sm">Where are you in your application journey?</p>
              {/* Placeholder for quiz question */}
              <div className="h-20 bg-gray-100 rounded-lg mt-4 flex items-center justify-center text-xs text-gray-500">
                Question 2 content here.
              </div>
            </Step>
            <Step>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">3. Support Needed</h3>
              <p className="text-gray-600 text-sm">What kind of support are you looking for?</p>
              {/* Placeholder for quiz question */}
              <div className="h-20 bg-gray-100 rounded-lg mt-4 flex items-center justify-center text-xs text-gray-500">
                Question 3 content here.
              </div>
            </Step>
            <Step>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">4. Preferred Study Destination</h3>
              <p className="text-gray-600 text-sm">Do you have a preferred country or region for your studies?</p>
              {/* Placeholder for quiz question */}
              <div className="h-20 bg-gray-100 rounded-lg mt-4 flex items-center justify-center text-xs text-gray-500">
                Question 4 content here.
              </div>
            </Step>

            {/* Step 6: Completion (The step shown when currentStep > totalSteps) */}
            <Step>
              <div className="text-center p-2">
                <h3 className="text-xl font-bold text-green-600 mb-3">Quiz Complete!</h3>
                <p className="text-gray-600 text-sm">Thank you for completing the Gradform Quiz. We will analyze your responses and get back to you with personalized recommendations.</p>
                <div className="flex flex-col space-y-4 mt-6">
                  <button
                    onClick={handleCloseGradformQuizModal}
                    className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors text-sm"
                  >
                    Not right now, thanks
                  </button>
                  <button
                    onClick={() => { /* Add logic for exploring further */ handleCloseGradformQuizModal(); }}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                  >
                    Yes, let's explore further
                  </button>
                </div>
              </div>
            </Step>
          </Stepper>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
