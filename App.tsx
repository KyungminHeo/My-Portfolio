import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Expertise from './components/Expertise';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectList from './components/ProjectList';
import EducationSection from './components/Education';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-indigo-100">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Introduction Section */}
        <section id="introduction" className="py-24 bg-white">
           <Introduction />
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-24 bg-slate-50 border-y border-slate-100">
           <Expertise />
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-white">
           <ExperienceTimeline />
        </section>

        {/* Projects Section - kept as detailed portfolio */}
        <section id="projects" className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2 mb-12">
              <span className="text-indigo-600 font-bold tracking-wider text-sm uppercase">PORTFOLIO</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Key Projects
              </h2>
              <p className="text-slate-600 max-w-2xl mt-2">
                개인 프로젝트(AI/RAG)를 시작으로 엔터프라이즈 솔루션 구축 경험까지, 
                문제를 해결하고 비즈니스 가치를 창출한 주요 프로젝트 상세 내역입니다.
              </p>
            </div>
            <ProjectList />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 bg-white">
           <EducationSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;