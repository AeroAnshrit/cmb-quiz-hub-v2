import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../context/ToastContext';
import { X } from 'lucide-react';
import { Question } from '../types';

interface ReportIssueModalProps {
  question: Question;
  questionIndex: number;
  onClose: () => void;
}

const ReportIssueModal: React.FC<ReportIssueModalProps> = ({ question, questionIndex, onClose }) => {
  const { showToast } = useToast();
  const [issueType, setIssueType] = useState('');
  const [otherNotes, setOtherNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!issueType) {
        return;
    }
    const report = {
      questionNumber: questionIndex + 1,
      questionText: question.question,
      issue: issueType,
      notes: issueType === 'Other' ? otherNotes : null,
      timestamp: new Date().toISOString(),
    };
    console.log('--- Issue Report ---', report);
    showToast("Thanks for your feedback — we'll review this soon!");
    onClose();
  };

  const options = ['Incorrect Question', 'Incorrect Answer', 'Incorrect Figure', 'Other'];

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
        className="bg-surface rounded-lg shadow-xl w-full max-w-lg p-6 relative border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-text-secondary hover:text-text-primary">
            <X size={24} />
        </button>
        <h2 className="text-xl font-bold text-primary mb-4">Report an Issue</h2>
        <p className="text-sm text-text-secondary mb-4 line-clamp-2"><strong>Question {questionIndex + 1}:</strong> {question.question}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              {options.map(option => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer p-2 rounded-md hover:bg-background">
                  <input 
                    type="radio" 
                    name="issueType" 
                    value={option} 
                    checked={issueType === option}
                    onChange={(e) => setIssueType(e.target.value)}
                    className="h-4 w-4 text-accent focus:ring-accent border-border"
                  />
                  <span className="text-text-primary">{option}</span>
                </label>
              ))}
            </div>
            {issueType === 'Other' && (
                 <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1" htmlFor="otherNotes">Please describe the issue:</label>
                    <textarea
                        id="otherNotes"
                        value={otherNotes}
                        onChange={(e) => setOtherNotes(e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-text-primary"
                        placeholder="e.g., There is a typo in option C."
                    />
                 </div>
            )}
          <div className="flex justify-end space-x-4 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-md text-text-secondary hover:bg-gray-200 dark:hover:bg-slate-700">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-primary text-white font-bold rounded-md hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed" disabled={!issueType}>Submit Report</button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ReportIssueModal;
