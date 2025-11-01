import React from 'react';
import { Link, useParams } from 'react-router-dom';
import SubCategoryCard from '../components/SubCategoryCard';
import ComingSoon from '../components/ComingSoon';

const YearWiseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const SubjectWiseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;
const RocketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14 0"/><path d="M2 8.5c6.5-4 17.5-4 22 8.5"/><path d="M5 18a7 7 0 0 1 14 0"/><path d="M12 22v-6"/></svg>;

const examConfig: { [key: string]: { name: string; options: any[] } } = {
  isro: {
    name: "ISRO PYQ",
    options: [
        { to: 'yearwise', title: 'Year-wise Papers', description: 'Solve papers from a specific year.', icon: <YearWiseIcon /> },
        { to: 'topicwise', title: 'Topic-wise Papers', description: 'Practice a specific subject.', icon: <SubjectWiseIcon />, comingSoon: true },
        { to: 'how-to-join', title: 'How to Join ISRO', description: 'Guides, tips, and resources.', icon: <RocketIcon /> },
    ]
  },
  gate: {
      name: "GATE PYQ",
      options: [
        { to: 'yearwise', title: 'Year-wise Papers', description: 'Solve papers from a specific year.', icon: <YearWiseIcon /> },
        { to: 'topicwise', title: 'Topic-wise Papers', description: 'Practice a specific subject.', icon: <SubjectWiseIcon />, comingSoon: true },
      ]
  },
  ese: {
      name: "ESE PYQ",
      options: [
        { to: 'yearwise', title: 'Year-wise Papers', description: 'Solve papers from a specific year.', icon: <YearWiseIcon />, comingSoon: true },
      ]
  }
};


const ExamPage: React.FC = () => {
    const { branch, exam } = useParams<{ branch: string, exam: string }>();

    if(!branch || !exam || !examConfig[exam]){
        return <ComingSoon title="Exam Not Found" />;
    }

    const { name, options } = examConfig[exam];

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-4">
             <Link to={`/${branch}`} className="text-secondary hover:text-secondary-hover transition-colors font-semibold text-lg">
                &larr; Back
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary capitalize">{branch} - {name}</h1>
        </div>
        <p className="text-lg md:text-xl text-text-secondary mt-4">Select how you want to practice.</p>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {options.map((opt) => (
          <SubCategoryCard key={opt.title} {...opt} to={`/${branch}/${exam}/${opt.to}`} />
        ))}
      </div>
    </div>
  );
};

export default ExamPage;