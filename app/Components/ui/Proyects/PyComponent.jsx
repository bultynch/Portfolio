import React from 'react';
import PyTech from './PyTech';

function ProyectTechnology() {
  const categories = [
    {
      p1: [
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg' },
        { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'ExpressJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      ],
    },
    {
      p2: [
        { name: 'Astro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg' },
        { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      ],
    },
    {
      p3: [
        { name: 'Astro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg' },
        { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      ],
    },
    {
      p4: [
        { name: 'Astro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg' },
        { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      ],
    },
  ];

  // Selecciona una categoría dinámica (por ejemplo, p1)
  const selectedCategory = categories[0].p1;

  return (
    <div className="|| grid grid-cols-1 lg:grid-cols-[55%_45%]">

      <div className="w-auto h-[400px] || bg-red-500 rounded-lg"></div>

      <div className="w-auto h-[400px] || py-5 px-10 || border-2 border-black rounded-lg font-bold">

        <div>
          <h2 className="mb-4 || text-3xl">Titulo proyecto</h2>
          <p className="mb-4 || font-semibold text-xl">Descripción del proyecto</p>
        </div>

        {/* Itera sobre la categoría seleccionada */}
        <div className="gap-2 flex items-center justify-start">
          {selectedCategory.map((tech, index) => (
            <PyTech key={index} name={tech.name} icon={tech.icon} />
          ))}
        </div>

        <div className="gap-4 || flex items-start">
          <button className="bg-red-400 px-2">Demo</button>
          <button className="bg-green-400 px-2">GitHub</button>
        </div>

      </div>

    </div>
  );
}

export default ProyectTechnology;
