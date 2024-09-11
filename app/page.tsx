import Navbar from './Components/Navbar'

export default function Home() {
  return (
    <div className="bg-violet-900">

      <div className="p-4 w-full h-full flex-grow flex items-center justify-center bg-violet-950 text-white">
        <h1 className='text-xl'>BULTYNCH PORTFOLIO</h1>
      </div>

      <div className='px-4'>

        <div className='my-4 w-full flex flex-col text-white'>
          <div>
            <h1 className='text-center'>Presentación</h1>
          </div>

          <div className='p-2 w-full h-[400px] bg-red-500'>
            asd
          </div>
        </div>

        <div className='my-4 w-full flex flex-col text-white'>
          <div>
            <h1 className='text-center'>tecnologias</h1>
          </div>

          <div className='p-2 w-full h-[400px] bg-yellow-500'>
            asd
          </div>
        </div>

        <div className='w-full flex flex-col text-white'>
          <div>
            <h1 className='text-center'>proyectos</h1>
          </div>

          <div className='p-2 w-full h-[400px] bg-green-500'>
            asd
          </div>
        </div>

        <div className='my-4 w-full flex flex-col text-white'>
          <div>
            <h1 className='text-center'>contacto</h1>
          </div>

          <div className='p-2 w-full h-[400px] bg-yellow-500'>
            asd
          </div>
        </div>

      </div>

      <div className='w-full h-10 bg-violet-950 text-white'>
        footer
      </div>


      
    </div>
  );
}
