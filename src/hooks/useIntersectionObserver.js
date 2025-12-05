import { useEffect, useState, useRef } from 'react';

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current; // Capture ref.current in a variable
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (currentRef) { // Only unobserve if currentRef exists
          observer.unobserve(currentRef);
        }
      }
    }, options);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) { // Use the captured variable in cleanup
        observer.unobserve(currentRef);
      }
    };
  }, [options]); // Removed ref from dependencies as currentRef is captured

  return [ref, isIntersecting];
};

export default useIntersectionObserver;
