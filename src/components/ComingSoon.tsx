import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

interface ComingSoonProps {
    title: string;
    showGoBack?: boolean;
}

const ConstructionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
);

const ComingSoon: React.FC<ComingSoonProps> = ({ title, showGoBack = true }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-surface rounded-xl shadow-2xl min-h-[400px] animate-fade-in border border-border">
        <ConstructionIcon />
        <h1 className="text-3xl font-bold text-accent mt-6">Coming Soon!</h1>
        <p className="mt-2 text-text-secondary text-lg">The "{title}" section is currently under construction.</p>
        <p className="text-text-secondary">We're working hard to bring you new quizzes and features.</p>
        {showGoBack && (
             <button onClick={() => navigate(-1)} className="mt-8 inline-block px-6 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-secondary-hover transition-colors">
                Go Back
            </button>
        )}
    </div>
  );
};

export default ComingSoon;