import React from 'react';
import QuizCategoryCard from '../components/QuizCategoryCard';

const MechanicalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.5 12c0-2.3-1.4-4.3-3.5-5.2V4.4c0-1.3-1.1-2.4-2.4-2.4H8.4C7.1 2 6 3.1 6 4.4v2.4C3.9 7.7 2.5 9.7 2.5 12s1.4 4.3 3.5 5.2v2.4c0 1.3 1.1 2.4 2.4 2.4h2.7c1.3 0 2.4-1.1 2.4-2.4v-2.4c2.1-.9 3.5-2.9 3.5-5.2zm-12 0c0-1.9 1.3-3.4 3-3.9v7.8c-1.7-.5-3-2-3-3.9zm8 0c0 1.9-1.3 3.4-3 3.9V8.1c1.7.5 3 2 3 3.9z"></path></svg>;
const ElectricalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>;
const CSIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>;
const CivilIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20"></path><path d="M12 2L2 12h20L12 2z"></path><path d="M6 12v10"></path><path d="M18 12v10"></path></svg>;

const categories = [
  { id: 'mechanical', name: 'Mechanical', description: 'GATE, ISRO, ESE & more.', icon: <MechanicalIcon /> },
  { id: 'electrical', name: 'Electronics & Comm.', description: 'GATE, ISRO, ESE & more.', icon: <ElectricalIcon /> },
  { id: 'cs', name: 'Computer Science', description: 'GATE, ISRO & more.', icon: <CSIcon /> },
  { id: 'civil', name: 'Civil', description: 'GATE, ISRO, ESE & more.', icon: <CivilIcon /> },
];

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-text-primary">Welcome to CMB Quiz Hub</h1>
      <p className="text-lg md:text-xl text-text-secondary mb-12">Select your engineering branch to begin.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
        {categories.map((cat) => (
          <QuizCategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;