import React from 'react'
import Technology from './Technology'

function TechnologyCards() {
  return (
    <div className='gap-4 lg:gap-y-8 flex flex-wrap items-center justify-center lg:justify-between'>

        <article className='p-4 w-full lg:w-[420px] text-xl border border-components1 rounded-lg shadow-md'>
            <h1 className='mb-4 text-center text-2xl text-nombre1'>Frontend</h1>
            <div className='gap-2 flex flex-wrap items-center justify-center'>
                <Technology title='HTML' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg'/>
                <Technology title='CSS' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg'/>
                <Technology title='JavaScript' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg'/>
                <Technology title='ReactJS' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'/>
                <Technology title='Next.js' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg'/>
                <Technology title='TailwindCSS' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'/>
            </div>
        </article>

        <article className='p-4 w-full lg:w-[420px] text-xl border border-components1 rounded-lg shadow-md'>
          <h1 className='mb-4 text-center text-2xl text-nombre1'>Backend</h1>
          <div className='gap-6 flex flex-wrap items-center justify-center'>
            <Technology title='TypeScript' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg'/>
            <Technology title='NodeJS' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg'/>
            <Technology title='MySQL' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'/>
            <Technology title='MongoDB' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'/>
            <Technology title='ExpressJS' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'/>
          </div>
        </article>

        <article className='p-4 w-full lg:w-[420px] text-xl border border-components1 rounded-lg shadow-md'>
            <h1 className='mb-4 text-center text-2xl text-nombre1'>Herramietas</h1>
            <div className='gap-6 flex flex-wrap items-center justify-center'>
            <Technology title='Git' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg'/>
            <Technology title='GitHub' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'/>
            <Technology title='Docker' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg'/>
            <Technology title='npm' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg'/>
            <Technology title='VSCode' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg'/>
          </div>
        </article>

        <article className='p-4 w-full lg:w-[420px] text-xl border border-components1 rounded-lg shadow-md'>
            <h1 className='mb-4 text-center text-2xl text-nombre1'>Aprendiendo</h1>
            <div className='gap-6 flex flex-wrap items-center justify-center'>
                <Technology title='Python' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'/>
                <Technology title='Wordpress' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg'/>
                <Technology title='Figma' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'/>
                <Technology title='Astro' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg'/>
            </div>
        </article>

    </div>
  )
}

export default TechnologyCards