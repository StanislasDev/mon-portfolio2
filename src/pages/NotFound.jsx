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
        <h2 className="text-4xl font-bold mb-4 tracking-tight">LOST IN SPACE?</h2>
        <p className="text-white/40 mb-12 max-w-sm mx-auto font-medium">
          The page you are looking for has been moved to another dimension or never existed.
        </p>
        <Link 
          to="/" 
          className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-cyan-500 hover:text-white transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
