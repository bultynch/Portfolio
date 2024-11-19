import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


function ProyectCards() {
  return (
    <div className=''>
      <article className="mb-10 w-full md:h-72 flex flex-col md:flex-row rounded-lg border bg-bg1 shadow-md dark:bg-bg2 dark:shadow-gray-600 dark:border-gray-600">

        <div className='w-full md:max-w-128 h-60 md:h-auto rounded-t-lg'>
          <div className='w-full h-full bg-yellow-400 rounded-t-lg md:rounded-bl-lg md:rounded-tr-none'></div>
        </div>

        <div className="p-4 flex flex-col w-full text-texto2 ">
          <h1 className="md:mb-2 text-lg md:text-xl font-bold dark:text-texto1">Proyect Computer Store</h1>
          <p className="text-md flex flex-wrap dark:text-texto1">E-commerce dedicado a la venta de componentes de computadora.</p>

          <div className="mt-auto">

            <div className='my-4 gap-2 text-sm flex items-center justify-start'>
              <div className='flex items-center justify-center'>
                <Link href={'https://github.com/bultynch/PC-store-react'}>
                  <button className='gap-1.5 p-1.5 flex items-center bg-[#2b3137] text-texto1 text-sm font-semibold rounded-lg shadow-sm border border-[#24292e] transform transition-transform duration-300 ease-in-out hover:scale-105'><FaGithub className='w-4 h-4 mb-0.5'/>Código</button>
                </Link>
              </div>

              <div className='flex items-center justify-center'>
                <Link href={'https://github.com/bultynch/PC-store-react'}>
                  <button className='gap-2 p-1.5 flex items-center bg-none text-texto2 text-sm font-semibold rounded-lg shadow-sm border border-texto2 transform transition-transform duration-300 ease-in-out hover:scale-105 dark:text-texto1 dark:border-texto1'><FaArrowUpRightFromSquare/>Demo</button>
                </Link>
              </div>
            </div>

            <div className="gap-2 flex items-center justify-start ">

              <div className='gap-2 py-1 px-2 flex items-center bg-gray-200 rounded-full'>
                <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg'} alt='nextjs' width={17} height={17}/>
                <h1 className='text-[11px] font-semibold'>Next.js</h1>
              </div>

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
          </div>
        </div>

      </article>


      {/*-------------------- PROYECTO 2 --------------------*/} 

      <article className="mb-10 w-full md:h-72 flex flex-col md:flex-row rounded-lg border bg-bg1 shadow-md dark:bg-bg2 dark:shadow-gray-600 dark:border-gray-600">

        <div className='w-full md:max-w-128 h-60 md:h-auto rounded-t-lg'>
          <div className='w-full h-full bg-yellow-400 rounded-t-lg md:rounded-bl-lg md:rounded-tr-none'></div>
        </div>

        <div className="p-4 flex flex-col w-full text-texto2">
          <h1 className="md:mb-2 text-lg md:text-xl font-bold dark:text-texto1">Estudio arquitectura</h1>
          <p className="text-md flex flex-wrap dark:text-texto1">Página orientada a la exhibición de proyectos arquitectónicos.</p>

          <div className="mt-auto">

            <div className='my-4 gap-2 text-sm flex items-center justify-start'>
              <div className='flex items-center justify-center'>
                <Link href={'https://github.com/bultynch'}>
                  <button className='gap-1.5 p-1.5 flex items-center bg-[#2b3137] text-texto1 text-sm font-semibold rounded-lg shadow-sm border border-[#24292e] transform transition-transform duration-300 ease-in-out hover:scale-105'><FaGithub className='w-4 h-4 mb-0.5'/>Código</button>
                </Link>
              </div>

              <div className='flex items-center justify-center'>
                <Link href={'https://github.com/bultynch/PC-store-react'}>
                  <button className='gap-2 p-1.5 flex items-center bg-none text-texto2 text-sm font-semibold rounded-lg shadow-sm border border-texto2 transform transition-transform duration-300 ease-in-out hover:scale-105 dark:text-texto1 dark:border-texto1'><FaArrowUpRightFromSquare/>Demo</button>
                </Link>
              </div>
            </div>

            <div className="gap-2 flex items-center justify-start ">

              <div className='gap-2 py-1 px-2 flex items-center bg-gray-200 rounded-full'>
                <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg'} alt='astro' width={17} height={17}/>
                <h1 className='text-[11px] font-semibold'>Astro</h1>
              </div>

              <div className='gap-2 py-1 px-2 flex items-center bg-gray-200 rounded-full'>
                <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'} alt='tw' width={17} height={17}/>
                <h1 className='text-[11px] font-semibold'>TailwindCSS</h1>
              </div>

            </div>

          </div>
        </div>

      </article>
    </div>
  )
}

export default ProyectCards