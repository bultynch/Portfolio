import React from 'react'
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaSquareFacebook } from 'react-icons/fa6';

function Contact2() {
  return (
    <div className='p-10 || border border-gray-200 rounded-xl shadow-sm dark:border-gray-500 dark:shadow-gray-500 || flex flex-col items-center justify-center'>

        <div className='text-center font-bold'>
            <h1 className='mb-8 || text-5xl dark:text-texto1'>Contactame<span className='text-nombre1 dark:text-components2'>.</span></h1>
            <p className='text-xl dark:text-texto1'>Tenés preguntas o querés trabajar conmigo? Enviame un mensaje!</p>
        </div>

        <div className='gap-2 || mt-8 ml-4 || flex flex-row items-center justify-start text-texto2 dark:text-texto1'>
            <Link href={'https://github.com/bultynch'}><FaLinkedin className='w-8 h-8 || transform transition-transform hover:scale-105'/></Link>
            <Link href={'https://github.com/bultynch'}><FaInstagram className='w-8 h-8 || transform transition-transform hover:scale-105'/></Link>
            <Link href={'https://github.com/bultynch'}><FaSquareFacebook className='w-8 h-8 || transform transition-transform hover:scale-105'/></Link>
        </div>

    </div>
  )
}

export default Contact2