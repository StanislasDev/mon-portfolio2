import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaCode, FaServer, FaLaravel, FaPhp } from 'react-icons/fa';
import { FaVuejs } from 'react-icons/fa6';
import { SiTypescript, SiTailwindcss, SiPostgresql, SiDocker, SiVite, SiInertia } from 'react-icons/si';

const skillCategories = [
  {
    title: "Ingénierie Frontend",
    icon: <FaCode className="text-cyan-400" />,
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Vite", icon: <SiVite /> },
    ]
  },
  {
    title: "Backend & Systèmes",
    icon: <FaServer className="text-purple-400" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <FaDatabase /> },
      { name: "Laravel", icon:<FaLaravel /> },
      { name: "Inertia.js", icon: <SiInertia/> },
      { name: "PHP", icon: <FaPhp /> },
    ]
  },
  {
    title: "Infrastructure & Outils",
    icon: <FaTools className="text-pink-400" />,
    skills: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "Git", icon: <FaTools /> },
      { name: "CI/CD", icon: <FaServer /> },
      { name: "Testing", icon: <FaCode /> },
    ]
  }
];

const Skills = () => (
  <section id="skills" className="py-32 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20 text-center">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-cyan-500 font-bold mb-4">Expertise de base</h2>
        <h3 className="text-4xl md:text-5xl font-black tracking-tighter italic text-slate-900 dark:text-white">Armes Technologiques.</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group p-8 rounded-[2rem] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-cyan-500/20 dark:hover:border-white/20 transition-all duration-500 relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-slate-200/50 dark:bg-white/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="text-3xl">{category.icon}</div>
              <h4 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">{category.title}</h4>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-cyan-500/20 dark:hover:border-white/10 transition-all">
                  <span className="text-lg opacity-60 group-hover:opacity-100 group-hover:text-cyan-400 transition-all text-slate-900 dark:text-white">{skill.icon}</span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-white/50 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
