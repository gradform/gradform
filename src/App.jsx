import React, { useState, useEffect, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
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
import LoadingScreen from './components/LoadingScreen'; // Import LoadingScreen

// Lazy load page components
const ExplorePage = React.lazy(() => import('./ExplorePage'));
const PlansPage = React.lazy(() => import('./PlansPage'));
const About = React.lazy(() => import('./components/About'));
const Faqs = React.lazy(() => import('./components/Faqs'));

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading screen for 2 seconds

    return () => clearTimeout(timer);
  }, [location]); // Trigger loading screen on route change

  return (
    <div className="bg-linear-to-r from-[#0000CD] via-[#0000B0] to-[#4B0082] text-white">
      {isLoading && <LoadingScreen />}
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <Header />
      <Ribbons />
      <Suspense fallback={<div></div>}> {/* Empty fallback as LoadingScreen handles visual */}
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
          <Route path="/faqs" element={<Faqs />} />
        </Routes>
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
