import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Ribbons from './components/Ribbons';
import CIFSuccessModal from './components/CIFSuccessModal'; // Import the new modal

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
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Section 1 fields
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+92', // Default to Pakistan
    phoneNumber: '',
    dob: '',
    nationality: '',
    residence: '',
    // Section 2 fields
    highestEducation: '',
    major: '',
    countryOfEducation: '',
    instituteName: '',
    gradingSystem: '',
    gradeABC: '',
    gradeGPA: '',
    gradePercentage: '',
    customMaxMarks: '',
    customMinMarks: '',
    customYourMarks: '',
    languageTest: 'No', // 'Yes' or 'No'
    languageTestName: '',
    languageTestMaxGrade: '',
    languageTestMinGrade: '',
    languageTestYourGrade: '',
    standardizedTest: 'No', // 'Yes' or 'No'
    standardizedTestName: '',
    standardizedTestMaxGrade: '',
    standardizedTestMinGrade: '',
    standardizedTestYourGrade: '',
    // Section 3 fields
    hasAcademicVision: '',
    preferredPlan: '',
    compassCountry1: '',
    compassCountry2: '',
    compassCountry3: '',
    compassMajor1: '',
    compassMajor2: '',
    compassTuitionFeeRange: '',
    vaultCountries: '',
    vaultProgramTitles: '',
    vaultTargetAcademicMonth: '',
    vaultTargetAcademicYear: '',
    needVisaSupport: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false); // State for success modal

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    // Optionally redirect or reset form here
    setStep(1); // Reset to first step after closing modal
    setFormData({ // Reset form data
      firstName: '', lastName: '', email: '', countryCode: '+92', phoneNumber: '', dob: '', nationality: '', residence: '',
      highestEducation: '', major: '', countryOfEducation: '', instituteName: '', gradingSystem: '', gradeABC: '', gradeGPA: '', gradePercentage: '', customMaxMarks: '', customMinMarks: '', customYourMarks: '', languageTest: 'No', languageTestName: '', languageTestMaxGrade: '', languageTestMinGrade: '', languageTestYourGrade: '', standardizedTest: 'No', standardizedTestName: '', standardizedTestMaxGrade: '', standardizedTestMinGrade: '', standardizedTestYourGrade: '',
      hasAcademicVision: '', preferredPlan: '', compassCountry1: '', compassCountry2: '', compassCountry3: '', compassMajor1: '', compassMajor2: '', compassTuitionFeeRange: '', vaultCountries: '', vaultProgramTitles: '', vaultTargetAcademicMonth: '', vaultTargetAcademicYear: '', needVisaSupport: '',
    });
  };

  const handleNext = () => {
    if (step === 1) {
      const requiredFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'dob', 'nationality', 'residence'];
      const isFormValid = requiredFields.every(field => formData[field].trim() !== '');

      if (!isFormValid) {
        alert("Please fill in all required fields in Section 1 before proceeding.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      const requiredFields = ['highestEducation', 'major', 'countryOfEducation', 'instituteName', 'gradingSystem'];
      const isFormValid = requiredFields.every(field => formData[field].trim() !== '');

      if (!isFormValid) {
        alert("Please fill in all required fields in Section 2 before proceeding.");
        return;
      }

      // Additional validation for grading system
      if (formData.gradingSystem === 'A–B–C' && formData.gradeABC.trim() === '') {
        alert("Please select your grade for A-B-C system.");
        return;
      }
      if (formData.gradingSystem === 'GPA out of 4' && formData.gradeGPA.trim() === '') {
        alert("Please select your GPA.");
        return;
      }
      if (formData.gradingSystem === 'Percentage (0–100%)' && formData.gradePercentage.trim() === '') {
        alert("Please select your percentage.");
        return;
      }
      if (formData.gradingSystem === 'Custom' && (formData.customMaxMarks.trim() === '' || formData.customMinMarks.trim() === '' || formData.customYourMarks.trim() === '')) {
        alert("Please fill in all custom grading system fields.");
        return;
      }

      // Validation for language tests
      if (formData.languageTest === 'Yes' && (formData.languageTestName.trim() === '' || formData.languageTestMaxGrade.trim() === '' || formData.languageTestMinGrade.trim() === '' || formData.languageTestYourGrade.trim() === '')) {
        alert("Please fill in all required fields for Language Tests.");
        return;
      }

      // Validation for standardized tests
      if (formData.standardizedTest === 'Yes' && (formData.standardizedTestName.trim() === '' || formData.standardizedTestMaxGrade.trim() === '' || formData.standardizedTestMinGrade.trim() === '' || formData.standardizedTestYourGrade.trim() === '')) {
        alert("Please fill in all required fields for Standardized Tests.");
        return;
      }

      console.log("Section 2 Data:", formData);
      console.log("Section 2 Data:", formData);
      setStep(3);
    } else if (step === 3) {
      // Validation for Section 3
      if (formData.hasAcademicVision === '') {
        alert("Please answer if you have a vision for your academic future.");
        return;
      }
      if (formData.preferredPlan === '') {
        alert("Please select your preferred plan of choice.");
        return;
      }

      if (formData.preferredPlan === 'A. Compass Session') {
        const requiredCompassFields = ['compassCountry1', 'compassMajor1', 'compassTuitionFeeRange'];
        const isCompassValid = requiredCompassFields.every(field => formData[field].trim() !== '');
        if (!isCompassValid) {
          alert("Please fill in all required fields for Compass Session.");
          return;
        }
      } else if (formData.preferredPlan === 'B. Vault') {
        const requiredVaultFields = ['vaultCountries', 'vaultProgramTitles', 'vaultTargetAcademicMonth', 'vaultTargetAcademicYear', 'needVisaSupport'];
        const isVaultValid = requiredVaultFields.every(field => formData[field].trim() !== '');
        if (!isVaultValid) {
          alert("Please fill in all required fields for Vault.");
          return;
        }
      } else if (formData.preferredPlan === 'C. Ascend' || formData.preferredPlan === 'D. Pinnacle') {
        // Instead of alert, we will trigger a modal here
        setShowSuccessModal(true);
        return;
      }

      console.log("Section 3 Data:", formData);
      alert("Form submitted successfully!");
      // Here you would typically submit the form
    }
  };

  const handleBack = () => {
    if (step === 3 && (formData.preferredPlan === 'C. Ascend' || formData.preferredPlan === 'D. Pinnacle')) {
      // If on step 3 and Ascend/Pinnacle was selected, going back should reset the plan choice
      setFormData({ ...formData, preferredPlan: '' });
    }
    setStep(prevStep => prevStep - 1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // This function will be called when the form is actually submitted
    // For Ascend/Pinnacle, the alert is shown in handleNext, so this won't be reached
    console.log("Final Form Data:", formData);
    alert("Form submitted!");
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

          {step === 1 && (
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
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Section 2: Education Background</h2>

              {/* Highest Level of Education Completed */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Highest Level of Education Completed<span className="text-red-500">*</span></label>
                <div className="flex flex-wrap gap-4">
                  {['High School', 'Diploma', 'Bachelor’s', 'Master’s', 'PhD', 'Other'].map((level) => (
                    <label key={level} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="highestEducation"
                        value={level}
                        checked={formData.highestEducation === level}
                        onChange={handleInputChange}
                        className="form-radio text-blue-600"
                        required
                      />
                      <span className="ml-2 text-white">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Major */}
              <div>
                <label htmlFor="major" className="block text-sm font-medium text-white mb-2">Major<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="major"
                  name="major"
                  value={formData.major}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your major"
                  required
                />
              </div>

              {/* Country of Highest Education */}
              <div>
                <label htmlFor="countryOfEducation" className="block text-sm font-medium text-white mb-2">Country of Highest Education<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="countryOfEducation"
                  name="countryOfEducation"
                  value={formData.countryOfEducation}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter country of highest education"
                  required
                />
              </div>

              {/* Name of Institute */}
              <div>
                <label htmlFor="instituteName" className="block text-sm font-medium text-white mb-2">Name of Institute<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="instituteName"
                  name="instituteName"
                  value={formData.instituteName}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter name of institute"
                  required
                />
              </div>

              {/* Type of Grading System */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Type of Grading System<span className="text-red-500">*</span></label>
                <div className="flex flex-wrap gap-4">
                  {['A–B–C', 'GPA out of 4', 'Percentage (0–100%)', 'Custom'].map((system) => (
                    <label key={system} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gradingSystem"
                        value={system}
                        checked={formData.gradingSystem === system}
                        onChange={handleInputChange}
                        className="form-radio text-blue-600"
                        required
                      />
                      <span className="ml-2 text-white">{system}</span>
                    </label>
                  ))}
                </div>

                {formData.gradingSystem === 'A–B–C' && (
                  <div className="mt-4 p-4 rounded-lg bg-white/15 border border-white/20">
                    <label htmlFor="gradeABC" className="block text-sm font-medium text-white mb-2">Your Grade<span className="text-red-500">*</span></label>
                    <select
                      id="gradeABC"
                      name="gradeABC"
                      value={formData.gradeABC}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    >
                      <option value="">Select Grade</option>
                      <option value="A+" className="bg-white text-black">A+ (90%+)</option>
                      <option value="A" className="bg-white text-black">A (85-90%)</option>
                      <option value="B" className="bg-white text-black">B (75-85%)</option>
                      <option value="C" className="bg-white text-black">C (65-75%)</option>
                      <option value="D" className="bg-white text-black">D (55-65%)</option>
                      <option value="E" className="bg-white text-black">E (50-55%)</option>
                    </select>
                  </div>
                )}

                {formData.gradingSystem === 'GPA out of 4' && (
                  <div className="mt-4 p-4 rounded-lg bg-white/15 border border-white/20">
                    <label htmlFor="gradeGPA" className="block text-sm font-medium text-white mb-2">Your GPA<span className="text-red-500">*</span></label>
                    <select
                      id="gradeGPA"
                      name="gradeGPA"
                      value={formData.gradeGPA}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    >
                      <option value="">Select GPA</option>
                      <option value="3.50-4.00" className="bg-white text-black">3.50 - 4.00</option>
                      <option value="3.00-3.50" className="bg-white text-black">3.00 - 3.50</option>
                      <option value="2.50-3.00" className="bg-white text-black">2.50 - 3.00</option>
                      <option value="2.00-2.50" className="bg-white text-black">2.00 - 2.50</option>
                      <option value="1.50-2.00" className="bg-white text-black">1.50 - 2.00</option>
                    </select>
                  </div>
                )}

                {formData.gradingSystem === 'Percentage (0–100%)' && (
                  <div className="mt-4 p-4 rounded-lg bg-white/15 border border-white/20">
                    <label htmlFor="gradePercentage" className="block text-sm font-medium text-white mb-2">Your Percentage<span className="text-red-500">*</span></label>
                    <select
                      id="gradePercentage"
                      name="gradePercentage"
                      value={formData.gradePercentage}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    >
                      <option value="">Select Percentage</option>
                      <option value="90%" className="bg-white text-black">90%</option>
                      <option value="85-90%" className="bg-white text-black">85-90%</option>
                      <option value="75-85%" className="bg-white text-black">75-85%</option>
                      <option value="65-75%" className="bg-white text-black">65-75%</option>
                      <option value="55-65%" className="bg-white text-black">55-65%</option>
                      <option value="50-55%" className="bg-white text-black">50-55%</option>
                    </select>
                  </div>
                )}

                {formData.gradingSystem === 'Custom' && (
                  <div className="mt-4 p-4 rounded-lg bg-white/15 border border-white/20 space-y-4">
                    <div>
                      <label htmlFor="customMaxMarks" className="block text-sm font-medium text-white mb-2">Max Marks<span className="text-red-500">*</span></label>
                      <input
                        type="number"
                        id="customMaxMarks"
                        name="customMaxMarks"
                        value={formData.customMaxMarks}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter maximum marks"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="customMinMarks" className="block text-sm font-medium text-white mb-2">Min Marks<span className="text-red-500">*</span></label>
                      <input
                        type="number"
                        id="customMinMarks"
                        name="customMinMarks"
                        value={formData.customMinMarks}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter minimum marks"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="customYourMarks" className="block text-sm font-medium text-white mb-2">Your Marks<span className="text-red-500">*</span></label>
                      <input
                        type="number"
                        id="customYourMarks"
                        name="customYourMarks"
                        value={formData.customYourMarks}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your marks"
                        required
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Language Tests */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Language Tests (IELTS / TOEFL / PTE / Other)<span className="text-red-500">*</span></label>
                <div className="flex flex-wrap gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="languageTest"
                      value="No"
                      checked={formData.languageTest === 'No'}
                      onChange={handleInputChange}
                      className="form-radio text-blue-600"
                      required
                    />
                    <span className="ml-2 text-white">No</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="languageTest"
                      value="Yes"
                      checked={formData.languageTest === 'Yes'}
                      onChange={handleInputChange}
                      className="form-radio text-blue-600"
                      required
                    />
                    <span className="ml-2 text-white">Yes</span>
                  </label>
                </div>

                {formData.languageTest === 'Yes' && (
                  <div className="mt-4 p-4 rounded-lg bg-white/15 border border-white/20 space-y-4">
                    <div>
                      <label htmlFor="languageTestName" className="block text-sm font-medium text-white mb-2">Name of test<span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="languageTestName"
                        name="languageTestName"
                        value={formData.languageTestName}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="e.g., IELTS"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="languageTestMaxGrade" className="block text-sm font-medium text-white mb-2">Max Grade<span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="languageTestMaxGrade"
                        name="languageTestMaxGrade"
                        value={formData.languageTestMaxGrade}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter maximum grade"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="languageTestMinGrade" className="block text-sm font-medium text-white mb-2">Min Grade<span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="languageTestMinGrade"
                        name="languageTestMinGrade"
                        value={formData.languageTestMinGrade}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter minimum grade"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="languageTestYourGrade" className="block text-sm font-medium text-white mb-2">Your Grade<span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="languageTestYourGrade"
                        name="languageTestYourGrade"
                        value={formData.languageTestYourGrade}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your grade"
                        required
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Standardized Tests */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Standardized Tests (SAT / GRE / GMAT / PMP / Other)<span className="text-red-500">*</span></label>
                <div className="flex flex-wrap gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="standardizedTest"
                      value="No"
                      checked={formData.standardizedTest === 'No'}
                      onChange={handleInputChange}
                      className="form-radio text-blue-600"
                      required
                    />
                    <span className="ml-2 text-white">No</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="standardizedTest"
                      value="Yes"
                      checked={formData.standardizedTest === 'Yes'}
                      onChange={handleInputChange}
                      className="form-radio text-blue-600"
                      required
                    />
                    <span className="ml-2 text-white">Yes</span>
                  </label>
                </div>

                {formData.standardizedTest === 'Yes' && (
                  <div className="mt-4 p-4 rounded-lg bg-white/15 border border-white/20 space-y-4">
                    <div>
                      <label htmlFor="standardizedTestName" className="block text-sm font-medium text-white mb-2">Name of test<span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="standardizedTestName"
                        name="standardizedTestName"
                        value={formData.standardizedTestName}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="e.g., SAT"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="standardizedTestMaxGrade" className="block text-sm font-medium text-white mb-2">Max Grade<span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="standardizedTestMaxGrade"
                        name="standardizedTestMaxGrade"
                        value={formData.standardizedTestMaxGrade}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter maximum grade"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="standardizedTestMinGrade" className="block text-sm font-medium text-white mb-2">Min Grade<span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="standardizedTestMinGrade"
                        name="standardizedTestMinGrade"
                        value={formData.standardizedTestMinGrade}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter minimum grade"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="standardizedTestYourGrade" className="block text-sm font-medium text-white mb-2">Your Grade<span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="standardizedTestYourGrade"
                        name="standardizedTestYourGrade"
                        value={formData.standardizedTestYourGrade}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your grade"
                        required
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between mt-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBack}
                  className="bg-gray-600 text-white p-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200"
                >
                  Back
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleNext}
                  className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Next
                </motion.button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Section 3: Ambition Tracking</h2>

              {/* Do you already have a vision for your academic future? */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Do you already have a vision for your academic future?<span className="text-red-500">*</span></label>
                <div className="flex flex-wrap gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="hasAcademicVision"
                      value="Yes"
                      checked={formData.hasAcademicVision === 'Yes'}
                      onChange={handleInputChange}
                      className="form-radio text-blue-600"
                      required
                    />
                    <span className="ml-2 text-white">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="hasAcademicVision"
                      value="No"
                      checked={formData.hasAcademicVision === 'No'}
                      onChange={handleInputChange}
                      className="form-radio text-blue-600"
                      required
                    />
                    <span className="ml-2 text-white">No</span>
                  </label>
                </div>
              </div>

              {/* What's your preferred plan of choice? */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">What's your preferred plan of choice?<span className="text-red-500">*</span></label>
                <div className="flex flex-wrap gap-4">
                  {['A. Compass Session', 'B. Vault', 'C. Ascend', 'D. Pinnacle'].map((plan) => (
                    <label key={plan} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="preferredPlan"
                        value={plan}
                        checked={formData.preferredPlan === plan}
                        onChange={handleInputChange}
                        className="form-radio text-blue-600"
                        required
                      />
                      <span className="ml-2 text-white">{plan}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Conditional fields for A. Compass Session */}
              {formData.preferredPlan === 'A. Compass Session' && (
                <div className="mt-4 p-4 rounded-lg bg-white/15 border border-white/20 space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Compass Session Details</h3>
                  <div>
                    <label htmlFor="compassCountry1" className="block text-sm font-medium text-white mb-2">Country(s) of Interest (At least 1 country to be selected): 1st Priority<span className="text-red-500">*</span></label>
                    <select
                      id="compassCountry1"
                      name="compassCountry1"
                      value={formData.compassCountry1}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    >
                      <option value="">Select Country</option>
                      {countryCodes.map((country) => (
                        <option key={country.iso} value={country.name} className="bg-white text-black">
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="compassCountry2" className="block text-sm font-medium text-white mb-2">2nd Priority</label>
                    <select
                      id="compassCountry2"
                      name="compassCountry2"
                      value={formData.compassCountry2}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="">Select Country</option>
                      {countryCodes.map((country) => (
                        <option key={country.iso} value={country.name} className="bg-white text-black">
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="compassCountry3" className="block text-sm font-medium text-white mb-2">3rd Priority</label>
                    <select
                      id="compassCountry3"
                      name="compassCountry3"
                      value={formData.compassCountry3}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="">Select Country</option>
                      {countryCodes.map((country) => (
                        <option key={country.iso} value={country.name} className="bg-white text-black">
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="compassMajor1" className="block text-sm font-medium text-white mb-2">Majors of Interest (max 2): 1st Priority<span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="compassMajor1"
                      name="compassMajor1"
                      value={formData.compassMajor1}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter 1st priority major"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="compassMajor2" className="block text-sm font-medium text-white mb-2">2nd Priority</label>
                    <input
                      type="text"
                      id="compassMajor2"
                      name="compassMajor2"
                      value={formData.compassMajor2}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter 2nd priority major"
                    />
                  </div>
                  <div>
                    <label htmlFor="compassTuitionFeeRange" className="block text-sm font-medium text-white mb-2">Tuition Fee Range per Year (€)<span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="compassTuitionFeeRange"
                      name="compassTuitionFeeRange"
                      value={formData.compassTuitionFeeRange}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="e.g., 10000-20000"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Conditional fields for B. Vault */}
              {formData.preferredPlan === 'B. Vault' && (
                <div className="mt-4 p-4 rounded-lg bg-white/15 border border-white/20 space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Vault Details</h3>
                  <div>
                    <label htmlFor="vaultCountries" className="block text-sm font-medium text-white mb-2">Country(s) of Institutions (max 3)<span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="vaultCountries"
                      name="vaultCountries"
                      value={formData.vaultCountries}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="e.g., USA, Canada, UK"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="vaultProgramTitles" className="block text-sm font-medium text-white mb-2">Program Titles (max 5)<span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="vaultProgramTitles"
                      name="vaultProgramTitles"
                      value={formData.vaultProgramTitles}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="e.g., Computer Science, Business Analytics"
                      required
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label htmlFor="vaultTargetAcademicMonth" className="block text-sm font-medium text-white mb-2">Target Academic Intake: Month<span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="vaultTargetAcademicMonth"
                        name="vaultTargetAcademicMonth"
                        value={formData.vaultTargetAcademicMonth}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="e.g., September"
                        required
                      />
                    </div>
                    <div className="w-1/2">
                      <label htmlFor="vaultTargetAcademicYear" className="block text-sm font-medium text-white mb-2">Year<span className="text-red-500">*</span></label>
                      <input
                        type="number"
                        id="vaultTargetAcademicYear"
                        name="vaultTargetAcademicYear"
                        value={formData.vaultTargetAcademicYear}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="e.g., 2025"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Need Visa Application Support?<span className="text-red-500">*</span></label>
                    <div className="flex flex-wrap gap-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="needVisaSupport"
                          value="Yes"
                          checked={formData.needVisaSupport === 'Yes'}
                          onChange={handleInputChange}
                          className="form-radio text-blue-600"
                          required
                        />
                        <span className="ml-2 text-white">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="needVisaSupport"
                          value="No"
                          checked={formData.needVisaSupport === 'No'}
                          onChange={handleInputChange}
                          className="form-radio text-blue-600"
                          required
                        />
                        <span className="ml-2 text-white">No</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBack}
                  className="bg-gray-600 text-white p-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200"
                >
                  Back
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleNext}
                  className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Submit
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </main>

      <CIFSuccessModal showModal={showSuccessModal} onClose={handleCloseSuccessModal} />
    </div>
  );
};

export default CIFPage;
