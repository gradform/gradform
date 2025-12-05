import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import Ribbons from './components/Ribbons';
import WhatsAppButton from './components/WhatsAppButton';
import '../src/index.css'; // Import global styles

const FaqsPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#0000CD] via-[#0000B0] to-[#4B0082] text-white" style={{ backgroundSize: '200% 200%' }}>
      <Header />
      <Ribbons />
      <main className="relative z-10">
        <Faqs />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FaqsPage />
  </React.StrictMode>
);

export default FaqsPage;
