import React from 'react';
import Technology from './Tech';

function TechnologyCards() {

  const categories = [
    {
      title: 'Frontend',
      technologies: [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg' },
        { name: 'ReactJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg' },
        { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      ],
    },
    {
      title: 'Backend',
      technologies: [
        { name: 'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg' },
        { name: 'ExpressJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg' },
      ],
    },
    {
      title: 'Herramientas',
      technologies: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
        { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg' },
        { name: 'VSCode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg' },
      ],
    },
    {
      title: 'Aprendiendo',
      technologies: [
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
        { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
        { name: 'Astro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg' },
      ],
    },
  ];

  return (
    <div className="gap-8 || font-bold text-texto2 || grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((category) => (
        <article key={category.title} className="w-full || p-4 || bg-texto1 text-xl rounded-lg border shadow-sm shadow-texto1 || dark:shadow-none || transform transition-transform hover:scale-105">

          <h1 className="mb-4 || text-center text-2xl">{category.title}</h1>
          <div className="gap-6 || flex flex-wrap items-center justify-center">

            {category.technologies.map((tech) => (
              <Technology key={tech.name} title={tech.name} image={tech.icon} />
            ))}

          </div>

        </article>
      ))}
    </div>
  );
}

export default TechnologyCards;
