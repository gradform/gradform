import React, { useState, Children, useRef, useLayoutEffect, useCallback } from 'react';

// --- ICON COMPONENTS ---

/** Renders a checkmark icon for completed steps. */
function CheckIcon(props) {
  return (
    <svg 
      {...props} 
      className={`h-4 w-4 text-white ${props.className || ''}`} 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={2} 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M5 13l4 4L19 7" 
      />
    </svg>
  );
}

// --- STEPPER SUB-COMPONENTS ---

/** Renders the numbered circle for each step. */
function StepIndicator({ step, currentStep, onClickStep, disableStepIndicators }) {
  // Status: 'active', 'inactive', 'complete'
  const status = currentStep === step ? 'active' : currentStep < step ? 'inactive' : 'complete';

  const handleClick = useCallback(() => {
    // Allow clicking only if the step is already completed and indicators are enabled
    if (step !== currentStep && !disableStepIndicators && currentStep > step) {
      onClickStep(step);
    }
  }, [step, currentStep, disableStepIndicators, onClickStep]);

  const baseClasses = "flex h-[12.86px] w-[12.86px] items-center justify-center rounded-full font-semibold transition-all duration-300 shadow-md";
  let indicatorClasses = '';
  
  switch (status) {
    case 'active':
      indicatorClasses = 'bg-blue-600 ring-2 ring-blue-300';
      break;
    case 'complete':
      indicatorClasses = 'bg-blue-600';
      break;
    case 'inactive':
    default:
      indicatorClasses = 'bg-gray-200 text-gray-500 text-sm';
      break;
  }
  
  const cursor = currentStep > step && !disableStepIndicators ? 'cursor-pointer hover:scale-105' : 'cursor-default';

  return (
    <div
      onClick={handleClick}
      className={`relative outline-none focus:outline-none ${cursor}`}
    >
      <div className={`${baseClasses} ${indicatorClasses}`}>
        {status === 'complete' ? (
          <CheckIcon />
        ) : (
          <span className={status === 'inactive' ? 'text-gray-500 text-xs' : 'text-white text-xs'}>{step}</span>
        )}
      </div>
    </div>
  );
}

/** Renders the line connecting the step indicators. */
function StepConnector({ isComplete }) {
  const connectorClasses = isComplete 
    ? 'w-full bg-blue-600' 
    : 'w-0 bg-gray-300';
  
  return (
    <div className="relative mx-2 h-1 flex-1 overflow-hidden rounded-full bg-gray-300">
      <div
        className={`absolute left-0 top-0 h-full transition-all duration-500 ease-out ${connectorClasses}`}
      />
    </div>
  );
}

