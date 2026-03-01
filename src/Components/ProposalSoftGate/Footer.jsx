import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto py-10 border-t border-gray-800/50 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left">
          <p className="text-gray-500 text-[13px] leading-relaxed">
            © {currentYear} WORKNEX Inc. <br className="md:hidden" />
            <span className="hidden md:inline"> All rights reserved.</span>
          </p>
        </div>

        {/* Right Side: Links */}
        <div className="flex items-center gap-6 md:gap-8">
          {['Términos', 'Privacidad', 'Ayuda'].map((link) => (
            <a 
              key={link} 
              href="#" 
              className="text-gray-500 hover:text-white text-[13px] font-[500] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;