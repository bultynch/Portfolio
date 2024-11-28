import React from 'react'
import Image from 'next/image';

function ProyectTechnology() {

  return (
    <div className='|| grid grid-cols-1 lg:grid-cols-[45%_55%]'>

      <div className='w-auto h-[400px] || py-5 px-10 || border-2 border-black rounded-lg font-bold'>

        <div className=''>
          <h2 className='mb-4 || text-3xl'>Titulo proyecto</h2>
          <p className='mb-4 || font-semibold text-xl'>Descriptcion proyecto asdas da sd ad a d asd a sd</p>
        </div>

        <div className="gap-2 flex items-center justify-start ">

          <div className='gap-2 py-1 px-2 flex items-center bg-gray-200 rounded-full'>
            <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg'} alt='nextjs' width={17} height={17}/>
            <h1 className='text-[11px] font-semibold'>Next.js</h1>
          </div>

          <div className='gap-2 py-1 px-2 flex items-center bg-gray-200 rounded-full'>
            <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'} alt='tw' width={17} height={17}/>
            <h1 className='text-[11px] font-semibold'>TailwindCSS</h1>
          </div>

          <div className='gap-2 py-1 px-2 flex items-center bg-gray-200 rounded-full'>
            <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'} alt='express' width={17} height={17}/>
            <h1 className='text-[11px] font-semibold'>ExpressJS</h1>
          </div>

          <div className='gap-2 py-1 px-2 flex items-center bg-gray-200 rounded-full'>
            <Image src={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'} alt='mysql' width={17} height={17}/>
            <h1 className='text-[11px] font-semibold'>MySQL</h1>
          </div>

        </div>

        <div className='gap-4 || flex items-start'>
          <button className='bg-red-400 px-2'>demo</button>
          <button className='bg-green-400 px-2'>github</button>
        </div>

      </div>

      <div className='w-auto h-[400px] || bg-red-500 rounded-lg'></div>

    </div>
  )
}

export default ProyectTechnology