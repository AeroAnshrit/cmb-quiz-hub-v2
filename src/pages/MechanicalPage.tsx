import React from 'react';
import SubCategoryCard from '../components/SubCategoryCard';

const ISROIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path><path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>;
const GATEIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
const ESEIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10v6"></path><path d="M17 10h3v6h-3zM4 10h3v6H4zM10.5 10H12v6h-1.5z"></path></svg>;
const SyllabusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;

const MechanicalPage: React.FC = () => {
  const subCategories = [
    { to: '/mechanical/isro', title: 'ISRO PYQ', description: 'Previous Year Questions for ISRO Scientist/Engineer.', icon: <ISROIcon />, comingSoon: false },
    { to: '/mechanical/gate', title: 'GATE PYQ', description: 'Previous Year Questions for GATE Examination.', icon: <GATEIcon />, comingSoon: true },
    { to: '/mechanical/ese', title: 'ESE PYQ', description: 'Previous Year Questions for ESE (IES) Examination.', icon: <ESEIcon />, comingSoon: true },
    { to: '/mechanical/syllabus', title: 'Subject Syllabus', description: 'Detailed syllabus for all core subjects.', icon: <SyllabusIcon />, comingSoon: false },
  ];

  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-text-primary text-center">Mechanical Engineering</h1>
      <p className="text-lg md:text-xl text-text-secondary mb-12 text-center">Select an exam or view the syllabus.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {subCategories.map((subCat) => (
          <SubCategoryCard key={subCat.title} {...subCat} />
        ))}
      </div>
    </div>
  );
};

export default MechanicalPage;
