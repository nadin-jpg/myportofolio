import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#3A252B] py-10 bg-[#1C0F14]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9C8682]">
        {/* Copyright */}
        <div>
          © {currentYear} Nadia Mirela. Hak Cipta Dilindungi.
        </div>

        {/* Tech Label Badge */}
        <div className="inline-flex items-center gap-2 bg-[#241318] border border-[#3A252B] px-3 py-1.5 rounded-full text-[11px]">
          <span className="w-2 h-2 rounded-full bg-[#7A2333] animate-pulse inline-block"></span>
          <span className="text-[#EDE4D3]">built with next.js + tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
