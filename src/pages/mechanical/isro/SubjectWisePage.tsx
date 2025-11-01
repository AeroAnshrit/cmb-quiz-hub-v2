import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ComingSoon from '../../../components/ComingSoon';

interface Subject {
    name: string;
}

const SubjectWisePage: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    const fetchSyllabus = async () => {
      try {
        const dataModule = await import('../../../data/mechanical/syllabus.json');
        setSubjects(dataModule.default);
      } catch (error) {
        console.error("Failed to load subjects", error);
      }
    };
    fetchSyllabus();
  }, []);

  return (
    <div className="animate-fade-in">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary">ISRO Mechanical - Subject-wise</h1>
        </div>
        <ComingSoon title="Subject-wise Quizzes" />
        <div className="max-w-4xl mx-auto mt-8">
            <h2 className="text-2xl font-bold text-center text-text-secondary mb-6">Available Subjects (Coming Soon)</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                {subjects.map(subject => (
                    <div key={subject.name} className="bg-surface p-4 rounded-lg opacity-50">
                        {subject.name}
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default SubjectWisePage;