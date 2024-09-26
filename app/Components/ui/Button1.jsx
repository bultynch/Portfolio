import React from 'react'

function Button1({texto}) {
  return (
    <button className='p-1.5 lg:py-2 lg:px-4 text-texto2 text-sm font-semibold rounded-lg shadow-md border border-components1 transform transition-transform duration-300 ease-in-out hover:scale-105'>{texto}</button>
  )
}

export default Button1