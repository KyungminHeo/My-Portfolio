import React from 'react';
import { Brain, Server, Database, Cloud, Briefcase, Layout } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';
import { SkillCategory } from '../types';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
};

const TechStack: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SKILL_CATEGORIES.map((cat: SkillCategory, index) => (
        <div 
          key={index} 
          className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 group"
        >
          <div className="flex items-center mb-4">
            <div className={`p-3 rounded-lg mr-4 ${cat.colorClass} group-hover:scale-110 transition-transform duration-300`}>
              {iconMap[cat.icon]}
            </div>
            <h3 className="font-bold text-lg text-slate-800">{cat.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full border border-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;