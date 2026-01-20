import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        <p className="text-sm text-slate-500">
          Built with React, TypeScript & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;