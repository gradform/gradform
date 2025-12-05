import React from 'react';
import MagicBento from './MagicBento'; // Import MagicBento

const servicesData = [
  {
    id: 'compass',
    title: 'Compass Session',
    fullTitle: 'Gradform Compass Session™',
    description: 'Gain crystal-clear clarity on your definitive next steps and a personalized roadmap tailored to your specific goals. Discover how to achieve your academic aspirations.',
    icon: <img src="/icons/compass session.png" alt="Compass Session" className="w-10 h-10" />,
  },
  {
    id: 'vault',
    title: 'Vault',
    fullTitle: 'Gradform Vault™',
    description: 'Organize and perfect all your application documents. Vault ensures your SOPs, CVs, and forms present your story compellingly, reducing stress and maximizing impact.',
    icon: <img src="/icons/vault.png" alt="Vault" className="w-10 h-10" />,
  },
  {
    id: 'ascend',
    title: 'Ascend',
    fullTitle: 'Gradform Ascend™',
    description: 'Receive dedicated expert guidance to stay on track. Ascend ensures every critical application step is handled with care, building your confidence and clarity.',
    icon: <img src="/icons/ascend.png" alt="Ascend" className="w-10 h-10" />,
  },
  {
    id: 'pinnacle',
    title: 'Pinnacle',
    fullTitle: 'Gradform Pinnacle™',
    description: 'Benefit from a dedicated mentor fully invested in your success. Pinnacle provides unlimited support and personalized strategy throughout your entire admissions journey.',
    icon: <img src="/icons/pinnacle.png" alt="Pinnacle" className="w-10 h-10" />,
  },
];

const ServicesH = () => { // Renamed component to ServicesH
  return (
    <section id="services" className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bricolage-24pt font-semibold text-white mb-2">
            Our Plans
          </h1>
          <p className="text-indigo-200 font-neue-haas-grotesk">Select the path that accelerates your future.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"> {/* Changed to 2x2 grid layout */}
          {servicesData.map((service) => (
            <MagicBento key={service.id} glowColor="0, 0, 205"> {/* Medium Blue */}
              <div className="flex flex-col items-start p-5 h-full"> {/* Removed subtle pop-up animation */}
                <div className="flex items-center mb-3">
                  <h2 className="text-lg font-bricolage-24pt font-semibold text-white mr-2">
                    <span className="highlighted-title">{service.title}</span>
                  </h2>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <p className="text-sm text-indigo-300 leading-normal text-justify px-0">
                  {service.description}
                </p>
              </div>
            </MagicBento>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a href="/plans" className="bg-white text-[#0000CD] px-6 py-3 rounded-xl hover:bg-blue-100 hover:shadow-2xl hover:shadow-[#0000CD]/70 transition-all duration-300 text-sm font-medium drop-shadow-lg font-inter min-w-[180px] flex justify-center items-center">Find Out More</a>
        </div>
      </div>
    </section>
  );
};

export default ServicesH;
