import { FiMail } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';

const Contact = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        Connect & Collaborate
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Direct Contact */}
        <div className="bg-gradient-to-br from-[#040c18] via-[#0a192f] to-[#040c18] border border-zinc-700 rounded-2xl p-8 flex flex-col gap-6 items-center text-center">
          <h3 className="text-xl font-semibold mb-4">Direct Contact</h3>
          <div className="flex flex-col gap-3 text-zinc-300">
            <a href="mailto:shreyaa.kesharwani@gmail.com" className="flex items-center gap-2 hover:text-purple-400 justify-center">
              <FiMail /> shreyaa.kesharwani@gmail.com
            </a>
            <a href="https://github.com/shreya-kesharwani860" target="_blank"
               className="flex items-center gap-2 hover:text-purple-400 justify-center">
              <FaGithub /> github.com/shreya-kesharwani860
            </a>
            <a href="https://www.linkedin.com/in/shreya-kesharwani-b143302a2/" target="_blank"
               className="flex items-center gap-2 hover:text-purple-400 justify-center">
              <GrLinkedin /> linkedin.com/in/shreya-kesharwani-b143302a2
            </a>
          </div>
        </div>

        {/* Opportunities */}
        <div className="bg-gradient-to-br from-[#040c18] via-[#0a192f] to-[#040c18] border border-zinc-700 rounded-2xl p-8 flex flex-col gap-6 justify-center text-center">
          <h3 className="text-xl font-semibold mb-4">Open to Opportunities</h3>
          <p className="text-zinc-400 max-w-md mx-auto">
            I am open to collaborating on projects in AI systems, backend and full-stack development,
            and innovative software solutions across multiple domains.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;