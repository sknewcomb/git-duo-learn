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
    question: "Which command is used to download objects and refs from another repository?",
    options: [
      "git pull",
      "git fetch",
      "git clone",
      "git sync"
    ],
    correctAnswer: 1,
    explanation: "git fetch downloads commits, files, and refs from a remote repository into your local repo without automatically merging them, unlike git pull which fetches and merges.",
    category: "Git Commands"
  },
  {
    id: "2",
    question: "What is the primary purpose of a branch protection rule?",
    options: [
      "To encrypt branch data",
      "To prevent certain actions on important branches",
      "To backup branch history",
      "To hide branches from users"
    ],
    correctAnswer: 1,
    explanation: "Branch protection rules prevent force pushes, require status checks to pass before merging, require code reviews, and enforce other workflows to protect important branches.",
    category: "Security"
  },
  {
    id: "3",
    question: "In GitHub Actions, what is a workflow?",
    options: [
      "A project board",
      "An automated process defined by YAML configuration",
      "A team collaboration tool",
      "A code review process"
    ],
    correctAnswer: 1,
    explanation: "A GitHub Actions workflow is a configurable automated process defined in a YAML file that will run one or more jobs triggered by events, schedules, or manual triggers.",
    category: "GitHub Actions"
  },
  {
    id: "4",
    question: "What does Dependabot do?",
    options: [
      "Tracks project dependencies manually",
      "Automatically creates pull requests to update dependencies",
      "Deletes outdated dependencies",
      "Lists all project dependencies"
    ],
    correctAnswer: 1,
    explanation: "Dependabot automatically checks for outdated dependencies and security vulnerabilities, then creates pull requests to update them to secure versions.",
    category: "Security"
  },
  {
    id: "5",
    question: "What is the difference between git merge and git rebase?",
    options: [
      "No difference, they're aliases",
      "Merge creates a merge commit; rebase rewrites history linearly",
      "Rebase is faster than merge",
      "Merge is only for remote branches"
    ],
    correctAnswer: 1,
    explanation: "git merge creates a new merge commit that combines two branches' histories. git rebase moves or combines commits to a new base, creating a linear history without merge commits.",
    category: "Branching"
  },
  {
    id: "6",
    question: "Which GitHub Projects view is best for visualizing work stages?",
    options: [
      "Table",
      "Board (Kanban)",
      "Timeline",
      "List"
    ],
    correctAnswer: 1,
    explanation: "The Board (Kanban) view displays items as cards in columns representing different stages, making it ideal for visualizing work progression through stages like 'To Do', 'In Progress', and 'Done'.",
    category: "Project Management"
  },
  {
    id: "7",
    question: "What happens when you fork a repository?",
    options: [
      "You download it locally",
      "You create an independent copy under your account",
      "You become a collaborator",
      "You clone it to your computer"
    ],
    correctAnswer: 1,
    explanation: "Forking creates a complete copy of the repository under your GitHub account, allowing you to freely experiment without affecting the original project.",
    category: "Collaboration"
  },
  {
    id: "8",
    question: "In a pull request, what does 'squash and merge' do?",
    options: [
      "Deletes the branch after merging",
      "Combines all commits into one before merging",
      "Cancels the pull request",
      "Creates multiple merge commits"
    ],
    correctAnswer: 1,
    explanation: "Squash and merge combines all commits from the pull request branch into a single commit on the base branch, creating a cleaner history.",
    category: "Collaboration"
  },
  {
    id: "9",
    question: "What is the purpose of a .gitignore file?",
    options: [
      "To ignore Git commands",
      "To specify files Git should not track",
      "To hide repositories",
      "To block users"
    ],
    correctAnswer: 1,
    explanation: "A .gitignore file specifies intentionally untracked files that Git should ignore, such as build artifacts, dependency folders, or sensitive configuration files.",
    category: "Git Configuration"
  },
  {
    id: "10",
    question: "What is a GitHub Issue used for?",
    options: [
      "Only for reporting bugs",
      "To track tasks, enhancements, bugs, and questions",
      "To store code snippets",
      "To manage user permissions"
    ],
    correctAnswer: 1,
    explanation: "GitHub Issues are versatile tools for tracking ideas, feedback, tasks, bugs, feature requests, and questions related to your project.",
    category: "Project Management"
  },
  {
    id: "11",
    question: "What does git stash do?",
    options: [
      "Permanently deletes uncommitted changes",
      "Temporarily stores uncommitted changes",
      "Creates a new branch",
      "Pushes changes to remote"
    ],
    correctAnswer: 1,
    explanation: "git stash temporarily shelves (or stashes) changes you've made to your working directory so you can work on something else, then come back and reapply them later.",
    category: "Git Commands"
  },
  {
    id: "12",
    question: "In GitHub Actions, what triggers a workflow to run?",
    options: [
      "Only manual triggers",
      "Events like push, pull request, or scheduled times",
      "Only on pull requests",
      "Automatically every hour"
    ],
    correctAnswer: 1,
    explanation: "GitHub Actions workflows can be triggered by various events including push, pull_request, issue creation, scheduled cron times, manual workflow_dispatch, and many other GitHub events.",
    category: "GitHub Actions"
  },
  {
    id: "13",
    question: "What is the main branch typically protected from?",
    options: [
      "Read access",
      "Direct pushes without review or status checks",
      "All commits",
      "Fork operations"
    ],
    correctAnswer: 1,
    explanation: "Protected main branches typically require pull requests, passing status checks, and code reviews before changes can be merged, preventing direct pushes that bypass team workflows.",
    category: "Security"
  },
  {
    id: "14",
    question: "What is a GitHub Gist primarily used for?",
    options: [
      "Full project repositories",
      "Sharing code snippets and small files",
      "Team management",
      "Project planning"
    ],
    correctAnswer: 1,
    explanation: "GitHub Gists provide a simple way to share code snippets, notes, or small files. Each gist is actually a Git repository that can be forked and cloned.",
    category: "GitHub Features"
  },
  {
    id: "15",
    question: "What does git pull actually do?",
    options: [
      "Only downloads commits",
      "Fetches commits and automatically merges them",
      "Creates a new branch",
      "Uploads local changes"
    ],
    correctAnswer: 1,
    explanation: "git pull is a combination of git fetch (downloading commits from remote) followed by git merge (merging those commits into your current branch).",
    category: "Git Commands"
  },
  {
    id: "16",
    question: "Which file type is used to define GitHub Actions workflows?",
    options: [
      "JSON",
      "YAML",
      "XML",
      "TOML"
    ],
    correctAnswer: 1,
    explanation: "GitHub Actions workflows are defined using YAML (.yml or .yaml) files stored in the .github/workflows directory of your repository.",
    category: "GitHub Actions"
  },
  {
    id: "17",
    question: "What is GitHub Discussions designed for?",
    options: [
      "Bug tracking only",
      "Community conversations and Q&A",
      "Code reviews",
      "Deployment logs"
    ],
    correctAnswer: 1,
    explanation: "GitHub Discussions is a collaborative communication forum for communities to have conversations, ask questions, and share information in a more open-ended way than Issues.",
    category: "Community"
  },
  {
    id: "18",
    question: "What does git reset --hard do?",
    options: [
      "Only unstages files",
      "Resets working directory and index to match specified commit",
      "Creates a backup",
      "Pushes changes"
    ],
    correctAnswer: 1,
    explanation: "git reset --hard discards all changes in the working directory and staging area, resetting everything to match the specified commit. This is destructive and cannot be easily undone.",
    category: "Git Commands"
  },
  {
    id: "19",
    question: "What is a GitHub Organization?",
    options: [
      "A folder structure",
      "A shared account for collaboration with access management",
      "A type of repository",
      "A project board"
    ],
    correctAnswer: 1,
    explanation: "GitHub Organizations are shared accounts where businesses and open-source projects can collaborate across many projects at once, with sophisticated security and administrative features.",
    category: "Administration"
  },
  {
    id: "20",
    question: "What is the purpose of a CODEOWNERS file?",
    options: [
      "To list repository contributors",
      "To automatically request reviews from specific users",
      "To restrict repository access",
      "To track code statistics"
    ],
    correctAnswer: 1,
    explanation: "A CODEOWNERS file defines individuals or teams responsible for code in a repository and automatically requests their review when someone opens a pull request that modifies their code.",
    category: "Collaboration"
  },
  {
    id: "21",
    question: "What does CI/CD stand for in DevOps?",
    options: [
      "Code Integration/Code Delivery",
      "Continuous Integration/Continuous Deployment",
      "Central Integration/Central Distribution",
      "Computer Integration/Computer Development"
    ],
    correctAnswer: 1,
    explanation: "CI/CD stands for Continuous Integration and Continuous Deployment (or Delivery), automated practices for integrating code changes and deploying to production.",
    category: "Modern Development"
  },
  {
    id: "22",
    question: "What is GitHub Pages used for?",
    options: [
      "Documentation storage",
      "Hosting static websites directly from a repository",
      "Code editing",
      "Issue tracking"
    ],
    correctAnswer: 1,
    explanation: "GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files from a repository and publishes a website, often used for documentation and project websites.",
    category: "GitHub Features"
  },
  {
    id: "23",
    question: "What is the purpose of git cherry-pick?",
    options: [
      "To select files to commit",
      "To apply specific commits from one branch to another",
      "To delete commits",
      "To merge all branches"
    ],
    correctAnswer: 1,
    explanation: "git cherry-pick allows you to select specific commits from one branch and apply them to another branch, useful for applying bug fixes across multiple branches.",
    category: "Branching"
  },
  {
    id: "24",
    question: "What happens when you archive a GitHub repository?",
    options: [
      "It's permanently deleted",
      "It becomes read-only and can't be modified",
      "It's hidden from search",
      "It's moved to a backup server"
    ],
    correctAnswer: 1,
    explanation: "Archiving a repository makes it read-only. Users can still view, fork, and star it, but cannot push changes, create issues, or open pull requests.",
    category: "Repository Management"
  },
  {
    id: "25",
    question: "What is a GitHub webhook used for?",
    options: [
      "Catching fish",
      "Triggering external services when repository events occur",
      "Securing repositories",
      "Backing up data"
    ],
    correctAnswer: 1,
    explanation: "Webhooks allow you to build or set up integrations that subscribe to certain events on GitHub, triggering HTTP POST requests to configured URLs when those events occur.",
    category: "Integrations"
  },
  {
    id: "26",
    question: "In GitHub Projects, what are 'custom fields' used for?",
    options: [
      "Creating new repositories",
      "Adding metadata and tracking additional information",
      "Styling project boards",
      "Managing permissions"
    ],
    correctAnswer: 1,
    explanation: "Custom fields in GitHub Projects allow you to add and track additional metadata like priority, effort estimation, status, or any custom information relevant to your workflow.",
    category: "Project Management"
  },
  {
    id: "27",
    question: "What is the purpose of a pull request template?",
    options: [
      "To create repositories faster",
      "To provide a standardized format for pull request descriptions",
      "To merge code automatically",
      "To generate code reviews"
    ],
    correctAnswer: 1,
    explanation: "Pull request templates provide a default structure and checklist that appears when someone creates a pull request, ensuring consistent information and quality standards.",
    category: "Collaboration"
  },
  {
    id: "28",
    question: "What does git log --graph show?",
    options: [
      "Repository statistics",
      "Visual representation of branch and merge history",
      "File changes",
      "Contributor graphs"
    ],
    correctAnswer: 1,
    explanation: "git log --graph displays an ASCII graph of the branch and merge history alongside the commit log, helping visualize the repository's branching structure.",
    category: "Git Commands"
  },
  {
    id: "29",
    question: "What is GitHub Copilot?",
    options: [
      "A code review tool",
      "An AI-powered code completion assistant",
      "A project manager",
      "A testing framework"
    ],
    correctAnswer: 1,
    explanation: "GitHub Copilot is an AI pair programmer that uses machine learning to suggest code and entire functions in real-time based on context and comments.",
    category: "GitHub Features"
  },
  {
    id: "30",
    question: "What is a required status check in branch protection?",
    options: [
      "A mandatory code review",
      "A CI check that must pass before merging",
      "A security scan requirement",
      "A permission verification"
    ],
    correctAnswer: 1,
    explanation: "Required status checks ensure that all required CI tests pass (like build, test, or lint checks) before a pull request can be merged into a protected branch.",
    category: "Security"
  },
  {
    id: "31",
    question: "What does git reflog show?",
    options: [
      "Remote logs",
      "A log of when HEAD and branch references were updated",
      "File change logs",
      "Network activity"
    ],
    correctAnswer: 1,
    explanation: "git reflog shows a log of when the tips of branches and other references were updated in the local repository, useful for recovering lost commits.",
    category: "Git Commands"
  },
  {
    id: "32",
    question: "What is the difference between a draft pull request and a regular pull request?",
    options: [
      "Draft PRs cannot be merged",
      "Draft PRs signal work-in-progress and cannot be merged until marked ready",
      "Draft PRs are private",
      "Draft PRs don't trigger CI/CD"
    ],
    correctAnswer: 1,
    explanation: "Draft pull requests indicate work-in-progress and cannot be merged until explicitly marked as ready for review, preventing premature merges while still allowing early feedback.",
    category: "Collaboration"
  },
  {
    id: "33",
    question: "What is GitHub Packages used for?",
    options: [
      "Shipping physical products",
      "Hosting and managing software packages",
      "Compressing files",
      "Managing dependencies only"
    ],
    correctAnswer: 1,
    explanation: "GitHub Packages is a package hosting service that allows you to host software packages privately or publicly and use them as dependencies in your projects.",
    category: "GitHub Features"
  },
  {
    id: "34",
    question: "What does forking a repository allow you to do that cloning doesn't?",
    options: [
      "Download faster",
      "Propose changes back to the original via pull requests",
      "Edit files locally",
      "Use Git commands"
    ],
    correctAnswer: 1,
    explanation: "Forking creates a server-side copy under your account, allowing you to propose changes back to the original repository via pull requests, while cloning only creates a local copy.",
    category: "Collaboration"
  },
  {
    id: "35",
    question: "In GitHub Actions, what is a 'runner'?",
    options: [
      "A workflow file",
      "A server that executes your workflow jobs",
      "A deployment script",
      "A testing framework"
    ],
    correctAnswer: 1,
    explanation: "A runner is a server (GitHub-hosted or self-hosted) that runs your GitHub Actions workflows. It executes the jobs defined in your workflow files.",
    category: "GitHub Actions"
  },
  {
    id: "36",
    question: "What is semantic versioning (SemVer)?",
    options: [
      "Random version numbers",
      "A versioning scheme using MAJOR.MINOR.PATCH",
      "Date-based versioning",
      "Sequential numbering"
    ],
    correctAnswer: 1,
    explanation: "Semantic Versioning (SemVer) uses a three-part version number: MAJOR.MINOR.PATCH, where MAJOR changes break compatibility, MINOR adds backward-compatible features, and PATCH fixes bugs.",
    category: "Best Practices"
  },
  {
    id: "37",
    question: "What is git bisect used for?",
    options: [
      "Splitting files",
      "Finding the commit that introduced a bug using binary search",
      "Creating two branches",
      "Dividing repositories"
    ],
    correctAnswer: 1,
    explanation: "git bisect uses binary search to find the commit that introduced a bug by having you test commits and marking them as good or bad until the problematic commit is identified.",
    category: "Git Commands"
  },
  {
    id: "38",
    question: "What does a GitHub Release represent?",
    options: [
      "A deleted branch",
      "A packaged version of software with release notes",
      "A merge commit",
      "A repository backup"
    ],
    correctAnswer: 1,
    explanation: "A GitHub Release packages your software at a specific point (usually a tag) with release notes, binary files, and a changelog for users to download specific versions.",
    category: "Distribution"
  },
  {
    id: "39",
    question: "What is the purpose of GitHub Sponsors?",
    options: [
      "Advertising platform",
      "Financially supporting open-source developers",
      "Sponsoring events",
      "Premium features"
    ],
    correctAnswer: 1,
    explanation: "GitHub Sponsors allows the developer community to financially support the people and organizations who design, build, and maintain the open source projects they depend on.",
    category: "Community"
  },
  {
    id: "40",
    question: "What does git revert do?",
    options: [
      "Deletes the last commit",
      "Creates a new commit that undoes a previous commit",
      "Restores deleted files",
      "Resets the branch"
    ],
    correctAnswer: 1,
    explanation: "git revert creates a new commit that undoes the changes from a previous commit, maintaining history rather than deleting commits like git reset would.",
    category: "Git Commands"
  },
  {
    id: "41",
    question: "What is a GitHub Team within an organization?",
    options: [
      "A repository group",
      "A group of organization members with cascading access permissions",
      "A project board",
      "A branch protection rule"
    ],
    correctAnswer: 1,
    explanation: "Teams in GitHub Organizations are groups of organization members that reflect your company or group's structure with cascading access permissions and mentions.",
    category: "Administration"
  },
  {
    id: "42",
    question: "What is the .github directory used for in a repository?",
    options: [
      "Git configuration files",
      "GitHub-specific files like workflows, templates, and community health files",
      "Backup storage",
      "User preferences"
    ],
    correctAnswer: 1,
    explanation: "The .github directory stores GitHub-specific files including Actions workflows, issue/PR templates, CODEOWNERS, funding info, and other community health files.",
    category: "Repository Management"
  },
  {
    id: "43",
    question: "What is GitHub CLI (gh) primarily used for?",
    options: [
      "Web browsing",
      "Bringing GitHub workflow to the command line",
      "Code editing",
      "File management only"
    ],
    correctAnswer: 1,
    explanation: "GitHub CLI (gh) brings pull requests, issues, and other GitHub concepts to the terminal, allowing you to manage GitHub operations from the command line.",
    category: "Tools"
  },
  {
    id: "44",
    question: "What happens when you enable 'Allow merge commits' on a repository?",
    options: [
      "All PRs must be squashed",
      "Pull requests can be merged with all commits preserved",
      "Merging is disabled",
      "Only fast-forward merges allowed"
    ],
    correctAnswer: 1,
    explanation: "Enabling 'Allow merge commits' permits pull requests to be merged with all their commits preserved in the history, creating a merge commit on the base branch.",
    category: "Repository Settings"
  },
  {
    id: "45",
    question: "What is git blame used for?",
    options: [
      "Finding bugs",
      "Showing who last modified each line of a file",
      "Creating reports",
      "Tracking errors"
    ],
    correctAnswer: 1,
    explanation: "git blame shows what revision and author last modified each line of a file, useful for understanding code history and finding who to ask about specific changes.",
    category: "Git Commands"
  },
  {
    id: "46",
    question: "What is GitHub's secret scanning feature designed to detect?",
    options: [
      "Bugs in code",
      "Leaked credentials and tokens committed to repositories",
      "Performance issues",
      "Code quality problems"
    ],
    correctAnswer: 1,
    explanation: "Secret scanning detects secrets (API keys, tokens, passwords) that have been accidentally committed to repositories and alerts you so you can revoke them and prevent security breaches.",
    category: "Security"
  },
  {
    id: "47",
    question: "What is a milestone in GitHub Issues?",
    options: [
      "A commit marker",
      "A way to track progress on groups of issues or pull requests",
      "A release version",
      "A branch marker"
    ],
    correctAnswer: 1,
    explanation: "Milestones are used to track progress on groups of issues or pull requests in a repository, often representing project phases, sprint goals, or feature releases.",
    category: "Project Management"
  },
  {
    id: "48",
    question: "What does git diff HEAD~1 show?",
    options: [
      "Changes in the last commit",
      "Differences between current state and one commit ago",
      "Remote changes",
      "Staged changes only"
    ],
    correctAnswer: 1,
    explanation: "git diff HEAD~1 shows the differences between your current working directory and the state one commit before the current HEAD.",
    category: "Git Commands"
  },
  {
    id: "49",
    question: "What is the purpose of labels in GitHub Issues?",
    options: [
      "Naming repositories",
      "Categorizing and filtering issues and pull requests",
      "Tagging users",
      "Marking commits"
    ],
    correctAnswer: 1,
    explanation: "Labels help categorize, filter, and organize issues and pull requests by type (bug, enhancement), priority, status, or any custom category relevant to your workflow.",
    category: "Project Management"
  },
  {
    id: "50",
    question: "What is GitHub's code scanning feature based on?",
    options: [
      "Manual reviews only",
      "CodeQL analysis and other security tools",
      "Automated testing",
      "User reports"
    ],
    correctAnswer: 1,
    explanation: "GitHub code scanning uses CodeQL (a semantic code analysis engine) and other tools to analyze code for security vulnerabilities and coding errors automatically.",
    category: "Security"
  }
];
