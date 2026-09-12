'use client';

import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { scrollToSection } from '@/lib/utils';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-800/80 bg-slate-950/60 py-12 px-6 sm:px-12 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Rights */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-white text-base">{portfolioData.personal.name}</h4>
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} All rights reserved. Built with Next.js & Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Back to Top */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-gray-300 hover:text-white glass-card rounded-full hover:border-indigo-500/50 transition-all cursor-pointer"
        >
          Back to Top
          <ArrowUp className="w-4 h-4 text-cyan-400" />
        </button>
      </div>
    </footer>
  );
};
