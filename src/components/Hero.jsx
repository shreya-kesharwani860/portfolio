import profileImg from '../assets/pfp.jpg';
import { useState, useEffect } from 'react';

const roles = [
  'AI Developer',
  'Full Stack Engineer',
  'Backend Enthusiast',
  'Software Developer'
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-[#0f111a]">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I’m <span className="text-pink-500">Shreya</span>
          </h1>

          <h2 className="text-2xl text-zinc-400 mb-4 h-8 transition-all duration-500">
            {roles[index]}
          </h2>

          <p className="text-zinc-400 mb-6 max-w-xl text-lg leading-relaxed">
            I build intelligent AI applications and versatile software solutions.
            I enjoy solving complex problems, optimizing systems, and creating tools that help people and businesses.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-80 h-80 flex items-center justify-center float-animation">
            <div className="absolute w-80 h-80 rounded-full bg-pink-500/20 blur-3xl"></div>
            <div className="relative w-72 h-72 rounded-full bg-[#2a2f4a] flex items-center justify-center shadow-xl">
              <div className="w-64 h-64 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Shreya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;