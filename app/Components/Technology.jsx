import React from 'react'

function Technology({title, image}) {
  return (
    <div className='w-20 h-20 flex flex-col items-center justify-center'>  
      <img src={image} alt='tecnologia' className=''/>
      <h1 className='text-center text-lg text-texto2'>{title}</h1>
    </div>
  )
}

export default Technology