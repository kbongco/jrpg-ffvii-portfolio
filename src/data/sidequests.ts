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
