import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaChevronDown } from 'react-icons/fa'; // Added FaChevronDown for dropdowns

const allServices = [
  { title: "Compass Session", key: "compass", icon: "/public/icons/compass session.png" },
  { title: "Vault", key: "vault", icon: "/public/icons/vault.png" },
  { title: "Ascend", key: "ascend", icon: "/public/icons/ascend.png" },
  { title: "Pinnacle", key: "pinnacle", icon: "/public/icons/pinnacle.png" },
];

const features = [
  {
    name: "Alignment Call",
    compass: true,
    vault: true,
    ascend: true,
    pinnacle: true,
  },
  {
    name: "Personalized Decision Kit",
    compass: true,
    vault: false,
    ascend: true,
    pinnacle: true,
  },
  {
    name: "Post-Kit Consultation Call",
    compass: true,
    vault: false,
    ascend: true,
    pinnacle: true,
  },
  {
    name: "Professional Drafting & Editing",
    compass: false,
    vault: true,
    ascend: true,
    pinnacle: true,
  },
  {
    name: "Unlimited Document Revisions",
    compass: false,
    vault: "(up to 2)",
    ascend: "(up to 5)",
    pinnacle: true,
  },
  {
    name: "Biweekly Call with Expert",
    compass: false,
    vault: false,
    ascend: true,
    pinnacle: true,
  },
  {
    name: "Dedicated Mentor",
    compass: false,
    vault: false,
    ascend: false,
    pinnacle: true,
  },
  {
    name: "Email Support",
    compass: false,
    vault: true,
    ascend: true,
    pinnacle: true,
  },
  {
    name: "WhatsApp Support",
    compass: false,
    vault: false,
    ascend: "(Urgent)",
    pinnacle: "(unlimited)",
  },
  {
    name: "End to End Guidance",
    compass: false,
    vault: false,
    ascend: true,
    pinnacle: true,
  },
  {
    name: "Scholarship/Financial Aid Strategy",
    compass: false,
    vault: false,
    ascend: false,
    pinnacle: true,
  },
  {
    name: "Post Admission Decision Support",
    compass: false,
    vault: false,
    ascend: false,
    pinnacle: true,
  },
];

const ComparisonTable = () => {
  const [selectedService1, setSelectedService1] = useState(allServices[0].key);
  const [selectedService2, setSelectedService2] = useState(allServices[1].key);

  const service1Data = allServices.find(s => s.key === selectedService1);
  const service2Data = allServices.find(s => s.key === selectedService2);

  const handleService1Change = (e) => {
    const newSelection = e.target.value;
    if (newSelection === selectedService2) {
      setSelectedService2(selectedService1);
    }
    setSelectedService1(newSelection);
  };

  const handleService2Change = (e) => {
    const newSelection = e.target.value;
    if (newSelection === selectedService1) {
      setSelectedService1(selectedService2);
    }
    setSelectedService2(newSelection);
  };

  return (
    <section className="py-20 bg-transparent relative z-10">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white font-bricolage-24pt"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Compare Our Plans
        </motion.h2>

        {/* Dropdowns for selecting services */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mb-12">
          <div className="relative flex flex-col items-center w-full md:w-auto">
            <label htmlFor="service1-select" className="text-gray-300 text-sm mb-2">Plan 1</label>
            <div className="relative w-full md:w-60">
              <select
                id="service1-select"
                value={selectedService1}
                onChange={handleService1Change}
                className="block appearance-none w-full bg-gray-800/70 border border-white/30 text-white rounded-lg px-4 py-2 pr-8 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 cursor-pointer text-lg font-bricolage-24pt"
              >
                {allServices.map((service) => (
                  <option key={service.key} value={service.key} className="bg-gray-900 text-white font-bricolage-24pt">
                    {service.title}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
                <FaChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center w-full md:w-auto">
            <label htmlFor="service2-select" className="text-gray-300 text-sm mb-2">Plan 2</label>
            <div className="relative w-full md:w-60">
              <select
                id="service2-select"
                value={selectedService2}
                onChange={handleService2Change}
                className="block appearance-none w-full bg-gray-800/70 border border-white/30 text-white rounded-lg px-4 py-2 pr-8 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 cursor-pointer text-lg font-bricolage-24pt"
              >
                {allServices.map((service) => (
                  <option key={service.key} value={service.key} className="bg-gray-900 text-white font-bricolage-24pt">
                    {service.title}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
                <FaChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="bg-linear-to-br from-white/5 to-white/10 rounded-2xl shadow-lg backdrop-blur-sm border border-white/10 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Service Headers */}
          <div className="grid grid-cols-3 gap-px bg-white/10 sticky top-0 z-10 p-6 border-b border-white/20">
            <div className="text-left text-lg font-bold text-white flex items-center font-bricolage-24pt">
              Features
            </div>
            {service1Data && (
              <div className="text-center text-sm font-medium text-gray-300 tracking-wider flex flex-col items-center justify-center">
                <span className="block text-white text-xl font-bold font-bricolage-24pt">{service1Data.title}</span>
              </div>
            )}
            {service2Data && (
              <div className="text-center text-sm font-medium text-gray-300 tracking-wider flex flex-col items-center justify-center">
                <span className="block text-white text-xl font-bold font-bricolage-24pt">{service2Data.title}</span>
              </div>
            )}
          </div>

          {/* Feature Rows */}
          <div className="divide-y divide-white/10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-3 gap-px py-4 px-6 border-b border-white/5 last:border-b-0 hover:bg-white/10 transition-colors duration-200"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
              >
                <div className="text-base font-medium text-white flex items-center">
                  {feature.name}
                </div>
                <div className="text-center flex items-center justify-center">
                  {service1Data && (feature[service1Data.key] ? <FaCheckCircle className="text-green-400 text-2xl" /> : <FaTimesCircle className="text-red-400 text-2xl" />)}
                </div>
                <div className="text-center flex items-center justify-center">
                  {service2Data && (feature[service2Data.key] ? <FaCheckCircle className="text-green-400 text-2xl" /> : <FaTimesCircle className="text-red-400 text-2xl" />)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
