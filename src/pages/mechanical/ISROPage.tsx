import React from 'react';
import SubCategoryCard from '../../components/SubCategoryCard';
import { Link } from 'react-router-dom';

const YearWiseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const SubjectWiseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;

const ISROPage: React.FC = () => {
  const subCategories = [
    { to: '/mechanical/isro/year-wise', title: 'Year-wise Papers', description: 'Solve papers from a specific year.', icon: <YearWiseIcon />, comingSoon: false },
    { to: '/mechanical/isro/subject-wise', title: 'Subject-wise Papers', description: 'Practice questions from a specific subject.', icon: <SubjectWiseIcon />, comingSoon: false },
  ];

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-4">
             <Link to="/mechanical" className="text-secondary hover:text-secondary-hover transition-colors font-semibold">
                &larr; Back
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary">ISRO PYQ (Mechanical)</h1>
        </div>
        <p className="text-lg md:text-xl text-text-secondary mt-4">Select how you want to practice the questions.</p>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {subCategories.map((subCat) => (
          <SubCategoryCard key={subCat.title} {...subCat} />
        ))}
      </div>
    </div>
  );
};

export default ISROPage;