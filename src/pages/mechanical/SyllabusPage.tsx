import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Subject {
    name: string;
    topics: string;
}

const SyllabusPage: React.FC = () => {
  const [syllabus, setSyllabus] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSyllabus = async () => {
      try {
        const dataModule = await import('../../data/mechanical/syllabus.json');
        setSyllabus(dataModule.default);
      } catch (error) {
        console.error("Failed to load syllabus", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSyllabus();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-surface rounded-xl shadow-2xl animate-fade-in">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-primary">Mechanical Engineering Syllabus</h1>
            <Link to="/mechanical" className="text-secondary hover:text-secondary-hover transition-colors font-semibold">
                &larr; Back
            </Link>
        </div>
      
      {loading ? (
        <p className="text-text-secondary">Loading syllabus...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {syllabus.map((subject) => (
            <div key={subject.name} className="bg-slate-800 p-4 rounded-lg">
              <h2 className="text-xl font-bold text-primary mb-2">{subject.name}</h2>
              <p className="text-text-secondary text-sm">{subject.topics}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SyllabusPage;