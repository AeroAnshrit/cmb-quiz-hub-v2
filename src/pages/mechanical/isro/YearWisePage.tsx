import React from 'react';
import { Link } from 'react-router-dom';

const YearWisePage: React.FC = () => {
  const years = Array.from({ length: 2020 - 2006 + 1 }, (_, i) => 2006 + i).reverse();

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
         <div className="flex justify-center items-center gap-4">
             <Link to="/mechanical/isro" className="text-secondary hover:text-secondary-hover transition-colors font-semibold">
                &larr; Back
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary">ISRO Mechanical - Year-wise</h1>
        </div>
        <p className="text-lg md:text-xl text-text-secondary mt-4">Select a year to start the quiz.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {years.map((year) => (
          <Link
            key={year}
            to={`/quiz/mechanical/isro/year/${year}`}
            className="block text-center p-4 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-surface hover:bg-primary hover:text-white"
          >
            <span className="text-2xl font-bold">{year}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default YearWisePage;