/** Wrapper that handles the dynamic height and sliding transition between steps. */
function StepContentWrapper({ isCompleted, currentStep, direction, children, className }) {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState('auto');
  const [contentKey, setContentKey] = useState(currentStep); // State to manage content key for transitions
  const [isVisible, setIsVisible] = useState(true); // State to manage content visibility for transitions

  // Measure content height and update on step change
  useLayoutEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight); 
    }
  }, [currentStep, children]);

  // Handle the fade/slide transition between content
  useLayoutEffect(() => {
    if (currentStep !== contentKey) {
        setIsVisible(false); // Start exit animation (fade)
        const timeout = setTimeout(() => {
            setContentKey(currentStep); // Update content
            setIsVisible(true); // Start enter animation
        }, 300); 
        return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);

  // Get the content for the currently active step
  const currentContent = Children.toArray(children)[currentStep - 1];
  
  return (
    <div
      style={{ 
        height: isCompleted ? '0px' : `${contentHeight}px`,
        opacity: isCompleted ? 0 : 1,
      }}
      className={`transition-[height,opacity] duration-500 ease-in-out overflow-hidden ${className}`}
    >
        <div 
            key={contentKey} // Use contentKey here
            ref={contentRef}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateX(${isVisible ? 0 : direction * 20}px)`, 
            }}
            className={`transition-all duration-300 ease-in-out`}
        >
            {currentContent}
        </div>
    </div>
  );
}

/** Simple wrapper for step content (used by Stepper). */
export function Step({ children }) {
  return <div>{children}</div>;
}

// --- MAIN STEPPER COMPONENT ---

export function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  backButtonText = 'Back',
  nextButtonText = 'Continue',
  disableStepIndicators = false,
  onClose = () => {}, 
  customHandleNext,
  isNextDisabled = false,
  ...rest
}) {
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;

  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(0); 

  const isCompleted = currentStep > totalSteps;
  const isLastContentStep = currentStep === totalSteps;

  const updateStep = useCallback((newStep) => {
    setCurrentStep(newStep);
    if (newStep > totalSteps) onFinalStepCompleted();
    else onStepChange(newStep);
  }, [onFinalStepCompleted, onStepChange, totalSteps]);

  const handleBack = useCallback(() => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  }, [currentStep, updateStep]);

  const handleInternalNext = useCallback(() => {
    if (!isLastContentStep) {
      setDirection(1);
      updateStep(currentStep + 1);
    }
  }, [isLastContentStep, updateStep]);

  const handleComplete = useCallback(() => {
    setDirection(1);
    updateStep(totalSteps + 1);
  }, [totalSteps, updateStep]);
  
  const handleNextClick = useCallback(() => {
      if (customHandleNext) {
          // Use custom handler for external logic/validation
          customHandleNext(handleInternalNext, handleComplete);
      } else {
          // Default internal logic: complete on last step, otherwise move next
          isLastContentStep ? handleComplete() : handleInternalNext();
      }
  }, [customHandleNext, handleInternalNext, handleComplete, isLastContentStep]);


  const handleStepClick = useCallback((clickedStep) => {
    // Allow clicking only if the step is already completed and indicators are enabled
    if (clickedStep < currentStep && !disableStepIndicators) {
        setDirection(clickedStep > currentStep ? 1 : -1);
        updateStep(clickedStep);
    }
  }, [currentStep, disableStepIndicators, updateStep]);

  return (
      <div
        className="mx-auto w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-gray-200 relative flex flex-col md:h-auto overflow-hidden" 
        {...rest}
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
            aria-label="Close quiz"
        >
          &times;
        </button>

        {/* Step Indicators (hidden until currentStep > 1, with smooth transition) */}
        <div className={`flex w-full items-center justify-between px-4 pt-8 pb-4 mb-8 transition-opacity duration-500 ease-in-out ${currentStep > 1 && !isCompleted ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {Array.from({ length: totalSteps - 2 }).map((_, index) => { // Exclude intro and final completion step from progress bar
            const stepNumber = index + 1;
            const isNotLastStep = index < totalSteps - 3; // Adjust for intro and final completion step

            return (
              <React.Fragment key={stepNumber}>
                <StepIndicator
                  step={stepNumber}
                  disableStepIndicators={disableStepIndicators}
                  currentStep={currentStep - 1} // Adjust currentStep for progress bar
                  onClickStep={handleStepClick} 
                />
                {isNotLastStep && <StepConnector isComplete={currentStep - 1 > stepNumber} />}
              </React.Fragment>
            );
          })}
        </div>

        {/* Content Wrapper */}
        <StepContentWrapper
          isCompleted={isCompleted}
          currentStep={currentStep}
          direction={direction}
          className="px-0 grow overflow-y-auto min-h-[200px]" 
        >
            {children}
        </StepContentWrapper>

        {/* Footer Buttons */}
        {!isCompleted && !isLastContentStep && (
          <div className="px-4 pt-6 pb-4 shrink-0"> 
            <div className={`mt-6 flex ${currentStep !== 1 ? 'justify-between' : 'justify-end'} items-center`}>
              
              {/* Back Button (only visible if not on the first step) */}
              {currentStep > 1 && (
                <button
                  onClick={handleBack}
                  className="duration-200 rounded-full px-6 py-2 text-sm font-medium transition shadow-md bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400"
                >
                  {backButtonText} 
                </button>
              )}
              
              {/* Next/Complete Button */}
              <button
                onClick={handleNextClick}
                disabled={isNextDisabled}
                className={`duration-200 flex items-center justify-center rounded-full py-2 px-5 text-sm font-medium tracking-tight text-white shadow-md transition focus:outline-none focus:ring-2 focus:ring-500 focus:ring-offset-2
                  ${isNextDisabled 
                    ? 'bg-blue-300 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
                  }`}
              >
                {currentStep === 1 ? 'Start Quiz' : nextButtonText} 
              </button>
            </div>
          </div>
        )}
        {isCompleted && (
            <div className="text-center p-4 shrink-0">
                {/* The content for the final step will be rendered by the Step component in PlansPage.jsx */}
            </div>
        )}
      </div>
  );
}
