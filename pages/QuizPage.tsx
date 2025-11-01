import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Question } from '../types';
import { fetchWithCache } from '../utils/cache';
import LoadingScreen from '../components/LoadingScreen';

const QuizPage: React.FC = () => {
  const { branch, exam, contentType, contentId } = useParams<{ branch: string; exam: string; contentType: string; contentId: string }>();
  const navigate = useNavigate();
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState('');
  const [availableYears, setAvailableYears] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(120 * 60); // 120 minutes in seconds

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      setTimeLeft(120 * 60);
      
      if (branch && exam && contentType && contentId) {
        const dataPath = `/data/${branch}/${exam}/${contentType}/${contentId}.json`;
        try {
          const quizData = await fetchWithCache(dataPath);
          const loadedQuestions = quizData.questions as Question[];
          
          if (!loadedQuestions || loadedQuestions.length === 0) {
            throw new Error('No questions found in file.');
          }
          
          setQuestions(loadedQuestions);
          setUserAnswers(new Array(loadedQuestions.length).fill(null));
          setTitle(quizData.title || 'Quiz');

          if (contentType === 'yearwise') {
            const indexPath = `/data/${branch}/${exam}/index.json`;
            const indexData = await fetchWithCache(indexPath);
            if (indexData.years) {
              setAvailableYears(indexData.years);
            }
          }
        } catch (err) {
          console.error(`Failed to load quiz data from path: ${dataPath}`, err);
          setError(`The quiz for "${branch} ${exam} ${contentId}" could not be loaded. Please check if the file exists and try again.`);
        }
      } else {
        navigate('/');
      }
      setIsLoading(false);
    };

    loadData();
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
  }, [branch, exam, contentType, contentId, navigate]);

  const finishQuiz = useCallback((finalAnswers: (string | null)[]) => {
    let correct = 0;
    let wrong = 0;
    questions.forEach((q, index) => {
      const userAnswer = finalAnswers[index];
      if (userAnswer !== null) {
        if (q.answer === userAnswer) {
          correct++;
        } else {
          wrong++;
        }
      }
    });
    const unanswered = questions.length - correct - wrong;
    
    navigate('/result', {
      state: {
        score: correct,
        correctAnswers: correct,
        wrongAnswers: wrong,
        unanswered,
        questions,
        userAnswers: finalAnswers,
        title,
      },
    });
  }, [questions, navigate, title]);

  useEffect(() => {
    if (isLoading || error || questions.length === 0) return;
    const timerId = setInterval(() => setTimeLeft(t => t > 0 ? t - 1 : 0), 1000);
    return () => clearInterval(timerId);
  }, [isLoading, error, questions.length]);

  useEffect(() => {
    if (timeLeft === 0 && !isLoading && questions.length > 0) {
        finishQuiz(userAnswers);
    }
  }, [timeLeft, isLoading, questions.length, userAnswers, finishQuiz]);

  const advanceQuestion = (answer: string | null, nextQuestionIndex?: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);
    setSelectedOption(null);

    if (nextQuestionIndex !== undefined) {
      setCurrentQuestionIndex(nextQuestionIndex);
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
        finishQuiz(newAnswers);
    }
  }
  
  const handleNext = () => advanceQuestion(selectedOption);
  const handleSkip = () => advanceQuestion(null);
  
  const handleQuickSwitch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/quiz/${branch}/${exam}/${contentType}/${e.target.value}`);
  };

  const jumpToQuestion = (index: number) => {
    // Save current state before jumping
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(newAnswers);
    setSelectedOption(userAnswers[index]); // Pre-fill option if already answered
    setCurrentQuestionIndex(index);
  };
  
  const formatTime = (seconds: number) => `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;

  if (isLoading) {
    return <LoadingScreen text="Preparing your quiz..." />;
  }
  if (error) {
    return <div className="text-center p-8 bg-surface rounded-xl shadow-2xl"><h1 className="text-2xl font-bold text-incorrect">Error</h1><p className="mt-2 text-text-secondary">{error}</p><button onClick={() => navigate(-1)} className="mt-6 inline-block px-6 py-3 bg-primary text-white font-bold rounded-lg">Go Back</button></div>;
  }
  
  const currentQuestion: Question | undefined = questions[currentQuestionIndex];
  if (!currentQuestion) return null;

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const yearRange = Array.from({ length: 2025 - 2006 + 1 }, (_, i) => 2025 - i);

  return (
    <div className="max-w-7xl mx-auto animate-fade-in lg:flex lg:gap-8">
      <div className="w-full lg:w-2/3 p-4 md:p-8 bg-surface rounded-xl shadow-2xl border border-border">
        <div className="flex justify-between items-start mb-2 flex-wrap gap-4">
            <div>
                <h1 className="text-3xl font-bold text-accent capitalize">{title}</h1>
                <p className="text-text-secondary mt-1">Question {currentQuestionIndex + 1} of {questions.length} - {currentQuestion.chapter || 'General'}</p>
            </div>
            <div className="flex items-center gap-4">
                <div className={`text-2xl font-bold px-4 py-2 rounded-lg border ${timeLeft <= 60 ? 'text-incorrect border-incorrect animate-pulse' : 'text-primary border-border'}`}>
                    {formatTime(timeLeft)}
                </div>
                 {contentType === 'yearwise' && (
                    <div>
                        <select value={contentId} onChange={handleQuickSwitch} className="bg-background border border-border rounded-md p-2.5 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent">
                            {yearRange.map(year => (
                                <option key={year} value={year} disabled={!availableYears.includes(String(year))}>
                                    {year} {!availableYears.includes(String(year)) && '(NA)'}
                                </option>
                            ))}
                        </select>
                    </div>
                 )}
            </div>
        </div>
        <div className="w-full bg-background rounded-full h-2.5 my-8"><div className="bg-accent h-2.5 rounded-full" style={{ width: `${progress}%` }}></div></div>
        <div key={currentQuestionIndex} className="animate-slide-in">
            <h2 className="text-2xl font-semibold mb-6 text-text-primary">{currentQuestion.question}</h2>
            <div className="space-y-4">
                {currentQuestion.options.map((option, index) => (
                    <button key={index} onClick={() => setSelectedOption(option)} className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 text-lg ${selectedOption === option ? 'bg-accent/20 border-accent' : 'bg-background border-border hover:border-accent'}`}>
                       <span className="font-bold mr-2">{String.fromCharCode(65 + index)}.</span>{option}
                    </button>
                ))}
            </div>
        </div>
        <div className="mt-8 flex justify-between items-center">
            <button onClick={handleSkip} className="px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-bold rounded-lg transition-all">Skip</button>
            <button onClick={handleNext} disabled={selectedOption === null} className="px-8 py-3 bg-secondary text-white font-bold rounded-lg transition-transform hover:scale-105 disabled:bg-surface disabled:text-text-secondary disabled:cursor-not-allowed border-2 border-transparent disabled:border-border">
                {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
        </div>
      </div>
      
      <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <div className="p-4 bg-surface rounded-xl shadow-2xl border border-border sticky top-24">
              <h3 className="text-xl font-bold text-center mb-4">Question Palette</h3>
              <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-7 gap-2 max-h-[60vh] overflow-y-auto p-2 bg-background rounded">
                  {questions.map((_, index) => {
                      const isAttempted = userAnswers[index] !== null;
                      const isCurrent = index === currentQuestionIndex;
                      const isSkipped = userAnswers[index] === null && index < currentQuestionIndex;
                      
                      let statusClass = 'bg-background hover:bg-slate-700 border border-border';
                      if (isCurrent) statusClass = 'bg-accent text-white ring-2 ring-white';
                      else if (isAttempted) statusClass = 'bg-green-600 text-white';
                      else if (isSkipped) statusClass = 'bg-yellow-500 text-black';
                      
                      return (
                          <button key={index} onClick={() => jumpToQuestion(index)} className={`w-10 h-10 rounded font-bold flex items-center justify-center transition-all ${statusClass}`}>
                              {index + 1}
                          </button>
                      );
                  })}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-green-600 mr-2"></span>Attempted</div>
                  <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></span>Skipped</div>
                  <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-accent mr-2"></span>Current</div>
                  <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-background border border-border mr-2"></span>Unattempted</div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default QuizPage;