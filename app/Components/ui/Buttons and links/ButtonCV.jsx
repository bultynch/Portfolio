import React from 'react'

function Button1({texto}) {
  return (
    <button className='p-1.5 lg:py-2 lg:px-4 || bg-texto1 text-texto2 text-sm font-semibold rounded-md border border-nombre1 || transform transition-transform duration-300 ease-in-out || dark:bg-bg2 dark:text-texto1 dark:border-components2'>{texto}</button>
  )
}

export default Button1