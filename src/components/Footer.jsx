import { FaGithub, FaHeart } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#14172b] to-[#1f233f] border-t border-[#2d325a] mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex flex-col items-center md:items-start gap-3">
          <span className="text-xl font-semibold text-white tracking-wide">
            Connect With Me
          </span>

          <div className="flex gap-5 text-2xl">
            <a
              href="https://github.com/shreya-kesharwani860"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-white hover:scale-110 transition-transform duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shreya-kesharwani-b143302a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-white hover:scale-110 transition-transform duration-300"
            >
              <GrLinkedin />
            </a>

            <a
              href="mailto:shreyaa.kesharwani@gmail.com"
              className="text-pink-400 hover:text-white hover:scale-110 transition-transform duration-300"
            >
              <FiMail />
            </a>
          </div>
        </div>

        <div className="text-gray-400 text-sm flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
          <span>© {new Date().getFullYear()} Shreyaa</span>
          <span className="hidden md:inline">|</span>
          <span className="flex items-center gap-1 justify-center md:justify-start">
            Built with <FaHeart className="text-pink-500 animate-pulse" /> React & Tailwind
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;