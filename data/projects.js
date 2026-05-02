import carromImg from "@/public/assets/carrom-pro.png";
import notioImg from "@/public/assets/notio.png";
import keenImg from "@/public/assets/keen.png";

export const projects = [
  {
    id: 1,
    name: "Smart Task Dashboard",
    slug: "smart-task-dashboard",
    image: notioImg,
    tags: ["Productivity", "Dashboard"],
    techStack: ["React", "JavaScript", "Tailwind CSS", "LocalStorage"],
    description:
      "A task management dashboard where users can add, update, filter, and manage tasks with priority and status tracking. Features real-time UI updates and local storage persistence for a seamless experience.",
    liveLink: "https://notio-three.vercel.app/",
    github: "https://github.com/AMIRUL1104/SmartTasKDashboard",
    challenges: [
      "Complex state handling for filtering and searching tasks simultaneously",
      "Maintaining UI consistency with dynamic updates across multiple task states",
      "LocalStorage sync with React state to persist data across sessions",
    ],
    improvements: [
      "Add drag-and-drop task management with priority reordering",
      "Integrate backend (Firebase/Node.js) for cloud persistence",
      "Add team collaboration features with real-time updates",
    ],
    reverse: false,
  },
  {
    id: 2,
    name: "Carrom Scoreboard Pro",
    slug: "carrom-scoreboard-pro",
    image: carromImg,
    tags: ["Game Tool", "Interactive UI"],
    techStack: ["React", "JavaScript", "CSS", "LocalStorage"],
    description:
      "A real-time carrom scoreboard app where players can track scores, manage turns, and maintain match history efficiently. Designed for smooth gameplay with a clean, intuitive interface.",
    liveLink: "https://carrom-scoreboard-pro.netlify.app/",
    github: "https://github.com/AMIRUL1104/Carrom-Scoreboard-Pro",
    challenges: [
      "Real-time score update without page reload using React state",
      "Managing complex state for multiple players and turn rotations",
      "Persisting match history and scores using LocalStorage",
    ],
    improvements: [
      "Add online multiplayer support via WebSockets",
      "User authentication system with match history per profile",
      "Game statistics analytics dashboard with charts",
    ],
    reverse: true,
  },
  {
    id: 3,
    name: "Keen Keeper",
    slug: "keen-keeper",
    image: keenImg,
    tags: ["Utility", "Web App"],
    techStack: ["React", "JavaScript", "CSS"],
    description:
      "A note-taking application that allows users to quickly capture, edit, and manage notes in a clean, minimalistic interface. Built for speed and simplicity with a focus on user experience.",
    liveLink: "https://keen-keeper-web-app.vercel.app/",
    github: "https://github.com/AMIRUL1104/Keen-Keeper",
    challenges: [
      "Managing dynamic notes state efficiently without unnecessary re-renders",
      "Ensuring smooth UI/UX for quick note creation and deletion interactions",
      "Designing reusable components for a scalable note management system",
    ],
    improvements: [
      "Add cloud sync functionality for cross-device access",
      "Rich text editor support with markdown rendering",
      "Tagging, categorization, and advanced search system",
    ],
    reverse: false,
  },
];
