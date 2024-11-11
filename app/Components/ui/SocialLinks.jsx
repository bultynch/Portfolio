import React from 'react'
import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";


function SocialLinks() {
  return (
    <div className='gap-2 flex items-center justify-center transition-colors duration-0'>
        <button className='text-components1 transform transition-transform duration-300 ease-in-out hover:scale-105 dark:text-texto1'>
            <Link href='https://www.linkedin.com/in/francisco-bultynch-78a717225/'>
                <FaLinkedinIn className='w-6 h-6'/>
            </Link>
        </button>

        <button className='text-components1 transform transition-transform duration-300 ease-in-out hover:scale-105 dark:text-texto1'>
            <Link href='https://github.com/bultynch'>
                <FaGithub className='w-6 h-6'/>
            </Link>
        </button>

    </div>
  )
}

export default SocialLinks
