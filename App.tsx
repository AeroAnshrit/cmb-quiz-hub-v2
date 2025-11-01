import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BranchPage from './pages/BranchPage';
import ExamPage from './pages/ExamPage';
import ContentListPage from './pages/ContentListPage';
import SyllabusPage from './pages/SyllabusPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import HowToJoinPage from './pages/HowToJoinPage';
import GeneralInfoPage from './pages/GeneralInfoPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

const App: React.FC = () => {
  return (
    // Base URL is configured in vite.config.ts and read automatically by the browser router.
    <BrowserRouter basename={(import.meta as any).env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />

          {/* Dynamic Branch, Exam, and Content Routes */}
          <Route path=":branch" element={<BranchPage />} />
          <Route path=":branch/syllabus" element={<SyllabusPage />} />
          <Route path=":branch/isro/how-to-join" element={<HowToJoinPage />} />
          <Route path=":branch/:exam" element={<ExamPage />} />
          <Route path=":branch/:exam/:contentType" element={<ContentListPage />} />
          
          {/* Dynamic Quiz Runner */}
          <Route path="/quiz/:branch/:exam/:contentType/:contentId" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
          
          <Route path="*" element={<GeneralInfoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;