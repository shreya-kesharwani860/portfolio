import ProjectCard from "./ProjectCard";
import BlogAgent from "../assets/BlogAgent.jpg";
import ChatbotImg from "../assets/Chatbot.jpg";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full max-w-6xl mx-auto py-24 px-6"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent blur-3xl" />

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          Featured Projects
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          AI-powered applications and software solutions spanning multiple domains, automation, and intelligent systems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Blog Agent Project */}
        <ProjectCard
          image={BlogAgent}
          title="Blog Writing Agent"
          subtitle="AI Content Generation System"
          description="An AI-powered blog writing agent that generates high-quality, structured content using Python, LangGraph, Streamlit, and LLaMA-based models."
          tech={["Python", "LangGraph", "Pydantic", "Streamlit", "Tavily API", "LLaMA"]}
          live="https://www.linkedin.com/feed/update/urn:li:activity:7427736683422543872/?originTrackingId=oy74XqCLSdAyW7HEzR8pqQ%3D%3D"
          github="https://github.com/shreya-kesharwani860/Blog_agent_LangGraph"
        />

        {/* AI Voice Chatbot Project */}
        <ProjectCard
          image={ChatbotImg}
          title="AI Voice Chatbot"
          subtitle="Conversational AI with Speech Integration"
          description="A versatile AI chatbot enabling real-time voice interaction. Built for multiple domains, with speech-to-text, text-to-speech, and contextual memory handling."
          tech={["React", "FastAPI", "OpenAI API", "Tailwind"]}
          live="https://www.linkedin.com/feed/update/urn:li:activity:7375534662926000128/?originTrackingId=QzRTwPusHFCFdFQgQL1uoQ%3D%3D"
          github="#"
        />

      </div>
    </section>
  );
};

export default Projects;