import React from 'react';

interface PDFCardProps {
  to: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  comingSoon?: boolean;
}

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

const PDFCard: React.FC<PDFCardProps> = ({ to, title, description, icon, comingSoon = false }) => {
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
            <DownloadIcon />
        </div>
      </div>
    </div>
  );

  if (comingSoon) {
      return <div className="cursor-not-allowed opacity-60">{content}</div>;
  }

  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
        {content}
    </a>
  );
};

export default PDFCard;