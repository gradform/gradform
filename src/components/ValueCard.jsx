import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ValueCard = ({ title, description, icon, delay }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`p-8 bg-gray-800/20 border border-gray-700 backdrop-blur-lg rounded-lg shadow-xl transition-all duration-1000 transform ${
        isIntersecting ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 translate-y-20 scale-95 rotate-3'
      }`}
      style={{ transitionDelay: delay }}
    >
      {icon && <img src={icon} alt={title} className="h-16 w-16 mb-4 mx-auto" />}
      <h3 className="text-3xl font-bricolage-24pt font-semibold mb-4 text-white text-center">{title}</h3>
      <p className="text-lg text-white leading-relaxed text-center">{description}</p>
    </div>
  );
};

export default ValueCard;
