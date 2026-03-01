import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#0b111e] py-10 mt-auto">
      {/* Container aligned with MainLayout and Navbar */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
        <p>© 2023 WORKNEX Inc. Todos los derechos reservados.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos</a>
          <a href="#" className="hover:text-white transition-colors">Soporte</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;