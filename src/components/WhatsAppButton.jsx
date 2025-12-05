
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/yourphonenumber" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300 group"
      aria-label="Contact us on WhatsApp"
      title="Talk to our support team"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0000CD]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413.003 6.556-5.338 11.891-11.893 11.891-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.466 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.849 6.081l.244.363-.944 2.869.418-.243z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
