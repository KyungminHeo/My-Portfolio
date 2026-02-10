import React from 'react';
import { Project } from '../types';
import { Target, User, Box, Trophy, Link as LinkIcon, UserCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 1 }) => {
  const isPersonal = project.isPersonal;
  const projectNumber = String(index).padStart(2, '0');

  return (
    <div className="w-full bg-white border border-slate-200 shadow-sm rounded-sm overflow-hidden flex flex-col print:break-inside-avoid print:shadow-none mb-12">
      
      {/* 1. Project Header (Top Blue Bar Style) */}
      <div className="bg-white border-b border-slate-100 px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center border-t-4 border-indigo-600">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-1">
            REPRESENTATIVE PROJECT {projectNumber}
          </span>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-black text-slate-900 leading-tight">
              {project.title}
            </h3>
            {project.isPersonal && (
              <span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-0.5 rounded border border-indigo-100">
                Personal R&D
              </span>
            )}
            {!project.isPersonal && project.company && (
              <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200 uppercase">
                {project.company}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 sm:mt-0 text-slate-500 font-bold text-sm">
          <UserCircle2 className="w-5 h-5 text-slate-800" />
          <span>허경민 개발자 포트폴리오</span>
        </div>
      </div>

      {/* 2. Main Body (Two Columns) */}
      <div className="p-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
        
        {/* Left Column: Info */}
        <div className="space-y-8">
          
          {/* Goal Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-indigo-600">
              <Target className="w-5 h-5" />
              <span className="font-black text-xs uppercase tracking-widest">GOAL</span>
            </div>
            <div className="bg-indigo-50/50 border-l-4 border-indigo-400 p-4 rounded-r-md">
              <p className="text-slate-800 font-black text-lg leading-snug">
                "{project.summary}"
              </p>
            </div>
          </div>

          {/* Role & Tech Stack (Sub-Grid) */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 text-slate-700 mb-3">
                <User className="w-4 h-4" />
                <span className="font-black text-xs uppercase tracking-widest">ROLE</span>
              </div>
              <ul className="space-y-1">
                {String(project.role || 'Lead Developer').split('/').map((r, i) => (
                  <li key={i} className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <span className="text-indigo-500 text-xs">✔</span> {r.trim()}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 text-slate-700 mb-3">
                <Box className="w-4 h-4" />
                <span className="font-black text-xs uppercase tracking-widest">TECH STACK</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-white border border-slate-200 text-slate-700 px-2 py-1 rounded text-[11px] font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Results & Impact */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-700">
              <Trophy className="w-4 h-4" />
              <span className="font-black text-xs uppercase tracking-widest">KEY RESULTS & IMPACT</span>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3">
              {project.keyAchievements.map((achievement, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-600 text-[10px]">✔</span>
                  </div>
                  <p className="text-sm font-bold text-slate-700 leading-relaxed">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Link Section */}
          {project.links && project.links.length > 0 && (
            <div className="flex gap-4 pt-2">
              {project.links.map((link, i) => (
                <a 
                  key={i} 
                  href={link.url} 
                  target="_blank" 
                  className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:underline"
                >
                  <LinkIcon className="w-3.5 h-3.5" />
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: System Architecture Visualizer */}
        <div className="flex flex-col">
          <div className="bg-slate-50/80 border border-slate-200 rounded-2xl p-6 h-full flex flex-col relative overflow-hidden">
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
            
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-white border border-slate-300 text-slate-600 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest shadow-sm">
                SYSTEM ARCHITECTURE
              </span>
            </div>

            {/* Simulated Architecture Nodes */}
            <div className="flex-grow flex flex-col justify-center gap-4 relative z-10">
              {project.architecture ? (
                <div className="space-y-4">
                  {project.architecture.map((node, i) => (
                    <div key={i} className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:translate-x-1 transition-transform">
                      <div className="text-[10px] font-black text-slate-400 mb-1 uppercase tracking-tighter">COMPONENT {i+1}</div>
                      <div className="text-sm font-black text-slate-800">{node}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-6 py-10 opacity-50">
                  <div className="w-32 h-20 bg-white border-2 border-dashed border-slate-300 rounded-lg"></div>
                  <p className="text-xs font-bold text-slate-400">Architecture Overview Visual</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;