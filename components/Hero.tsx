import React from 'react';
import { Mail, Briefcase, Layers, Bot, Database, Code, Cloud, Server, Layout, Box, Users } from 'lucide-react';
import { PROFILE, KEY_COMPETENCIES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  Code: <Code className="w-4 h-4" />,
  Layout: <Layout className="w-4 h-4" />,
  Users: <Users className="w-4 h-4" />,
  Cloud: <Cloud className="w-4 h-4" />,
  Box: <Box className="w-4 h-4" />,
  Server: <Server className="w-4 h-4" />,
};

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/30 pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Profile Info */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 tracking-wide uppercase mb-2">
              Portfolio
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
              {PROFILE.name}
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-600">
              {PROFILE.title}
            </h2>
            
            <div className="relative pl-6 py-2 border-l-4 border-indigo-500">
              <p className="text-lg md:text-xl text-slate-700 italic font-medium leading-relaxed whitespace-pre-line">
                {PROFILE.summaryQuote}
              </p>
            </div>

            <div className="flex flex-col space-y-3 pt-4">
              <div className="flex items-center space-x-3 text-slate-700 font-medium">
                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                   <Briefcase className="w-5 h-5" />
                </div>
                <span>{PROFILE.currentRole}</span>
              </div>
              <a href={`mailto:${PROFILE.email}`} className="flex items-center space-x-3 text-slate-700 font-medium hover:text-indigo-600 transition-colors">
                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                   <Mail className="w-5 h-5" />
                </div>
                <span>{PROFILE.email}</span>
              </a>
            </div>
          </div>

          {/* Right Side: Key Competencies Card */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 w-full max-w-lg relative overflow-hidden">
               {/* Decorative dots */}
               <div className="absolute top-6 right-6 flex gap-1.5">
                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                 <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                 <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
               </div>

               <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
                 <Layers className="w-6 h-6 text-slate-700" />
                 <h3 className="text-lg font-bold text-slate-800 tracking-wide">KEY COMPETENCIES</h3>
               </div>

               <div className="flex flex-wrap gap-3">
                 {KEY_COMPETENCIES.map((skill, idx) => (
                   <div key={idx} className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-semibold transition-transform hover:-translate-y-1 ${
                     idx % 3 === 0 ? 'bg-indigo-50 border-indigo-100 text-indigo-700' : 
                     idx % 3 === 1 ? 'bg-blue-50 border-blue-100 text-blue-700' : 
                     'bg-purple-50 border-purple-100 text-purple-700'
                   }`}>
                     {iconMap[skill.icon] || <Code className="w-4 h-4" />}
                     <span>{skill.name}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;