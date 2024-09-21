import TechIcons from './Components/TechIcons'
import Navbar from './Components/Navbar'
import { fjallaOne, pacifico, satisfy } from './fonts/fonts';

export default function Home() {
  return (
    <div className="bg-[#F9F8F5]">

      <div className="p-4 w-full h-full flex-grow flex items-center justify-between ">
        <button>hola</button>
        <button>cl¿</button>
      </div>

      <div className='mx-4 flex flex-col'>

        <div className='my-4 w-full flex flex-col'>

          <div className='w-full rounded-xl'>
            <h1 className='text-center text-4xl font-bold'>Hi, my name is <span className={`${pacifico.className} text-[#663333]`}>Francisco Bultynch</span></h1>
            <h1 className='text-4xl font-bold'>I'm a Web Developer.</h1>

            <div className='mt-4 text-[#FFFEFE]'>
              <button className='mr-2 p-2 border border-[#A1887F] bg-[#A1887F] rounded-lg shadow-sm'>Resume</button>
              <button className='p-2 border border-[#A1887F] bg-[#A1887F] rounded-lg shadow-sm'>Proyectos</button>
            </div>
          </div>

        </div>

        <div className='my-4 w-full flex flex-col text-[#181818] border border-[#A1887F] rounded-lg shadow-sm'>
          <div className='p-4 w-full rounded-xl text-2xl font-bold'>
            <h1 className=''>Sobre mi<span className='text-[#663333]'>.</span></h1>
            <p className='text-lg'>¡Hola! Soy un apasionado de la programación y estudiante de Ingeniería Industrial, con un enfoque en el desarrollo web. Me encanta aprender nuevas tecnologías y enfrentar desafíos que me permitan crecer tanto personal como profesionalmente. A lo largo de mi formación, he desarrollado proyectos utilizando React y Next.js, lo que me ha ayudado a mejorar mis habilidades en el frontend, y actualmente estoy expandiendo mis conocimientos en el backend, explorando tecnologías como Node.js y Express.
            </p>
          </div>
        </div>

        <div className='mb-4 w-full flex flex-col text-[#181818] border border-[#A1887F] rounded-lg shadow-sm'>
          <div className='p-4 w-full h-[400px] rounded-xl text-2xl font-bold'>
            <h1 className=''>Proyectos<span className='text-[#663333]'>.</span></h1>
            <TechIcons />
          </div>
        </div>

        <div className=' w-full flex flex-col text-[#181818] border border-[#A1887F] rounded-lg shadow-sm'>
          <div className='p-4 w-full h-[400px] rounded-xl text-2xl font-bold'>
            <h1 className=''>Tecnologías<span className='text-[#663333]'>.</span></h1>
          </div>
        </div>

      </div>

      <div className='my-4 w-full h-10 text-neutral-600'>
        <h1 className='text-lg font-semibold text-center'>Sitio creado con Next.js</h1>
      </div>


      
    </div>
  );
}
