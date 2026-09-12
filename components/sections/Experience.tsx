'use client';

import React from 'react';
import { Briefcase, Calendar, MapPin, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const Experience: React.FC = () => {
  const { experience, education, certifications } = portfolioData;

  return (
    <section id="experience" className="py-24 px-6 sm:px-12 relative">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* Work Experience Section */}
        <div>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-2">
              <Briefcase className="w-4 h-4" />
              Career History
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Work Experience & Roles
            </h2>
          </div>

          <div className="relative border-l border-gray-800 ml-4 sm:ml-8 space-y-10">
            {experience.map((item) => (
              <div key={item.id} className="relative pl-6 sm:pl-10 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all" />

                <Card className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    {item.current && <Badge variant="success">Current Role</Badge>}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-4">
                    <span className="font-semibold text-indigo-400">{item.company}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>

                  <ul className="list-disc list-inside text-xs sm:text-sm text-gray-300 space-y-2 mb-4">
                    {item.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill, idx) => (
                      <Badge key={idx} variant="gray">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-800/80">
          
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6">
              <GraduationCap className="w-5 h-5" />
              Education
            </div>
            {education.map((edu) => (
              <Card key={edu.id} className="p-6">
                <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-sm font-semibold text-indigo-400 mb-2">{edu.institution}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 font-mono mb-4">
                  <span>📍 {edu.location}</span>
                  <span>🗓️ {edu.period}</span>
                </div>
                {edu.highlights && (
                  <ul className="list-disc list-inside text-xs text-gray-300 space-y-1">
                    {edu.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6">
              <Award className="w-5 h-5" />
              Certifications
            </div>
            <div className="space-y-4">
              {certifications?.map((cert) => (
                <Card key={cert.id} className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{cert.title}</h4>
                    <p className="text-xs text-gray-400">{cert.issuer}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
