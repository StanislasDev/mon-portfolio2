import { motion } from 'framer-motion';

const projects = [
  {
    title: 'FinTech Dashboard',
    category: 'Full-Stack Development',
    description: 'High-performance investment tracking platform with real-time data visualization.',
    image: '/projects/investment.png',
    stack: ['React', 'Node.js', 'Chart.js', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Modern Portfolio',
    category: 'UI/UX Design & Dev',
    description: 'A cutting-edge portfolio built with performance and aesthetics in mind.',
    image: '/projects/portfolio.png',
    stack: ['Vite', 'Tailwind CSS', 'Framer Motion'],
    link: '#'
  },
  {
    title: 'E-Learning Platform',
    category: 'Mobile First App',
    description: 'Interactive session management system for seamless educational experiences.',
    image: '/projects/seance.png',
    stack: ['Next.js', 'Firebase', 'Tailwind'],
    link: '#'
  },
];

const Projects = () => (
  <section id="projects" className="py-32 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-cyan-500 font-bold mb-4">Œuvres Choisies</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white">L&apos;EXCELLENCE<br />EN INGÉNIERIE.</h3>
        </div>
        <p className="text-slate-500 dark:text-white/40 max-w-sm text-sm font-medium leading-relaxed">
          Une sélection de projets où la rigueur technique rencontre le design créatif pour résoudre des problèmes complexes.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article 
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 transition-all duration-500"
          >
            {/* Image Container */}
            <div className="aspect-[16/10] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                {project.stack.map(tech => (
                  <span key={tech} className="text-[9px] uppercase tracking-widest px-2 py-1 bg-white dark:bg-white/5 rounded-md text-slate-500 dark:text-white/60 border border-slate-100 dark:border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
              
              <h4 className="text-2xl font-bold tracking-tight mb-2 text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h4>
              <p className="text-slate-500 dark:text-white/40 text-sm mb-6 line-clamp-2">
                {project.description}
              </p>

              <button className="text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2 group/btn text-slate-900 dark:text-white">
                Voir l&apos;étude de cas
                <span className="w-8 h-[1px] bg-slate-300 dark:bg-white/20 group-hover/btn:w-12 group-hover/btn:bg-cyan-500 transition-all duration-300"></span>
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
