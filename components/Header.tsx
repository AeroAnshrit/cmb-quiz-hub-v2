import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LogIn, Send } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LoginModal from './LoginModal';

const Header: React.FC = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <>
      <header className="bg-surface shadow-md sticky top-0 z-10 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            CMB Quiz Hub
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-text-secondary hover:text-accent transition-colors ${
                  isActive ? 'text-accent font-semibold' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-text-secondary hover:text-accent transition-colors ${
                  isActive ? 'text-accent font-semibold' : ''
                }`
              }
            >
              About
            </NavLink>
          </nav>
          <div className="flex items-center space-x-2">
            <a
              href="https://t.me/+tfRds_ry_QRjZDg9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium text-white bg-[#0088cc] hover:bg-[#0077b3] transition-colors"
              aria-label="Join our Telegram"
            >
              <Send size={16} className="mr-0 sm:mr-2" />
              <span className="hidden sm:inline">Join Telegram</span>
            </a>
            <button 
              onClick={() => setLoginModalOpen(true)}
              className="flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium text-text-secondary hover:bg-slate-700 transition-colors"
              aria-label="Open login modal"
            >
              <LogIn size={16} className="mr-0 sm:mr-2" />
              <span className="hidden sm:inline">Login</span>
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isLoginModalOpen && <LoginModal onClose={() => setLoginModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
