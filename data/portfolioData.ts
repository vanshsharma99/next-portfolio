import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Vansh Sharma",
    title: "Frontend Developer & Full-Stack Engineer",
    role: "Frontend / MERN Developer",
    tagline: "Building scalable web applications, real-time platforms, and AI SaaS productivity tools.",
    bio: [
      "I am a B.Tech Computer Science and Engineering student at Quantum University, Roorkee (2022–2026), working as a Frontend Developer.",
      "Hands-on experience building ERP software, real-time messaging platforms with Socket.IO, and AI-powered SaaS platforms using Next.js, MERN/PERN stack, and Shopify GraphQL APIs."
    ],
    location: "Haridwar, Uttarakhand, India",
    email: "vanshsharma9941@gmail.com",
    phone: "+91-7668689439",
    avatarUrl: "/images/avatar/profilepicture.jpeg",
    resumeUrl: "/documents/Vansh_Sharma_Resume (1).pdf",
    statusBadge: {
      text: "Available for Frontend & Full-Stack Roles",
      available: true
    },
    socials: [
      { platform: "GitHub", url: "https://github.com/vanshsharma99", iconName: "Github" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/vansh-sharma-529937274", iconName: "Linkedin" },
      { platform: "Email", url: "mailto:vanshsharma9941@gmail.com", iconName: "Mail" }
    ],
    stats: [
      { label: "B.Tech CSE", value: "2026", description: "Quantum University" },
      { label: "Industry Projects", value: "3+", description: "Full-Stack & AI Apps" },
      { label: "Experience", value: "3 Roles", description: "Frontend & SAP Intern" },
      { label: "Core Stack", value: "MERN & PERN", description: "React, Next.js, Node, DB" }
    ]
  },
  skills: [
    { name: "TypeScript", category: "frontend", level: 92, featured: true },
    { name: "JavaScript (ES6+)", category: "frontend", level: 95, featured: true },
    { name: "React.js / Next.js 16", category: "frontend", level: 92, featured: true },
    { name: "Tailwind CSS", category: "frontend", level: 95, featured: true },
    { name: "HTML5 & CSS3", category: "frontend", level: 98, featured: true },
    { name: "Node.js & Express.js", category: "backend", level: 88, featured: true },
    { name: "Shopify GraphQL API", category: "backend", level: 88, featured: true },
    { name: "RESTful APIs & GraphQL", category: "backend", level: 90, featured: true },
    { name: "MongoDB", category: "database", level: 88, featured: true },
    { name: "PostgreSQL & Prisma", category: "database", level: 85, featured: true },
    { name: "SQL", category: "database", level: 88, featured: true },
    { name: "AWS & Vercel", category: "cloud", level: 82, featured: true },
    { name: "Docker & CI/CD", category: "cloud", level: 75, featured: false },
    { name: "Git & GitHub Actions", category: "tools", level: 92, featured: true },
    { name: "VS Code & IntelliJ IDEA", category: "tools", level: 90, featured: false },
    { name: "Postman API Platform", category: "tools", level: 88, featured: false },
    { name: "ImageKit & Cloudinary", category: "tools", level: 88, featured: false }
  ],
  projects: [
    {
      id: "quickai",
      title: "QuickAi – AI SaaS Productivity Platform",
      tagline: "AI-powered content generation, image creation, and resume review tools.",
      description: "An AI SaaS platform built using PERN Stack, integrating Gemini APIs for content generation and Clerk for subscription billing.",
      longDescription: "Developed an AI-powered SaaS platform offering text generation, image creation, and resume review tools. Integrated Google Gemini APIs for AI capabilities, Clerk for authentication and subscription billing, and designed a modern dashboard for managing user creations and plans.",
      category: "ai",
      tags: ["PERN Stack", "Gemini API", "Clerk", "PostgreSQL", "Express.js", "React.js", "Node.js"],
      imageUrl: "/images/projects/quickai.jpg",
      demoUrl: "https://thequick-ai.vercel.app",
      githubUrl: "https://github.com/vanshsharma99/QuickAI",
      featured: true,
      keyFeatures: [
        "Integrated Gemini APIs for AI-driven text & image generation",
        "Resume review tool and content generation suite",
        "Authentication and subscription billing via Clerk",
        "Modern responsive user dashboard for managing creations"
      ]
    },
    {
      id: "quickchat",
      title: "Real-Time Chat Application (QuickChat)",
      tagline: "Instant messaging platform with Socket.IO, JWT auth, and media sharing.",
      description: "Real-time chat platform using Socket.IO, MongoDB, and Cloudinary for file sharing with live online user status indicators.",
      longDescription: "Developed a real-time messaging application using Socket.IO for instant communication. Implemented secure JWT-based authentication with encrypted credentials, stored chat history in MongoDB, and integrated Cloudinary for image/file sharing within a responsive React and Tailwind CSS UI.",
      category: "fullstack",
      tags: ["MERN", "Socket.IO", "MongoDB", "Express.js", "React.js", "Tailwind CSS", "Cloudinary"],
      imageUrl: "/images/projects/quickchat.jpg",
      demoUrl: "https://the-chatapp-quickchat.vercel.app/login",
      githubUrl: "https://github.com/vanshsharma99/chat-app",
      featured: true,
      keyFeatures: [
        "Real-time instant messaging using Socket.IO",
        "JWT authentication with encrypted credentials",
        "MongoDB storage for user profiles and chat history",
        "Cloudinary integration for image and file attachments",
        "Live status indicators for online users"
      ]
    },
    {
      id: "food-delivery",
      title: "Food Delivery Web Application",
      tagline: "Full-stack food ordering system with RESTful APIs and ImageKit integration.",
      description: "Built a food delivery platform using MERN stack with JWT authentication, Node/Express APIs, and optimized ImageKit media storage.",
      longDescription: "Built a full-stack food delivery platform using the MERN stack. Features JWT-based user authentication, RESTful APIs using Node.js & Express.js for order workflows, MongoDB for data management, responsive React UI, and ImageKit for fast image delivery.",
      category: "fullstack",
      tags: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "JWT", "ImageKit"],
      imageUrl: "/images/projects/food-delivery.jpg",
      githubUrl: "https://github.com/vanshsharma99/FoodCart",
      featured: true,
      keyFeatures: [
        "JWT-based secure user authentication",
        "Scalable RESTful APIs built with Node.js and Express.js",
        "MongoDB database for users, food items, and orders",
        "ImageKit optimization for high-speed media delivery"
      ]
    }
  ],
  experience: [
    {
      id: "inext",
      role: "Frontend Developer",
      company: "iNext Web Technologies Pvt Ltd",
      location: "Chandigarh",
      period: "April 2026 – Present",
      current: true,
      description: [
        "Working on ERPAG, an ERP platform built using the MERN stack, contributing to features that help manage core business operations end-to-end.",
        "Contributing to a B2B project, building and maintaining frontend features to support business-to-business workflows."
      ],
      skills: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Express.js", "B2B Workflows"]
    },
    {
      id: "neel-metal",
      role: "SAP Consultant Intern",
      company: "Neel Metal Products Limited",
      location: "Haridwar, Uttarakhand",
      period: "July 2025 – August 2025",
      current: false,
      description: [
        "Gained hands-on exposure to SAP S/4HANA modules, working alongside consultants to understand configuration and core business process flows.",
        "Studied end-to-end ERP integration within a manufacturing environment, gaining practical insight into how SAP supports production, inventory, and supply chain operations."
      ],
      skills: ["SAP S/4HANA", "ERP Integration", "Supply Chain", "Business Process Flow"]
    },
    {
      id: "codtech",
      role: "Frontend Developer",
      company: "CodTech IT Solutions",
      location: "Remote",
      period: "July 2024 – August 2024",
      current: false,
      description: [
        "Designed and developed an animated, fully responsive portfolio website from scratch using HTML, CSS, and JavaScript with smooth transitions and micro-interactions.",
        "Improved UI consistency and cross-device usability by implementing CSS media queries and responsive layout techniques across desktop, tablet, and mobile screens."
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Micro-interactions"]
    }
  ],
  education: [
    {
      id: "quantum",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Quantum University",
      location: "Roorkee, Uttarakhand",
      period: "2022 – 2026",
      highlights: [
        "Specialized in Full-Stack Web Development & Software Engineering",
        "Built multiple production-ready MERN & PERN stack applications"
      ]
    }
  ],
  certifications: [
    {
      id: "cert-1",
      title: "SQL Certification",
      issuer: "HackerRank"
    },
    {
      id: "cert-2",
      title: "Backend Development Course",
      issuer: "Physics Wallah"
    },
    {
      id: "cert-3",
      title: "Introduction to Microsoft Excel",
      issuer: "Coursera"
    }
  ],
  testimonials: [
    {
      id: "test-1",
      name: "Engineering Lead",
      role: "Project Manager",
      company: "iNext Web Technologies",
      quote: "Vansh delivers clean, responsive frontend features for enterprise ERP systems with great technical initiative and teamwork.",
      rating: 5
    }
  ],
  terminalCommands: [
    {
      command: "whoami",
      description: "Display Vansh Sharma profile summary",
      output: "Vansh Sharma | Frontend Developer & B.Tech CSE Student at Quantum University, Roorkee."
    },
    {
      command: "skills",
      description: "List technical stack",
      output: [
        "Frontend: TypeScript, JavaScript (ES6+), React.js, Next.js 16, Tailwind CSS, HTML5/CSS3",
        "Backend: Node.js, Express.js, Shopify GraphQL API, RESTful APIs, GraphQL",
        "Databases: MongoDB, PostgreSQL, Prisma, SQL",
        "Cloud & Tools: AWS, Vercel, Docker, CI/CD, Git, GitHub Actions, Postman, ImageKit, Cloudinary"
      ]
    },
    {
      command: "experience",
      description: "List work history",
      output: [
        "1. Frontend Developer @ iNext Web Technologies (MERN ERPAG platform)",
        "2. SAP Consultant Intern @ Neel Metal Products Limited (SAP S/4HANA)",
        "3. Frontend Developer @ CodTech IT Solutions (Responsive Web UI)"
      ]
    },
    {
      command: "education",
      description: "Show degree details",
      output: "B.Tech in Computer Science and Engineering — Quantum University, Roorkee (2022 - 2026)"
    },
    {
      command: "certifications",
      description: "List earned certifications",
      output: ["• HackerRank SQL Certification", "• Physics Wallah Backend Development", "• Coursera Introduction to Microsoft Excel"]
    },
    {
      command: "contact",
      description: "Show contact channels",
      output: "Email: vanshsharma9941@gmail.com | GitHub: github.com/vanshsharma99 | LinkedIn: linkedin.com/in/vansh-sharma-529937274"
    },
    {
      command: "help",
      description: "List available terminal commands",
      output: "Available commands: whoami, skills, experience, education, certifications, contact, clear"
    }
  ]
};
