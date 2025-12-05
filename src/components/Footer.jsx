
const Footer = () => {
  return (
    <footer className="w-full bg-white/10 backdrop-blur-xl py-12 mt-20 border-t border-white/20 font-inter text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          {/* Column 1: Logo and Brand */}
          <div>
            <img src="/images/assets/logo-full/01 gradform - white.png" alt="Gradform Logo" className="h-36 -mb-2 -mt-8" />
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm font-bricolage-24pt">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="/about" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/plans" className="text-white/60 hover:text-white transition-colors">Our Plans</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
              <li><a href="faqs.html" className="text-white/60 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm font-bricolage-24pt">Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="/privacy-policy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-use" className="text-white/60 hover:text-white transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm font-bricolage-24pt">Connect</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://www.facebook.com/gradform/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Facebook</a></li>
              <li><a href="https://www.instagram.com/gradform/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://x.com/teamgradform" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="https://www.linkedin.com/company/gradform/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Gradform. All rights reserved.</p>
          {/* Social Media Icons are now in their own column */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
