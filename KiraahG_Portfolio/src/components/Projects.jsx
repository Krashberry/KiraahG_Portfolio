import React from 'react';
import { Navbar } from './Navbar';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import '../index.css';
import project1 from '../assets/images/project1.png';
// import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';

const projects = [
  {
    id: 1,
    title: 'Donezo | Full Stack SPA',
    description:
      'A functional fullstack SPA with Auth/login that allows for the creaion of todo lists.',
    image: <img src={project1} style={{ width: '100', height: '100' }} />,
    tags: ['JavaScript', 'React', 'Node.js', 'Prisma', 'Supabase'],
    demoUrl: '#',
    githubUrl: 'https://github.com/Krashberry/Kiraah_G_Donezo',
  },
  {
    id: 2,
    title: 'MiniPokedex',
    description:
      'Interactive analytics dashboard with data visualization and filtering capabilities.',
    // image: <img src={project2} style={{ width: '100', height: '100' }} />,
    tags: ['JavaScript', 'x', 'x'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'CookMate | Recipe Keeper Social Media App',
    description:
      'Full-featured social media platform for cooks, with user authentication and sharing functionality.',
    image: <img src={project3} style={{ width: '100', height: '100' }} />,
    tags: ['JavaScript', 'React', 'Supabase', 'Vite', 'Node.js', 'TailwindCSS'],
    demoUrl: '#',
    githubUrl: 'https://github.com/Little-Friendly/CookMate',
  },
];

export const Projects = () => {
  return (
    <>
      <Navbar />
      <section id="projects" className="py-24 px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects <span className="text-primary"> </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/krashberry"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
};
