import TechIcons from './Components/TechIcons';
import Button1 from './Components/ui/Button1'
import { fjallaOne, pacifico, satisfy } from './fonts/fonts';

export default function Home() {
  return (
    <div className="bg-bg1">


      <div className='mx-4 flex flex-col'>

        <div className='gap-10 w-full h-[95vh] flex flex-col items-center justify-center'>

          <div className='w-full text-4xl font-bold text-center'>
            <h1 className=''>Hi, my name is </h1>
            <h1 className={`${pacifico.className} text-5xl mt-2 mb-4 text-nombre1`}>Francisco Bultynch</h1>
            <h1 className=''>I'm a Web Developer.</h1>
          </div>

          <div className='gap-4 flex items-center'>
            <div className=''>
              <Button1 texto='Resumee' />
            </div>
            <div>
              <Button1 texto='Proyects' />
            </div>
          </div>

        </div>


        <div className='divider'></div>


        <div className='my-4 w-full flex flex-col text-texto2 border border-components1 rounded-lg shadow-sm'>
          <div className='p-4 w-full rounded-xl text-2xl font-bold'>
            <h1 className=''>About me<span className='text-nombre1'>.</span></h1>
            <p className='text-lg'>¡Hola! Soy un apasionado de la programación y estudiante de Ingeniería Industrial, con un enfoque en el desarrollo web. Me encanta aprender nuevas tecnologías y enfrentar desafíos que me permitan crecer tanto personal como profesionalmente. A lo largo de mi formación, he desarrollado proyectos utilizando React y Next.js, lo que me ha ayudado a mejorar mis habilidades en el frontend, y actualmente estoy expandiendo mis conocimientos en el backend, explorando tecnologías como Node.js y Express.
            </p>
          </div>
        </div>

        <div className='mb-4 w-full flex flex-col text-texto2 border border-components1 rounded-lg shadow-sm'>
          <div className='p-4 w-full h-[400px] rounded-xl text-2xl font-bold'>
            <h1 className=''>Proyectos<span className='text-nombre1'>.</span></h1>

            <TechIcons />
          </div>
        </div>

        <div className=' w-full flex flex-col text-texto2 border border-components1 rounded-lg shadow-sm'>
          <div className='p-4 w-full h-[400px] rounded-xl text-2xl font-bold'>
            <h1 className=''>Tecnologías<span className='text-nombre1'>.</span></h1>
          </div>
        </div>

      </div>

      <div className='my-4 w-full h-10 text-texto2'>
        <h1 className='text-lg font-semibold text-center'>Sitio creado con Next.js</h1>
      </div>


      
    </div>
  );
}
