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
      "A folder",
      "A storage location for project files and version history",
      "A file type",
      "A user profile"
    ],
    correctAnswer: 1,
    explanation: "A repository (or repo) is a storage location that contains all of your project's files and each file's revision history.",
    category: "Repositories"
  },
  {
    id: "2",
    question: "What does 'forking' mean?",
    options: [
      "Deleting a repo",
      "Creating a copy of someone else's repository",
      "Merging branches",
      "Downloading files"
    ],
    correctAnswer: 1,
    explanation: "Forking creates a personal copy of another user's repository that lives on your account.",
    category: "Repositories"
  },
  {
    id: "3",
    question: "What is a Pull Request?",
    options: [
      "Downloading data",
      "A way to propose changes to a repository",
      "Updating files",
      "An issue report"
    ],
    correctAnswer: 1,
    explanation: "A Pull Request is a way to propose changes to a repository and allows others to review your changes before merging.",
    category: "Collaboration"
  },
  {
    id: "4",
    question: "What is a branch?",
    options: [
      "A folder",
      "A parallel version of your repository",
      "A commit type",
      "A team member"
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
      "Copies files"
    ],
    correctAnswer: 1,
    explanation: "Git clone creates a local copy of a remote repository on your machine, including all files, branches, and commit history.",
    category: "Basic Commands"
  },
  {
    id: "6",
    question: "What is GitHub Actions?",
    options: [
      "A social feature",
      "An automation platform for CI/CD workflows",
      "A project tool",
      "A code editor"
    ],
    correctAnswer: 1,
    explanation: "GitHub Actions is a CI/CD platform that allows you to automate your build, test, and deployment pipeline.",
    category: "GitHub Actions"
  },
  {
    id: "7",
    question: "What is a commit?",
    options: [
      "A bug",
      "A snapshot of changes in your repository",
      "A meeting",
      "A backup"
    ],
    correctAnswer: 1,
    explanation: "A commit is a snapshot of your repository at a specific point in time, recording the changes you've made to your files.",
    category: "Basic Concepts"
  },
  {
    id: "8",
    question: "What does 'git push' do?",
    options: [
      "Creates a branch",
      "Uploads local commits to a remote repository",
      "Downloads changes",
      "Deletes a branch"
    ],
    correctAnswer: 1,
    explanation: "Git push uploads your local commits to a remote repository, sharing your changes with others.",
    category: "Basic Commands"
  },
  {
    id: "9",
    question: "What is the default branch usually called?",
    options: [
      "master or main",
      "primary",
      "root",
      "default"
    ],
    correctAnswer: 0,
    explanation: "The main branch is traditionally called 'master' (older repos) or 'main' (newer repos).",
    category: "Branching"
  },
  {
    id: "10",
    question: "What is a merge conflict?",
    options: [
      "A server error",
      "When Git can't automatically resolve code differences",
      "A permission issue",
      "Network problem"
    ],
    correctAnswer: 1,
    explanation: "A merge conflict occurs when Git can't automatically resolve differences in code between two commits.",
    category: "Collaboration"
  },
  {
    id: "11",
    question: "What does 'git pull' do?",
    options: [
      "Deletes files",
      "Fetches and merges changes from remote to local",
      "Creates a branch",
      "Uploads commits"
    ],
    correctAnswer: 1,
    explanation: "Git pull fetches changes from a remote repository and merges them into your local branch.",
    category: "Basic Commands"
  },
  {
    id: "12",
    question: "What is a GitHub Issue?",
    options: [
      "An error message",
      "A way to track tasks, bugs, and feature requests",
      "A security alert",
      "A file type"
    ],
    correctAnswer: 1,
    explanation: "GitHub Issues are used to track ideas, feedback, tasks, or bugs for work on GitHub.",
    category: "Collaboration"
  },
  {
    id: "13",
    question: "What does 'git status' show?",
    options: [
      "Server status",
      "The state of your working directory and staging area",
      "Network speed",
      "File sizes"
    ],
    correctAnswer: 1,
    explanation: "Git status shows which changes have been staged, which haven't, and which files aren't being tracked by Git.",
    category: "Basic Commands"
  },
  {
    id: "14",
    question: "What is a README file?",
    options: [
      "A license",
      "Documentation that introduces and explains a project",
      "A config file",
      "A log file"
    ],
    correctAnswer: 1,
    explanation: "A README file contains information about the project, how to use it, and other important details.",
    category: "Documentation"
  },
  {
    id: "15",
    question: "What does 'git add' do?",
    options: [
      "Creates files",
      "Stages changes for the next commit",
      "Uploads files",
      "Deletes files"
    ],
    correctAnswer: 1,
    explanation: "Git add stages changes in your working directory for the next commit.",
    category: "Basic Commands"
  },
  {
    id: "16",
    question: "What is GitHub Pages?",
    options: [
      "Documentation",
      "A hosting service for static websites from GitHub repos",
      "A search feature",
      "A text editor"
    ],
    correctAnswer: 1,
    explanation: "GitHub Pages is a static site hosting service that takes files from a GitHub repository and publishes a website.",
    category: "GitHub Features"
  },
  {
    id: "17",
    question: "What is a .gitignore file?",
    options: [
      "A virus file",
      "Specifies files Git should not track",
      "A backup list",
      "A command log"
    ],
    correctAnswer: 1,
    explanation: "A .gitignore file specifies intentionally untracked files that Git should ignore.",
    category: "Configuration"
  },
  {
    id: "18",
    question: "What does 'git fetch' do?",
    options: [
      "Deletes branches",
      "Downloads commits and files from remote without merging",
      "Creates tags",
      "Pushes changes"
    ],
    correctAnswer: 1,
    explanation: "Git fetch downloads commits, files, and refs from a remote repository into your local repo without merging.",
    category: "Basic Commands"
  },
  {
    id: "19",
    question: "What is a GitHub Gist?",
    options: [
      "A summary",
      "A simple way to share code snippets and files",
      "A tutorial",
      "A backup tool"
    ],
    correctAnswer: 1,
    explanation: "Gists provide a simple way to share code snippets with others. Every gist is a Git repository.",
    category: "GitHub Features"
  },
  {
    id: "20",
    question: "What does 'git merge' do?",
    options: [
      "Deletes branches",
      "Combines the history of two or more branches",
      "Creates files",
      "Uploads data"
    ],
    correctAnswer: 1,
    explanation: "Git merge joins two or more development histories together, typically merging a branch into another.",
    category: "Branching"
  },
  {
    id: "21",
    question: "What is GitHub Copilot?",
    options: [
      "A project manager",
      "An AI pair programmer that suggests code",
      "A file browser",
      "A testing tool"
    ],
    correctAnswer: 1,
    explanation: "GitHub Copilot is an AI coding assistant that helps you write code faster by suggesting entire lines or blocks.",
    category: "GitHub Features"
  },
  {
    id: "22",
    question: "What does 'git checkout' do?",
    options: [
      "Saves files",
      "Switches between branches or restores files",
      "Deletes commits",
      "Creates repos"
    ],
    correctAnswer: 1,
    explanation: "Git checkout switches branches or restores working tree files to a previous state.",
    category: "Basic Commands"
  },
  {
    id: "23",
    question: "What is a GitHub Organization?",
    options: [
      "A file structure",
      "Shared accounts for collaboration on projects",
      "A repo type",
      "A branch type"
    ],
    correctAnswer: 1,
    explanation: "GitHub Organizations are shared accounts where businesses and open-source projects can collaborate.",
    category: "Collaboration"
  },
  {
    id: "24",
    question: "What does 'git log' show?",
    options: [
      "Error messages",
      "The commit history of your repository",
      "File contents",
      "Network activity"
    ],
    correctAnswer: 1,
    explanation: "Git log displays committed snapshots, letting you list and filter the project history.",
    category: "Basic Commands"
  },
  {
    id: "25",
    question: "What is a GitHub Webhook?",
    options: [
      "A fishing tool",
      "A way to receive HTTP notifications when events occur",
      "A security feature",
      "A file type"
    ],
    correctAnswer: 1,
    explanation: "Webhooks allow you to build or set up integrations which subscribe to certain events on GitHub.",
    category: "Advanced Features"
  },
  {
    id: "26",
    question: "What does 'git branch' do?",
    options: [
      "Deletes files",
      "Lists, creates, or deletes branches",
      "Uploads code",
      "Merges commits"
    ],
    correctAnswer: 1,
    explanation: "Git branch lets you create, list, rename, and delete branches without moving between them.",
    category: "Branching"
  },
  {
    id: "27",
    question: "What is GitHub Security?",
    options: [
      "A password manager",
      "Features to find and fix vulnerabilities in code",
      "A firewall",
      "An antivirus"
    ],
    correctAnswer: 1,
    explanation: "GitHub Security includes features like Dependabot, code scanning, and secret scanning to secure your code.",
    category: "Security"
  },
  {
    id: "28",
    question: "What is a tag in Git?",
    options: [
      "A label",
      "A reference to a specific point in Git history",
      "A file name",
      "A branch name"
    ],
    correctAnswer: 1,
    explanation: "Tags are references that point to specific points in Git history, typically used to mark release points.",
    category: "Advanced Concepts"
  },
  {
    id: "29",
    question: "What does 'git diff' show?",
    options: [
      "File sizes",
      "Changes between commits, branches, or files",
      "Server info",
      "User data"
    ],
    correctAnswer: 1,
    explanation: "Git diff shows changes between commits, commit and working tree, or between two files.",
    category: "Basic Commands"
  },
  {
    id: "30",
    question: "What is GitHub Discussions?",
    options: [
      "A chat app",
      "A collaborative communication forum for communities",
      "An email tool",
      "A video platform"
    ],
    correctAnswer: 1,
    explanation: "GitHub Discussions is a collaborative communication forum for the community around an open source project.",
    category: "Collaboration"
  },
  {
    id: "31",
    question: "What does 'git reset' do?",
    options: [
      "Deletes the repo",
      "Undoes changes by moving HEAD to a different commit",
      "Creates files",
      "Pushes code"
    ],
    correctAnswer: 1,
    explanation: "Git reset is used to undo changes by moving the current branch to a different commit.",
    category: "Advanced Commands"
  },
  {
    id: "32",
    question: "What is a GitHub Project?",
    options: [
      "A repository",
      "Adaptable tools for planning and tracking work",
      "A file folder",
      "A code editor"
    ],
    correctAnswer: 1,
    explanation: "GitHub Projects are adaptable, flexible tools for planning and tracking work on GitHub.",
    category: "Project Management"
  },
  {
    id: "33",
    question: "What does 'git stash' do?",
    options: [
      "Deletes changes",
      "Temporarily stores modified files you're not ready to commit",
      "Creates branches",
      "Uploads files"
    ],
    correctAnswer: 1,
    explanation: "Git stash temporarily shelves changes you've made to your working directory so you can work on something else.",
    category: "Advanced Commands"
  },
  {
    id: "34",
    question: "What is GitHub Sponsors?",
    options: [
      "An ad platform",
      "A way to financially support open source developers",
      "A donation app",
      "A marketplace"
    ],
    correctAnswer: 1,
    explanation: "GitHub Sponsors allows the developer community to financially support the people and organizations who design, build, and maintain open source projects.",
    category: "Community"
  },
  {
    id: "35",
    question: "What is a protected branch?",
    options: [
      "An encrypted branch",
      "A branch with rules to prevent certain actions",
      "A hidden branch",
      "A backup branch"
    ],
    correctAnswer: 1,
    explanation: "Protected branches ensure that collaborators can't make irrevocable changes to branches by enforcing certain workflows.",
    category: "Security"
  },
  {
    id: "36",
    question: "What does 'git rebase' do?",
    options: [
      "Deletes history",
      "Moves or combines commits to a new base",
      "Creates tags",
      "Pushes branches"
    ],
    correctAnswer: 1,
    explanation: "Git rebase moves or combines a sequence of commits to a new base commit, creating a linear history.",
    category: "Advanced Commands"
  },
  {
    id: "37",
    question: "What is GitHub CLI?",
    options: [
      "A web browser",
      "A command-line tool for GitHub operations",
      "A text editor",
      "A file manager"
    ],
    correctAnswer: 1,
    explanation: "GitHub CLI brings GitHub to your terminal, letting you manage pull requests, issues, and more from the command line.",
    category: "Tools"
  },
  {
    id: "38",
    question: "What is a GitHub release?",
    options: [
      "A deleted branch",
      "A packaged version of software for users to download",
      "A commit message",
      "A file type"
    ],
    correctAnswer: 1,
    explanation: "Releases are deployable software iterations you can package and make available for a wider audience.",
    category: "Distribution"
  },
  {
    id: "39",
    question: "What does 'git remote' do?",
    options: [
      "Deletes repos",
      "Manages connections to remote repositories",
      "Creates files",
      "Merges branches"
    ],
    correctAnswer: 1,
    explanation: "Git remote manages the set of remotes whose branches you track and lets you manipulate remote repository connections.",
    category: "Basic Commands"
  },
  {
    id: "40",
    question: "What is GitHub Packages?",
    options: [
      "A shipping service",
      "A package hosting service integrated with GitHub",
      "A compression tool",
      "A file browser"
    ],
    correctAnswer: 1,
    explanation: "GitHub Packages is a software package hosting service that allows you to host your packages privately or publicly.",
    category: "GitHub Features"
  }
];
