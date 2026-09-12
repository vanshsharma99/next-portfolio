'use client';

import React from 'react';
import { User, Code, Rocket, Cpu } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { Card } from '@/components/ui/Card';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  const highlights = [
    { icon: Code, title: 'Clean Architecture', desc: 'Writing modular, testable, and scalable code.' },
    { icon: Rocket, title: 'Fast Performance', desc: 'Optimizing rendering, bundles, and sub-second loads.' },
    { icon: Cpu, title: 'Modern Stack', desc: 'Leveraging Next.js, React Server Components & Cloud.' },
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-12 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-2">
            <User className="w-4 h-4" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Passionate about crafting great digital products
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Bio Card */}
          <div className="lg:col-span-7">
            <Card className="h-full flex flex-col justify-between p-8">
              <div className="space-y-4 text-gray-300 leading-relaxed">
                {personal.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-800 mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <div>📍 Based in: <span className="text-white font-medium">{personal.location}</span></div>
                <div>✉️ Email: <span className="text-white font-medium">{personal.email}</span></div>
              </div>
            </Card>
          </div>

          {/* Highlights Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <Card key={idx} className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
