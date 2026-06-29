type SideQuests = {
  title: string;
  reward: string;
  desc: string;
  status: string;
};

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
