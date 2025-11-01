export interface Question {
  chapter: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface Result {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  unanswered?: number;
  userAnswers: (string | null)[];
  questions: Question[];
  title: string;
}

export interface Syllabus {
  subjects: { name: string; topics: string }[];
  note?: string;
}