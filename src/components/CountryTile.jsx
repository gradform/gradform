import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion
import { BookOpenIcon } from '@heroicons/react/24/solid'; // Using BookOpenIcon for "Read More"

// Component for displaying individual country tiles on the Explore page
const CountryTile = ({ country, onClick }) => {
  const [ref, isIntersecting] = useState(false); // Use state for intersection
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isIntersecting(true);
          observer.unobserve(observerRef.current);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={observerRef}
      className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg transform hover:scale-105 flex flex-col will-change-transform will-change-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onClick={() => onClick(country)}
    >
      {/* Tile Picture with 3:2 aspect ratio */}
      <div
        className="relative w-full aspect-3/2 bg-cover bg-center shrink-0"
        style={{ backgroundImage: `url(${country.tileImage})` }}
      >
        {/* Country Logo on top of the tile picture */}
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <img
          src="/images/icon-asset.png"
          alt="Gradform Logo"
          className="absolute top-1 right-4 h-14 w-12 object-contain"
        />
      </div>

      {/* Bottom section - White with blue text */}
      <div className="w-full h-16 bg-white flex items-center justify-center p-2 relative shrink-0">
        <p className="text-[#0000CD] text-xl text-center font-bold" style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}>
          Study in {country.name}
        </p>
        {/* "Read More" text and icon appear on hover */}
        <div className="absolute inset-0 bg-[#0000CD] bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 will-change-opacity">
          <BookOpenIcon className="h-5 w-5 text-white mb-1 group-hover:-translate-y-1 transition-transform duration-300 ease-in-out" />
          <span className="text-white text-base font-bold group-hover:-translate-y-1 transition-transform duration-300 ease-in-out">Read More</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CountryTile; // Final check for font application
