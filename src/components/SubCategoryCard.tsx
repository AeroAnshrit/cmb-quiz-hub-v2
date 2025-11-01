import React from 'react';
import { Link } from 'react-router-dom';

interface SubCategoryCardProps {
  to: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  comingSoon?: boolean;
}

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const SubCategoryCard: React.FC<SubCategoryCardProps> = ({ to, title, description, icon, comingSoon = false }) => {
  const content = (
    <div className={`relative group block p-6 rounded-lg shadow-md hover:shadow-xl dark:hover:shadow-accent/20 border border-border bg-surface transform hover:-translate-y-1 transition-all duration-300`}>
      {comingSoon && <span className="absolute top-2 right-2 bg-yellow-500 text-slate-900 text-xs font-bold px-2 py-1 rounded">Coming Soon</span>}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-accent bg-accent/10 p-3 rounded-lg">
              {icon}
          </div>
          <div>
              <h3 className="text-xl font-bold text-text-primary">{title}</h3>
              <p className="text-text-secondary mt-1">{description}</p>
          </div>
        </div>
        <div className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRightIcon />
        </div>
      </div>
    </div>
  );

  return comingSoon ? <div className="cursor-not-allowed opacity-60">{content}</div> : <Link to={to}>{content}</Link>;
};

export default SubCategoryCard;