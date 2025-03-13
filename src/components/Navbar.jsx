import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mon Portfolio</h1>

        {/* Icône pour afficher le menu en version mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Liens de navigation en version desktop */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-gray-400">Accueil</Link></li>
          <li><Link to="/about" className="hover:text-gray-400">À propos</Link></li>
          <li><Link to="/projects" className="hover:text-gray-400">Projets</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>

      {/* Menu burger en version mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-6 mt-6">
          <li><Link to="/" onClick={toggleMenu} className="hover:text-gray-400">Accueil</Link></li>
          <li><Link to="/about" onClick={toggleMenu} className="hover:text-gray-400">À propos</Link></li>
          <li><Link to="/projects" onClick={toggleMenu} className="hover:text-gray-400">Projets</Link></li>
          <li><Link to="/contact" onClick={toggleMenu} className="hover:text-gray-400">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;