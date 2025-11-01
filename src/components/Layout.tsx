

import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WelcomeModal from './WelcomeModal';

const Layout: React.FC = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('welcomeModalShown');
    if (!hasSeenModal) {
      setShowWelcomeModal(true);
    }
  }, []);

  const handleCloseModal = () => {
    sessionStorage.setItem('welcomeModalShown', 'true');
    setShowWelcomeModal(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
      {showWelcomeModal && <WelcomeModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Layout;
