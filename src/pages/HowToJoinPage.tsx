import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PDFCard from '../components/PDFCard';

const ICRBIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path><path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>;
const LaunchVehicleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14 0"></path><path d="M2 8.5C6.5 4 17.5 4 22 8.5"></path><path d="M5 18a7 7 0 0 1 14 0"></path><path d="M12 22v-6"></path></svg>;
const TipsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>;
const InternshipIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;


const HowToJoinPage: React.FC = () => {
    const { branch, exam } = useParams<{ branch: string, exam: string }>();

    const resources = [
        { to: '/pdfs/isro_icrb.pdf', title: 'ISRO ICRB Process', description: 'Understand the entire recruitment process.', icon: <ICRBIcon />, comingSoon: false },
        { to: '/pdfs/isro_launch_vehicles.pdf', title: 'Launch Vehicles', description: 'Learn about PSLV, GSLV and more.', icon: <LaunchVehicleIcon />, comingSoon: false },
        { to: '/pdfs/isro_prep_tips.pdf', title: 'Preparation Tips', description: 'Tips and tricks from previous toppers.', icon: <TipsIcon />, comingSoon: true },
        { to: '/pdfs/isro_internship.pdf', title: 'Internship Guide', description: 'How to get an internship at ISRO.', icon: <InternshipIcon />, comingSoon: true },
    ];

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-4">
             <Link to={`/${branch}/${exam}`} className="text-secondary hover:text-secondary-hover transition-colors font-semibold text-lg">
                &larr; Back
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary">How to Join ISRO</h1>
        </div>
        <p className="text-lg md:text-xl text-text-secondary mt-4">Downloadable resources and guides.</p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {resources.map((res) => (
          <PDFCard key={res.title} {...res} />
        ))}
      </div>
    </div>
  );
};

export default HowToJoinPage;