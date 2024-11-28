import React from 'react'
import Image from 'next/image';
import PyTechComp from './PyTechComp'

function ProyectTechnology() {

  const categories = [

    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg' },
    { name: 'ReactJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg' },
    { name: 'ExpressJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg' },
    { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg' },
    { name: 'VSCode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg' },
  ]

  return (
    <div className='|| grid grid-cols-1 lg:grid-cols-[55%_45%]'>
      <div className='w-auto h-[400px] || bg-red-500 rounded-lg'></div>

      <div className='w-auto h-[400px] || py-5 px-10 || border-2 border-black rounded-lg font-bold'>

        <div className=''>
          <h2 className='mb-4 || text-3xl'>Titulo proyecto</h2>
          <p className='mb-4 || font-semibold text-xl'>Descriptcion proyecto asdas da sd ad a d asd a sd</p>
        </div>

        <div className="gap-2 flex items-center justify-start ">

          <PyTechComp name={categories.name} icon={categories.icon}/>

          <div className='gap-2 py-1 px-2 flex items-center bg-gray-200 rounded-full'>
            <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'} alt='tw' width={17} height={17}/>
            <h1 className='text-[11px] font-semibold'>TailwindCSS</h1>
          </div>

          <div className='gap-2 py-1 px-2 flex items-center bg-gray-200 rounded-full'>
            <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'} alt='express' width={17} height={17}/>
            <h1 className='text-[11px] font-semibold'>ExpressJS</h1>
          </div>

          <div className='gap-2 py-1 px-2 flex items-center bg-gray-200 rounded-full'>
            <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'} alt='mysql' width={17} height={17}/>
            <h1 className='text-[11px] font-semibold'>MySQL</h1>
          </div>

        </div>

        <div className='gap-4 || flex items-start'>
          <button className='bg-red-400 px-2'>demo</button>
          <button className='bg-green-400 px-2'>github</button>
        </div>

      </div>

    </div>
  )
}

export default ProyectTechnology