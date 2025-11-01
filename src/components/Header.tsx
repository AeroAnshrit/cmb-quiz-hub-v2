import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-surface shadow-md sticky top-0 z-10 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          CMB Quiz Hub
        </Link>
        <nav className="flex items-center space-x-4">
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
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;