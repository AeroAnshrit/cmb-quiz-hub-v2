import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 bg-surface rounded-xl shadow-lg border border-border text-text-secondary animate-fade-in">
      <h1 className="text-3xl font-bold mb-4 text-accent">Privacy Policy</h1>
      <p className="text-sm text-text-secondary/80 mb-6">Effective Date: October 31, 2025</p>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-text-primary">1. Information We Collect</h2>
          <p>
            CMB Quiz Hub does not collect any personal information from its visitors. We do not require account creation, login, or email submission. The only data handled by the website are quiz content and anonymous technical information automatically provided by your browser (e.g., browser type, device type), which is non-identifiable and used only for operational purposes.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-text-primary">2. Use of Information</h2>
          <p>
            Any automatically gathered technical data is used solely to optimize website performance, improve user experience, and fix bugs. We never use this information for marketing, advertising, or analytics tracking.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-text-primary">3. Cookies and Tracking</h2>
          <p>
            CMB Quiz Hub does not use cookies, tracking scripts, or third-party analytics services (such as Google Analytics). Your browsing activity is completely private.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-text-primary">4. Data Storage and Security</h2>
          <p>
            All quiz and application files are hosted securely on trusted web platforms. We do not maintain any databases containing user information. All quiz data is part of the project's codebase and is not user-generated.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-text-primary">5. Third-Party Links</h2>
          <p>
            The website may include links to official exam portals or educational resources. We are not responsible for the privacy practices of these external sites and recommend you review their policies separately.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-text-primary">6. Changes to This Policy</h2>
          <p>
            We may occasionally update this Privacy Policy. The "Effective Date" at the top of this page will always show the latest revision.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-text-primary">7. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at: cmbquizhub@gmail.com.
          </p>
        </div>
      </div>

      <p className="text-sm text-text-secondary/60 mt-8 text-center">
        © {new Date().getFullYear()} CMB Quiz Hub. All Rights Reserved.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
