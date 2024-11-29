import React from 'react'
import Link from 'next/link'

function GithubButton({linkRepo}) {
  return (
    <div className='flex items-center justify-center'>
        <Link href={LinkRepo}>
            <button className='gap-1.5 p-1.5 flex items-center bg-[#2b3137] text-texto1 text-sm font-semibold rounded-lg shadow-sm border border-[#24292e] transform transition-transform duration-300 ease-in-out hover:scale-105'><FaGithub className='w-4 h-4 mb-0.5'/>Código</button>
        </Link>
    </div>
  )
}

export default GithubButton