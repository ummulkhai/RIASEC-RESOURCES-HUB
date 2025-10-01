
import React from 'react';
import { View } from '../types';

interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const NavLink: React.FC<{
  view: View;
  currentView: View;
  onNavigate: (view: View) => void;
  children: React.ReactNode;
}> = ({ view, currentView, onNavigate, children }) => {
  const isActive = view === currentView;
  const classes = `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
    isActive
      ? 'bg-indigo-600 text-white'
      : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
  }`;
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(view); }} className={classes}>
      {children}
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate(View.Home)}>
                <svg className="h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-9-5.747h18M5.468 12.001l13.064 0M12 17.747c-3.039 0-5.5-2.46-5.5-5.499s2.461-5.5 5.5-5.5 5.5 2.46 5.5 5.5c0 3.038-2.461 5.499-5.5 5.499z" />
                </svg>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink view={View.Home} currentView={currentView} onNavigate={onNavigate}>Home</NavLink>
                <NavLink view={View.Quiz} currentView={currentView} onNavigate={onNavigate}>Take the Quiz</NavLink>
                <NavLink view={View.Explorer} currentView={currentView} onNavigate={onNavigate}>Explore Types</NavLink>
                <NavLink view={View.Resources} currentView={currentView} onNavigate={onNavigate}>Resources</NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
