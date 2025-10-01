
import React, { useState, useEffect } from 'react';
import type { QuizResult, CareerSuggestion } from '../types';
import { getCareerSuggestions } from '../services/geminiService';
import { RIASEC_DESCRIPTIONS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface ResultsProps {
  result: QuizResult;
  onRetake: () => void;
}

const COLORS: { [key: string]: string } = {
  Realistic: '#ef4444',
  Investigative: '#3b82f6',
  Artistic: '#a855f7',
  Social: '#14b8a6',
  Enterprising: '#f97316',
  Conventional: '#64748b'
};

const Loader: React.FC = () => (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-100 rounded-lg">
        <svg className="animate-spin h-10 w-10 text-indigo-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
        </svg>
        <p className="text-slate-600 font-medium">Analyzing your results and finding career matches...</p>
    </div>
);

const Results: React.FC<ResultsProps> = ({ result, onRetake }) => {
  const [suggestions, setSuggestions] = useState<CareerSuggestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { topCodes, scores } = result;

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        setLoading(true);
        setError(null);
        const topCodeNames = topCodes.map(c => c.code);
        const careerData = await getCareerSuggestions(topCodeNames);
        setSuggestions(careerData);
      } catch (err) {
        setError('Could not fetch career suggestions. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchSuggestions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  const chartData = Object.entries(scores).map(([name, value]) => ({ name: name.substring(0,3), fullName: name, value }));

  return (
    <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-slate-800">Your RIASEC Profile</h1>
            <p className="text-lg text-slate-600 mt-2">Here's a breakdown of your interests and potential career paths.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">Your Top Codes</h2>
                <div className="space-y-4">
                {topCodes.map(({ code }, index) => {
                    const details = RIASEC_DESCRIPTIONS[code];
                    return (
                        <div key={code} className="p-4 rounded-lg" style={{backgroundColor: `${COLORS[code]}1A`}}>
                            <h3 className="font-bold text-lg flex items-center" style={{color: COLORS[code]}}>
                                <span className="mr-2 text-sm font-black text-white rounded-full h-6 w-6 flex items-center justify-center" style={{backgroundColor: COLORS[code]}}>{index + 1}</span>
                                {details.title}
                            </h3>
                            <p className="text-slate-600 text-sm mt-1">{details.description}</p>
                        </div>
                    );
                })}
                </div>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-lg">
                 <h2 className="text-2xl font-bold mb-4 text-slate-800">Your Score Breakdown</h2>
                 <ResponsiveContainer width="100%" height={250}>
                     <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <XAxis dataKey="name" tick={{fill: '#475569'}}/>
                        <YAxis tick={{fill: '#475569'}}/>
                        <Tooltip cursor={{fill: 'rgba(230, 230, 230, 0.5)'}} contentStyle={{backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '0.5rem'}}/>
                         <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                           {chartData.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={COLORS[entry.fullName]} />
                           ))}
                         </Bar>
                     </BarChart>
                 </ResponsiveContainer>
            </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6 text-slate-800">AI-Powered Career Suggestions</h2>
            {loading && <Loader />}
            {error && <p className="text-center text-red-500">{error}</p>}
            {!loading && !error && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {suggestions.map((s, i) => (
                        <div key={i} className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                            <h4 className="font-bold text-indigo-700">{s.career}</h4>
                            <p className="text-sm text-slate-600 my-2">{s.description}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {s.skills.map((skill, si) => (
                                    <span key={si} className="text-xs bg-slate-200 text-slate-700 font-medium px-2 py-1 rounded-full">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        <div className="text-center mt-12">
             <button onClick={onRetake} className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg">
                Retake the Quiz
            </button>
        </div>
    </div>
  );
};

export default Results;
