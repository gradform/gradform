import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Ribbons from './components/Ribbons';

const countryCodes = [
  { code: "+1", name: "United States", iso: "USA" },
  { code: "+44", name: "United Kingdom", iso: "GBR" },
  { code: "+1", name: "Canada", iso: "CAN" },
  { code: "+61", name: "Australia", iso: "AUS" },
  { code: "+49", name: "Germany", iso: "DEU" },
  { code: "+33", name: "France", iso: "FRA" },
  { code: "+64", name: "New Zealand", iso: "NZL" },
  { code: "+353", name: "Ireland", iso: "IRL" },
  { code: "+41", name: "Switzerland", iso: "CHE" },
  { code: "+46", name: "Sweden", iso: "SWE" },
  { code: "+31", name: "Netherlands", iso: "NLD" },
  { code: "+81", name: "Japan", iso: "JPN" },
  { code: "+65", name: "Singapore", iso: "SGP" },
  { code: "+82", name: "South Korea", iso: "KOR" },
  { code: "+86", name: "China", iso: "CHN" },
  { code: "+91", name: "India", iso: "IND" },
  { code: "+92", name: "Pakistan", iso: "PAK" },
  { code: "+880", name: "Bangladesh", iso: "BGD" },
  { code: "+977", name: "Nepal", iso: "NPL" },
  { code: "+94", name: "Sri Lanka", iso: "LKA" },
  { code: "+84", name: "Vietnam", iso: "VNM" },
  { code: "+62", name: "Indonesia", iso: "IDN" },
  { code: "+60", name: "Malaysia", iso: "MYS" },
  { code: "+66", name: "Thailand", iso: "THA" },
  { code: "+63", name: "Philippines", iso: "PHL" },
  { code: "+971", name: "United Arab Emirates", iso: "ARE" },
  { code: "+966", name: "Saudi Arabia", iso: "SAU" },
  { code: "+974", name: "Qatar", iso: "QAT" },
  { code: "+965", name: "Kuwait", iso: "KWT" },
  { code: "+968", name: "Oman", iso: "OMN" },
  { code: "+973", name: "Bahrain", iso: "BHR" },
  { code: "+90", name: "Turkey", iso: "TUR" },
  { code: "+20", name: "Egypt", iso: "EGY" },
  { code: "+234", name: "Nigeria", iso: "NGA" },
  { code: "+233", name: "Ghana", iso: "GHA" },
  { code: "+254", name: "Kenya", iso: "KEN" },
  { code: "+27", name: "South Africa", iso: "ZAF" },
  { code: "+212", name: "Morocco", iso: "MAR" },
  { code: "+7", name: "Russia", iso: "RUS" },
  { code: "+39", name: "Italy", iso: "ITA" },
  { code: "+34", name: "Spain", iso: "ESP" },
  { code: "+40", name: "Romania", iso: "ROU" },
  { code: "+380", name: "Ukraine", iso: "UKR" },
  { code: "+55", name: "Brazil", iso: "BRA" },
  { code: "+52", name: "Mexico", iso: "MEX" },
  { code: "+57", name: "Colombia", iso: "COL" },
  { code: "+54", name: "Argentina", iso: "ARG" }
];

const CIFPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+92', // Default to Pakistan
    phoneNumber: '',
    dob: '',
    nationality: '',
    residence: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'dob', 'nationality', 'residence'];
    const isFormValid = requiredFields.every(field => formData[field].trim() !== '');

    if (!isFormValid) {
      alert("Please fill in all required fields before proceeding.");
      return;
    }

    // Logic to handle moving to the next section (Section 2)
    console.log("Section 1 Data:", formData);
    alert("Section 1 completed. Proceeding to Section 2 (not yet implemented).");
    // In a real application, you would likely update a step state or navigate to a new route
  };

  return (
    <div className="bg-linear-to-r from-[#0000CD] via-[#0000B0] to-[#4B0082] text-white min-h-screen flex flex-col">
      <Header />
      <Ribbons />
      <main className="relative z-10 grow flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl w-full border border-white/20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">Client Intake Form</h1>

          {/* Section 1: Basic Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Section 1: Basic Information</h2>

            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">First Name(s)<span className="text-red-500">*</span></label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your first name(s)"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">Last Name<span className="text-red-500">*</span></label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your last name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email Address<span className="text-red-500">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-white mb-2">Phone Number (WhatsApp enabled)<span className="text-red-500">*</span></label>
              <div className="flex space-x-2">
                <select
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="p-3 rounded-lg bg-white/15 border border-white/20 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                >
                  {countryCodes.map((country) => (
                    <option key={country.iso} value={country.code} className="bg-white text-black">
                      {country.code} ({country.iso})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-white mb-2">Date of Birth (DD/MM/YYYY)<span className="text-red-500">*</span></label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label htmlFor="nationality" className="block text-sm font-medium text-white mb-2">Country of Nationality<span className="text-red-500">*</span></label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your country of nationality"
                required
              />
            </div>

            <div>
              <label htmlFor="residence" className="block text-sm font-medium text-white mb-2">Country of Residence<span className="text-red-500">*</span></label>
              <input
                type="text"
                id="residence"
                name="residence"
                value={formData.residence}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your country of residence"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Next
            </motion.button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default CIFPage;
