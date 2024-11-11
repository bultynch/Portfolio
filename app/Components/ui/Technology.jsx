import React from 'react'

function Technology({title, image}) {
  return (
    <div className='w-24 flex flex-col items-center justify-center'>  
      <img src={image} alt='tecnologia' className='w-16 h-16 transform transition-transform duration-300 ease-in-out hover:scale-105'/>
      <h1 className='text-center text-sm text-texto2 dark:text-texto1'>{title}</h1>
    </div>
  )
}

export default Technology