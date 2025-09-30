export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export const questions: Question[] = [
  {
    id: "1",
    question: "What is a repository in GitHub?",
    options: [
      "A folder on your computer",
      "A storage location for your project files and version history",
      "A type of file extension",
      "A GitHub user profile"
    ],
    correctAnswer: 1,
    explanation: "A repository (or repo) is a storage location that contains all of your project's files and each file's revision history.",
    category: "Repositories"
  },
  {
    id: "2",
    question: "What does 'forking' a repository mean?",
    options: [
      "Deleting the repository",
      "Creating a personal copy of someone else's repository",
      "Merging two branches",
      "Downloading repository files"
    ],
    correctAnswer: 1,
    explanation: "Forking creates a personal copy of another user's repository that lives on your account, allowing you to freely experiment with changes.",
    category: "Repositories"
  },
  {
    id: "3",
    question: "What is a Pull Request (PR)?",
    options: [
      "A request to download repository data",
      "A way to propose changes to a repository",
      "A command to update your local files",
      "A type of issue report"
    ],
    correctAnswer: 1,
    explanation: "A Pull Request is a way to propose changes to a repository. It allows others to review your changes before they are merged into the main codebase.",
    category: "Collaboration"
  },
  {
    id: "4",
    question: "What is a branch in Git?",
    options: [
      "A folder in the repository",
      "A parallel version of your repository",
      "A type of commit message",
      "A GitHub team member"
    ],
    correctAnswer: 1,
    explanation: "A branch is a parallel version of your repository that allows you to work on different features without affecting the main codebase.",
    category: "Branching"
  },
  {
    id: "5",
    question: "What does 'git clone' do?",
    options: [
      "Creates a new repository",
      "Downloads a copy of a repository to your local machine",
      "Duplicates a branch",
      "Copies files between folders"
    ],
    correctAnswer: 1,
    explanation: "Git clone creates a local copy of a remote repository on your machine, including all files, branches, and commit history.",
    category: "Basic Commands"
  },
  {
    id: "6",
    question: "What is GitHub Actions?",
    options: [
      "A social media feature",
      "An automation platform for CI/CD workflows",
      "A project management tool",
      "A code editor plugin"
    ],
    correctAnswer: 1,
    explanation: "GitHub Actions is a CI/CD platform that allows you to automate your build, test, and deployment pipeline.",
    category: "GitHub Actions"
  },
  {
    id: "7",
    question: "What is a commit in Git?",
    options: [
      "A bug in the code",
      "A snapshot of changes in your repository",
      "A team meeting",
      "A repository backup"
    ],
    correctAnswer: 1,
    explanation: "A commit is a snapshot of your repository at a specific point in time, recording the changes you've made to your files.",
    category: "Basic Concepts"
  },
  {
    id: "8",
    question: "What does 'git push' do?",
    options: [
      "Creates a new branch",
      "Uploads local commits to a remote repository",
      "Downloads changes from remote",
      "Deletes a branch"
    ],
    correctAnswer: 1,
    explanation: "Git push uploads your local commits to a remote repository, sharing your changes with others.",
    category: "Basic Commands"
  },
  {
    id: "9",
    question: "What is the main branch traditionally called?",
    options: [
      "master or main",
      "primary",
      "root",
      "default"
    ],
    correctAnswer: 0,
    explanation: "The main branch is traditionally called 'master' (older repos) or 'main' (newer repos), serving as the default branch.",
    category: "Branching"
  },
  {
    id: "10",
    question: "What is a merge conflict?",
    options: [
      "A server error",
      "When Git can't automatically resolve differences between branches",
      "A permission issue",
      "A network problem"
    ],
    correctAnswer: 1,
    explanation: "A merge conflict occurs when Git can't automatically resolve differences in code between two commits, requiring manual resolution.",
    category: "Collaboration"
  }
];
