import React, { useState, useCallback } from 'react';
import { Stepper, Step } from './Stepper'; // Assuming Stepper.jsx is in the same directory

const PlansQuizModal = ({ showModal, onClose }) => {
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(1); // Internal state for Stepper
  const [showInitialQuestion, setShowInitialQuestion] = useState(true); // New state for the initial question
  const [showThankYouMessage, setShowThankYouMessage] = useState(false); // New state for thank you message

  const handleAnswerChange = useCallback((questionId, value) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  }, []);

  const handleInitialQuestionAnswer = (answer) => {
    if (answer === 'yes') {
      setShowInitialQuestion(false); // Hide the initial question
      setShowThankYouMessage(true); // Show the thank you message
    } else {
      setShowInitialQuestion(false); // Proceed to the quiz if "No" is selected
    }
  };

  const handleThankYouNext = () => {
    onClose(); // Close the modal
    window.location.href = '/cif'; // Redirect to CIF page
  };

  const determineRecommendedService = useCallback(() => {
    const scores = {
      compass: 0,
      vault: 0,
      ascend: 0,
      pinnacle: 0,
    };

    Object.values(answers).forEach(answer => {
      if (scores.hasOwnProperty(answer)) {
        scores[answer]++;
      }
    });

    let maxScore = 0;
    let recommendedServiceId = '';

    // Determine the service with the highest score
    for (const serviceId in scores) {
      if (scores[serviceId] > maxScore) {
        maxScore = scores[serviceId];
        recommendedServiceId = serviceId;
      } else if (scores[serviceId] === maxScore) {
        // Handle ties based on hierarchy: Pinnacle > Ascend > Vault > Compass
        const hierarchy = ['compass', 'vault', 'ascend', 'pinnacle'];
        if (hierarchy.indexOf(serviceId) > hierarchy.indexOf(recommendedServiceId)) {
          recommendedServiceId = serviceId;
        }
      }
    }

    const serviceNames = {
      compass: 'Compass Session™',
      vault: 'Vault™',
      ascend: 'Ascend™',
      pinnacle: 'Pinnacle™',
    };

    return serviceNames[recommendedServiceId] || ''; // Return the full service name
  }, [answers]);

  const handleNextStep = useCallback((internalNext, handleComplete) => {
    // Always move to the next step. The Stepper's internal logic will handle 'Finish' on the last step.
    internalNext();
  }, []); // No dependency on currentStep needed if we always just call internalNext

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4">
      {showInitialQuestion ? (
        <div className="mx-auto w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-gray-200 relative flex flex-col md:h-auto overflow-hidden">
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
              aria-label="Close quiz"
          >
            &times;
          </button>
          <div className="text-center text-gray-800 pt-8"> {/* Added pt-8 for spacing below logo */}
            <h2 className="text-2xl font-bold mb-4">Do you already know which Gradform plan suits you best?</h2>
            <div className="flex flex-col space-y-4 mt-6">
              <button
                onClick={() => handleInitialQuestionAnswer('yes')}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Yes
              </button>
              <button
                onClick={() => handleInitialQuestionAnswer('no')}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : showThankYouMessage ? (
        <div className="mx-auto w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-gray-200 relative flex flex-col md:h-auto overflow-hidden">
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
              aria-label="Close quiz"
          >
            &times;
          </button>
          <div className="text-center text-gray-800 pt-8">
            <h2 className="text-3xl font-bold mb-4">Thank you for your interest!</h2>
            <p className="text-lg text-gray-700 mb-8">
              We at Gradform are dedicated to serve your needs, kindly fill our client intake form to avail our best services.
            </p>
            <button
              onClick={handleThankYouNext}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Continue ↗
            </button>
          </div>
        </div>
      ) : (
        <Stepper
          initialStep={1}
          onStepChange={setCurrentStep}
          onClose={onClose}
          customHandleNext={handleNextStep}
        >
          {/* Intro Tile */}
          <Step>
            <div className="text-center p-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the Gradform Quiz!</h2>
              <p className="text-gray-600">
                Let’s match you with the perfect support for your journey abroad. Answer a few quick questions and we’ll recommend the service that’s just right for you.
              </p>
            </div>
          </Step>

        {/* Question 1 */}
        <Step>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Question 1: Where are you in your study abroad journey?</h2>
            <div className="flex flex-col space-y-3">
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q1"
                  value="compass"
                  checked={answers.q1 === 'compass'}
                  onChange={() => handleAnswerChange('q1', 'compass')}
                  className="mr-2"
                />
                I’m just starting out, still figuring out countries, programs, or even if I should go.
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q1"
                  value="vault"
                  checked={answers.q1 === 'vault'}
                  onChange={() => handleAnswerChange('q1', 'vault')}
                  className="mr-2"
                />
                I know what I want, but I need my documents to shine.
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q1"
                  value="ascend"
                  checked={answers.q1 === 'ascend'}
                  onChange={() => handleAnswerChange('q1', 'ascend')}
                  className="mr-2"
                />
                I know my goals but I’d like structured support and someone keeping me on track.
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q1"
                  value="pinnacle"
                  checked={answers.q1 === 'pinnacle'}
                  onChange={() => handleAnswerChange('q1', 'pinnacle')}
                  className="mr-2"
                />
                I want maximum support, a dedicated mentor with me at every step.
              </label>
            </div>
          </div>
        </Step>

        {/* Question 2 */}
        <Step>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Question 2: How much guidance do you want?</h2>
            <div className="flex flex-col space-y-3">
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q2"
                  value="compass"
                  checked={answers.q2 === 'compass'}
                  onChange={() => handleAnswerChange('q2', 'compass')}
                  className="mr-2"
                />
                Just clarity, point me in the right direction.
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q2"
                  value="vault"
                  checked={answers.q2 === 'vault'}
                  onChange={() => handleAnswerChange('q2', 'vault')}
                  className="mr-2"
                />
                Help me polish my application docs to perfection.
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q2"
                  value="ascend"
                  checked={answers.q2 === 'ascend'}
                  onChange={() => handleAnswerChange('q2', 'ascend')}
                  className="mr-2"
                />
                Regular check-ins and step-by-step guidance.
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q2"
                  value="pinnacle"
                  checked={answers.q2 === 'pinnacle'}
                  onChange={() => handleAnswerChange('q2', 'pinnacle')}
                  className="mr-2"
                />
                Unlimited support from my own mentor.
              </label>
            </div>
          </div>
        </Step>

        {/* Question 3 */}
        <Step>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Question 3: What’s your biggest challenge right now?</h2>
            <div className="flex flex-col space-y-3">
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q3"
                  value="compass"
                  checked={answers.q3 === 'compass'}
                  onChange={() => handleAnswerChange('q3', 'compass')}
                  className="mr-2"
                />
                Too many choices, I feel stuck deciding.
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q3"
                  value="vault"
                  checked={answers.q3 === 'vault'}
                  onChange={() => handleAnswerChange('q3', 'vault')}
                  className="mr-2"
                />
                Writing and organizing my SOPs, CVs, and forms.
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q3"
                  value="ascend"
                  checked={answers.q3 === 'ascend'}
                  onChange={() => handleAnswerChange('q3', 'ascend')}
                  className="mr-2"
                />
                Keeping track of everything, I don’t want to miss a step.
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q3"
                  value="pinnacle"
                  checked={answers.q3 === 'pinnacle'}
                  onChange={() => handleAnswerChange('q3', 'pinnacle')}
                  className="mr-2"
                />
                Competing for top universities/scholarships and leaving nothing to chance.
              </label>
            </div>
          </div>
        </Step>

        {/* Question 4 */}
        <Step>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Question 4: How involved do you want Gradform to be?</h2>
            <div className="flex flex-col space-y-3">
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q4"
                  value="compass"
                  checked={answers.q4 === 'compass'}
                  onChange={() => handleAnswerChange('q4', 'compass')}
                  className="mr-2"
                />
                Give me clarity and I’ll take it from there.
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q4"
                  value="vault"
                  checked={answers.q4 === 'vault'}
                  onChange={() => handleAnswerChange('q4', 'vault')}
                  className="mr-2"
                />
                Craft my documents with me so they look world-class.
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q4"
                  value="ascend"
                  checked={answers.q4 === 'ascend'}
                  onChange={() => handleAnswerChange('q4', 'ascend')}
                  className="mr-2"
                />
                Stay with me throughout the application process.
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q4"
                  value="pinnacle"
                  checked={answers.q4 === 'pinnacle'}
                  onChange={() => handleAnswerChange('q4', 'pinnacle')}
                  className="mr-2"
                />
                Be my personal mentor from start to finish, no limits.
              </label>
            </div>
          </div>
        </Step>

        {/* Question 5 */}
        <Step>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Question 5: What’s your dream vibe for this journey?</h2>
            <div className="flex flex-col space-y-3">
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q5"
                  value="compass"
                  checked={answers.q5 === 'compass'}
                  onChange={() => handleAnswerChange('q5', 'compass')}
                  className="mr-2"
                />
                Confidence and direction, no more second-guessing.
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q5"
                  value="vault"
                  checked={answers.q5 === 'vault'}
                  onChange={() => handleAnswerChange('q5', 'vault')}
                  className="mr-2"
                />
                Stress-free, polished documents I’m proud of.
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q5"
                  value="ascend"
                  checked={answers.q5 === 'ascend'}
                  onChange={() => handleAnswerChange('q5', 'ascend')}
                  className="mr-2"
                />
                Structure, accountability, and expert guidance.
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="q5"
                  value="pinnacle"
                  checked={answers.q5 === 'pinnacle'}
                  onChange={() => handleAnswerChange('q5', 'pinnacle')}
                  className="mr-2"
                />
                Peace of mind with full mentoring support.
              </label>
            </div>
          </div>
        </Step>

        {/* Result Step */}
        <Step>
          <div className="text-center p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">The plan that suits you best</h2>
            <p className="text-3xl font-extrabold text-blue-600 mb-6">
              {determineRecommendedService()}
            </p>
            <p className="text-lg text-gray-700 mb-8">Ready to take the next step?</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl text-gray-600 border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
              >
                Not right now, thanks.
              </button>
              <button
                onClick={() => { /* Add logic for "Yes, let's move forward" */ }}
                className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
              >
                Yes, let's explore further!
              </button>
            </div>
          </div>
        </Step>
      </Stepper>
      )}
    </div>
  );
};

export default PlansQuizModal;
