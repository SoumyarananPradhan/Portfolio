import { useState } from 'react';
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react';
import { userData } from '../data/user';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Links
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-indigo-600 tracking-tighter hover:opacity-80 transition">
          SP.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-600 hover:text-indigo-600 font-medium transition text-sm uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          
          {/* Social Icons */}
          <div className="flex gap-4 border-l pl-6 border-gray-300">
            <a href={userData.socials.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition">
              <Github size={20} />
            </a>
            <a href={userData.socials.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600 transition">
              <Linkedin size={20} />
            </a>
            <a href={userData.socials.instagram} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-pink-600 transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-600 hover:text-indigo-600 font-medium py-2 border-b border-gray-50 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;