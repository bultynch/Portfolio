import React from 'react'
import Link from 'next/link'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


function DemoButton({linkDemo}) {
  return (
    <div className='flex items-center justify-center'>

      <Link href={linkDemo}>
        <button className='gap-2 || p-2 || flex items-center || bg-none text-texto2 text-md font-semibold rounded-lg border border-texto2 || transform transition-transform duration-200 ease-in-out hover:scale-105 || dark:text-texto1 dark:border-texto1'><FaArrowUpRightFromSquare/>Demo</button>
      </Link>

    </div>
  )
}

export default DemoButton