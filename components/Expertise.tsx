import React from 'react';
import { Layers, Brain, Server, Database, Cloud, Layout } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

const Expertise: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Brain: <Brain className="w-6 h-6" />,
    Layout: <Layout className="w-6 h-6" />,
    Server: <Server className="w-6 h-6" />,
    Database: <Database className="w-6 h-6" />,
    Cloud: <Cloud className="w-6 h-6" />,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex flex-col gap-2 mb-12 border-b border-slate-200 pb-6">
        <span className="text-indigo-600 font-bold tracking-wider text-sm uppercase">EXPERTISE</span>
        <div className="flex justify-between items-end">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            기술 스택 & 핵심 역량
          </h2>
          <div className="hidden md:flex items-center text-slate-500 font-medium">
             <Layers className="w-5 h-5 mr-2" /> Technology Stack Layers
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left Side: Summary */}
        <div className="lg:w-1/3 space-y-6">
           <h3 className="text-3xl font-bold text-slate-900 leading-tight">
             Full-Stack & <br/>
             <span className="text-indigo-600">AI Integration</span>
           </h3>
           <p className="text-slate-600 leading-relaxed text-lg">
             기존의 웹/앱 개발 역량 위에 <span className="font-semibold text-purple-600">Azure OpenAI</span> 및 <span className="font-semibold text-purple-600">Cognitive Services</span>를 결합하여, 
             데이터 수집부터 AI 기반 가치 창출까지 전 과정을 주도합니다.
           </p>

           <div className="space-y-4 pt-4">
              <CheckItem 
                title="MSA & Cloud Native"
                desc="Azure Container Apps, Docker 기반의 유연한 아키텍처 설계"
              />
              <CheckItem 
                title="RAG Pipeline"
                desc="Vector DB, Embedding, LLM을 연결한 지능형 검색 시스템 구축"
              />
              <CheckItem 
                title="Dynamics 365 Core"
                desc="엔터프라이즈 CRM 프로세스 이해 및 Power Platform 확장"
              />
           </div>
        </div>

        {/* Right Side: Layered Stack */}
        <div className="lg:w-2/3 flex flex-col gap-4">
           {SKILL_CATEGORIES.map((cat, idx) => (
             <div key={idx} className="flex flex-col md:flex-row bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                {/* Category Label */}
                <div className={`w-full md:w-40 flex flex-col items-center justify-center p-4 border-b md:border-b-0 md:border-r border-slate-100 ${idx === 0 ? 'bg-purple-50' : idx === 1 ? 'bg-blue-50' : idx === 2 ? 'bg-indigo-50' : idx === 3 ? 'bg-emerald-50' : 'bg-slate-50'}`}>
                   <div className={`mb-2 ${idx === 0 ? 'text-purple-600' : idx === 1 ? 'text-blue-600' : idx === 2 ? 'text-indigo-600' : idx === 3 ? 'text-emerald-600' : 'text-slate-600'}`}>
                     {iconMap[cat.icon]}
                   </div>
                   <span className="font-bold text-sm text-slate-700 uppercase tracking-wide">{cat.category}</span>
                </div>

                {/* Skills Chips */}
                <div className="flex-1 p-5 flex items-center flex-wrap gap-2 bg-white/50">
                   {cat.skills.map((skill, sIdx) => (
                     <span key={sIdx} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg shadow-sm">
                       {skill}
                     </span>
                   ))}
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

const CheckItem = ({ title, desc }: { title: string, desc: string }) => (
  <div className="flex gap-3">
    <div className="flex-shrink-0 mt-1">
      <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
    </div>
    <div>
      <h4 className="font-bold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-500 leading-snug mt-0.5">{desc}</p>
    </div>
  </div>
);

export default Expertise;