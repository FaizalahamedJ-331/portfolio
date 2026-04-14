import { Github, Linkedin, Mail, Code, Layout, Database, Server, Smartphone, Globe, Cloud, Terminal, Cpu, GitBranch, Shield, PlayCircle, FileText, Lock, Users, Play, FileCheck, FileSearch, BarChart3, Layers, Workflow, Brain, Anchor, Pill, Scale } from "lucide-react";

export const personalInfo = {
    name: "Faizal Ahamed J",
    title: "Python Full Stack Developer",
    location: "Chennai, Tamil Nadu, India",
    email: "faizalahamedj331@gmail.com",
    linkedin: "https://www.linkedin.com/in/faizal-ahamed-j-a1a89a346",
    github: "https://github.com/FaizalahamedJ-331",
    heroTagline: "Architecting scalable web solutions with Django, React, and robust REST APIs.",
    summary: "Results-oriented Python Full Stack Developer with expertise in designing and building scalable web applications using Django, React, and REST APIs. Proven track record of architecting high-performance backend systems, implementing secure role-based authentication, and optimizing database schemas for efficiency. Adept at translating complex business requirements into production-ready technical solutions.",
};

export const skills = [
    {
        category: "Languages",
        items: [
            { name: "Python", icon: Code },
            { name: "JavaScript (ES6+)", icon: Code }
        ]
    },
    {
        category: "Frontend",
        items: [
            { name: "React.js", icon: Code },
            { name: "HTML5", icon: Layout },
            { name: "CSS3", icon: Layout },
            { name: "Bootstrap", icon: Layout },
            { name: "Responsive Web Design", icon: Smartphone }
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Django", icon: Server },
            { name: "Django REST Framework (DRF)", icon: Cloud },
            { name: "RESTful APIs", icon: Cloud },
            { name: "JWT Authentication", icon: Lock },
            { name: "RBAC (Role-Based Access Control)", icon: Shield },
            { name: "Celery", icon: Workflow },
            { name: "Redis", icon: Database }
        ]
    },
    {
        category: "Database",
        items: [
            { name: "MySQL", icon: Database },
            { name: "SQLite", icon: Database },
            { name: "Joins", icon: Layers },
            { name: "CRUD Operations", icon: FileText },
            { name: "Query Optimization", icon: BarChart3 },
            { name: "Schema Design", icon: FileSearch }
        ]
    },
    {
        category: "DevOps & Tools",
        items: [
            { name: "Docker", icon: Server },
            { name: "CI/CD", icon: GitBranch },
            { name: "Git", icon: GitBranch },
            { name: "GitHub", icon: Github },
            { name: "Postman", icon: Globe },
            { name: "VS Code", icon: Code },
            { name: "Vercel", icon: Cloud },
            { name: "Version Control", icon: GitBranch },
            { name: "Deployment", icon: Cloud }
        ]
    },
    {
        category: "Testing",
        items: [
            { name: "Unit Testing", icon: PlayCircle },
            { name: "PyTest", icon: Play }
        ]
    },
    {
        category: "Core Concepts",
        items: [
            { name: "MVC / MVT Architecture", icon: Layout },
            { name: "Authentication & Authorization", icon: Shield },
            { name: "Agile Development", icon: Workflow },
            { name: "Generative AI", icon: Brain }
        ]
    }
];

export const experience = [
    {
        id: 1,
        title: "Full Stack Developer — Intern",
        company: "e-Soft IT Solutions, Tiruchirappalli",
        year: "July 2025 – August 2025",
        description: "Built full-stack features using Python, Django, and React.js. Applied REST API design best practices. Used Git version control workflow for development.",
    },
    {
        id: 2,
        title: "Python Full Stack Developer Intern",
        company: "Besant Technologies",
        year: "Less than 1 year",
        description: "Architected and deployed an Enterprise Academic Workflow System using Django and React, reducing administrative workload by 40%. Engineered robust RESTful APIs with optimized endpoints to handle high-concurrency data requests. Implemented secure JWT-based authentication and granular Role-Based Access Control (RBAC).",
    }
];

export const projects = [
    {
        id: 1,
        title: "Student project and internship tracking platform",
        stack: ["Django", "React", "MySQL"],
        description: "A centralized platform for managing academic project lifecycles with automated workflows.",
        features: [
            "Automated submission portals & peer review workflows",
            "Secure JWT authentication & Role-Based Access Control",
            "Real-time dashboards using React & Chart.js",
            "Optimized Django ORM queries for high performance",
        ],
        github: "https://github.com/FaizalahamedJ-331/projectsx2",
        live: "#",
    },
    {
        id: 2,
        title: "SmartCater – Catering Management System",
        stack: ["Django", "React", "REST API", "MySQL"],
        description: "Enterprise catering management solution for order processing and inventory tracking.",
        features: [
            "Multi-tenant architecture for vendor management",
            "Real-time order status updates & billing",
            "Lazy loading & state management for performance",
            "Comprehensive inventory tracking system",
        ],
        github: "https://github.com/FaizalahamedJ-331/smartcater",
        live: "#",
    },
    {
        id: 3,
        title: "FlowForge – Interactive Workflow Automation Simulator",
        stack: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind CSS", "Framer Motion", "Chart.js"],
        description: "A professional frontend SaaS application to visually simulate real-world workflow automation processes using ReactJS.",
        features: [
            "Developed a professional frontend SaaS application to visually simulate real-world workflow automation processes using ReactJS",
            "Implemented dynamic step-based workflow engine with automated state transitions, real-time activity logging, and simulation controls",
            "Designed custom workflow builder with local storage persistence and interactive pipeline visualization",
        ],
        github: "https://github.com/FaizalahamedJ-331/flowforge",
        live: "https://flowforg.netlify.app",
    }
];

export const education = {
    degree: "B.E Computer Science Engineering",
    institution: "Indra Ganesan College of Engineering",
    year: "2022–2026",
    cgpa: "8.7 / 10",
};

export const certifications = [
    { name: "Generative AI for Beginners – Great Learning", pdf: "/certs/genai-beginners.pdf" },
    { name: "Full Stack Development – Esoft IT Solutions" },
];

