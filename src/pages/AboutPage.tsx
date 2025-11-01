
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8 bg-surface rounded-xl shadow-2xl animate-fade-in">
      <h1 className="text-4xl font-extrabold text-primary mb-6">About CMB Quiz Hub</h1>
      <div className="space-y-4 text-lg text-text-secondary">
        <p>
          CMB Quiz Hub is a dedicated platform for engineering students to practice and enhance their knowledge across various disciplines. Our goal is to provide a clean, modern, and user-friendly interface for learning and self-assessment.
        </p>
        <p>
          This project is built using a modern tech stack including React, Vite, and Tailwind CSS to ensure a fast, responsive, and enjoyable user experience.
        </p>
        <h2 className="text-2xl font-bold text-text-primary pt-4">Our Vision</h2>
        <p>
          We aim to become the single hub for engineering aspirants, offering a comprehensive collection of quizzes that are not only challenging but also educational, with detailed explanations for every question.
        </p>
        <h2 className="text-2xl font-bold text-text-primary pt-4">Contribute</h2>
        <p>
          CMB Quiz Hub is an open-source project. If you'd like to contribute by adding new quiz categories, questions, or features, please visit our GitHub repository (link to be added).
        </p>
      </div>
    </div>
  );
};

export default AboutPage;