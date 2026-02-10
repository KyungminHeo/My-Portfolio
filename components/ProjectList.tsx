import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const ProjectList: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-12">
        {PROJECTS.map((project, index) => (
          <div key={project.id} className="w-full break-inside-avoid">
             <ProjectCard project={project} index={index + 1} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;