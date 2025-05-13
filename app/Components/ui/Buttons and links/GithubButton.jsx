import React from 'react'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";


function GithubButton({linkRepo}) {
  return (
    <div className='flex items-center justify-center'>

      <Link href={linkRepo}>
        <button className='gap-2 || p-2 || flex items-center || bg-[#2b3137] text-texto1 text-md font-semibold rounded-lg border border-[#24292e] || transform transition-transform duration-200 ease-in-out hover:scale-105 || dark:bg-white dark:text-[#2b3137]'><FaGithub className='w-4 h-4 mb-0.5'/>Código</button>
      </Link>

    </div>
  )
}

export default GithubButton