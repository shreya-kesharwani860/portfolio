const SkillCard = ({ name, type }) => {
  return (
    <div className="group relative bg-[#14172b]/80 backdrop-blur-lg border border-[#2d325a] rounded-2xl px-6 py-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-pink-500/20">

      <span className="text-white font-semibold text-lg tracking-wide">
        {name}
      </span>

      <span className="text-pink-400 text-xs mt-2 uppercase tracking-wider">
        {type}
      </span>

      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-pink-500/40 transition-all duration-300 pointer-events-none" />
    </div>
  );
};

export default SkillCard;