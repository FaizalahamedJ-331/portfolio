import {
    Server,
    Cloud,
    Layout,
    Database,
    Shield,
    Rocket,
} from "lucide-react";

// Service definitions shown in the "What I Do" section.
// Each card highlights a recruiter-facing outcome plus concrete deliverables.
export const services = [
    {
        id: "api",
        icon: Server,
        title: "REST API Development",
        outcome: "Secure, documented APIs your frontend can actually consume.",
        deliverables: [
            "DRF endpoints with OpenAPI / Swagger docs",
            "Pagination, filtering, and versioning",
            "Postman collection handed off with the project",
        ],
    },
    {
        id: "django",
        icon: Cloud,
        title: "Django Backend Engineering",
        outcome: "Production-ready Django apps with clean MVT structure.",
        deliverables: [
            "Apps, models, and migrations wired end-to-end",
            "Celery + Redis for background work",
            "Settings split for dev / staging / production",
        ],
    },
    {
        id: "react",
        icon: Layout,
        title: "React Frontend Development",
        outcome: "Fast, accessible React UIs that match the API contract.",
        deliverables: [
            "Reusable component libraries with Tailwind",
            "State management that survives real users",
            "Responsive layouts tested down to 360px",
        ],
    },
    {
        id: "database",
        icon: Database,
        title: "Database Design & Optimization",
        outcome: "Schemas and queries that scale beyond the demo dataset.",
        deliverables: [
            "Normalized MySQL / PostgreSQL schemas",
            "Indexes, joins, and aggregations that actually use them",
            "Query plans reviewed before they hit prod",
        ],
    },
    {
        id: "auth",
        icon: Shield,
        title: "Authentication & RBAC",
        outcome: "Login and role-based access wired into every endpoint.",
        deliverables: [
            "JWT issuance, refresh, and rotation",
            "Role / permission decorators on DRF views",
            "Secure password handling and session rules",
        ],
    },
    {
        id: "deploy",
        icon: Rocket,
        title: "Deployment & CI/CD",
        outcome: "From git push to live URL without manual steps.",
        deliverables: [
            "Dockerized Django + React stacks",
            "GitHub Actions pipelines for test and deploy",
            "Vercel / Render / Railway rollout tuned to the stack",
        ],
    },
];