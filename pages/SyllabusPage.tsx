import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Syllabus } from '../types';
import { fetchWithCache } from '../utils/cache';
import LoadingScreen from '../components/LoadingScreen';

const SyllabusPage: React.FC = () => {
  const { branch } = useParams<{ branch: string }>();
  const [syllabus, setSyllabus] = useState<Syllabus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [branchName, setBranchName] = useState('');

  useEffect(() => {
    const fetchSyllabusData = async () => {
      if (!branch) return;
      setLoading(true);
      setError(null);
      try {
        const branchNameMap: { [key: string]: string } = {
            mechanical: 'Mechanical Engineering',
            electrical: 'Electronics & Communication',
            civil: 'Civil Engineering',
            cs: 'Computer Science',
        };
        setBranchName(branchNameMap[branch] || branch);

        const data: Syllabus = await fetchWithCache(`/data/${branch}/syllabus.json`);
        setSyllabus(data);
      } catch (err) {
        setError('Could not load syllabus for this branch. It may be coming soon.');
        console.error("Failed to load syllabus", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSyllabusData();
  }, [branch]);

  if (loading) {
    return <LoadingScreen text="Loading syllabus..." />;
  }
  
  if (error || !syllabus || !syllabus.subjects) {
    return (
      <div className="text-center p-8 bg-surface rounded-xl shadow-2xl">
        <h1 className="text-2xl font-bold text-incorrect">Syllabus Not Available</h1>
        <p className="mt-2 text-text-secondary">{error}</p>
        <Link to={`/${branch}`} className="mt-6 inline-block px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors">
            Back
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-surface rounded-xl shadow-2xl animate-fade-in border border-border">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-accent capitalize">{branchName} Syllabus</h1>
        <Link to={`/${branch}`} className="text-secondary hover:text-secondary-hover transition-colors font-semibold">
          &larr; Back
        </Link>
      </div>
      
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {syllabus.subjects.map((subject) => (
            <div key={subject.name} className="bg-background p-4 rounded-lg border border-border">
            <h2 className="text-xl font-bold text-accent mb-2">{subject.name}</h2>
            <p className="text-text-secondary text-sm">{subject.topics}</p>
            </div>
        ))}
        </div>
        {syllabus.note && <p className="mt-8 text-center text-text-secondary italic">{syllabus.note}</p>}
      </>
    </div>
  );
};

export default SyllabusPage;
