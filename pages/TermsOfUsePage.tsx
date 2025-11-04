import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfUsePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 bg-surface rounded-xl shadow-lg border border-border text-text-secondary animate-fade-in">
      <h1 className="text-3xl font-bold mb-6 text-accent">Terms of Use – CMB Quiz Hub</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-text-primary">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the CMB Quiz Hub website ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-text-primary">2. Use of Content</h2>
          <p>
            The quizzes, questions, explanations, and all other content provided on this platform are for educational and personal, non-commercial use only. You may not copy, reproduce, redistribute, sell, or otherwise exploit the content for commercial purposes without prior written permission from the CMB Quiz Hub team.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-text-primary">3. User Conduct</h2>
          <p>
            Users agree not to misuse the platform. This includes, but is not limited to, submitting false or malicious issue reports, attempting to disrupt the website's functionality through technical means, or using the service for any illegal activities.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-text-primary">4. Intellectual Property</h2>
          <p>
            All content on the Service, including the design, text, graphics, questions, and explanations, is the intellectual property of the CMB Quiz Hub team and is protected by applicable copyright and trademark law.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-text-primary">5. Disclaimer</h2>
          <p>
            The content on CMB Quiz Hub is provided on an "as is" basis. While we make every effort to ensure the accuracy and reliability of the information, we do not guarantee the correctness, completeness, or suitability of any data. Use of the content is at your own risk.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-text-primary">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Use at any time. We will do so by posting the updated terms on this page. Your decision to continue to visit and make use of the site after such changes have been made constitutes your formal acceptance of the new Terms of Use.
          </p>
        </div>
      </div>
      
      <div className="text-center mt-10">
        <Link to="/" className="inline-block px-8 py-3 bg-secondary hover:bg-secondary-hover text-white font-bold rounded-lg transition-transform hover:scale-105">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
