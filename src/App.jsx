import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GradformAI from './components/GradformAI'; // New import
import About from './components/About';
import HomeAbout from './components/HomeAbout';
import ServicesH from './components/ServicesH'; // Import ServicesH for home page
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import PlansPage from './PlansPage'; // Original ServicesPage component
import { WorldMapDemo } from './components/WorldMapDemo';
import InquiriesForm from './components/InquiriesForm';
import Footer from './components/Footer';
import Ribbons from './components/Ribbons';
import WhatsAppButton from './components/WhatsAppButton';
import ExplorePage from './ExplorePage'; // New import
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop

function App() {
  return (
    <div className="bg-linear-to-r from-[#0000CD] via-[#0000B0] to-[#4B0082] text-white">
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <Header />
      <Ribbons />
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
        <Route path="/plans" element={<PlansPage />} /> {/* Route to original ServicesPage */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
