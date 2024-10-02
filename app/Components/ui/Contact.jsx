import React from 'react'
import Link from 'next/link';
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";

function Contact() {
  return (
    <div className='px-2 md:px-4 py-4 w-full rounded-lg bg-texto2 flex flex-col md:flex-row items-center justify-center '>

        <div className='mb-2 w-full h-full flex md:flex-col items-center justify-between md:justify-center'>
            <h1 className='mb-2 text-3xl text-texto1 font-bold'>Contactame<span className='text-nombre1'>.</span></h1>
            <div className='gap-2 flex flex-row'>
                <div className='flex items-center justify-center'>
                    <Link href={'https://github.com/bultynch'}>
                        <button className='hover:scale-105'><FaLinkedinIn className='w-5 h-5 text-texto1'/></button>
                    </Link>
                </div>

                <div className='flex items-center justify-center'>
                    <Link href={'https://github.com/bultynch'}>
                        <button className='hover:scale-105'><FaInstagram className='w-5 h-5 text-texto1'/></button>
                    </Link>
                </div>

                <div className='flex items-center justify-center'>
                    <Link href={'https://github.com/bultynch'}>
                        <button className='hover:scale-105'><FaSquareFacebook className='w-5 h-5 text-texto1'/></button>
                    </Link>
                </div>

            </div>
        </div>

        <div className='gap-4 w-full flex flex-col justify-center rounded-lg shadow-sm'>

            <input type='text' placeholder='Nombre' className='px-2 w-full h-8 flex items-start justify-center text-sm text-black bg-bg1 border-b-2 rounded-lg outline-none'/>

            <input type='password' placeholder='Email' className='px-2 w-full h-8 flex items-start justify-center text-sm text-black bg-bg1 border-b-2 rounded-lg outline-none'/>

            <textarea name="mensaje" placeholder='Mensaje' className='p-2 w-full h-40 flex items-start justify-center text-sm text-black bg-bg1 border-b-2 rounded-lg outline-none'></textarea>

            <button className=' w-full h-16 flex items-center justify-center text-white text-lg font-semibold bg-nombre1 hover:scale-105 rounded-lg'>Enviar</button>

        </div>

    </div> 
  )
}

export default Contact