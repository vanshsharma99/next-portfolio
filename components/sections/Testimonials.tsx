'use client';

import React from 'react';
import { Quote, Star, MessageSquareQuote } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { Card } from '@/components/ui/Card';

export const Testimonials: React.FC = () => {
  const { testimonials } = portfolioData;

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-24 px-6 sm:px-12 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-2">
            <MessageSquareQuote className="w-4 h-4" />
            Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Recommendations & Feedback
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <Card key={item.id} className="p-8 flex flex-col justify-between relative group">
              <Quote className="w-10 h-10 text-indigo-500/20 absolute top-6 right-6 group-hover:text-cyan-500/30 transition-colors" />
              
              <p className="text-sm text-gray-300 italic leading-relaxed mb-6 z-10">
                "{item.quote}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                <div>
                  <h4 className="font-bold text-white text-base">{item.name}</h4>
                  <p className="text-xs text-gray-400">
                    {item.role} • <span className="text-cyan-400">{item.company}</span>
                  </p>
                </div>

                {item.rating && (
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
