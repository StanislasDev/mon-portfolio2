import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaEnvelope, FaTelegram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  // Le message statut disparait après 5 secondes
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');


    emailjs.sendForm('portfolio_2025', 'template_rwqp0sv', formRef.current, 'dCpzOI6hgrpVuVstE')
      .then(() => {
        setStatus('success');
        e.target.reset();
      }, () => {
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-cyan-500 font-bold mb-4">Entrer En Contact</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none">OUVRONS LA<br />CONVERSATION.</h3>
            <p className="text-white/40 text-lg mb-12 max-w-md font-medium">
              Que vous ayez un projet précis en tête ou que vous souhaitiez simplement discuter de technologie, ma boîte de réception est toujours ouverte.
            </p>

            <div className="space-y-6 mb-12">
              <a href="mailto:simostanley91@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-all">
                  <FaEnvelope className="text-white/40 group-hover:text-cyan-400" />
                </div>
                <span className="text-xl font-bold tracking-tight group-hover:text-cyan-400 transition-colors border-b border-transparent group-hover:border-cyan-400 pb-1">Envoyer un E-mail</span>
              </a>
            </div>

            <div className="flex gap-4">
              {[
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/stanley-simo-958b0b350" },
                { icon: <FaGithub />, link: "https://github.com/StanislasDev" },
                { icon:<FaWhatsapp/>, link: "https://wa.me/658395783" },
                { icon: <FaTelegram />, link: "https://t.me/Stanislas_12" }
              ].map((social, i) => (
                <a key={i} href={social.link} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden"
          >
            <form ref={formRef} onSubmit={sendEmail} className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Nom Complet</label>
                  <input 
                    type="text" name="name" required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-cyan-500/50 outline-none transition-all placeholder:text-white/10"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Adresse Email</label>
                  <input 
                    type="email" name="email" required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-cyan-500/50 outline-none transition-all placeholder:text-white/10"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Message</label>
                <textarea 
                  name="message" required rows="4"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-cyan-500/50 outline-none transition-all placeholder:text-white/10 resize-none"
                  placeholder="Parlez-moi de votre projet..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-5 rounded-2xl bg-white text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-cyan-500 hover:text-white transition-all duration-300 disabled:opacity-50"
              >
                {status === 'sending' ? 'Envoi en cours...' : 'Envoyez un message'}
              </button>

              {status === 'success' && <p className="text-center text-cyan-400 text-xs font-bold uppercase tracking-widest mt-4">Message Envoyé avec Succès!</p>}
              {status === 'error' && <p className="text-center text-red-400 text-xs font-bold uppercase tracking-widest mt-4">Erreur d'envoi. Merci de réessayer.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
