import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Result } from '../types';

const ChevronDown = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>;

const ResultPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as Result | null;
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  if (!state || !state.questions || !state.title) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold">No result found</h1>
        <p className="mt-4">Please complete a quiz to see your results.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 bg-primary text-white font-bold rounded-lg">
          Back to Home
        </Link>
      </div>
    );
  }

  const { score, correctAnswers, wrongAnswers, unanswered, questions, userAnswers, title } = state;
  const totalQuestions = questions.length;
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="bg-surface p-8 rounded-xl shadow-2xl text-center mb-12 border border-border">
        <h1 className="text-4xl font-extrabold text-accent mb-4 capitalize">Quiz Results</h1>
        <p className="text-xl text-text-secondary mb-6 capitalize">You completed the {title} quiz!</p>
        <div className="text-6xl font-bold my-8">
          <span className={percentage >= 50 ? 'text-correct' : 'text-incorrect'}>{percentage}%</span>
        </div>
        <div className="flex justify-center flex-wrap gap-8 text-lg">
          <div>
            <span className="font-bold block text-2xl">{totalQuestions}</span>
            <span className="text-text-secondary">Total</span>
          </div>
          <div>
            <span className="font-bold block text-2xl text-correct">{correctAnswers}</span>
            <span className="text-text-secondary">Correct</span>
          </div>
          <div>
            <span className="font-bold block text-2xl text-incorrect">{wrongAnswers}</span>
            <span className="text-text-secondary">Incorrect</span>
          </div>
          {unanswered !== undefined && (
             <div>
                <span className="font-bold block text-2xl text-text-secondary">{unanswered}</span>
                <span className="text-text-secondary">Unanswered</span>
            </div>
          )}
        </div>
        <Link to="/" className="mt-10 inline-block px-8 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg transition-transform hover:scale-105">
          Take Another Quiz
        </Link>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-center mb-6">Review Your Answers</h2>
        {questions.map((question, index) => {
          const userAnswer = userAnswers[index];
          const correctAnswer = question.answer;
          const isCorrect = userAnswer === correctAnswer;

          return (
            <div key={index} className="bg-surface rounded-lg shadow-lg overflow-hidden border border-border">
              <button onClick={() => toggleAccordion(index)} className="w-full text-left p-4 flex justify-between items-center bg-background hover:bg-surface transition-colors">
                <p className="text-lg font-semibold flex-1 pr-4">{index + 1}. {question.question}</p>
                <div className={`transform transition-transform text-accent ${openAccordion === index ? 'rotate-180' : ''}`}>
                    <ChevronDown />
                </div>
              </button>
              {openAccordion === index && (
                <div className="p-4 animate-fade-in border-t border-border">
                  <div className="space-y-2 mb-4">
                    {question.options.map((option, optIndex) => {
                      let optionClass = 'border-border text-text-secondary';
                      if (option === correctAnswer) {
                        optionClass = 'border-correct text-text-primary';
                      }
                      if (userAnswer === option && !isCorrect) {
                        optionClass = 'border-incorrect text-text-primary';
                      }
                      const optionLetter = String.fromCharCode(65 + optIndex);
                      return (
                        <div key={optIndex} className={`p-3 rounded-md border-2 ${optionClass}`}>
                          <span className="font-bold mr-2">{optionLetter}.</span>{option}
                        </div>
                      );
                    })}
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <p className="font-bold text-primary">Your Answer: <span className="text-text-primary">{userAnswer !== null ? userAnswer : 'Not Answered'}</span></p>
                    <p className="font-bold text-correct">Correct Answer: <span className="text-text-primary">{correctAnswer}</span></p>
                    <hr className="my-2 border-border"/>
                    <p className="font-bold text-primary">Explanation:</p>
                    <p className="text-text-secondary">{question.explanation}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultPage;