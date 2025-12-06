import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Ribbons from './components/Ribbons';
import WhatsAppButton from './components/WhatsAppButton';
import CountryTile from './components/CountryTile';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import ServiceDetailModal from './components/ServiceDetailModal';

function ExplorePage() {
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [modalCountryTitle, setModalCountryTitle] = useState('');
  const [modalCountryDescription, setModalCountryDescription] = useState('');
  const countryData = [
    {
      name: 'Italy',
      logo: '/images/country-logos/italy.jpg',
      tileImage: '/images/country-tiles/italy.jpg',
      info: 'Italy is an exceptional study destination for students seeking world-class education in a culturally rich and inspiring environment. Home to some of the oldest and most prestigious universities in the world, Italy offers high-quality academic programs across engineering, business, arts, design, and sciences; all at affordable tuition rates. Students enjoy a vibrant lifestyle surrounded by historic cities, stunning landscapes, and internationally celebrated food and fashion. With numerous scholarships, diverse international communities, and easy travel access across Europe, Italy provides an enriching and unforgettable study abroad experience that blends academic excellence with a uniquely Italian way of life.',
      universityLogos: [
        '/images/uni-logo/italy/bologna.png',
        '/images/uni-logo/italy/sapienza.png',
        '/images/uni-logo/italy/politec.png',
        '/images/uni-logo/italy/orizzontale.png',
        '/images/uni-logo/italy/padova.png',
        '/images/uni-logo/italy/florence.png',
        '/images/uni-logo/italy/rome.png',
        '/images/uni-logo/italy/torino.png',
        '/images/uni-logo/italy/studi.png',
        '/images/uni-logo/italy/fedrico.png',
      ],
    },
    {
      name: 'Germany',
      logo: '/images/country-logos/germany.jpg',
      tileImage: '/images/country-tiles/germany.jpg',
      info: 'Germany is a premier study destination known for its academic rigor, innovation, and globally respected universities. With strong programs in engineering, technology, business, and research-intensive sciences, students benefit from modern facilities and industry-driven curricula. Many public universities offer low or zero tuition fees, making Germany one of the most affordable options in Europe. Its multicultural cities, efficient infrastructure, and central location provide easy access to the rest of Europe. Combined with strong career prospects and a thriving international community, Germany delivers an outstanding educational and cultural experience.',
      universityLogos: [
        '/images/uni-logo/germany/hamburg.png',
        '/images/uni-logo/germany/berlin.png',
        '/images/uni-logo/germany/Freiburg.png',
        '/images/uni-logo/germany/Heidelberg.png',
        '/images/uni-logo/germany/TUM.png',
        '/images/uni-logo/germany/rwth.png',
        '/images/uni-logo/germany/Tuebingen.png',
        '/images/uni-logo/germany/hamburg.png',
        '/images/uni-logo/germany/berlin.png',
        '/images/uni-logo/germany/Freiburg.png',
      ],
    },
    {
      name: 'Netherlands',
      logo: '/images/country-logos/netherlands.jpg',
      tileImage: '/images/country-tiles/netherlands.jpg',
      info: 'The Netherlands is a top choice for students looking for globally recognized degrees in an international and welcoming setting. Dutch universities are known for their research excellence and practical teaching style, particularly in business, engineering, psychology, and the social sciences. English-taught programs are abundant, making it one of Europe’s most accessible study destinations. With its inclusive culture, efficient public transportation, and vibrant student cities, the Netherlands offers a balanced and enriching academic experience. Its location at the heart of Europe also makes travel easy and affordable.',
      universityLogos: [
        '/images/uni-logo/netherlands/eur.png',
        '/images/uni-logo/netherlands/eut.png',
        '/images/uni-logo/netherlands/tud.png',
        '/images/uni-logo/netherlands/ul.png',
        '/images/uni-logo/netherlands/uog.png',
        '/images/uni-logo/netherlands/uot.png',
        '/images/uni-logo/netherlands/uu.png',
        '/images/uni-logo/netherlands/uva.png',
        '/images/uni-logo/netherlands/vua.png',
        '/images/uni-logo/netherlands/wur.png',
      ],
    },
    {
      name: 'Sweden',
      logo: '/images/country-logos/sweden.jpg',
      tileImage: '/images/country-tiles/sweden.jpg',
      info: 'Sweden offers a forward-thinking and creativity-driven academic environment that attracts students seeking innovation and social progress. Universities emphasize critical thinking, sustainability, and real-world problem solving, especially in engineering, design, technology, and social sciences. English-taught programs are widely available, and students enjoy a high quality of life in safe, modern cities surrounded by nature. With generous scholarships, a collaborative culture, and close ties between universities and global industries, Sweden provides a transformative education in one of the world’s most progressive societies.',
      universityLogos: [
        '/images/uni-logo/sweden/chalmers.png',
        '/images/uni-logo/sweden/kth.png',
        '/images/uni-logo/sweden/lund.png',
        '/images/uni-logo/sweden/liu.png',
        '/images/uni-logo/sweden/su.png',
        '/images/uni-logo/sweden/tekniska.png',
        '/images/uni-logo/sweden/umu.png',
        '/images/uni-logo/sweden/uog.png',
        '/images/uni-logo/sweden/uu.png',
        '/images/uni-logo/sweden/ki.png',
      ],
    },
    {
      name: 'Finland',
      logo: '/images/country-logos/finland.jpg',
      tileImage: '/images/country-tiles/finland.jpg',
      info: 'Finland provides a high-quality education system built on innovation, equality, and student-centered learning. Universities excel in technology, engineering, sustainability, and education sciences, offering modern campuses and strong research opportunities. Students enjoy a peaceful, safe, and nature-rich environment that promotes wellbeing and productivity. English-taught programs and generous scholarship options attract students from around the world. With a strong emphasis on independence, creativity, and problem solving, Finland offers a unique academic experience in one of the world’s most advanced societies.',
      universityLogos: [
        '/images/uni-logo/finland/tampere.png',
        '/images/uni-logo/finland/turku.png',
        '/images/uni-logo/finland/jyvaskylao.png',
        '/images/uni-logo/finland/helsinki.png',
        '/images/uni-logo/finland/akademi.png',
        '/images/uni-logo/finland/lapland.png',
        '/images/uni-logo/finland/easternfinland.png',
        '/images/uni-logo/finland/aalto.png',
        '/images/uni-logo/finland/vaasa.png',
        '/images/uni-logo/finland/turku.png',
      ],
    },
    {
      name: 'USA',
      logo: '/images/country-logos/usa.jpg',
      tileImage: '/images/country-tiles/usa.jpg',
      info: 'The United States remains one of the most sought-after study destinations, offering unmatched academic diversity, world-leading research institutions, and industry connections across nearly every field. Students can choose from thousands of programs in engineering, business, arts, sciences, technology, and more. Campus life is dynamic and immersive, with access to modern facilities, extracurricular opportunities, and cultural diversity. With strong career pathways and exposure to global industries, studying in the USA provides a powerful foundation for long-term professional growth.',
      universityLogos: [
        '/images/uni-logo/usa/berkley.jpg',
        '/images/uni-logo/usa/cal.png',
        '/images/uni-logo/usa/cornell.png',
        '/images/uni-logo/usa/mit.png',
        '/images/uni-logo/usa/jhu.png',
        '/images/uni-logo/usa/yale.png',
        '/images/uni-logo/usa/hu.png',
        '/images/uni-logo/usa/su.png',
        '/images/uni-logo/usa/upenn.jpg',
        '/images/uni-logo/usa/uoc.jpg',
      ],
    },
    {
      name: 'Canada',
      logo: '/images/country-logos/canada.jpg',
      tileImage: '/images/country-tiles/canada.jpg',
      info: 'Canada combines world-class education with a friendly, multicultural, and safe environment. Its universities are globally ranked for research quality, especially in engineering, health sciences, business, and technology. Students benefit from reasonable tuition fees, work opportunities during and after graduation, and a high standard of living. With welcoming communities, stunning natural surroundings, and strong post-study immigration pathways, Canada offers an academically rewarding and personally enriching study experience.',
      universityLogos: [
        '/images/uni-logo/canada/mu.png',
        '/images/uni-logo/canada/uot.png',
        '/images/uni-logo/canada/ubc.png',
        '/images/uni-logo/canada/mmu.png',
        '/images/uni-logo/canada/uw.png',
        '/images/uni-logo/canada/wu.png',
        '/images/uni-logo/canada/udm.png',
        '/images/uni-logo/canada/uoa.png',
        '/images/uni-logo/canada/uo.png',
        '/images/uni-logo/canada/qu.png',
      ],
    },
    {
      name: 'Australia',
      logo: '/images/country-logos/australia.jpg',
      tileImage: '/images/country-tiles/australia.jpg',
      info: 'Australia offers globally recognized universities, cutting-edge research, and a strong focus on employability. Students can choose from top-tier programs in architecture, engineering, health sciences, business, and environmental studies. The lifestyle mixes excellent weather, modern cities, and diverse cultures, making it one of the most attractive study destinations. With generous part-time work rights, post-study opportunities, and a safe learning environment, Australia provides an academic experience that blends quality education with a high standard of living.',
      universityLogos: [
        '/images/uni-logo/australia/monash.png',
        '/images/uni-logo/australia/uwa.png',
        '/images/uni-logo/australia/rmit.png',
        '/images/uni-logo/australia/au.png',
        '/images/uni-logo/australia/queensland.png',
        '/images/uni-logo/australia/anu.png',
        '/images/uni-logo/australia/uts.png',
        '/images/uni-logo/australia/uom.png',
        '/images/uni-logo/australia/uos.png',
        '/images/uni-logo/australia/deakin.png',
      ],
    },
    {
      name: 'United Kingdom',
      logo: '/images/country-logos/unitedkingdom.jpg',
      tileImage: '/images/country-tiles/unitedkingdom.jpg',
      info: 'The United Kingdom offers one of the most prestigious and globally recognized education systems in the world. Home to centuries-old universities and modern research powerhouses, the UK delivers rigorous academic programs across architecture, engineering, business, arts, design, and the sciences. Students benefit from intensive, career-focused degrees, strong industry connections, and access to cutting-edge research facilities. The UK’s multicultural cities, historic campuses, and rich academic traditions create an inspiring environment for international students. With broad scholarship options, diverse cultural experiences, and direct links to global employers, the UK provides a high-impact education that builds strong long-term career pathways.',
      universityLogos: [
        '/images/uni-logo/united kingdom/icl.png',
        '/images/uni-logo/united kingdom/kcl.png',
        '/images/uni-logo/united kingdom/lse.png',
        '/images/uni-logo/united kingdom/mu.png',
        '/images/uni-logo/united kingdom/uoo.svg',
        '/images/uni-logo/united kingdom/ucl.png',
        '/images/uni-logo/united kingdom/uob.png',
        '/images/uni-logo/united kingdom/uoc.png',
        '/images/uni-logo/united kingdom/imperial.png',
      ],
    },
    {
      name: 'Turkey',
      logo: '/images/country-logos/turkey.jpg',
      tileImage: '/images/country-tiles/turkey.jpg',
      info: 'Turkey presents a unique blend of modern education and rich cultural heritage. Its universities provide strong programs in engineering, medicine, business, and the social sciences, often at affordable tuition rates. Students enjoy vibrant cities, historical landmarks, and a dynamic lifestyle at the crossroads of Europe and Asia. With growing international student communities and a variety of scholarship opportunities, Turkey offers an accessible and culturally enriching study experience.',
      universityLogos: [
        '/images/uni-logo/turkey/au.png',
        '/images/uni-logo/turkey/bu.jpeg',
        '/images/uni-logo/turkey/metu.jpg',
        '/images/uni-logo/turkey/hu.jpeg',
        '/images/uni-logo/turkey/itu.png',
        '/images/uni-logo/turkey/iu.png',
        '/images/uni-logo/turkey/ku.png',
        '/images/uni-logo/turkey/bu.jpg',
        '/images/uni-logo/turkey/su.png',
        '/images/uni-logo/turkey/ytu.png',
      ],
    },
    {
      name: 'Cyprus',
      logo: '/images/country-logos/cyprus.jpg',
      tileImage: '/images/country-tiles/cyprus.jpg',
      info: 'Cyprus is an emerging study hub offering English-taught programs and a welcoming Mediterranean environment. Universities provide quality education in business, hospitality, engineering, and health sciences, supported by modern facilities and industry-focused teaching. Students enjoy a relaxed lifestyle, safe surroundings, and multicultural communities. With affordable tuition fees, strong international networks, and a warm climate, Cyprus offers a balanced and enjoyable study experience that combines academic growth with a peaceful island atmosphere.',
      universityLogos: [
        '/images/uni-logo/cyprus/ciu.png',
        '/images/uni-logo/cyprus/neu.png',
        '/images/uni-logo/cyprus/metu.png',
        '/images/uni-logo/cyprus/emu.png',
        '/images/uni-logo/cyprus/lefke.png',
        '/images/uni-logo/cyprus/gau.png',
        '/images/uni-logo/cyprus/auc.png',
        '/images/uni-logo/cyprus/fiu.png',
        '/images/uni-logo/cyprus/cyprus.png',
        '/images/uni-logo/cyprus/metu.png',
      ],
    },
  ];

  useEffect(() => {
    // Preload all university logos
    countryData.forEach(country => {
      country.universityLogos.forEach(logo => {
        const img = new Image();
        img.src = logo;
      });
    });
  }, []);

  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);

  return (
    <div className="bg-linear-to-r from-[#0000CD] via-[#0000B0] to-[#4B0082] text-white min-h-screen flex flex-col">
      <Header />
      <Ribbons />
      <main className="relative z-10 grow">
        <section className="relative w-full min-h-screen flex justify-center items-center flex-col overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            preload="auto"
            loading="eager"
            poster="/images/og-picture.png"
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            src="/videos/hero-explore.mp4"
          >
            Your browser does not support the video tag.
          </video>
          <div className="relative z-10 p-4 pt-20 md:pt-4 -translate-y-10 flex flex-col items-center">
            <img src="/images/logo-large.png" alt="Gradform Logo" className="h-24 mx-auto mb-4 animate-fadeInUp drop-shadow-lg" style={{ animationDelay: '0s' }} />
            <h1 className="text-4xl md:text-6xl font-bricolage-24pt text-white text-center font-bold drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>Our Destinations</h1>
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-3 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <a href="/" className="bg-white text-[#0000CD] px-6 py-3 rounded-xl hover:bg-blue-100 hover:shadow-2xl hover:shadow-[#0000CD]/70 transition-all duration-300 text-sm font-medium drop-shadow-lg font-inter min-w-[180px] flex justify-center items-center">Home</a>
              <a href="/plans" className="bg-white text-[#0000CD] px-6 py-3 rounded-xl hover:bg-blue-100 hover:shadow-2xl hover:shadow-[#0000CD]/70 transition-all duration-300 text-sm font-medium drop-shadow-lg font-inter min-w-[180px] flex justify-center items-center">Our Plans</a>
              <a href="/about" className="bg-white text-[#0000CD] px-6 py-3 rounded-xl hover:bg-blue-100 hover:shadow-2xl hover:shadow-[#0000CD]/70 transition-all duration-300 text-sm font-medium drop-shadow-lg font-inter min-w-[180px] flex justify-center items-center">About Us</a>
            </div>
          </div>
        </section>
        {/* New 8-tile component for Study Abroad destinations */}
        <section id="explore-study-destinations" className="w-full py-10 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold mb-12 text-center">Explore Study Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {countryData.map((country) => (
                <CountryTile
                  key={country.name}
                  country={country}
                  onClick={() => {
                    setModalCountryTitle(country.name);
                    setModalCountryDescription(country.info);
                    setShowCountryModal(true);
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* New "Get Started" Section */}
        <section className="w-full py-10 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="relative w-full overflow-hidden rounded-2xl p-8 md:p-12 shadow-xl text-center
                          bg-linear-to-br from-gray-800/20 to-gray-900/20 border border-gray-700 backdrop-blur-lg">
              <h2 className="text-3xl md:text-4xl font-bricolage-24pt text-white font-bold mb-4 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                Interested in one of Gradform's destinations?
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                Let us help you navigate your path to studying abroad.
              </p>
              <a href="#contact" className="bg-white text-[#0000CD] px-8 py-3 rounded-xl hover:bg-blue-100 hover:shadow-2xl hover:shadow-[#0000CD]/70 transition-all duration-300 text-lg font-medium drop-shadow-lg font-inter">
                Get Started
              </a>
            </div>
          </div>
        </section>

      </main>
      <ServiceDetailModal
        showModal={showCountryModal}
        onClose={() => setShowCountryModal(false)}
        serviceTitle={modalCountryTitle}
        serviceDescription={modalCountryDescription}
        universityLogos={countryData.find(country => country.name === modalCountryTitle)?.universityLogos || []}
      />
      <WhatsAppButton />
    </div>
  );
}

export default ExplorePage;
