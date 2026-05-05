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
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-square lg:aspect-auto lg:h-[600px]">
            <img 
              src="/profile.jpg" 
              alt="StanisDev Profile" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white text-black p-8 rounded-[2rem] border border-white/10 shadow-2xl">
            <span className="block text-4xl font-black tracking-tighter">5+</span>
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Years of<br />Experience</span>
          </div>
        </motion.div>

        {/* Text Side */}
        <div>
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-cyan-500 font-bold mb-4">The Narrative</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">CRAFTING DIGITAL<br />SOLUTIONS WITH PURPOSE.</h3>
          
          <div className="space-y-6 text-white/50 text-lg leading-relaxed mb-12">
            <p>
              I am a Senior Full-Stack Engineer with a deep obsession for clean code, performance, and user-centric design. My journey began with a simple curiosity for how things work on the web, which evolved into a career building complex applications for global clients.
            </p>
            <p>
              I don't just write code; I architect systems that are scalable, maintainable, and delightful to use. My philosophy is simple: technology should be invisible, providing a seamless bridge between human needs and digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Completed Projects", value: "40+" },
              { label: "Happy Clients", value: "25+" },
              { label: "Lines of Code", value: "1M+" },
              { label: "Coffee Consumed", value: "∞" }
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                <span className="block text-2xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/30">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
