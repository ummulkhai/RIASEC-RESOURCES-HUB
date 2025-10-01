
import React from 'react';
import { RESOURCES } from '../constants';

const Resources: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-800">Resource Library</h1>
        <p className="text-lg text-slate-600 mt-2 max-w-2xl mx-auto">
          A curated list of helpful websites and tools for your career and education journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {RESOURCES.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs bg-indigo-100 text-indigo-800 font-semibold px-2.5 py-0.5 rounded-full">
                  {resource.category}
                </span>
                <h3 className="text-xl font-bold text-slate-800 mt-2 group-hover:text-indigo-600 transition-colors">
                  {resource.title}
                </h3>
              </div>
              <svg
                className="h-6 w-6 text-slate-400 group-hover:text-indigo-600 transition-transform transform group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <p className="text-slate-600 mt-2 text-sm">{resource.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Resources;
