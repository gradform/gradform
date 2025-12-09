import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Ribbons from './components/Ribbons';

const CIFPage = () => {
  return (
    <div className="bg-linear-to-r from-[#0000CD] via-[#0000B0] to-[#4B0082] text-white min-h-screen flex flex-col">
      <Header />
      <Ribbons />
      <main className="relative z-10 grow flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white">Client Intake Form</h1>
      </main>
    </div>
  );
};

export default CIFPage;
