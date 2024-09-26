import React from 'react'

function Technology({title, image}) {
  return (
    <div className='w-28 flex flex-col items-center justify-center '>  
      <img src={image} alt='tecnologia' className='w-20 h-20 transform transition-transform duration-300 ease-in-out hover:scale-105'/>
      <h1 className='text-center text-lg text-texto2'>{title}</h1>
    </div>
  )
}

export default Technology