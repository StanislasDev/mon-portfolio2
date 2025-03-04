const About = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* TITRE */}
        <h1 className="text-5xl font-bold text-center mb-8">
          <i className="fas fa-user-circle text-blue-400"></i> À propos de moi
        </h1>

        {/* SECTION INTRODUCTION */}
        <section className="text-center mb-12">
          <p className="text-lg max-w-3xl mx-auto">
            Salut 👋, moi c’est <span className="text-blue-400 font-semibold">StanislasDev</span>, un développeur passionné spécialisé en 
            <span className="text-blue-400 font-semibold"> React.js</span> ,<span className="text-blue-400 font-semibold">PHP</span> , <span className="text-blue-400 font-semibold">Laravel</span> et bien d'autres. 
            J’adore construire des applications web modernes, performantes et intuitives. Mon objectif est de 
            transformer des idées en expériences utilisateur fluides et interactives. 🚀
          </p>
        </section>

        {/* SECTION COMPÉTENCES */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            <i className="fas fa-code text-blue-400"></i> Mes Compétences
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-800 p-4 rounded-lg">
              <i className="fab fa-react text-blue-400 text-4xl mb-2"></i>
              <p className="font-semibold">React.js</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <i className="fab fa-laravel text-red-500 text-4xl mb-2"></i>
              <p className="font-semibold">Laravel</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <i className="fab fa-js text-yellow-400 text-4xl mb-2"></i>
              <p className="font-semibold">JavaScript</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <i className="fab fa-css3-alt text-blue-500 text-4xl mb-2"></i>
              <p className="font-semibold">Tailwind CSS</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <i className="fab fa-php text-indigo-500 text-4xl mb-2"></i>
              <p className="font-semibold">PHP</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <i className="fas fa-database text-green-400 text-4xl mb-2"></i>
              <p className="font-semibold">MySQL</p>
            </div>
          </div>
        </section>

        {/* SECTION OUTILS */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            <i className="fas fa-tools text-blue-400"></i> Mes Outils Préférés
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="bg-gray-800 px-6 py-3 rounded-lg text-lg flex items-center">
              <i className="fab fa-github text-gray-400 text-xl mr-2"></i> GitHub
            </span>
            <span className="bg-gray-800 px-6 py-3 rounded-lg text-lg flex items-center">
              <i className="fas fa-server text-orange-500 text-xl mr-2"></i> XAMPP
            </span>
            <span className="bg-gray-800 px-6 py-3 rounded-lg text-lg flex items-center">
              <i className="fas fa-code text-blue-400 text-xl mr-2"></i> Visual Studio
            </span>
            <span className="bg-gray-800 px-6 py-3 rounded-lg text-lg flex items-center">
              <i className="fas fa-database text-green-400 text-xl mr-2"></i> Power AMC
            </span>
            <span className="bg-gray-800 px-6 py-3 rounded-lg text-lg flex items-center">
              <i className="fas fa-terminal text-green-400 text-xl mr-2"></i> VS Code
            </span>
          </div>
        </section>

        {/* SECTION CERTIFICATIONS / FORMATIONS */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">
            <i className="fas fa-graduation-cap text-blue-400"></i> Formations & Certifications
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <p className="text-xl font-semibold">🎓 DQP en Dévelopement d'Applications - Centre de formation professionnelle la Canadienne</p>
            <p className="text-gray-400 mt-2">Année d'obtention : 2024</p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
