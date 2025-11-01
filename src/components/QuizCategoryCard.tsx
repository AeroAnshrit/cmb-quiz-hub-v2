import React from 'react';
import { Link } from 'react-router-dom';

interface QuizCategoryCardProps {
  category: {
    id: string;
    name: string;
    description: string;
    icon: React.ReactElement;
  };
}

const QuizCategoryCard: React.FC<QuizCategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`/${category.id}`}
      className="group block p-6 rounded-lg shadow-md hover:shadow-xl dark:hover:shadow-accent/20 border border-border bg-surface transform hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center space-x-4">
        <div className="text-accent bg-accent/10 p-3 rounded-full">
            {category.icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-text-primary">{category.name}</h3>
            <p className="text-text-secondary mt-1">{category.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default QuizCategoryCard;