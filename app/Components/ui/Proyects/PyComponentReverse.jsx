import React from 'react';
import Framework from './Framework';
import GithubButton from '../Buttons and links/GithubButton';
import DemoButton from '../Buttons and links/DemoButton';

function PyComponentReverse({title, description}) {
  const categories = {
    p2: [
      { name: 'Astro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg' },
      { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Motion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg' },
    ],

    p4: [
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg' },
      { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'ExpressJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'Astro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg' },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[45%_55%]">
      
      <div className="w-auto h-[300px] || pt-5 pr-10 || font-bold || dark:text-white">

        <div>
          <h2 className="mb-4 || text-3xl">{title}</h2>
          <p className="mb-4 || font-normal text-xl">{description}</p>
        </div>

        <div className="gap-2 || text-black || flex items-center justify-start">
          {categories.p2.map((category, index) => (
            <Framework key={index} name={category.name} icon={category.icon} />
          ))}
        </div>

        <div className="gap-4 || mt-10 || flex items-start">
          <DemoButton linkDemo={''} />
          <GithubButton linkRepo={'https://github.com/bultynch/Project-Computer-Store'} />
        </div>

      </div>

      <div className="w-auto h-[400px] || bg-red-500 rounded-lg order-first lg:order-last"></div>

    </div>
  );
}

export default PyComponentReverse;
