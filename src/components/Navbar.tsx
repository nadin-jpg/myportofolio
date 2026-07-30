import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Project', href: '#project' },
    { name: 'Organisasi', href: '#organisasi' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1C0F14]/90 backdrop-blur-md border-b border-[#3A252B]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo Text */}
        <a
          href="#"
          className="font-serif font-semibold text-lg tracking-tight text-[#EDE4D3] hover:text-[#A8827E] transition-colors flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#7A2333] inline-block"></span>
          <span>Nadia Mirela</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono uppercase tracking-wider text-[#9C8682] hover:text-[#EDE4D3] hover:translate-y-[-1px] transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#9C8682] hover:text-[#EDE4D3] focus:outline-none focus:ring-1 focus:ring-[#7A2333] rounded-md"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#241318] border-b border-[#3A252B] px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono uppercase tracking-wider text-[#9C8682] hover:text-[#EDE4D3] py-1 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
