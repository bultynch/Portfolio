import Button1 from './Components/ui/Button1'
import TechnologyCards from './Components/ui/TechnologyCards'
import SocialLinks from './Components/ui/SocialLinks'
import ProyectCards from './Components/ui/ProyectCards'
import { fjallaOne, montserrat, pacifico} from './fonts/fonts';
import Image from 'next/image';
import profile from './Components/Pictures/profilepic3.jpg'
import NavBar from './Components/ui/NavBar'


export default function Home() {
  return (
    <div className="bg-bg1 flex flex-col items-center justify-center">

      <div className='gap-y-40
                      px-4
                      sm:px-10
                      md:px-20
                      lg:px-0
                      w-full
                      lg:w-[850px]'>


        <div>
          <NavBar />
        </div>


        {/*-------------------- NOMBRE Y PERFIL --------------------*/}


        <section className='gap-8 w-full h-[65vh] flex flex-col items-center justify-center'>

          <div className='lg:gap-8 w-full font-bold text-center flex flex-col lg:flex-row lg:items-center lg:justify-start'>

            <div className='flex items-center justify-center'>
              <Image src={profile} alt='foto perfil' width={200} height={200} className='rounded-full'/>
            </div>

            <div className='lg:text-start '>
              <h1 className={`${montserrat.className} mt-4 mb-2 lg:my-0 text-4xl lg:text-6xl text-nombre1`}>Francisco Bultynch</h1>
              <h2 className={`${fjallaOne.className} lg:mt-1 text-3xl lg:text-4xl `}>Fullstack developer</h2>

              <div className='mt-4 gap-2 flex items-center justify-center lg:justify-start '>
                <Button1 texto='Download CV' />
                <SocialLinks />
              </div>
            </div>

          </div>

        </section>


        {/*-------------------- SOBRE MI --------------------*/}


        <section className='my-8 w-full flex flex-col text-texto2'>
          <div className='w-full font-bold'>
            <h1 className='mb-4 text-2xl'>Sobre mi<span className='text-nombre1'>.</span></h1>
            <p className='text-md font-semibold'>¡Hola! Soy un apasionado de la programación y estudiante de Ingeniería Industrial, con un enfoque en el desarrollo web. Me encanta aprender nuevas tecnologías y enfrentar desafíos que me permitan crecer tanto personal como profesionalmente. A lo largo de mi formación, he desarrollado proyectos utilizando React y Next.js, lo que me ha ayudado a mejorar mis habilidades en el frontend, y actualmente estoy expandiendo mis conocimientos en el backend, explorando tecnologías como Node.js y Express.
            </p>
          </div>
        </section>


        {/*-------------------- PROYECTOS --------------------*/} <div className='divider'></div>


        <section className='my-8 gap-8 w-full flex flex-col text-texto2 border-components1'>

          <h1 className='text-2xl font-bold'>Proyectos<span className='text-nombre1'>.</span></h1>
          <ProyectCards />

        </section>


        {/*-------------------- TECNOLOGÍAS --------------------*/} <div className='divider'></div>


        <section className='my-8 gap-4 w-full flex flex-col items-center justify-center text-texto2 font-semibold'>
          <div className='flex text-start'>
            <h1 className='text-3xl font-bold'>Tecnologías<span className='text-nombre1'>.</span></h1>
          </div>
          
          <TechnologyCards />
        </section>
        

        {/*-------------------- CONTACTO --------------------*/} <div className='divider'></div>


        <section className='my-8 w-full flex flex-col text-texto2 border border-components1 rounded-lg shadow-md'>
          <div className='p-4 w-full rounded-xl text-2xl font-bold'>
            <h1 className=''>Contact me<span className='text-nombre1'>.</span></h1>
          </div>
        </section>

      </div>

      <div className='my-4 w-full text-texto2'>
        <h1 className='text-lg font-semibold text-center'>Sitio creado con Next.js</h1>
      </div>

    </div>
  );
}
