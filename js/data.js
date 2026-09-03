/* ============================================================
   PORTFOLIO DATA — Edit this file to update all site content
   ============================================================ */

const PORTFOLIO_DATA = {

  /* ────────── Personal Info ────────── */
  personal: {
    name: 'Prince John',
    logoText: 'PJ.',
    heroGreeting: "Hi, I'm",
    badgeText: 'Open to opportunities',
    description:
      'Results-driven developer bridging AI and full-stack engineering. I build user-centric applications that solve real problems in education, finance, and the circular economy.',
    roles: [
      'AI & ML Engineer',
      'Full-Stack Developer',
      'Hackathon Builder',
      'Agentic AI Enthusiast',
      'IoT Tinkerer',
      'Problem Solver',
    ],
    email: 'princejohn1700@gmail.com',
    phone: '+91 9400206726',
    github: 'https://github.com/princejohnongit',
    linkedin: 'https://linkedin.com/in/prince-john-ing',
    portraitImage: 'assets/prince-portrait.jpg',
  },

  /* ────────── Navigation Links ────────── */
  navLinks: [
    { id: 'hero', label: 'Home', icon: '⌂' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'hackathons', label: 'Hackathons', icon: '🏆' },
    { id: 'certifications', label: 'Credentials', icon: '🎓' },
    { id: 'contact', label: "Let's Talk", icon: '✉️' },
  ],

  /* ────────── About ────────── */
  about: {
    label: 'Who I Am',
    title: 'About Me',
    subtitle: 'Building at the intersection of AI, engineering, and real-world impact.',
    paragraphs: [
      `I'm <span class="highlight">Prince John</span>, a B.Tech student specializing in <span class="highlight">Artificial Intelligence & Machine Learning</span> at Mar Athanasius College of Engineering, Kerala. I'm passionate about building technology that makes a tangible difference.`,
      `From AI-powered grading systems to IoT smart shelves, I bridge the gap between cutting-edge research and practical applications. My experience at <span class="highlight">Cognizant</span> sharpened my skills in ML, NLP, and data engineering — and every hackathon I enter pushes me to build faster, think deeper, and solve harder problems.`,
      `I thrive in collaborative environments where ideas become prototypes and prototypes become products. Whether it's fine-tuning LLMs, designing agentic workflows, or wiring up ESP32 cameras — I'm all in.`,
    ],
    philosophy: '"Tech for good. Code for impact. Building meaningful things, one idea at a time."',
    stats: [
      { count: 17, label: 'GitHub Repos' },
      { count: 8, label: 'Projects Built' },
      { count: 3, label: 'Certifications' },
      { count: 3, label: 'Hackathons' },
    ],
  },

  /* ────────── Experience ────────── */
  experience: {
    label: 'Career Path',
    title: 'Professional Experience',
    subtitle: 'Real-world training that sharpened my engineering edge.',
    items: [
      {
        role: 'Software Engineering Intern',
        company: 'VCODE Infotech · Thodupuzha',
        date: 'Jul 2026 — Ongoing',
        duties: [
          'Independently developing a full-stack web application (RecipeHub, an instagram purely for food), taking ownership of the project from requirement analysis and system design through development, and testing.',
          'Debugged issues, tested functionality, and refined the application based on requirements and feedback.',
        ],
      },
      {
        role: 'Training Intern',
        company: 'Cognizant · Siruseri, Chennai',
        date: 'Jan 2026 — Apr 2026',
        duties: [
          'Trained on Machine Learning under the AIA (AI & Analytics) Service Line',
          'Completed 2 hands-on projects and earned 17 Udemy certifications',
          'Built expertise in Data Warehousing, PySpark, GitHub Copilot, ML, NLP, and Feature Engineering',
          'Applied real-world ML pipelines to structured and unstructured data problems',
        ],
      },
      {
        role: 'Assisted Intern',
        company: 'Teachnook Edtech · Online',
        date: 'Jul 2023 — Aug 2023',
        duties: [
          'Learned and implemented foundational Machine Learning techniques',
          'Gained hands-on experience with supervised learning algorithms and data preprocessing',
        ],
      },
    ],
  },

  /* ────────── Projects ────────── */
  projects: {
    label: 'My Work',
    title: 'Featured Projects',
    subtitle: 'From AI-powered platforms to IoT smart systems — each project solves a real problem.',
    items: [
      {
        name: 'GraderAI',
        icon: '🎯',
        description:
          'AI-native answer sheet evaluation platform using RAG and agentic workflows. Automates grading with LLMs, OCR, and vector search for accurate, explainable scoring.',
        tags: ['FastAPI', 'React', 'Pinecone', 'LangGraph', 'LLM', 'Tesseract'],
        github: 'https://github.com/princejohnongit/graderai',
      },
      {
        name: 'Repart',
        icon: '🔁',
        description:
          'Agentic solution for upcycling in the circular economy. Connects users with reusable parts, promotes sustainability through AI-driven recommendations and automated workflows.',
        tags: ['n8n', 'React', 'Django', 'MongoDB'],
        github: 'https://github.com/princejohnongit',
      },
      {
        name: 'SupFlow',
        icon: '⛓️',
        description:
          'Democracy in supply chains. A smart platform integrating AI + blockchain to enable transparency, user-driven decisions, and government collaboration. Built at .hack();_ 2024.',
        tags: ['AI', 'Blockchain', 'Supply Chain'],
        github: 'https://github.com/princejohnongit',
      },
      {
        name: 'SmartBud (BUDai)',
        icon: '💰',
        description:
          'Your personal finance guide. Generates optimal financial plans based on spending habits and financial health score. Built from scratch in 24 hours at HFT 2024.',
        tags: ['Dart', 'Flutter', 'Finance AI'],
        github: 'https://github.com/princejohnongit/BUDai_HFT',
      },
      {
        name: 'ElderGuard',
        icon: '🛡️',
        description:
          'AI-based monitoring system ensuring safety and well-being of senior citizens with emergency alerts, activity tracking, and real-time health monitoring. Built at Hackify Hackathon.',
        tags: ['JavaScript', 'AI', 'HealthTech'],
        github: 'https://github.com/princejohnongit/ElderGuard',
      },
      {
        name: 'SmartShelf',
        icon: '📦',
        description:
          'Image-based smart commercial shelf tracking for supermarkets. Uses ESP32-CAM and AI-powered image processing with Roboflow to automate inventory monitoring via event triggers.',
        tags: ['ESP32-CAM', 'Roboflow', 'Python', 'IoT'],
        github: 'https://github.com/princejohnongit/SmartShelf-using-AIoT',
      },
      {
        name: 'AI Research Agent',
        icon: '🔬',
        description:
          'An agentic helper for academic research. Automates literature discovery, summarization, and synthesis using LangChain-powered LLM orchestration with structured outputs.',
        tags: ['LangChain', 'Pydantic', 'LLM', 'Agents'],
        github: 'https://github.com/princejohnongit/AI_Research_Agent',
      },
      {
        name: 'Deep Learning Lab',
        icon: '🧠',
        description:
          'Collection of trained deep learning models across CIFAR-10, MNIST, and IMDB datasets. Covers architectures from basic MLPs to advanced CNNs, RNNs, LSTMs, and GRUs with regularization.',
        tags: ['CNN', 'VGG-19', 'RNN', 'LSTM', 'GRU'],
        github: 'https://github.com/princejohnongit/DeepLearning-S7-AI-ML-KTU-Lab',
      },
      {
        name: 'Diabetes Reduction Management System',
        icon: '🏥',
        description: 'Implemented an AI-driven health management system using A* search algorithm.',
        tags: ['AI', 'A* Search', 'HealthTech'],
        github: null,
      },
    ],
  },

  /* ────────── Skills ────────── */
  skills: {
    label: 'What I Know',
    title: 'Skills & Technologies',
    subtitle: 'A versatile toolkit spanning AI, full-stack, and hardware.',
    categories: [
      {
        name: 'Programming Languages',
        icon: '💻',
        colorClass: 'blue',
        items: ['Python', 'Dart', 'JavaScript', 'C', 'C++', 'Java', 'R', 'HTML/CSS', 'SQL', 'OpenCV'],
      },
      {
        name: 'AI & Machine Learning',
        icon: '🤖',
        colorClass: 'violet',
        items: ['Deep Learning', 'NLP', 'LLMs', 'Computer Vision', 'RAG', 'Agentic AI', 'Feature Engineering', 'Model Training', 'Heuristic Search'],
      },
      {
        name: 'Frameworks & Tools',
        icon: '⚙️',
        colorClass: 'cyan',
        items: ['FastAPI', 'React', 'Django', 'Flutter', 'LangChain', 'LangGraph', 'n8n', 'PySpark'],
      },
      {
        name: 'Databases & Cloud',
        icon: '🗃️',
        colorClass: 'pink',
        items: ['MongoDB', 'Pinecone', 'Kubernetes', 'Data Warehousing', 'DBMS'],
      },
      {
        name: 'IoT & Hardware',
        icon: '🔌',
        colorClass: 'emerald',
        items: ['ESP32-CAM', 'Xiao ESP32S3', 'Roboflow', 'Tesseract OCR', 'Smart Sensors'],
      },
      {
        name: 'Soft Skills',
        icon: '🧩',
        colorClass: 'blue',
        items: ['Communication', 'Collaboration', 'Team Management', 'Public Speaking', 'Problem Solving'],
      },
      {
        name: 'Software Development',
        icon: '🛠️',
        colorClass: 'orange',
        items: ['Designing Applications', 'Writing Code', 'Debugging'],
      },
      {
        name: 'Languages',
        icon: '🗣️',
        colorClass: 'yellow',
        items: ['English (Fluent)', 'Malayalam (Native)', 'Hindi (Basic)', 'Tamil (Basic)'],
      },
    ],
  },

  /* ────────── Hackathons ────────── */
  hackathons: {
    label: 'Compete & Create',
    title: 'Hackathon Highlights',
    subtitle: 'Where pressure meets creativity — my best work under time constraints.',
    items: [
      {
        name: 'ASAP Idea Fest Ideathon',
        emoji: '🥈',
        date: 'December 2024',
        description: 'Won 2nd Prize for a sustainable supply chain solution using smart, green tech and data-led planning to reduce environmental impact.',
        badge: '🏆 2nd Prize Winner',
        badgeClass: 'winner',
      },
      {
        name: '.hack();_ 2024',
        emoji: '💡',
        date: '2024',
        description: 'Built SupFlow — an AI + blockchain-based platform that brings democracy and transparency to supply chains, empowering citizen oversight.',
        badge: '🚀 Project Shipped',
        badgeClass: 'participant',
      },
      {
        name: 'HFT-2024 (Hack for Tomorrow)',
        emoji: '⏱️',
        date: '2024',
        description: 'Created SmartBud — a personal finance planning app generating optimal budgets based on spending habits. Built entirely from scratch in just 24 hours.',
        badge: '⚡ 24hr Build',
        badgeClass: 'participant',
      },
      {
        name: 'Hack-A-Addict: Tech Against Drug Addiction',
        emoji: '💊',
        date: '2024',
        description: 'Mobile app to monitor, track, and help users reduce drug consumption through analytics and gamification.',
        badge: '📱 HealthTech',
        badgeClass: 'participant',
      },
      {
        name: '.hack();_ 2025',
        emoji: '💡',
        date: '2025',
        description: 'Agentic solution for upcycling in the circular economy. Connects users with reusable parts, promotes sustainability through AI-driven recommendations and automated workflows.',
        badge: '🚀 Project Shipped',
        badgeClass: 'participant',
      }
    ],
  },

  /* ────────── Certifications ────────── */
  certifications: {
    label: 'Credentials',
    title: 'Certifications & Education',
    subtitle: 'Continuous learning across AI, cloud, and developer tools.',
    items: [
      {
        name: 'SAP Certified Associate — SAP Generative AI Developer',
        issuer: 'SAP',
        date: 'Sep 2025',
        icon: '🏅',
        link: 'https://www.credly.com/badges/a48ca952-af5e-43e4-b11f-332a2dd93df8/embedded'

      },
      {
        name: 'Introduction to Kubernetes & Cloud Native Technologies',
        issuer: 'edX',
        date: 'Jun 2024',
        icon: '☁️',
        link: 'https://credentials.edx.org/credentials/1d1557bc56284dc6a68be11d5729c808/'
      },
      {
        name: 'Joy of Computing Using Python',
        issuer: 'NPTEL',
        date: 'Apr 2024',
        icon: '🐍',
        link: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs57/Course/NPTEL24CS57S55530048430426484.pdf'
      },
    ],
  },

  /* ────────── Education ────────── */
  education: {
    school: 'Mar Athanasius College of Engineering',
    degree: 'Bachelor of Technology in Artificial Intelligence & Machine Learning',
    details: 'Kothamangalam, Kerala, India · Oct 2022 - Jul 2026',
    cgpa: 'CGPA: 8.63',
    icon: '🎓',
    image: 'assets/College_Front.png',
    logo: 'assets/collegelogo.png',
    relevantcoursework: [
      'Machine Learning',
      'Artificial Intelligence',
      'Natural Language Processing',
      'Robotics and Intelligent Systems',
      'Deep Learning',
      'Reinforcement Learning Concepts',
      'Data Structure',
      'Database Management System',
      'Data Handling and Visualization',
      'R',
      'Python',
      'JAVA',
      'C',
      'Soft Computing',
      'Web Programming',
      'IoT and Smart Technologies',
      'Logic System Design',
      'Mathematical Foundation for Machine Learning',
      'Operating System',
      'Computer Networks',
      'Algorithm Analysis and Design'
    ]
  },

  /* ────────── Leadership & Interests ────────── */
  leadership: {
    label: 'Beyond Code',
    title: 'Leadership & Interests',
    subtitle: 'What drives me outside of daily development.',
    categories: [
      {
        name: 'Clubs & Societies',
        icon: '🤝',
        colorClass: 'pink',
        items: [
          'Active Volunteer for Training and Placement Cell, MACE',
          'Active member of Indian Society for Technical Education',
          'Mentor for Local Club in Programming Introduction Class',
        ],
      },
      {
        name: 'Interests',
        icon: '🌟',
        colorClass: 'emerald',
        items: [
          'Artificial Intelligence & Machine Learning',
          'IoT & Embedded Systems',
          'Healthcare Technology & Accessibility',
          'Sustainable Innovation & Social Impact',
        ],
      },
    ],
  },

  /* ────────── Contact ────────── */
  contact: {
    label: 'Reach Out',
    title: "Let's Build Something Together",
    subtitle:
      "I'm always open to discussing new projects, creative ideas, or opportunities to be part of something impactful.",
    links: [
      { icon: '📧', text: 'princejohn1700@gmail.com', href: 'mailto:princejohn1700@gmail.com' },
      { icon: '💼', text: 'LinkedIn', href: 'https://linkedin.com/in/prince-john-ing', external: true },
      { icon: '🐙', text: 'GitHub', href: 'https://github.com/princejohnongit', external: true },
      { icon: '📱', text: 'Call Me', href: 'tel:+919400206726' },
      { icon: '💬', text: 'WhatsApp', href: 'https://wa.me/919400206726', external: true },
    ],
  },

  /* ────────── Personal Life ────────── */
  personalLife: {
    label: 'My Journey',
    title: 'Personal Life',
    subtitle: 'A timeline of my life.',
    timeline: [
      {
        date: '21st May 2004, 7:45 PM',
        title: 'The Beginning',
        description: 'Born at Bishop Vayalil Medical Centre, Moolamattom, Kerala.',
      },
      {
        date: 'Age 3',
        title: 'Joined Kindergarten',
        description:
          'Even though underage, I had to repeat Lower Kindergarten since I was underage — a soft-hearted silent kid, who is absolutely kind.',
      },
    ],
  },

  /* ────────── Footer ────────── */
  footer: {
    text: 'Built with <span class="heart">♥</span> by Prince John · © 2026',
    links: [
      { text: 'GitHub', href: 'https://github.com/princejohnongit' },
      { text: 'LinkedIn', href: 'https://linkedin.com/in/prince-john-ing' },
      { text: 'Email', href: 'mailto:princejohn1700@gmail.com' },
    ],
  },

  /* ────────── SEO ────────── */
  seo: {
    title: 'Prince John — AI & Full-Stack Developer',
    description:
      'Prince John is an AI/ML engineer and full-stack developer building impactful solutions in AI, IoT, and Blockchain. B.Tech student, hackathon winner, and Cognizant-trained professional.',
    keywords:
      'Prince John, AI Developer, Machine Learning, Full-Stack Developer, Portfolio, AI/ML Engineer',
    ogUrl: 'https://princejohnongit.github.io',
    googleVerification: 'R43b9Ie7PO9M8PEUWpmv0nwCClM7hw1Oj38hLpoxNe4',
  },
};
