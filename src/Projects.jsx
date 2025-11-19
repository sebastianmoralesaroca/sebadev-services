// Option1Content.jsx
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Dichosa',
      description: 'Sirculo de mujeres',
      backgroundImage: '/dichosa.png',
      tags: ['SASS', 'JavaScrpt'],
      url: 'https://daniela111.netlify.app/'
    },
    {
      id: 2,
      title: 'Lim',
      description: 'Seguridad y Servicios',
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
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group block"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.backgroundImage})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="relative h-full flex flex-col justify-end p-4">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-200 mb-3">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
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