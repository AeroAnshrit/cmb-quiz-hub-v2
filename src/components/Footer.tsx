import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface mt-auto border-t border-border">
      <div className="container mx-auto px-4 py-6 text-center text-text-secondary">
        <p>&copy; {new Date().getFullYear()} CMB Quiz Hub. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          <a href="#" className="hover:text-accent transition-colors">Contribute</a>
          <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;