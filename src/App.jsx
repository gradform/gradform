import React, { Suspense, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GradformAI from './components/GradformAI'; // New import
import HomeAbout from './components/HomeAbout';
import ServicesH from './components/ServicesH'; // Import ServicesH for home page
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import { WorldMapDemo } from './components/WorldMapDemo';
import InquiriesForm from './components/InquiriesForm';
import Footer from './components/Footer';
import Ribbons from './components/Ribbons';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop

// Lazy load page components
const ExplorePage = React.lazy(() => import('./ExplorePage'));
const PlansPage = React.lazy(() => import('./PlansPage'));
const About = React.lazy(() => import('./components/About'));

function App() {
  useEffect(() => {
    // Preload other pages when the main page loads
    // This triggers the fetching of the component's JavaScript chunk
    ExplorePage.preload();
    PlansPage.preload();
    About.preload();
  }, []);

  return (
    <div className="bg-linear-to-r from-[#0000CD] via-[#0000B0] to-[#4B0082] text-white">
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <Header />
      <Ribbons />
      <Suspense fallback={<div>Loading...</div>}> {/* Add a fallback for lazy loaded components */}
        <Routes>
          <Route path="/" element={
            <main className="relative z-10">
              <Hero />
              <GradformAI /> {/* New component */}
              <HomeAbout />
              <ServicesH /> {/* MagicBento services tiles on home page */}
              <WorldMapDemo />
            </main>
          } />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
