'use client';

import React from 'react';
import { ArrowRight, Download, Sparkles, Terminal as TerminalIcon } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { scrollToSection } from '@/lib/utils';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="min-h-screen pt-36 sm:pt-44 pb-20 px-6 sm:px-12 flex flex-col justify-center relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow-indigo rounded-full pointer-events-none blur-3xl" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] radial-glow-cyan rounded-full pointer-events-none blur-3xl" />

      <div className="max-w-6xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          
          {/* Avatar & Status Badge */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse-glow" />
              <img
                src={personal.avatarUrl}
                alt={personal.name}
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-indigo-500/50 shadow-xl"
              />
            </div>
            {personal.statusBadge.available && (
              <Badge variant="success" className="animate-pulse-glow">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                {personal.statusBadge.text}
              </Badge>
            )}
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Hi, I'm <span className="text-gradient">{personal.name}</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl font-medium text-gray-300">
            {personal.title}
          </h2>

          {/* Tagline / Pitch */}
          <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
            {personal.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('projects')}
            >
              Explore Work
              <ArrowRight className="w-5 h-5" />
            </Button>

            <a href={personal.resumeUrl} download target="_blank" rel="noreferrer">
              <Button variant="secondary" size="lg">
                <Download className="w-5 h-5" />
                Download CV
              </Button>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-gray-800/80 mt-4">
            {personal.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-gradient leading-tight tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Hero Visual Card / Quick Terminal Code Preview */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full glass-card rounded-2xl p-6 border border-gray-700/80 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                developer-status.ts
              </span>
            </div>

            <div className="py-4 font-mono text-xs sm:text-sm text-gray-300 leading-relaxed space-y-2">
              <p className="text-purple-400">const <span className="text-cyan-300">developer</span> = &#123;</p>
              <p className="pl-4 text-gray-300">name: <span className="text-emerald-400">"{personal.name}"</span>,</p>
              <p className="pl-4 text-gray-300">role: <span className="text-emerald-400">"{personal.role}"</span>,</p>
              <p className="pl-4 text-gray-300">location: <span className="text-emerald-400">"{personal.location}"</span>,</p>
              <p className="pl-4 text-gray-300">status: <span className="text-emerald-400">"Building awesome software"</span>,</p>
              <p className="text-purple-400">&#125;;</p>
              
              <div className="pt-2 text-gray-500 border-t border-gray-800">
                <p>// Type commands in the interactive terminal section below!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
