import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.5 }}
        className="fixed bottom-5 right-5 z-50"
      >
        <div className="flex items-center bg-secondary text-white py-2 px-4 rounded-lg shadow-lg">
          <CheckCircle className="mr-2 h-5 w-5" />
          <span>{message}</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;
