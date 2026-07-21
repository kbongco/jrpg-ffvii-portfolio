import { User, BookOpen, Hexagon, Code, Star, Mail } from "lucide-react";

type SideQuests = {
  title: string;
  reward: string;
  desc: string;
  status: string;
};

type Materia = {
  type: string;
  name: string;
  level: number;
  max: number;
};

type CardData = {
  label: string;
  value: string;
};

type Stats = {
  label: string;
  category: string;
  value: number;
}

type TabNames = { 
  id: string;
  icon: any;
  label: string;
}

type Jobs = {
  title: string;
  desc: string;
  tech: string[]
}

export const sideQuests: SideQuests[] = [
  {
    title: "UI/UX Project - Deadlift Calculator ",
    reward: "Spirit +100",
    desc: "A UI/UX design project, designing a deadlift calculator for coaches to use on meet day during powerlifting meets",
    status: "ONGOING",
  },
  {
    title: "Technical Blog",
    reward: "WISDOM +20",
    desc: "Writing about what I learn and what I'm up to. From technical things, my projects and just things in general!",
    status: "IN PROGRESS",
  },
  {
    title: "Materia Collector",
    reward: "ALL MATERIA",
    desc: "Currently grinding. Taking courses on backend development and in design",
    status: "IN PROGRESS",
  },
  {
    title: "Clear Bench",
    reward: "Strength +50, Vitality +100, Spirit +100",
    desc: "A Fulllstack web application inspired by my days working in the food industry. Used to replace excel sheets for tracking data in the lab as well as samples",
    status: "IN PROGRESS",
  },
];

export const materia: Materia[] = [
  { type: "magic", name: "HTML", level: 5, max: 5 },
  { type: "magic", name: "CSS", level: 5, max: 5 },
  { type: "magic", name: "TypeScript / JavaScript", level: 5, max: 5 },
  { type: "magic", name: "React.js", level: 5, max: 5 },
  { type: "magic", name: "Angular", level: 4, max: 5 },
  { type: "magic", name: "Next.js", level: 4, max: 5 },
  { type: "magic", name: "Python", level: 4, max: 5 },
  { type: "command", name: "FastAPI", level: 4, max: 5 },
  { type: "support", name: "Figma", level: 4, max: 5 },
  { type: "command", name: "Node.js", level: 4, max: 5 },
  { type: "support", name: "Vite", level: 4, max: 5 },
  { type: "command", name: "Git", level: 4, max: 5 },
  { type: "support", name: "SASS", level: 3, max: 5 },
  { type: "command", name: "SQL", level: 4, max: 5 },
  { type: "support", name: "ChatGPT", level: 5, max: 5 },
  { type: "support", name: "Claude", level: 4, max: 5 },
  { type: "support", name: "Tailwind CSS", level: 5, max: 5 },
  { type: "support", name: "Framer Motion", level: 4, max: 5 },
  { type: "command", name: "GraphQL", level: 3, max: 5 },
  { type: "support", name: "Jira", level: 4, max: 5 },
];

export const cardData:CardData[]= [
  { label: "Experience", value: "3+ Years" },
  { label: "Projects Shipped", value: "3-5" },
  { label: "Response Time", value: "< 24hrs" },
  { label: "Tech Stack", value: "React, Python" },
];

export const stats: Stats[] = [
  { label: "Strength", category: "Frontend", value: 92 },
  { label: "Magic", category: "Backend", value: 70 },
  { label: "Vitality", category: "DevOps", value: 60 },
  { label: "Spirit", category: "Design", value: 85 },
  { label: "Luck", category: "Problem Solving", value: 90 }
];

export const tabNames: TabNames[] = [
    { id: "status", icon: User, label: "STATUS" },
    { id: "about", icon: BookOpen, label: "PROFILE" },
    { id: "materia", icon: Hexagon, label: "MATERIA" },
    { id: "projects", icon: Code, label: "DATA" },
    { id: "sidequests", icon: Star, label: "QUESTS" },
    { id: "contact", icon: Mail, label: "COMM" },
]

export const jobTitles: Jobs[] = [
  {
    title: "New World Group - Front End Developer (Contract) (1/2026 - 3/2026)",
    desc: "A contract role supporting the dev team with managing 100s of client sites. Building various components, and adding gtags for marketing",
    tech: ["React", "Next.js", "CMS Systems", "PHP"],
  },
  {
    title: "Self Employed/Caregiving (3/2023 - present)",
    desc: "A mini career break was taken to caregive for an ailing family member. During this time, I never stopped learning coding and improving my skills. Including a project called ClearBench was made",
    tech: ["React.js", "Typescript", "Next.js", "Python", "CI/CD", "FastAPI", "Design Skills"],
  },
  {
    title: "EY Design Studio - UX Engineer (2/2022 - 3/2023)",
    desc: "A role supporting one of the large HVAC clients, migrating their sharepoint sites to more accessible Angular Sites.",
    tech: ["Angular", "Typescript"],
  },
  {
    title: "Verizon via Infovision - Junior Software Developer (3/2021 - 2/2022)",
    desc: "A role within the Gen Z team at Verizon supporting with redesigning the verizon retail site",
    tech: ["React.js", "QA Testing", "Accessibility"],
  },
  {
    title: "General Assembly - Software Engineer Fellow (6/2020 - 9/2020)",
    desc: "Attended a 3 month long coding bootcamp to learn full stack development. Completed various projects and worked with our sister design cohort",
    tech: ["React.js", "Ruby on Rails", "Node.js", "Ruby", "Express.js", "Mongoose", "SQL"],
  },
  {
    title: "Various Science Lab roles (2014 - 2019)",
    desc: "Prior to career changing to SWE, I used to work in the food industry working in the lab. I picked up transferable skills useful for development.",
    tech: ["lab skills", "domain knowledge", "teamwork", "data analysis"],
  },
];
