import React from 'react'

function DemoButton({linkDemo}) {
  return (
    <div className='flex items-center justify-center'>
        <Link href={linkDemo}>
            <button className='gap-2 p-1.5 flex items-center bg-none text-texto2 text-sm font-semibold rounded-lg shadow-sm border border-texto2 transform transition-transform duration-300 ease-in-out hover:scale-105 dark:text-texto1 dark:border-texto1'><FaArrowUpRightFromSquare/>Demo</button>
        </Link>
    </div>
  )
}

export default DemoButton