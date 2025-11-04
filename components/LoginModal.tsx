import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../context/ToastContext';
import { X } from 'lucide-react';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Login feature coming soon!');
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        className="bg-surface rounded-lg shadow-xl w-full max-w-md p-6 relative border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-text-secondary hover:text-text-primary">
            <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-text-primary"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-text-primary"
              required 
            />
          </div>
          <div className="flex justify-end space-x-4 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-md text-text-secondary hover:bg-gray-200 dark:hover:bg-slate-700">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-primary text-white font-bold rounded-md hover:bg-primary-hover">Login</button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default LoginModal;
