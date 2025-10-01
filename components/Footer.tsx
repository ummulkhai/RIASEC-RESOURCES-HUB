
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 py-6 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} RIASEC Career Hub. A tool for student self-discovery.</p>
      </div>
    </footer>
  );
};

export default Footer;
