import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const DEFAULT_GLOW_COLOR = '0, 0, 205'; // Medium Blue

const MagicBento = ({ children, glowColor = DEFAULT_GLOW_COLOR }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const element = cardRef.current;

    const handleMouseMove = e => {
      const rect = element.getBoundingClientRect();
      const relativeX = ((e.clientX - rect.left) / rect.width) * 100;
      const relativeY = ((e.clientY - rect.top) / rect.height) * 100;

      element.style.setProperty('--glow-x', `${relativeX}%`);
      element.style.setProperty('--glow-y', `${relativeY}%`);
      element.style.setProperty('--glow-intensity', '1'); // Always show glow on hover
    };

    const handleMouseLeave = () => {
      element.style.setProperty('--glow-intensity', '0');
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [glowColor]);

  return (
    <>
      <style>
        {`
          .magic-bento-wrapper {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 250px; /* Decreased radius as requested */
            --glow-color: ${glowColor};
            position: relative;
            overflow: hidden;
            transition: box-shadow 0.3s ease;
            border-radius: 20px; /* Match existing card border-radius */
            border: 1px solid rgba(255, 255, 255, 0.2); /* Match existing card border */
            background-color: rgba(255, 255, 255, 0.2); /* Match existing card background */
            backdrop-filter: blur(10px); /* Match existing card backdrop-filter */
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); /* Match existing card shadow */
          }
          
          .magic-bento-wrapper::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px; /* Controls the thickness of the glow border */
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${glowColor}, calc(var(--glow-intensity) * 1.2)) 0%, /* Further increased opacity */
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 30%, /* Further increased opacity */
                transparent 60%);
            border-radius: inherit;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: subtract;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1;
            opacity: var(--glow-intensity); /* Control opacity with glow-intensity */
          }
          
          .magic-bento-wrapper:hover {
            background-color: rgba(135, 206, 250, 0.3); /* Light Sky Blue on hover */
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25), 0 0 60px rgba(${glowColor}, 0.7); /* Further increased shadow glow */
          }
        `}
      </style>
      <div ref={cardRef} className="magic-bento-wrapper max-w-3xl mx-auto p-10">
        {children}
      </div>
    </>
  );
};

export default MagicBento;
