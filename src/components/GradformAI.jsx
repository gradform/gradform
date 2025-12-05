import useIntersectionObserver from '../hooks/useIntersectionObserver';

// Define the custom styles and keyframes within a <style> tag.
const CustomStyles = () => (
  <style>
    {`
      /* Keyframes for the flowing gradient effect: moves from 0% to -200% of the background.
         This ensures the animation always ends on a perfect visual match to the start point,
         making the infinite loop completely seamless and smooth. */
      @keyframes flow-glow {
        0% { background-position: 0% 50%; }
        100% { background-position: -200% 50%; } 
      }

      /* Styles for the container that holds the flowing gradient (the "glow") */
      .glow-container {
          display: inline-block; /* Ensures the container only takes up as much width as its content */
          /* Use padding to define the thickness of the glow outline */
          padding: 3px;
          border-radius: 9999px;
          position: relative;
          overflow: hidden; 
          
          /* The premium, softer, and deeper gradient blend */
          background: linear-gradient(
              90deg,
              #00c6ff,   /* Electric Blue */
              #9c27b0,   /* Deep Violet */
              #00ffff,   /* Bright Cyan Highlight */
              #9c27b0,   /* Deep Violet */
              #00c6ff,   /* Electric Blue (Pattern starts repeating) */
              #9c27b0    /* Deep Violet */
          );

          /* Increase background size for a longer, more luxurious flow */
          background-size: 400% 100%;
          
          /* Slower animation duration for a premium, deliberate flow */
          animation: flow-glow 10s linear infinite; 
          
          /* Subtle lift transition */
          transition: transform 0.3s ease;
          
          /* Soft outer glow */
          box-shadow: 0 0 15px rgba(0, 198, 255, 0.6); 
      }
      
      .glow-container:hover {
          animation-duration: 7s; /* Slightly faster on hover for responsiveness */
          transform: scale(1.03); 
          box-shadow: 0 0 25px rgba(0, 198, 255, 0.8);
      }
      
      /* Styles for the inner button (solid white, sitting on top of the glow) */
      .inner-button {
          position: relative;
          z-index: 10;
          /* Darker, high-contrast blue text */
          color: #0c4a6e; 
          background-color: white;
          padding: 0.75rem 1.75rem;
          font-weight: 600;
          font-size: 1rem;
          line-height: 1.5rem;
          border-radius: 9999px;
          cursor: pointer;
          
          /* Subtle inner light spill (soft box shadow) to mimic light reflection */
          box-shadow: 0 0 8px rgba(0, 198, 255, 0.2), 0 2px 8px rgba(0, 0, 0, 0.08); 
          transition: box-shadow 0.3s ease, background-color 0.3s ease;
      }
      
      .inner-button:hover {
          /* Boost the inner light spill on hover for an enhanced feeling */
          box-shadow: 0 0 15px rgba(0, 198, 255, 0.5), 0 4px 12px rgba(0, 0, 0, 0.15);
      }
    `}
  </style>
);

const GradformAI = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="gradform-ai" ref={ref} className={`w-full py-20 transition-opacity duration-1000 ${isIntersecting ? 'animate-scroll-fade-in' : 'opacity-0'}`}>
      <CustomStyles />
      <div className="container mx-auto text-center px-4">
        <div className="max-w-4xl mx-auto"> {/* Removed frosted glass classes */}
          <h2 className="text-5xl font-bricolage-24pt font-semibold mb-4 text-white">Try Gradform AI</h2>
          <p className="text-lg font-neue-haas-grotesk text-blue-100 leading-relaxed mb-8 text-center">
            An intelligent tool that organizes your achievements and highlights your academic potential.
          </p>
          {/* 1. The Glow Container: This element holds the animated gradient background */}
          <div className="glow-container">
            {/* 2. The Inner Button: This element is solid white and covers the center of the glow container */}
            <button className="inner-button">
              Gradform AI ✦ (Beta)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradformAI;
