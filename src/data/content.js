import { Github, Linkedin, Mail, Code, Layout, Database, Server, Smartphone, Globe, Cloud, Terminal, Cpu, GitBranch, Shield, PlayCircle, FileText, Lock, Users, Play, FileCheck, FileSearch, BarChart3, Layers, Workflow, Brain, Anchor, Pill, Scale } from "lucide-react";

// Certificate PDF imports so Vite can resolve their URLs
import genAI from "../files/8530123_Generative_AI_for_Beginners_8176962.pdf";
import besantPythonSql from "../files/Besant certificate 1.pdf";
import besantFrontendReact from "../files/besant certificate 2.pdf";
import esoftCert from "../files/esoft certificate.pdf";

export const personalInfo = {
    name: "Faizal Ahamed J",
    title: "Python Full Stack Developer",
    location: "Chennai, TN",
    email: "faizalahamedj331@gmail.com",
    linkedin: "https://linkedin.com/in/faizal-ahamed-j-a1a89a346",
    github: "https://github.com/FaizalahamedJ-331",
    portfolio: "https://faizalsportfolio.vercel.app",
    heroHeadline: "Build web apps that actually work in real-world use",
    heroSubheadline: "Python Full Stack Developer building secure Django + React systems with REST APIs, JWT authentication, RBAC, and optimized databases.",
    proofLine: "100+ APIs built • 40% faster queries • 200+ users supported • 2 live full stack projects",
    heroTagline: "Architecting scalable Django + React systems with reliable REST APIs.",
    summary: "I’m Faizal Ahamed J, a Python Full Stack Developer focused on building web applications that are secure, usable, and ready for real users. During my internship experience, I worked on Django and React systems, built 100+ REST API endpoints, implemented JWT authentication with role-based access control, and optimized MySQL queries to improve performance by 40%. I’m a B.E. Computer Science graduate (CGPA 8.7/10) looking for Python Developer, Django Developer, and Full Stack Developer roles where I can contribute to production systems from day one.",
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
        title: "Python Full Stack Developer — Intern",
        company: "Besant Technologies, Chennai",
        year: "Dec 2025 – May 2026",
        description: "Designed and deployed full-stack applications using Django MVT architecture and React.js.",
        bullets: [
            "Designed and deployed full-stack applications using Django MVT architecture and React.js.",
            "Developed and secured 100+ RESTful API endpoints with JWT authentication and RBAC.",
            "Optimized MySQL queries and schema design, improving data retrieval performance by 40%.",
            "Integrated React.js frontend with Django REST Framework APIs for seamless real-time data flow.",
            "Built reusable React.js component libraries for consistent UI across modules.",
        ],
    },
    {
        id: 2,
        title: "Full Stack Developer — Intern",
        company: "e-Soft IT Solutions, Tiruchirappalli",
        year: "Jul 2025 – Aug 2025",
        description: "Built full-stack features using Python, Django, and React.js.",
        bullets: [
            "Built full-stack features using Python, Django, and React.js.",
            "Applied REST API design best practices and Git version control workflow.",
            "Assisted in testing and debugging Django backend modules for production-ready deployments.",
        ],
    }
];

export const projects = [
    {
        id: 1,
        title: "Student Project & Internship Tracking Platform",
        stack: ["Python", "Django", "React.js", "MySQL", "JWT", "REST APIs"],
        description: "A role-based full stack platform for 200+ students and faculty with separate dashboards, secure login, JWT authentication, real-time status tracking, and 30+ REST APIs.",
        features: [
            "Role-based dashboards for students and faculty",
            "Secure JWT authentication and Role-Based Access Control",
            "Real-time status tracking and notifications",
            "30+ REST APIs for submissions, reviews, and reporting",
        ],
        github: "https://github.com/faizalahamedj331-cmd/projectsx2",
        live: "#",
    },
    {
        id: 2,
        title: "SmartCater – Catering Management System",
        stack: ["Python", "Django", "React.js", "MySQL", "REST APIs"],
        description: "Enterprise catering management solution for order processing and inventory tracking.",
        features: [
            "Multi-tenant architecture for vendor management",
            "Real-time order status updates & billing",
            "Lazy loading & state management for performance",
            "Comprehensive inventory tracking system",
        ],
        github: "https://github.com/faizalahamedj331-cmd/smartcater",
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
    degree: "B.E. Computer Science Engineering",
    institution: "Indra Ganesan College of Engineering, Tiruchirappalli",
    year: "2022 – 2026",
    cgpa: "8.7 / 10.0",
};
export const certifications = [
    { name: "Full Stack Development — e-Soft IT Solutions, Tiruchirappalli, 2025", pdf: esoftCert },
    { name: "Generative AI — Simplilearn SkillUp, 2025", pdf: genAI },
    { name: "Frontend and React.js — Besant Technologies Velachery, Chennai, 2026", pdf: besantFrontendReact },
    { name: "Python and SQL — Besant Technologies Velachery, Chennai, 2026", pdf: besantPythonSql },
];

