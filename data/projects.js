import carromImg from "@/public/assets/carrom-pro.png";
import notioImg from "@/public/assets/notio.png";
import keenImg from "@/public/assets/keen.png";
import suncartImg from "@/public/assets/suncartImg.png";

export const projects = [
  {
    id: 4,
    name: "SunCart",
    slug: "suncart",
    image: suncartImg,
    tags: ["E-Commerce", "Next.js", "Shopping App"],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "HeroUI",
      "BetterAuth",
      "JavaScript",
      "LocalStorage",
      "Animate.css",
    ],
    description:
      "A modern and responsive eCommerce web application built with Next.js for summer-themed products like sunglasses, outfits, skincare, and beach accessories. Users can browse products, view detailed product information, manage cart functionality, authenticate securely, and complete a frontend checkout experience with smooth UI interactions and responsive design.",
    liveLink: "https://sun-cart-taupe.vercel.app/",
    github: "https://github.com/AMIRUL1104/SunCart",
    challenges: [
      "Implementing protected routes for product details and profile pages using authentication",
      "Managing persistent cart functionality with LocalStorage while keeping UI state synchronized",
      "Building a scalable eCommerce structure using Next.js App Router architecture",
      "Creating responsive layouts and smooth user experience across mobile, tablet, and desktop devices",
      "Implementing related product recommendation logic based on category matching",
    ],
    improvements: [
      "Integrate real payment gateway functionality like Stripe or SSLCommerz",
      "Connect a real backend database instead of static JSON product data",
      "Add product search, advanced filtering, and sorting system",
      "Implement admin dashboard for managing products and orders",
      "Add order history and user purchase tracking functionality",
      "Optimize performance further with server-side data fetching and image optimization",
    ],
    reverse: true,
  },
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
