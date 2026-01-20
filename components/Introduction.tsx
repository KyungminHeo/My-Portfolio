import React from 'react';
import { Cloud, Layers, Users, Check } from 'lucide-react';
import { PROFILE } from '../constants';

const Introduction: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2 mb-12">
        <span className="text-indigo-600 font-bold tracking-wider text-sm uppercase">INTRODUCTION</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          한 줄 소개 & 핵심 가치
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Description */}
        <div className="space-y-8">
          <div className="relative pl-6 border-l-4 border-blue-500 bg-blue-50/50 p-6 rounded-r-xl">
             <h3 className="text-2xl font-bold text-slate-800 leading-snug whitespace-pre-line">
               "{PROFILE.introduction}"
             </h3>
          </div>
          
          <div className="space-y-6">
            {PROFILE.introPoints.map((point, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-8 pt-4 border-t border-slate-200">
             <div>
                <div className="text-sm text-slate-500 font-semibold mb-1">총 경력</div>
                <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
                   <BriefcaseIcon /> 12년 2개월
                </div>
             </div>
             <div>
                <div className="text-sm text-slate-500 font-semibold mb-1">역할</div>
                <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
                   <UserGroupIcon /> PM/PL 리딩 경험 다수
                </div>
             </div>
          </div>
        </div>

        {/* Right: Value Cards */}
        <div className="space-y-5">
           <ValueCard 
             icon={<Cloud className="w-6 h-6 text-blue-600" />}
             title="AI & Cloud Service"
             desc="Azure OpenAI, Speech 등 AI 기술과 클라우드 인프라를 결합한 모던 앱 개발"
             tags={["Azure OpenAI", "FastAPI", "RAG"]}
             color="blue"
           />
           <ValueCard 
             icon={<Layers className="w-6 h-6 text-indigo-600" />}
             title="Architecture & Design"
             desc="대규모 캠페인 시스템, 멀티테넌트 웹서비스, API 서버 아키텍처 설계"
             tags={["System Design", "Microservices"]}
             color="indigo"
           />
           <ValueCard 
             icon={<Users className="w-6 h-6 text-purple-600" />}
             title="Enterprise CRM"
             desc="Dynamics 365 & Power Platform 기반의 엔터프라이즈 솔루션 구축 전문가"
             tags={["Dynamics 365", "Power Platform"]}
             color="purple"
           />
        </div>
      </div>
    </div>
  );
};

// Helper Components
const ValueCard = ({ icon, title, desc, tags, color }: { icon: React.ReactNode, title: string, desc: string, tags: string[], color: string }) => {
  const colorStyles: Record<string, string> = {
     blue: "bg-blue-50 text-blue-700",
     indigo: "bg-indigo-50 text-indigo-700",
     purple: "bg-purple-50 text-purple-700",
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
       <div className="flex items-center gap-4 mb-3">
          <div className={`p-3 rounded-xl ${colorStyles[color] || 'bg-slate-100'}`}>
             {icon}
          </div>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
       </div>
       <p className="text-slate-600 text-sm mb-4 leading-relaxed">
         {desc}
       </p>
       <div className="flex gap-2">
         {tags.map((tag, i) => (
           <span key={i} className={`text-xs px-2.5 py-1 rounded-md font-semibold ${colorStyles[color]}`}>
             {tag}
           </span>
         ))}
       </div>
    </div>
  );
};

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
)

const UserGroupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
)

export default Introduction;