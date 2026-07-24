import bookbridgeImg from "../public/assets/bookbridge.png";
import sportnestImg from "@/public/assets/sportnest.png";
import medicareConnectImg from "@/public/assets/medicare-connect.png";

export const projects = [
  {
    id: 1,
    title: "BookBridge",
    slug: "bookbridge",

    category: "Full Stack",
    status: "Completed",
    featured: true,
    year: "2026",

    thumbnail: bookbridgeImg,

    shortDescription:
      "A full-stack marketplace for buying, selling, and donating used academic books with role-based dashboards and secure authentication.",

    fullDescription:
      "BookBridge is a community-driven platform that enables students to buy, sell, and donate used academic books. It features secure authentication, advanced book management, role-based dashboards, and a complete request workflow to make academic resources more affordable and accessible.",

    role: "Full Stack Developer",
    team: "Solo Project",

    techStack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "HeroUI",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "React Hook Form",
      "Zod",
      "ImgBB",
    ],

    keyFeatures: [
      "Secure authentication with Better Auth",
      "Role-based User & Admin dashboards",
      "Book posting and management",
      "Book request workflow",
      "Advanced search, filtering & sorting",
      "Responsive design",
    ],

    backendFeatures: [
      "REST API architecture",
      "Role-based authorization",
      "Book management APIs",
      "Book request APIs",
      "Profile management APIs",
      "Admin management APIs",
    ],

    authentication: [
      "Better Auth",
      "Protected Routes",
      "Role-based Access Control",
      "Secure Session Management",
    ],

    database: ["Users", "Books", "Book Requests", "Categories"],

    aiFeatures: [],

    challenges: [
      "Implementing the complete book request workflow",
      "Preventing duplicate requests",
      "Synchronizing book availability after request approval",
      "Designing role-based dashboard access",
      "Building scalable APIs with Express.js",
    ],

    improvements: [
      "Real-time notifications",
      "Chat system",
      "Wishlist",
      "Payment integration",
      "Delivery tracking",
      "Ratings & Reviews",
      "Email notifications",
    ],

    liveLink: "https://bookbridgebd.vercel.app",

    github: {
      frontend: "https://github.com/AMIRUL1104/BookBridge",
      backend: "https://github.com/AMIRUL1104/BookBridge-Server",
    },

    reverse: false,
  },
  {
    id: 2,
    title: "SportNest",
    slug: "sportnest",

    category: "Full Stack",
    status: "Completed",
    featured: true,
    year: "2026",

    thumbnail: sportnestImg,

    shortDescription:
      "A full-stack sports facility booking platform that enables users to discover, book, and manage sports venues with secure authentication and role-based access.",

    fullDescription:
      "SportNest is a modern sports facility booking platform that connects sports enthusiasts with venue owners. Users can explore facilities, book available time slots, and manage reservations, while venue owners can efficiently manage their facilities and bookings through dedicated dashboards.",

    role: "Full Stack Developer",
    team: "Solo Project",

    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "HeroUI",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "React Hook Form",
      "React Toastify",
      "React Icons",
    ],

    keyFeatures: [
      "Secure authentication with Better Auth",
      "Sports facility discovery with search and filters",
      "Online facility booking system",
      "Booking management and status tracking",
      "Venue owner dashboard",
      "Responsive and mobile-first design",
    ],

    backendFeatures: [
      "REST API architecture",
      "Facility management APIs",
      "Booking management APIs",
      "Authentication & authorization",
      "Protected routes",
      "MongoDB database integration",
    ],

    authentication: [
      "Better Auth",
      "Google OAuth",
      "Protected Routes",
      "Role-based Access Control",
    ],

    database: ["Users", "Facilities", "Bookings", "Categories"],

    aiFeatures: [],

    challenges: [
      "Designing a scalable booking workflow",
      "Managing booking status efficiently",
      "Implementing secure authentication and authorization",
      "Building responsive booking interfaces across devices",
      "Synchronizing facility availability with bookings",
    ],

    improvements: [
      "Online payment integration",
      "Email notifications",
      "Real-time booking updates",
      "Reviews and ratings",
      "Favorite facilities",
      "AI-powered sports facility recommendations",
    ],

    liveLink: "https://sportnest-go.vercel.app/",

    github: {
      frontend: "https://github.com/AMIRUL1104/SportNest",
      backend: "https://github.com/AMIRUL1104/SportNest-Backend",
    },

    reverse: true,
  },
  {
    id: 3,
    title: "MediCare Connect",
    slug: "medicare-connect",

    category: "Full Stack",
    status: "Completed",
    featured: true,
    year: "2026",

    thumbnail: medicareConnectImg,

    shortDescription:
      "A full-stack healthcare management platform that enables patients to book appointments, doctors to manage consultations, and admins to oversee the entire healthcare ecosystem.",

    fullDescription:
      "MediCare Connect is a comprehensive healthcare platform designed to streamline doctor discovery, appointment booking, digital prescriptions, secure payments, and role-based healthcare management. The platform delivers a complete digital healthcare experience for patients, doctors, and administrators through modern web technologies and production-ready architecture.",

    role: "Full Stack Developer",
    team: "Solo Project",

    techStack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HeroUI",
      "Framer Motion",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "JWT",
      "Stripe",
      "ImageBB",
      "React Hook Form",
      "Recharts",
    ],

    keyFeatures: [
      "Secure authentication and role-based access",
      "Doctor discovery with search, filtering, and sorting",
      "Multi-step appointment booking system",
      "Stripe payment integration",
      "Digital prescription management",
      "Patient, Doctor, and Admin dashboards",
      "Doctor review and rating system",
      "Responsive and mobile-friendly interface",
    ],

    backendFeatures: [
      "REST API architecture",
      "Appointment management APIs",
      "Doctor management APIs",
      "Patient management APIs",
      "Prescription management APIs",
      "Payment APIs",
      "Role-based authorization",
      "Image upload handling",
    ],

    authentication: [
      "Better Auth",
      "JWT Session Management",
      "Protected Routes",
      "Role-based Access Control",
    ],

    database: [
      "Users",
      "Doctors",
      "Appointments",
      "Prescriptions",
      "Payments",
      "Reviews",
    ],

    aiFeatures: [],

    challenges: [
      "Designing a complete healthcare booking workflow",
      "Managing multiple user roles with different permissions",
      "Integrating Stripe payment securely",
      "Synchronizing appointment availability",
      "Building scalable dashboard architecture",
    ],

    improvements: [
      "AI-powered symptom analysis",
      "Video consultation support",
      "Real-time notifications",
      "Email and SMS reminders",
      "Medical report management",
      "Health record history",
    ],

    liveLink: "https://medicare-connect-two.vercel.app",

    github: {
      frontend: "https://github.com/AMIRUL1104/Medicare-Connect",
      backend: "https://github.com/AMIRUL1104/Medicare-Connect-server",
    },

    reverse: false,
  },
];
