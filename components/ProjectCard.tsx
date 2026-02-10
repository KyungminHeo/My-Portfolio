import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { Sparkles, Calendar, Briefcase, CheckCircle2, ChevronRight, X, Layers, Lightbulb, Wrench, BookOpen } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isPersonal = project.isPersonal;
  const hasDetails = project.challenges && project.challenges.length > 0;

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <div className={`relative flex flex-col h-full w-full bg-white rounded-2xl border ${isPersonal ? 'border-indigo-200 shadow-indigo-100 ring-1 ring-indigo-100' : 'border-slate-200'} shadow-sm hover:shadow-lg transition-all duration-300 p-6 sm:p-8 print:break-inside-avoid print:shadow-none print:border-slate-300`}>
        
        {/* Badge for Personal Project */}
        {isPersonal && (
          <div className="absolute top-0 right-0 mt-6 mr-6 print:hidden">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-sm">
              <Sparkles className="w-3 h-3 mr-1" />
              Top Pick
            </span>
          </div>
        )}

        <div className="mb-4 pr-16">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-y-2 text-sm text-slate-500 mb-2">
            {project.company && (
              <span className="flex items-center mr-4">
                <Briefcase className="w-4 h-4 mr-1.5" />
                {project.company}
              </span>
            )}
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1.5" />
              {project.period}
            </span>
          </div>
          {project.role && (
            <div className="text-sm font-medium text-indigo-600 mb-4">
              {project.role}
            </div>
          )}
        </div>

        <div className="prose prose-slate prose-sm max-w-none mb-6">
          <p className="text-slate-700 leading-relaxed font-medium">
            {project.summary}
          </p>
          {project.description && (
              <p className="text-slate-600 mt-2 text-sm">
                  {project.description}
              </p>
          )}
        </div>

        {/* Achievements */}
        <div className="mb-6 flex-grow">
          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {project.keyAchievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Detail Button if applicable */}
        {hasDetails && (
          <div className="mb-6 print:hidden">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg text-sm font-bold transition-all duration-300 shadow-md shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              View Technical Case Study
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Tech Stack Footer */}
        <div className="pt-6 border-t border-slate-100">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span 
                key={idx} 
                className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                  isPersonal 
                    ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' 
                    : 'bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && hasDetails && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 print:hidden">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <div>
                <h2 className="text-xl font-bold text-slate-900">{project.title}</h2>
                <span className="text-sm text-indigo-600 font-medium">Technical Deep Dive</span>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-10">
              
              {/* Architecture Section */}
              {project.architecture && (
                <section>
                  <h3 className="flex items-center text-lg font-bold text-slate-900 mb-4 border-l-4 border-indigo-500 pl-3">
                    <Layers className="w-5 h-5 mr-2 text-slate-500" />
                    System Architecture
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <ul className="space-y-3">
                      {project.architecture.map((arch, idx) => (
                        <li key={idx} className="flex items-start text-slate-700 text-sm sm:text-base">
                          <span className="w-2 h-2 mt-2 mr-3 bg-indigo-400 rounded-full flex-shrink-0"></span>
                          {arch}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              {/* Challenges Section */}
              {project.challenges && (
                <section>
                  <h3 className="flex items-center text-lg font-bold text-slate-900 mb-6 border-l-4 border-orange-500 pl-3">
                    <Wrench className="w-5 h-5 mr-2 text-slate-500" />
                    Technical Challenges & Solutions
                  </h3>
                  <div className="grid gap-6">
                    {project.challenges.map((challenge, idx) => (
                      <div key={idx} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                         <div className="bg-slate-50 px-5 py-3 border-b border-slate-100">
                           <h4 className="font-bold text-slate-800">{challenge.title}</h4>
                         </div>
                         <div className="p-5 grid md:grid-cols-2 gap-6">
                           <div>
                             <div className="text-xs font-bold text-red-500 uppercase tracking-wide mb-2">Problem</div>
                             <p className="text-slate-600 text-sm leading-relaxed">{challenge.problem}</p>
                           </div>
                           <div>
                             <div className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">Solution</div>
                             <p className="text-slate-700 text-sm leading-relaxed font-medium">{challenge.solution}</p>
                           </div>
                         </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Insights Section */}
              {project.insights && (
                <section>
                  <h3 className="flex items-center text-lg font-bold text-slate-900 mb-4 border-l-4 border-emerald-500 pl-3">
                    <Lightbulb className="w-5 h-5 mr-2 text-slate-500" />
                    Technical Insights
                  </h3>
                  <div className="bg-emerald-50/50 rounded-xl p-6 border border-emerald-100">
                    <ul className="space-y-3">
                       {project.insights.map((insight, idx) => (
                         <li key={idx} className="flex items-start text-slate-700">
                           <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0" />
                           <span className="text-sm sm:text-base">{insight}</span>
                         </li>
                       ))}
                    </ul>
                  </div>
                </section>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;