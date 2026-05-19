import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold tracking-tighter hover:text-cyan-400 transition-colors text-slate-900 dark:text-white">
        <img src="/logo.png" alt="StanisDev Logo" className="w-8 h-8 mr-2 inline-block" />
        STANIS<span className="text-cyan-500">.</span>DEV
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `hover:text-cyan-400 transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-600 dark:text-white/60'}`
          }
        >
          À propos
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => 
            `hover:text-cyan-400 transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-600 dark:text-white/60'}`
          }
        >
          Projets
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            `hover:text-cyan-400 transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-600 dark:text-white/60'}`
          }
        >
          Contact
        </NavLink>
      </nav>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link 
          to="/contact" 
          className="bg-slate-900 dark:bg-white text-white dark:text-black px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white transition-all duration-300 rounded-full"
        >
          Contactez-moi
        </Link>
      </div>
    </div>
  </header>
);

export default Navbar;
