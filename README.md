# CMB Quiz Hub

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**CMB Quiz Hub** is a professional, responsive, and modern Quiz Website designed specifically for engineering students preparing for competitive exams like ISRO, GATE, and ESE. The platform offers a clean, intuitive user interface for practicing previous year's questions, categorized by branch, exam, and year.

**[Live Demo Link - To be added]**

---

## Features

-   **Branch-Specific Content**: Dedicated sections for Mechanical, Electronics & Comm., Computer Science, and Civil engineering.
-   **Multiple Exam Categories**: Practice previous year question papers from major competitive exams like ISRO, GATE, etc.
-   **Flexible Quiz Modes**: Choose to attempt quizzes year-wise or by specific topics (coming soon).
-   **Timed Quizzes**: An immersive quiz experience with a countdown timer to simulate real exam conditions.
-   **Dynamic Routing**: A clean and scalable routing structure that makes adding new branches, exams, or quizzes easy.
-   **Instant Results & Review**: Detailed performance breakdown including score, correct/incorrect/unanswered questions, and a comprehensive answer review section with explanations.
-   **Syllabus Viewer**: Quickly access the detailed syllabus for each engineering branch.
-   **Resource Hub**: A dedicated section with downloadable PDFs and guides, such as "How to Join ISRO".
-   **Modern UI/UX**:
    -   Sleek Dark/Light mode theme.
    -   Smooth animations and transitions.
    -   Fully responsive design for desktop, tablet, and mobile.
    -   Search functionality to easily find specific quizzes.
-   **Performance Optimized**: Uses a smart in-memory cache to fetch and load quiz data efficiently.

## Tech Stack

-   **Framework**: [React](https://reactjs.org/) (with TypeScript)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Routing**: [React Router v6](https://reactrouter.com/)
-   **State Management**: React Context API (for theme)

## Project Structure

The project follows a modular and scalable structure, making it easy to navigate and contribute to.

```
/
├── public/
│   ├── data/                 # All quiz data and app configuration
│   └── pdfs/                   # Downloadable PDF resources
│
├── src/
│   ├── components/             # Reusable React components (Header, Footer, Cards)
│   ├── context/                # Global state management (ThemeContext)
│   ├── pages/                  # Page components for each route
│   ├── types/                  # TypeScript type definitions
│   ├── utils/                  # Utility functions (e.g., cache.ts)
│   ├── App.tsx                 # Main component with React Router setup
│   └── index.tsx               # Application entry point
│
├── index.html                  # Main HTML template
└── ... (config files like package.json, vite.config.ts)
```

## Getting Started

Follow these instructions to set up and run the project locally for development.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v16 or higher recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/cmb-quiz-hub.git
    cd cmb-quiz-hub
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Deployment to GitHub Pages (from a Private Repo)

This guide explains how to deploy the website to GitHub Pages while keeping your source code repository **private**. This process ensures only the built website is publicly visible.

### 1. Repository and Project Configuration

-   **Set Repository to Private**: First, ensure your GitHub repository's visibility is set to **Private**. You can change this under your repository's **Settings > General > Change repository visibility**.

-   **`vite.config.ts`**: The `base` property must be set to your repository name.
    ```ts
    // vite.config.ts
    export default defineConfig({
      // Should be '/<your-repo-name>/'
      base: '/cmb-quiz-hub-v2/', 
      plugins: [react()],
    })
    ```

-   **`package.json`**: The `homepage` property must point to your live GitHub Pages URL.
    ```json
    {
      "homepage": "https://<your-username>.github.io/cmb-quiz-hub-v2/",
      // ... other properties
    }
    ```
    *Replace `<your-username>` with your GitHub username.*

### 2. Deployment Steps

The project is already configured with the `gh-pages` package and the necessary deployment scripts.

1.  **Commit and push** all your latest changes to your main branch.

2.  **Run the deploy command** from your local terminal:
    ```bash
    npm run deploy
    ```
    This single command automates the entire process:
    -   It first runs `npm run build` to create a production-ready build in the `dist` folder.
    -   It then uses `gh-pages` to push **only the contents** of the `dist` folder to a special branch named `gh-pages` in your remote repository.
    -   Your source code on the `main` branch remains untouched and private.

### 3. Configure GitHub Pages Settings

1.  On your private GitHub repository, navigate to **Settings > Pages**.
2.  In the "Build and deployment" section, set the **Source** to **Deploy from a branch**.
3.  Under "Branch", select `gh-pages` and `/ (root)` for the folder, then click **Save**.

After a few minutes, GitHub will finish deploying your site. Your website will be live at the URL you specified in the `homepage` field, while your source code remains secure in your private repository.

## How to Contribute

To contribute by adding new quizzes:

1.  **Create the JSON file:**
    -   Navigate to the correct path under `public/data/`. For example, to add the GATE 2024 Mechanical paper, create `public/data/mechanical/gate/yearwise/2024.json`.
    -   Follow the existing JSON structure for questions:
        ```json
        {
          "title": "GATE Mechanical - 2024",
          "questions": [
            {
              "chapter": "Subject Name",
              "question": "Your question text here.",
              "options": ["Option A", "Option B", "Option C", "Option D"],
              "answer": "The correct option text (e.g., 'Option B')",
              "explanation": "A detailed explanation for the answer."
            }
          ]
        }
        ```
2.  **Update the Index:** Add the new year/topic to the corresponding `index.json` file (e.g., `public/data/mechanical/gate/index.json`). This makes it discoverable by the app.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.