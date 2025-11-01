import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ComingSoon from '../components/ComingSoon';
import { fetchWithCache } from '../utils/cache';
import LoadingScreen from '../components/LoadingScreen';

interface IndexData {
  years?: string[];
  topics?: string[];
}

const ContentListPage: React.FC = () => {
  const { branch, exam, contentType } = useParams<{ branch: string; exam: string; contentType: string }>();
  const [contentList, setContentList] = useState<string[]>([]);
  const [filteredList, setFilteredList] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContentIndex = async () => {
      if (!branch || !exam || !contentType) return;
      setLoading(true);
      setError(null);
      try {
        const indexPath = `/data/${branch}/${exam}/index.json`;
        const data: IndexData = await fetchWithCache(indexPath);
        
        let list: string[] = [];
        if (contentType === 'yearwise' && data.years) {
          list = data.years.sort((a, b) => b.localeCompare(a));
        } else if (contentType === 'topicwise' && data.topics) {
          list = data.topics.sort();
        }

        if (list.length === 0) {
          throw new Error('No content found in index file.');
        }

        setContentList(list);
        setFilteredList(list);

      } catch (err) {
        console.error("Failed to load content index", err);
        setError(`Could not load the list of quizzes. The content for this section might be coming soon.`);
      } finally {
        setLoading(false);
      }
    };
    fetchContentIndex();
  }, [branch, exam, contentType]);
  
  useEffect(() => {
    const results = contentList.filter(item =>
      item.toLowerCase().replace(/_/g, ' ').includes(searchTerm.toLowerCase())
    );
    setFilteredList(results);
  }, [searchTerm, contentList]);


  if (loading) {
    return <LoadingScreen text="Loading available quizzes..." />;
  }
  
  if (error) {
    return <ComingSoon title={error} />;
  }
  
  const contentTypeName = contentType === 'yearwise' ? 'Year' : 'Topic';
  const pageTitle = `${branch} ${exam} - ${contentType}-wise`;

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
         <div className="flex justify-center items-center gap-4">
             <Link to={`/${branch}/${exam}`} className="text-secondary hover:text-secondary-hover transition-colors font-semibold text-lg">
                &larr; Back
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary capitalize">{pageTitle}</h1>
        </div>
        <p className="text-lg md:text-xl text-text-secondary mt-4">Select a ${contentTypeName.toLowerCase()} to start the quiz.</p>
      </div>

      <div className="mb-8 max-w-lg mx-auto">
        <input
          type="text"
          placeholder={`Search for a ${contentTypeName.toLowerCase()}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 bg-surface border-2 border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredList.map((item) => (
          <Link
            key={item}
            to={`/quiz/${branch}/${exam}/${contentType}/${item}`}
            className="block text-center p-4 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-surface hover:bg-background border border-border hover:border-accent"
          >
            <span className="text-2xl font-bold capitalize">{item.replace(/_/g, ' ')}</span>
          </Link>
        ))}
      </div>
      {filteredList.length === 0 && (
        <p className="text-center text-text-secondary mt-8">No matching ${contentTypeName.toLowerCase()} found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default ContentListPage;