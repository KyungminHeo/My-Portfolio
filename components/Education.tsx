import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 mr-3 text-indigo-600" />
            Education
          </h2>
          <div className="space-y-8">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-slate-200">
                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-white border-2 border-indigo-600"></div>
                <h3 className="text-lg font-bold text-slate-800">{edu.school}</h3>
                <p className="text-slate-500 text-sm mb-1">{edu.period}</p>
                <p className="text-slate-700 font-medium">{edu.degree}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-indigo-600" />
            Certifications
          </h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <ul className="space-y-4">
              {CERTIFICATIONS.map((cert, index) => (
                <li key={index} className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;