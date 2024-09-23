import React from 'react'

function Button1({texto}) {
  return (
    <button className='py-2 px-4 text-texto1 font-semibold rounded-lg shadow-lg border border-components1 bg-components1 hover:border-components1 hover:bg-bg1 hover:text-texto2'>{texto}</button>
  )
}

export default Button1