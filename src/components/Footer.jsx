import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link to="/" className="text-xl font-bold tracking-tighter hover:text-cyan-400 transition-colors">
              STANIS<span className="text-cyan-500">.</span>DEV
            </Link>
            <p className="text-white/30 text-xs mt-2 font-medium uppercase tracking-widest">
              Conçu avec précision et passion.
            </p>
          </div>

          <nav className="flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>

          <div className="flex gap-4">
            {[
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/stanley-simo-958b0b350" },
              { icon:<FaGithub />, link: "https://github.com/StanislasDev" },
              { icon: <FaWhatsapp />, link: "https://wa.me/658395783" },
              { icon: <FaTelegram />, link: "https://t.me/Stanislas_12" }
            ].map((social, i) => (
              <a key={i} href={social.link} className="text-white/30 hover:text-cyan-400 transition-colors text-lg">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
            © {currentYear} STANISDEV. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
            CONÇU PAR STANISDEV
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
