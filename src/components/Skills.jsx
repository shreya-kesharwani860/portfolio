import SkillCard from "./SkillCard";

const Skills = () => {
  const skills = [
    { name: "React", type: "Frontend" },
    { name: "LangChain", type: "GenerativeAI" },
    { name: "LangGraph", type: "GenerativeAI" },
    { name: "Tailwind CSS", type: "Frontend" },
    { name: "JavaScript", type: "Programming Language" },
    { name: "Java", type: "Programming Language" },
    { name: "Python", type: "Programming Language" },
    { name: "Flask", type: "Backend" },
    { name: "FastAPI", type: "Backend" },
    { name: "MongoDB", type: "Database" },
    { name: "Git & GitHub", type: "Version Control" },
    { name: "Vercel", type: "Deployment" },
    { name: "REST APIs", type: "API Development" },
  ];

  return (
    <section
      id="skills"
      className="w-full max-w-7xl mx-auto py-20 px-6 overflow-hidden"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          Technical Skills
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
          Technologies and tools I use to build scalable and intelligent web applications.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 animate-scroll whitespace-nowrap">
          {[...skills, ...skills].map((skill, index) => (
            <SkillCard key={index} name={skill.name} type={skill.type} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;