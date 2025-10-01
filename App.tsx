
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Explorer from './components/Explorer';
import Resources from './components/Resources';
import Footer from './components/Footer';
import type { QuizResult } from './types';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.Home);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const handleQuizComplete = (result: QuizResult) => {
    setQuizResult(result);
    setCurrentView(View.Results);
  };
  
  const handleRetakeQuiz = () => {
    setQuizResult(null);
    setCurrentView(View.Quiz);
  }

  const renderContent = () => {
    switch (currentView) {
      case View.Quiz:
        return <Quiz onComplete={handleQuizComplete} />;
      case View.Results:
        return quizResult ? <Results result={quizResult} onRetake={handleRetakeQuiz} /> : <Home onNavigate={setCurrentView} />;
      case View.Explorer:
        return <Explorer onNavigate={setCurrentView} />;
      case View.Resources:
        return <Resources />;
      case View.Home:
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
