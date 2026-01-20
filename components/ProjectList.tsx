import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const ProjectList: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="flex flex-col gap-16">
        {PROJECTS.map((project) => (
          <div key={project.id} className="w-full break-inside-avoid">
             <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;