import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <motion.h1 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-[12rem] font-black tracking-tighter text-white/5 leading-none absolute"
      >
        404
      </motion.h1>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Perdu dans l&apos;espace?</h2>
        <p className="text-slate-600 dark:text-white/40 mb-12 max-w-sm mx-auto font-medium">
          La page que vous recherchez a été déplacée dans une autre dimension ou n&apos;a jamais exitée.
        </p>
        <Link 
          to="/" 
          className="px-8 py-4 bg-black/30 dark:bg-white text-white/90 dark:text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-cyan-500 hover:text-white transition-all"
        >
          Retour à l&apos;acceuil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
