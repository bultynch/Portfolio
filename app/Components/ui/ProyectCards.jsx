import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import pcstore from '../Pictures/pcStore.png'


function ProyectCards() {
  return (
    <div className=''>
      <article className="mb-4 w-full flex flex-col md:flex-row rounded-lg shadow-md border border-components1 bg-bg1">

        <div className='w-full h-60 rounded-t-lg md:rounded-l-lg md:rounde-r-none'>
          <Image src={pcstore} alt='pcstore' width={200} height={100} className='w-full h-full rounded-t-lg'/>
        </div>

        <div className="p-4 flex flex-col text-texto2">
          <h1 className="text-2xl font-bold">Proyect Computer Store</h1>
          <p className="mt-4 mb-2 text-md">E-comerce dedicado a la venta de componentes para computadoras.</p>
          
          <div className='gap-2 text-sm flex items-center justify-start'>

            <div className='flex items-center justify-center'>
              <Link href={'https://github.com/bultynch'}>
                <button className='gap-2 p-2 flex items-center bg-[#2b3137] text-texto1 text-sm font-semibold rounded-lg shadow-sm border border-[#24292e] transform transition-transform duration-300 ease-in-out hover:scale-105'>Github<FaGithub className='w-4 h-4 mb-0.5'/></button>
              </Link>
            </div>
            
            <div className='flex items-center justify-center'>
              <Link href={'https://github.com/bultynch/PC-store-react'}>
                <button className='gap-2 p-2 flex items-center bg-none text-texto2 text-sm font-semibold rounded-lg shadow-sm border border-texto2 transform transition-transform duration-300 ease-in-out hover:scale-105'>Demo<FaArrowUpRightFromSquare /></button>
              </Link>
            </div>
            

          </div>

          <div className="mt-6 gap-4 flex items-center justify-start ">
            <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg'} alt='js' width={30} height={30} className='transform transition-transform duration-300 ease-in-out hover:scale-105'/>
            <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'} alt='react' width={30} height={30} className='transform transition-transform duration-300 ease-in-out hover:scale-105'/>
            <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'} alt='tw' width={30} height={30} className='transform transition-transform duration-300 ease-in-out hover:scale-105'/>
            <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg'} alt='ts' width={30} height={30} className='transform transition-transform duration-300 ease-in-out hover:scale-105'/>
            <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'} alt='express' width={30} height={30} className='transform transition-transform duration-300 ease-in-out hover:scale-105'/>
            <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'} alt='mysql' width={30} height={30} className='transform transition-transform duration-300 ease-in-out hover:scale-105'/>
          </div>
        </div>

      </article>

      {/*-------------------- PROYECTO 2 --------------------*/} 

      <article className="mb-4 w-full rounded-lg shadow-md border border-components1 bg-bg1">

        <div className='w-full h-60 rounded-t-lg bg-red-500'>
          <Image src={pcstore} alt='pcstore' width={200} height={100} className='w-full h-full rounded-t-lg'/>
        </div>    

        <div className="p-4 flex flex-col text-texto2">
          <h1 className="text-2xl font-bold">Estudio arquitecura</h1>
          <p className="mt-4 mb-2 text-md">Página orientada a la exposición de proyectos realizados por el estudio 'nombre'.</p>
          
          <div className='gap-2 text-sm flex items-center justify-start'>

            <div className='flex items-center justify-center'>
            <Link href={'https://github.com/bultynch'}>
                <button className='gap-2 p-2 flex items-center bg-[#2b3137] text-texto1 text-sm font-semibold rounded-lg shadow-sm border border-[#24292e] transform transition-transform duration-300 ease-in-out hover:scale-105'>Github<FaGithub className='w-4 h-4 mb-0.5'/></button>
              </Link>
            </div>
            
            <div className='flex items-center justify-center'>
              <Link href={'https://github.com/bultynch/PC-store-react'}>
                <button className='gap-2 p-2 flex items-center bg-none text-texto2 text-sm font-semibold rounded-lg shadow-sm border border-texto2 transform transition-transform duration-300 ease-in-out hover:scale-105'>Demo<FaArrowUpRightFromSquare /></button>
              </Link>
            </div>
            

          </div>

          <div className="mt-6 gap-4 flex items-center justify-start ">
            <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg'} alt='js' width={30} height={30} className='transform transition-transform duration-300 ease-in-out hover:scale-105'/>
            <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg'} alt='astro' width={30} height={30} className='transform transition-transform duration-300 ease-in-out hover:scale-105'/>
            <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'} alt='tw' width={30} height={30} className='transform transition-transform duration-300 ease-in-out hover:scale-105'/>
          </div>
        </div>

      </article>
    </div>
  )
}

export default ProyectCards