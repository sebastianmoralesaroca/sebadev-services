// Option1Content.jsx
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Dichosa',
      description: 'Sirculo de mujeres en proceso de sanación y crecimiento',
      backgroundImage: '/dichosa.png',
      tags: ['SASS', 'JavaScrpt'],
      url: 'https://daniela111.netlify.app/'
    },
    {
      id: 2,
      title: 'Lim',
      description: 'Seguridad y Servicios Integrales',
      backgroundImage: '/lim.png',
      tags: ['SASS', 'JavaScrpt'],
      url: 'https://www.limchile.cl/'
    },
    {
      id: 3,
      title: 'Data Base',
      description: 'Gestion SQL NoSQL',
      backgroundImage: '/database.jpeg',
      tags: ['SQL', 'NoSQL', 'Oracle', 'MongoDB'],
      url: '#'
    },
  ];

  return (
    <div className="bg-white dark:bg-black min-h-screen px-4 py-6 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-[#00d9ff]/20 hover:shadow-2xl transition-all duration-300 cursor-pointer group block border border-gray-300 dark:border-white/10 hover:border-[#00d9ff]/50"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.backgroundImage})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent dark:from-black dark:via-black/40" />

            <div className="relative h-full flex flex-col justify-end p-4">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-200 dark:text-gray-300 mb-3">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2.5 py-1 bg-[#00d9ff]/10 backdrop-blur-sm text-[#00d9ff] rounded-full border border-[#00d9ff]/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
