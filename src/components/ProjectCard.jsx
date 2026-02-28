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

      <div className="relative w-full h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14172b] via-transparent to-transparent opacity-80" />
      </div>

      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-2xl font-bold text-white tracking-wide">
          {title}
        </h3>

        <p className="text-pink-400 text-sm font-medium uppercase tracking-wider">
          {subtitle}
        </p>

        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>

        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-[#23234b] text-pink-300 rounded-full border border-pink-500/20"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-4 mt-5">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:opacity-90"
          >
            <FiExternalLink />
            Live
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-white/10"
          >
            <FiGithub />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;