import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="py-32 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Visual Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-[3rem] blur-2xl group-hover:opacity-50 transition-opacity"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 aspect-square lg:aspect-auto lg:h-[600px]">
            <img 
              src="/profile.jpg" 
              alt="StanisDev Profile" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 dark:from-black via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-6 -right-6 bg-slate-900 dark:bg-white text-white dark:text-black p-8 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-2xl">
            <span className="block text-4xl font-black tracking-tighter">5+</span>
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Années <br />d&apos;Experience</span>
          </div>
        </motion.div>

        {/* Text Side */}
        <div>
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-cyan-500 font-bold mb-4">Le recit</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 uppercase leading-tight text-slate-900 dark:text-white">Transformer des idées en applications fiables, intuitives<br /> et performantes.</h3>

          <div className="space-y-6 text-slate-600 dark:text-white/50 text-lg leading-relaxed mb-12">
            <p>
              Je suis un développeur Full-Stack animé par une véritable passion pour le code épuré, les performances et la conception centrée sur l&apos;utilisateur. Tout a commencé par une passion toute simple pour l’informatique. J’ai choisi de m’intéresser au fonctionnement du web, ce qui a fini par devenir une carrière entièrement dédiée au développement d&apos;applications solides pour des clients internationaux.
            </p>
            <p>
              Je ne me contente pas de rédiger du code ; je conçois des systèmes évolutifs, maintenables et agréables à utiliser. Ma philosophie est simple : innovation, qualité et performance, offrant un pont sans faille entre les besoins humains et les solutions digitales.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Projets réalisés", value: "25+" },
              { label: "Clients satisfaits", value: "10+" },
              { label: "Lignes de code", value: "1M+" },
              { label: "Collaborations", value: "10" }
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-cyan-500/20 dark:hover:border-white/10 transition-colors">
                <span className="block text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-white/30">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
