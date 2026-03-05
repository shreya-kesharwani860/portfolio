import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({
  image,
  title,
  subtitle,
  description,
  tech = [],
  live,
  github,
}) => {
  return (
    <div className="group relative bg-[#14172b]/80 backdrop-blur-lg rounded-2xl border border-[#2d325a] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2">
      
      {/* Image Container with Zoom Effect */}
      <div className="relative w-full h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark overlay that fades out on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#14172b] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
      </div>

      <div className="p-6 flex flex-col gap-3">
        <div className="flex justify-between items-start">
           <h3 className="text-2xl font-bold text-white tracking-wide">
            {title}
          </h3>
        </div>

        <p className="text-pink-400 text-sm font-semibold uppercase tracking-wider">
          {subtitle}
        </p>

        <p className="text-gray-400 text-sm leading-relaxed min-h-[60px]">
          {description}
        </p>

        {/* Tech Stack Pills */}
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 text-[10px] font-bold bg-[#23234b] text-pink-300 rounded-full border border-pink-500/20 uppercase tracking-tighter"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 mt-5">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-pink-500/20"
          >
            <FiExternalLink />
            Live Demo
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-white/10 text-white text-sm font-bold rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/40"
          >
            <FiGithub />
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
