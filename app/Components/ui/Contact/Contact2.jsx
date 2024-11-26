import React from 'react'
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaSquareFacebook } from 'react-icons/fa6';

function Contact2() {
  return (
    <div className='p-10 || bg-nombre1 border border-gray-200 rounded-xl shadow-sm || dark:bg-components2 dark:border-gray-500 || flex flex-col items-center justify-center'>

        <div className='text-center font-bold text-texto1'>
            <h1 className='mb-8 || text-5xl dark:text-texto1'>Contactame<span className='text-texto2'>.</span></h1>
            <p className='text-xl dark:text-texto1'>¿Tenés preguntas o querés trabajar conmigo? Enviame un mensaje!</p>
        </div>

        <div className='gap-2 || mt-8 ml-4 || flex flex-row items-center justify-start text-texto1 dark:text-texto1'>
            <Link href={'https://github.com/bultynch'}><FaLinkedin className='w-7 h-7 || transform transition-transform hover:scale-105'/></Link>
            <Link href={'https://github.com/bultynch'}><FaInstagram className='w-7 h-7 || transform transition-transform hover:scale-105'/></Link>
            <Link href={'https://github.com/bultynch'}><FaSquareFacebook className='w-7 h-7 || transform transition-transform hover:scale-105'/></Link>
        </div>

    </div>
  )
}

export default Contact2