import React from 'react'

function Technology({title, image}) {
  return (
    <div className='w-24 || flex flex-col items-center justify-center'>  
      <img src={image} alt='tecnologia' className='w-16 h-16'/>
      <h1 className='mt-2 || text-center text-sm text-texto2'>{title}</h1>
    </div>
  )
}

export default Technology