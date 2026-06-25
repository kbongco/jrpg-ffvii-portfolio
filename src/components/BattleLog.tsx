import ProjectCard from "./ProjectCard";

export default function BattleLog() {
  return (
            <section className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="font-rajdhani text-4xl font-bold tracking-widest text-[#00d4e8] text-glow-teal uppercase">Battle Log</h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#00d4e8]/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="New World Group - Front End Developer (Contract) (1/2026 - 3/2026)" 
              desc="A contract role supporting the dev team with managing 100s of client sites. Building various components, and adding gtags for marketing"
              tech={['React', 'Next.js', 'CMS Systems', 'PHP']}
            />
            <ProjectCard 
              title="Self Employed/Caregiving (3/2023 - present)" 
              desc="A mini career break was taken to caregive for an ailing family member. During this time, I never stopped learning coding and improving my skills. Including a project called ClearBench was made"
              tech={['React.js', 'Typescript', 'Next.js', 'Python', 'CI/CD', 'FastAPI', 'Design Skills']}
            />
            <ProjectCard 
              title="EY Design Studio - UX Engineer (2/2022 - 3/2023)" 
              desc="A role supporting one of the large HVAC clients, migrating their sharepoint sites to more accessible Angular Sites."
              tech={['Angular', 'Typescript']}
        />
            <ProjectCard 
              title="Verizon via Infovision - Junior Software Developer (3/2021 - 2/2022)" 
              desc="A role within the Gen Z team at Verizon supporting with redesigning the verizon retail site"
              tech={['React.js', 'QA Testing', 'Accessibility']}
        />
              <ProjectCard 
              title="General Assembly - Software Engineer Fellow (6/2020 - 9/2020) " 
              desc="Attended a 3 month long coding bootcamp to learn full stack development. Completed various projects and worked with our sister design cohort"
              tech={['React.js', 'Ruby on Rails', 'Node.js', 'Ruby', 'Express.js', 'Mongoose', 'SQL']}
        />
              <ProjectCard 
              title="Various Science Lab roles - (2014 - 2019)" 
          desc="Prior to career changing to SWE, I used to work in the food industry working in the lab. I picked up a couple of neat skills that can be transferred over to my 
              career as a dev"
              tech={['lab skills', 'domain knowledge', 'teamwork', 'data analysis']}
            />
          </div>
        </section>
  )
}