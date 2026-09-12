'use client';

import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { skills } = portfolioData;

  const categories = [
    { key: 'all', label: 'All Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Database' },
    { key: 'cloud', label: 'Cloud & Tools' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 sm:px-12 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-2">
            <Layers className="w-4 h-4" />
            Skills & Tech Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Technologies & Tools I Work With
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'glass-card text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <Card key={idx} className="p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-white text-base">{skill.name}</span>
                <Badge variant={skill.featured ? 'indigo' : 'gray'}>
                  {skill.category}
                </Badge>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="flex justify-between items-center mt-2 text-xs text-gray-400 font-mono">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
