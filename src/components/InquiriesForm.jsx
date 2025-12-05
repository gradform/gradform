import React, { useState } from 'react';
import DOMPurify from 'dompurify'; // Import DOMPurify

const InquiriesForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sanitize all form data before processing or sending to a backend
    const sanitizedData = {
      name: DOMPurify.sanitize(formData.name),
      email: DOMPurify.sanitize(formData.email),
      phone: DOMPurify.sanitize(formData.phone),
      subject: DOMPurify.sanitize(formData.subject),
      message: DOMPurify.sanitize(formData.message),
    };

    console.log('Sanitized Form Data:', sanitizedData);
    // Here you would typically send sanitizedData to your backend API
    alert('Inquiry submitted! (Check console for sanitized data)');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="w-full py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4 text-white font-bricolage-24pt">General Inquiries</h2>
        <p className="text-lg text-blue-100 mb-12 max-w-3xl mx-auto text-justify">
          Have a question or need assistance? Fill out the form below, and our team will get back to you promptly.
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto text-left bg-white/20 backdrop-blur-3xl rounded-3xl shadow-xl p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-200 font-inter"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-200 font-inter"
            />
          </div>
          <div className="mb-6">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone (Optional)"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-200 font-inter"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-200 font-inter"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-200 mb-6 font-inter"
          ></textarea>
          <div className="text-center">
            <button type="submit" className="bg-white text-[#0000CD] px-6 py-3 rounded-xl hover:bg-blue-100 hover:shadow-2xl hover:shadow-[#0000CD]/70 transition-all duration-300 text-sm font-medium drop-shadow-lg font-inter">
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InquiriesForm;
