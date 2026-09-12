'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { scrollToSection } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Experience', href: 'experience' },
    { name: 'Terminal', href: 'terminal' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-gray-800/80 py-3 shadow-xl shadow-black/50'
          : 'bg-[#090d16]/40 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand Logo & Avatar */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="flex items-center gap-3 group"
        >
          <img
            src={portfolioData.personal.avatarUrl}
            alt={portfolioData.personal.name}
            className="w-9 h-9 rounded-full object-cover border-2 border-indigo-500/80 group-hover:border-cyan-400 group-hover:scale-105 transition-all shadow-md"
          />
          <span className="font-bold text-lg text-white tracking-tight group-hover:text-gradient">
            {portfolioData.personal.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 glass-card rounded-full px-6 py-2 border border-white/10 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-gray-300 hover:text-cyan-400 transition-colors font-medium cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="primary"
            size="sm"
            onClick={() => handleNavClick('contact')}
          >
            Get in touch
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-6xl mx-auto px-4">
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 border border-gray-700 shadow-2xl animate-in fade-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base text-gray-200 hover:text-cyan-400 font-medium py-2 border-b border-gray-800/60"
              >
                {link.name}
              </button>
            ))}
            <Button
              variant="primary"
              size="md"
              className="w-full mt-2"
              onClick={() => handleNavClick('contact')}
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
