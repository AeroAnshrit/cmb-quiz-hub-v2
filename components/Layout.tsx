import React, { useState, useEffect, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WelcomeModal from './WelcomeModal';
import { ToastContext } from '../context/ToastContext';
import Toast from './Toast';

const Layout: React.FC = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [toast, setToast] = useState<{ message: string; key: number } | null>(null);

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
  
  const showToast = useCallback((message: string) => {
    setToast({ message, key: Date.now() });
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      <div className="min-h-screen flex flex-col bg-background text-text-primary">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Outlet />
        </main>
        <Footer />
        {showWelcomeModal && <WelcomeModal onClose={handleCloseModal} />}
        {toast && <Toast key={toast.key} message={toast.message} onClose={() => setToast(null)} />}
      </div>
    </ToastContext.Provider>
  );
};

export default Layout;
