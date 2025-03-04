const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* SECTION HERO */}
      <section className="text-center flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-5xl font-bold mb-4">Salut, moi c'est <span className="text-blue-400">StanislasDev</span> 👋</h1>
        <p className="text-xl mb-6 max-w-2xl">
        Développeur full-stack spécialisé en <span className="text-blue-400">React.js</span> , <span className="text-blue-400">Laravel</span> , <span className="text-blue-400">PHP</span> et bien d'autres encore. 
        Passionné par la création d’interfaces modernes et performantes.
        </p>
        <div className="flex space-x-4">
          <a href="/projects" className="px-6 py-3 bg-blue-600 rounded-lg text-lg hover:bg-blue-500 transition">
            <i className="fas fa-laptop-code mr-2"></i> Voir mes projets
          </a>
          <a href="/contact" className="px-6 py-3 border border-white rounded-lg text-lg hover:bg-white hover:text-gray-900 transition">
            <i className="fas fa-envelope mr-2"></i> Me contacter
          </a>
        </div>
        <img src="/profile.jpg" alt="Photo de profil" className="mt-10 w-40 h-40 rounded-full border-4 border-blue-500" />
      </section>

      {/* SECTION À PROPOS */}
      <section className="text-center py-16 bg-gray-800">
        <h2 className="text-4xl font-bold mb-4"><i className="fas fa-user-circle text-blue-400"></i> À propos de moi</h2>
        <p className="max-w-3xl mx-auto text-lg">
        Je suis un développeur passionné, spécialisé en **React.js** , **PHP** et **Laravel**. J'adore créer des applications web modernes et performantes.
        Mon objectif est de fournir des solutions intuitives et efficaces pour améliorer l'expérience utilisateur.
        </p>
      </section>

      {/* SECTION COMPÉTENCES */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-6"><i className="fas fa-tools text-blue-400"></i> Mes compétences</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <span className="bg-gray-800 px-6 py-3 rounded-lg text-lg">
            <i className="fab fa-react text-blue-400"></i> React.js
          </span>
          <span className="bg-gray-800 px-6 py-3 rounded-lg text-lg">
            <i className="fab fa-laravel text-red-500"></i> Laravel
          </span>
          <span className="bg-gray-800 px-6 py-3 rounded-lg text-lg">
            <i className="fab fa-css3-alt text-blue-500"></i> Tailwind CSS
          </span>
          <span className="bg-gray-800 px-6 py-3 rounded-lg text-lg">
            <i className="fab fa-js text-yellow-400"></i> JavaScript
          </span>
          <span className="bg-gray-800 px-6 py-3 rounded-lg text-lg">
            <i className="fab fa-php text-indigo-500"></i> PHP
          </span>
        </div>
      </section>

      {/* SECTION PROJETS */}
      <section className="py-16 bg-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-6"><i className="fas fa-folder-open text-blue-400"></i> Projets récents</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Projet 1 */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <img src="/project1.png" alt="Projet 1" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Gestion de présence des enseignants</h3>
            <p className="mt-2">Application Laravel permettant de suivre la présence des enseignants.</p>
            <a href="/projects" className="text-blue-400 mt-3 inline-block">
              <i className="fas fa-eye"></i> Voir plus
            </a>
          </div>

          {/* Projet 2 */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <img src="/project2.png" alt="Projet 2" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Plateforme d'investissement</h3>
            <p className="mt-2">Développement d'une plateforme d'investissement en ligne avec Laravel.</p>
            <a href="/projects" className="text-blue-400 mt-3 inline-block">
              <i className="fas fa-eye"></i> Voir plus
            </a>
          </div>

          {/* Projet 3 */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <img src="/project3.png" alt="Projet 3" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Portfolio en React</h3>
            <p className="mt-2">Création de mon propre portfolio en React.js et Tailwind CSS.</p>
            <a href="/projects" className="text-blue-400 mt-3 inline-block">
              <i className="fas fa-eye"></i> Voir plus
            </a>
          </div>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-6"><i className="fas fa-envelope text-blue-400"></i> Me contacter</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Vous avez un projet ou une opportunité ? Contactez-moi !
        </p>
        <a href="/contact" className="px-6 py-3 bg-blue-600 rounded-lg text-lg hover:bg-blue-500 transition">
          <i className="fas fa-paper-plane mr-2"></i> Contactez-moi
        </a>
      </section>
    </div>
  );
};

export default Home;
