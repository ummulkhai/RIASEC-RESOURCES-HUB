
import React, { useState } from 'react';
import { RIASEC_DESCRIPTIONS } from '../constants';
import type { RiaSecCode } from '../types';
import { View } from '../types';


interface ExplorerProps {
    onNavigate: (view: View) => void;
}

const COLORS: { [key: string]: string } = {
  Realistic: '#ef4444',
  Investigative: '#3b82f6',
  Artistic: '#a855f7',
  Social: '#14b8a6',
  Enterprising: '#f97316',
  Conventional: '#64748b'
};

const Explorer: React.FC<ExplorerProps> = ({ onNavigate }) => {
  const [selected, setSelected] = useState<RiaSecCode | null>(null);

  const handleSelect = (code: RiaSecCode) => {
      setSelected(code === selected ? null : code);
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-800">Explore the 6 Personality Types</h1>
        <p className="text-lg text-slate-600 mt-2 max-w-2xl mx-auto">Learn about the characteristics, interests, and typical career paths for each RIASEC type.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(Object.keys(RIASEC_DESCRIPTIONS) as RiaSecCode[]).map(code => {
          const details = RIASEC_DESCRIPTIONS[code];
          const isSelected = selected === code;
          return (
            <div 
              key={code} 
              className={`rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${isSelected ? 'transform -translate-y-2' : 'hover:transform hover:-translate-y-1'}`}
              style={{borderTop: `4px solid ${COLORS[code]}`}}
              onClick={() => handleSelect(code)}
            >
              <div className="p-6 bg-white rounded-b-lg">
                <h3 className="text-2xl font-bold" style={{color: COLORS[code]}}>{details.title}</h3>
                <div className="flex flex-wrap gap-2 my-3">
                    {details.keywords.map(kw => (
                        <span key={kw} className="text-xs font-medium px-2 py-1 rounded-full" style={{backgroundColor: `${COLORS[code]}20`, color: COLORS[code]}}>{kw}</span>
                    ))}
                </div>
                <p className="text-slate-600 text-sm">{details.description}</p>
                 {isSelected && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                        <h4 className="font-semibold text-slate-700 mb-2">Example Careers:</h4>
                        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                            {details.careers.map(career => <li key={career}>{career}</li>)}
                        </ul>
                    </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
       <div className="text-center mt-12">
         <button
            onClick={() => onNavigate(View.Quiz)}
            className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg"
          >
            Find Your Type
          </button>
      </div>
    </div>
  );
};

export default Explorer;
