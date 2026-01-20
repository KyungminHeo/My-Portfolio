import React from 'react';
import { CAREER_TIMELINE, EARLY_CAREER } from '../constants';
import { Calendar, History, Sprout } from 'lucide-react';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex flex-col gap-2 mb-12 border-b border-slate-200 pb-6">
        <span className="text-indigo-600 font-bold tracking-wider text-sm uppercase">PROFESSIONAL EXPERIENCE</span>
        <div className="flex justify-between items-end">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            경력 타임라인
          </h2>
          <div className="hidden md:flex items-center text-slate-500 font-medium">
             <History className="w-5 h-5 mr-2" /> 2013 - Present
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Timeline Column */}
        <div className="lg:col-span-2 space-y-12">
           <div className="relative border-l-2 border-slate-200 ml-3 space-y-12 pb-4">
             {CAREER_TIMELINE.map((job, idx) => (
               <div key={idx} className="relative pl-10">
                 {/* Timeline Dot */}
                 <div className={`absolute left-[-9px] top-1 w-5 h-5 rounded-full border-4 border-white ${idx === 0 ? 'bg-indigo-600 shadow-md shadow-indigo-200' : 'bg-white border-indigo-400'}`}></div>
                 
                 <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                   <h3 className="text-xl font-bold text-slate-900">{job.company}</h3>
                   <span className={`text-sm font-semibold ${idx === 0 ? 'text-indigo-600' : 'text-slate-500'}`}>
                     {job.period}
                   </span>
                 </div>
                 
                 <div className="inline-block px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-bold rounded mb-3">
                   {job.role}
                 </div>
                 
                 <p className="text-slate-600 leading-relaxed font-medium">
                   {job.description}
                 </p>
               </div>
             ))}
           </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1 space-y-8">
           {/* Total Experience Card */}
           <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                 <div>
                   <span className="text-indigo-600 font-bold text-xs uppercase tracking-wider">TOTAL EXPERIENCE</span>
                   <div className="text-3xl font-extrabold text-slate-900 mt-1">12년 2개월</div>
                 </div>
                 <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                   <Calendar className="w-6 h-6" />
                 </div>
              </div>
              <div className="flex flex-wrap gap-2">
                 <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">#PM/PL</span>
                 <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">#CRM Expert</span>
                 <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">#AI Solution</span>
              </div>
           </div>

           {/* Early Career Card */}
           <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                 <Sprout className="w-5 h-5 text-emerald-600" />
                 <h3 className="text-lg font-bold text-slate-800">Early Career & Foundation</h3>
              </div>
              <div className="space-y-4">
                 {EARLY_CAREER.map((job, idx) => (
                   <div key={idx} className="flex justify-between items-start text-sm">
                      <div>
                        <div className="font-bold text-slate-800">{job.company}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{job.role}</div>
                      </div>
                      <div className="text-slate-400 text-xs text-right tabular-nums">
                        {job.period}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;