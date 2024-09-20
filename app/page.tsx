import Navbar from './Components/Navbar'
import { fjallaOne, pacifico, satisfy } from './fonts/fonts';

export default function Home() {
  return (
    <div className="bg-[#F9F8F5]">

      <div className="p-4 w-full h-full flex-grow flex items-center justify-between ">
        <button>hola</button>
        <button>cl¿</button>
      </div>

      <div className='px-4 flex flex-col'>

        <div className='my-4 w-full flex flex-col text-{texto1} border-[#A1887F] rounded-lg shadow-sm'>
          <div className='p-4 w-full h-[400px] rounded-xl'>

            <h1 className='text-4xl font-bold'>Hi, my name is <span className={`${pacifico.className} text-[#663333]`}>Francisco Bultynch</span></h1>
            <h1 className='text-4xl font-bold'>I'm a Web Developer.</h1>

            <div className='my-4 text-[#FFFEFE]'>
              <button className='mr-2 p-2 border border-[#A1887F] rounded-lg shadow-sm bg-[#A1887F]'>Resume</button>
              <button className='p-2 border border-[#A1887F] rounded-lg shadow-sm bg-[#A1887F]'>Proyectos</button>
            </div>
          </div>

        </div>

        <div className='my-4 w-full flex flex-col text-[#404040] border border-[#A1887F] rounded-lg shadow-sm'>
          <div className='p-4 w-full h-[400px] rounded-xl text-2xl font-bold'>
            <h1 className=''>Sobre mi<span className='text-[#663333]'>.</span></h1>
          </div>
        </div>

        <div className='my-4 w-full flex flex-col text-[#404040] border border-[#A1887F] rounded-lg shadow-sm'>
          <div className='p-4 w-full h-[400px] rounded-xl text-2xl font-bold'>
            <h1 className=''>Proyectos<span className='text-[#663333]'>.</span></h1>
          </div>
        </div>

      </div>

      <div className='w-full h-10 text-neutral-600'>
        <h1 className='text-lg font-semibold text-center'>Sitio creado con Next.js</h1>
      </div>


      
    </div>
  );
}
