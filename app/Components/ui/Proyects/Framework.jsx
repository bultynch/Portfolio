import React from 'react';
import Image from 'next/image';

function ProyectTechnologyCards({name, icon}) {
 
  return (
    <div className='gap-2 || py-1 px-2 || flex items-center || bg-gray-200 rounded-full'>
      <Image src={icon} alt={name} width={17} height={17}/>
      <h1 className='text-[11px] font-semibold'>{name}</h1>
    </div>
  )
}

export default ProyectTechnologyCards