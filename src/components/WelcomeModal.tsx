import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WelcomeModalProps {
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-surface rounded-xl shadow-2xl w-full max-w-lg p-6 md:p-8 text-text-primary border border-border"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold text-accent mb-4">Welcome to CMB Quiz Hub!</h2>
          <p className="text-text-secondary mb-4">
            This is an early version of our website. We are actively working on adding more content and features.
          </p>
          <div className="text-left bg-background p-4 rounded-lg border border-border space-y-2 text-sm text-text-secondary">
            <p><strong>Current Status:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Contains Mechanical ISRO papers (2015-2020).</li>
              <li>Other engineering branches (CS, ECE, Civil) will be added soon.</li>
              <li>GATE and ESE papers are also on the way!</li>
              <li className="font-semibold text-correct">The platform is completely free, with no sign-up or payment required.</li>
            </ul>
             <p className="pt-2">You may encounter some bugs. Thank you for your patience!</p>
          </div>
          <div className="mt-6 text-right">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
            >
              Okay, Got It!
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WelcomeModal;
