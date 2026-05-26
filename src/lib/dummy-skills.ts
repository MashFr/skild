import type { SkillRecord } from "../../type";

export const dummySkills: SkillRecord[] = [
	{
		id: "skill-001",
		title: "Write Code",
		slug: "write-code",
		description:
			"Learn to write clean, maintainable TypeScript code with modern patterns and best practices.",
		category: "programming",
		tags: ["typescript", "coding", "best-practices"],
		installCommand: "npm install -g typescript",
		createdAt: "2025-01-15T10:00:00Z",
		authorClerkId: "user_2abcdef123456",
		authorEmail: "alice@example.com",
	},
	{
		id: "skill-002",
		title: "Docker Basics",
		slug: "docker-basics",
		description:
			"Understand containerization, Dockerfiles, Docker Compose, and container orchestration fundamentals.",
		category: "devops",
		tags: ["docker", "containers", "devops"],
		installCommand: "curl -fsSL https://get.docker.com | sh",
		createdAt: "2025-02-20T14:30:00Z",
		authorClerkId: "user_2bcdef1234567",
		authorEmail: "bob@example.com",
	},
	{
		id: "skill-003",
		title: "React Hooks",
		slug: "react-hooks",
		description:
			"Master useState, useEffect, useContext, and custom hooks to build reactive UIs.",
		category: "frontend",
		tags: ["react", "hooks", "frontend", "ui"],
		installCommand: "npm create vite@latest my-app -- --template react-ts",
		createdAt: "2025-03-10T08:15:00Z",
		authorClerkId: "user_2cdef12345678",
		authorEmail: "carol@example.com",
	},
	{
		id: "skill-004",
		title: "SQL Querying",
		slug: "sql-querying",
		description:
			"Write efficient SQL queries including joins, subqueries, aggregations, and window functions.",
		category: "data",
		tags: ["sql", "database", "queries", "analytics"],
		installCommand: "brew install postgresql",
		createdAt: "2025-04-05T16:45:00Z",
		authorClerkId: "user_2def123456789",
		authorEmail: "dan@example.com",
	},
	{
		id: "skill-005",
		title: "Git Collaboration",
		slug: "git-collaboration",
		description:
			"Collaborate effectively using Git branching strategies, pull requests, rebasing, and conflict resolution.",
		category: "tools",
		tags: ["git", "version-control", "collaboration", "workflow"],
		installCommand: "brew install git",
		createdAt: null,
		authorClerkId: null,
		authorEmail: null,
	},
];
