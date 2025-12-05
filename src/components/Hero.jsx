const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Black overlay with 35% opacity */}
      <div className="absolute inset-0 bg-black opacity-35 z-0"></div>
      <div className="relative z-10 p-4 -translate-y-10">
        <img src="/images/logo-large.png" alt="Gradform Logo" className="h-24 mx-auto mb-4 animate-fadeInUp drop-shadow-lg" style={{ animationDelay: '0s' }} />
        <h1 className="text-4xl md:text-6xl font-bricolage-24pt text-white animate-fadeInUp text-left font-bold" style={{ animationDelay: '0.2s', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
          Built by Students, <br /> For Students
        </h1>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-3 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <a href="/explore" className="bg-white text-[#0000CD] px-6 py-3 rounded-xl hover:bg-blue-100 hover:shadow-2xl hover:shadow-[#0000CD]/70 transition-all duration-300 text-sm font-medium drop-shadow-lg font-inter min-w-[180px] flex justify-center items-center">Explore Destinations</a>
          <a href="/plans" className="bg-white text-[#0000CD] px-6 py-3 rounded-xl hover:bg-blue-100 hover:shadow-2xl hover:shadow-[#0000CD]/70 transition-all duration-300 text-sm font-medium drop-shadow-lg font-inter min-w-[180px] flex justify-center items-center">Our Plans</a>
          <a href="/about" className="bg-white text-[#0000CD] px-6 py-3 rounded-xl hover:bg-blue-100 hover:shadow-2xl hover:shadow-[#0000CD]/70 transition-all duration-300 text-sm font-medium drop-shadow-lg font-inter min-w-[180px] flex justify-center items-center">About Us</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
