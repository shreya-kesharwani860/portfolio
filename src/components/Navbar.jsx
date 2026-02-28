function Navbar() {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-pink-500 tracking-wider">Shreya</h1>

      <div className="space-x-6 hidden md:flex text-gray-300 font-medium">
        <a href="#home" className="hover:text-purple-400 transition-colors duration-300">Home</a>
        <a href="#about" className="hover:text-purple-400 transition-colors duration-300">About</a>
        <a href="#projects" className="hover:text-purple-400 transition-colors duration-300">Projects</a>
        <a href="#contact" className="hover:text-purple-400 transition-colors duration-300">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;