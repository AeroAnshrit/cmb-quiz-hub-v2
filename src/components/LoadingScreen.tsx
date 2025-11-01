import React from 'react';
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  text?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ text = "Loading..." }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[60vh] bg-background text-text-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Loader2 className="w-12 h-12 animate-spin text-accent mb-4" />
      <p className="text-lg font-medium tracking-wide">{text}</p>
    </motion.div>
  );
}

export default LoadingScreen;
