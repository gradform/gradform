import MagicBento from './MagicBento';

const HomeAbout = () => {
  return (
    <section id="about" className="w-full py-20 flex justify-center items-center">
      <div className="container mx-auto px-4">
        <MagicBento glowColor="0, 0, 205"> {/* Medium Blue */}
          <h2 className="text-4xl font-bricolage-24pt font-semibold mb-6 text-white">What is Gradform?</h2>
          <p className="text-lg text-blue-100 leading-relaxed text-justify">
            At Gradform, we see ourselves as a trusted partner for students who dream of studying abroad. The process of international university admissions can be exciting but also confusing, with so many choices and requirements along the way. Our role is to bring clarity by offering clear strategies, personal guidance, and curated pathways that match your goals and ambitions.
          </p>
          <p className="text-lg text-blue-100 leading-relaxed mt-4 text-justify">
            We believe every student deserves more than just information. You deserve genuine support and a mentor who understands both the challenges and opportunities of building a future overseas. From exploring programs and countries to preparing strong applications and finally settling into your new home, we are here to walk beside you at every step.
          </p>
        </MagicBento>
      </div>
    </section>
  );
};

export default HomeAbout;
