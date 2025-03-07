const projects = [
  {
    id: 1,
    title: "Application de gestion des employers",
    description: "Application de gestion des employers.",
    image: "/images/employer.png", // Mets l'image correspondante
    technologies: ["Bootstrap", "Laravel", "PHP", "MySQL"], // Liste des technologies
    liveDemo: "{/* https://monprojet.com */}", // Lien vers le projet en ligne
    // github: "https://github.com/monrepo", // Lien vers le code source
  },
  {
    id: 2,
    title: "Gestion de présence des enseignants",
    description: "Une solution complète pour gérer la présence des enseignants.",
    image: "/projects/seance.png",
    technologies: ["Laravel", "PHP", "MySQL"],
    liveDemo: "{/* https://monprojet.com */}",
    // github: "https://github.com/monrepo",
  },
  {
    id: 3,
    title: "Dashboard admin",
    description: "Un tableau de bord pour les adminitrateurs d'une application.",
    image: "/images/dashboard.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveDemo: "{/* https://monprojet.com */}",
    // github: "",
  },
  {
    id: 4,
    title: "Boutton CONNEXION surbrillant",
    description: "Page de connexion avec boutton surbrillant.",
    image: "/images/connexion.png",
    technologies: ["HTML", "CSS"],
    liveDemo: "{/* https://monprojet.com */}",
    // github: "",
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-12">
          🚀 Mes Projets recents
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-500 px-3 py-1 rounded-lg text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Voir le projet
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline select-none"
                >
                  Code source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
