'use client';

import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Code2, Eye } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { Project } from '@/types/portfolio';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const { projects } = portfolioData;

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'ai', label: 'AI & ML' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 sm:px-12 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-2">
            <FolderGit2 className="w-4 h-4" />
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Recent Projects & Applications
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                filter === cat.key
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'glass-card text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col justify-between group">
              <div>
                {/* Project Header Tag */}
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="indigo">{project.category}</Badge>
                  {project.featured && <Badge variant="cyan">Featured</Badge>}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-mono bg-gray-800/80 text-gray-300 rounded border border-gray-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => setSelectedProject(project)}
                >
                  <Eye className="w-4 h-4" />
                  Details
                </Button>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-gray-300 hover:text-white glass-card rounded-full hover:border-cyan-500/50 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-gray-300 hover:text-white glass-card rounded-full hover:border-indigo-500/50 transition-colors"
                  >
                    <Code2 className="w-4 h-4" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Detail Modal Overlay */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="space-y-6">
            <p className="text-sm text-gray-300 leading-relaxed">
              {selectedProject.longDescription || selectedProject.description}
            </p>

            {selectedProject.keyFeatures && (
              <div>
                <h4 className="font-bold text-white text-sm mb-2">Key Highlights & Features:</h4>
                <ul className="list-disc list-inside text-xs text-gray-300 space-y-1">
                  {selectedProject.keyFeatures.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-2 pt-4">
              {selectedProject.demoUrl && (
                <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer">
                  <Button variant="primary" size="sm">
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              )}
              {selectedProject.githubUrl && (
                <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer">
                  <Button variant="secondary" size="sm">
                    Source Code
                    <Code2 className="w-4 h-4" />
                  </Button>
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
