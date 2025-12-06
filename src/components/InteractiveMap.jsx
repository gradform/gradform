import useIntersectionObserver from '../hooks/useIntersectionObserver';

const InteractiveMap = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="map" ref={ref} className={`w-full py-20 transition-opacity duration-1000 ${isIntersecting ? 'animate-scroll-fade-in' : 'opacity-0'}`}>
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4 text-white font-bricolage-24pt">Explore Global Opportunities</h2>
        <p className="text-lg text-blue-100 mb-12 max-w-3xl mx-auto text-justify">
          Our interactive map is a gateway to understanding the educational landscapes of different countries. Hover to discover, click to dive deeper.
        </p>
        <div className="relative w-full max-w-5xl mx-auto h-[600px] bg-white bg-opacity-10 backdrop-blur-3xl border border-white border-opacity-30 rounded-2xl shadow-2xl p-10 flex items-center justify-center">
          {/* Placeholder SVG for world map */}
          <svg className="w-full h-full opacity-10" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
            <path d="M500 250 a250 250 0 1 0 1 0" fill="none" stroke="white" strokeWidth="1"/>
            {/* Simplified world map paths */}
            <path d="M100 200 L150 150 L200 250 L100 200" fill="white"/>
            <path d="M300 100 L350 50 L400 150 L300 100" fill="white"/>
            <path d="M600 300 L650 250 L700 350 L600 300" fill="white"/>
            <path d="M800 150 L850 100 L900 200 L800 150" fill="white"/>
          </svg>
          <p className="absolute text-3xl text-blue-300 font-semibold">Interactive Map Coming Soon</p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
