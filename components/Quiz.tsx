
import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import type { Scores, QuizResult } from '../types';
import { RiaSecCode } from '../types';

interface QuizProps {
  onComplete: (result: QuizResult) => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Scores>({
    [RiaSecCode.Realistic]: 0,
    [RiaSecCode.Investigative]: 0,
    [RiaSecCode.Artistic]: 0,
    [RiaSecCode.Social]: 0,
    [RiaSecCode.Enterprising]: 0,
    [RiaSecCode.Conventional]: 0,
  });
  
  const handleAnswer = (value: number) => {
    const question = QUIZ_QUESTIONS[currentQuestionIndex];
    const newScores = { ...scores, [question.code]: scores[question.code] + value };
    setScores(newScores);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishQuiz(newScores);
    }
  };

  const finishQuiz = (finalScores: Scores) => {
    const sortedScores = (Object.keys(finalScores) as RiaSecCode[])
      .map(code => ({ code, score: finalScores[code] }))
      .sort((a, b) => b.score - a.score);
    
    onComplete({
      topCodes: sortedScores.slice(0, 3),
      scores: finalScores
    });
  };

  const progress = ((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;
  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <div className="mb-6">
        <p className="text-sm text-slate-500 mb-2">Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}</p>
        <div className="w-full bg-slate-200 rounded-full h-2.5">
          <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}></div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-lg text-slate-600 mb-4">How much would you enjoy this activity?</p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">"{currentQuestion.text}"</h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          <AnswerButton text="Strongly Dislike" value={1} onClick={handleAnswer} color="bg-red-500 hover:bg-red-600"/>
          <AnswerButton text="Dislike" value={2} onClick={handleAnswer} color="bg-orange-500 hover:bg-orange-600"/>
          <AnswerButton text="Neutral" value={3} onClick={handleAnswer} color="bg-slate-400 hover:bg-slate-500"/>
          <AnswerButton text="Like" value={4} onClick={handleAnswer} color="bg-sky-500 hover:bg-sky-600"/>
          <AnswerButton text="Strongly Like" value={5} onClick={handleAnswer} color="bg-green-500 hover:bg-green-600"/>
        </div>
      </div>
    </div>
  );
};

interface AnswerButtonProps {
    text: string;
    value: number;
    color: string;
    onClick: (value: number) => void;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({ text, value, color, onClick }) => (
    <button
        onClick={() => onClick(value)}
        className={`w-full text-white font-semibold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 shadow ${color}`}
    >
        {text}
    </button>
)


export default Quiz;
