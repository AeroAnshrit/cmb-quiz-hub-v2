import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchWithCache } from '../../utils/cache';
import { Syllabus } from '../../types';


const SyllabusPage: React.FC = () => {
  const [syllabus, setSyllabus] = useState<Syllabus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSyllabus = async () => {
      try {
        // Fetch from the public directory
        const data: Syllabus = await fetchWithCache('/data/mechanical/syllabus.json');
        if (!data || !data.subjects) {
          throw new Error("Syllabus data is invalid or not found.");
        }
        setSyllabus(data);
      } catch (error) {
        console.error("Failed to load syllabus", error);
        setError('Could not load syllabus. It may be coming soon.');
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
      ) : error || !syllabus ? (
        <div className="text-center p-4">
            <p className="text-incorrect">{error || "Syllabus could not be displayed."}</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {syllabus.subjects.map((subject) => (
              <div key={subject.name} className="bg-background p-4 rounded-lg border border-border">
                <h2 className="text-xl font-bold text-primary mb-2">{subject.name}</h2>
                <p className="text-text-secondary text-sm">{subject.topics}</p>
              </div>
            ))}
          </div>
          {syllabus.note && <p className="mt-8 text-center text-text-secondary italic">{syllabus.note}</p>}
        </>
      )}
    </div>
  );
};

export default SyllabusPage;