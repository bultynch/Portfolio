import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function ProyectCards() {
  return (
    <div className=''>
      <article className="mb-10 w-full md:h-72 flex flex-col md:flex-row rounded-lg shadow-md border border-texto2 bg-bg1">

        <div className='w-full md:max-w-128 h-60 md:h-auto rounded-t-lg'>
          <div className='w-full h-full bg-yellow-400 rounded-t-lg md:rounded-bl-lg md:rounded-tr-none'></div>
        </div>

        <div className="p-4 flex flex-col w-full text-texto2">
          <h1 className="md:mb-2 text-lg md:text-xl font-bold">Proyect Computer Store</h1>
          <p className="text-md flex flex-wrap">E-commerce dedicado a la venta de componentes de computadora.</p>

          <div className="mt-auto">

            <div className='my-4 gap-2 text-sm flex items-center justify-start'>
              <div className='flex items-center justify-center'>
                <Link href={'https://github.com/bultynch'}>
                  <button className='gap-1.5 p-1.5 flex items-center bg-[#2b3137] text-texto1 text-sm font-semibold rounded-lg shadow-sm border border-[#24292e] transform transition-transform duration-300 ease-in-out hover:scale-105'><FaGithub className='w-4 h-4 mb-0.5'/>Código</button>
                </Link>
              </div>

              <div className='flex items-center justify-center'>
                <Link href={'https://github.com/bultynch/PC-store-react'}>
                  <button className='gap-2 p-1.5 flex items-center bg-none text-texto2 text-sm font-semibold rounded-lg shadow-sm border border-texto2 transform transition-transform duration-300 ease-in-out hover:scale-105'><FaArrowUpRightFromSquare/>Demo</button>
                </Link>
              </div>
            </div>

            <div className="gap-4 flex items-center justify-start ">
              <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg'} alt='js' width={30} height={30} className='transform transition-transform duration-300 ease-in-out hover:scale-105'/>
              <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'} alt='react' width={30} height={30} className='transform transition-transform duration-300 ease-in-out hover:scale-105'/>
              <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'} alt='tw' width={30} height={30} className='transform transition-transform duration-300 ease-in-out hover:scale-105'/>
              <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg'} alt='nodejs' width={30} height={30} className='transform transition-transform duration-300 ease-in-out hover:scale-105'/>
              <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'} alt='express' width={30} height={30} className='transform transition-transform duration-300 ease-in-out hover:scale-105'/>
              <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'} alt='mongodb' width={30} height={30} className='transform transition-transform duration-300 ease-in-out hover:scale-105'/>
            </div>
          </div>
        </div>

      </article>


      {/*-------------------- PROYECTO 2 --------------------*/} 

      <article className="mb-4 w-full md:h-72 flex flex-col md:flex-row rounded-lg shadow-md border border-texto2 bg-bg1">

        <div className='w-full md:max-w-128 h-60 md:h-auto rounded-t-lg'>
          <div className='w-full h-full bg-yellow-400 rounded-t-lg md:rounded-bl-lg md:rounded-tr-none'></div>
        </div>

        <div className="p-4 flex flex-col w-full text-texto2">
          <h1 className="md:mb-2 text-lg md:text-xl font-bold">Estudio arquitectura</h1>
          <p className="text-md flex flex-wrap">Página orientada a la exibisión de proyectos arquitectónicos.</p>

          <div className="mt-auto">

            <div className='my-4 gap-2 text-sm flex items-center justify-start'>
              <div className='flex items-center justify-center'>
                <Link href={'https://github.com/bultynch'}>
                  <button className='gap-1.5 p-1.5 flex items-center bg-[#2b3137] text-texto1 text-sm font-semibold rounded-lg shadow-sm border border-[#24292e] transform transition-transform duration-300 ease-in-out hover:scale-105'><FaGithub className='w-4 h-4 mb-0.5'/>Código</button>
                </Link>
              </div>

              <div className='flex items-center justify-center'>
                <Link href={'https://github.com/bultynch/PC-store-react'}>
                  <button className='gap-2 p-1.5 flex items-center bg-none text-texto2 text-sm font-semibold rounded-lg shadow-sm border border-texto2 transform transition-transform duration-300 ease-in-out hover:scale-105'><FaArrowUpRightFromSquare/>Demo</button>
                </Link>
              </div>
            </div>

            <div className="gap-4 flex items-center justify-start ">
              <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg'} alt='astro' width={30} height={30} className='transform transition-transform duration-300 ease-in-out hover:scale-105'/>
              <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'} alt='tw' width={30} height={30} className='transform transition-transform duration-300 ease-in-out hover:scale-105'/>
            </div>
          </div>
        </div>

      </article>
    </div>
  )
}

export default ProyectCards