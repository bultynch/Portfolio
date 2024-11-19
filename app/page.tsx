import ButtonCV from './Components/ui/ButtonCV'
import TechnologyCards from './Components/ui/TechnologyCards'
import SocialLinks from './Components/ui/SocialLinks'
import ProyectCards from './Components/ui/ProyectCards'
import {  bunge, ewert, fascinatein, fjallaone, honk, inter, lobster, montserrat, notable, pacifico, saira1, sancreek} from './fonts';
import Image from 'next/image';
import profile from './Components/Pictures/profilepic3.jpg'
import Contact from './Components/ui/Contact'
import DarkModeButton from './Components/ui/DarkModeButton'
import ScrollButton from './Components/ui/ScrollButton'
import Emoji from './Components/ui/Emoji'


export default function Home() {
  return (
    <div className="gap-8 bg-bg1 dark:bg-bg2 flex flex-col items-center justify-center">

      <div className='px-4 sm:px-10 md:px-20 lg:px-0 w-full lg:w-[850px]'>

        <nav className='text-right'>
          <DarkModeButton />

        </nav>


        {/*-------------------- NOMBRE Y PERFIL --------------------*/}


        <section className='gap-8 w-full h-[90vh] flex flex-col items-center justify-center'>

          <div className='lg:gap-8 w-full font-bold text-center flex flex-col lg:flex-row lg:items-center lg:justify-start'>

            <div className='flex items-center justify-center'>
              <Image src={profile} alt='foto perfil' width={200} height={200} className='rounded-full'/>
            </div>

            <div className='lg:text-start '>
            <h1 className='mt-4 mb-2 lg:my-0 text-5xl lg:text-6xl text-texto2 dark:text-texto1'> Hi, I'm <span className={`${inter.className} antialiased text-nombre1 dark:text-nombre2`}>Francisco</span><Emoji/></h1>

              <h2 className='lg:mt-2 lg:ml-0.5 text-3xl lg:text-4xl dark:text-texto1'>Full Stack developer</h2>

              <div className='lg:ml-1 mt-5 gap-2 flex items-center justify-center lg:justify-start '>
                <ButtonCV texto='Download CV' />
                <SocialLinks />
              </div>
            </div>

          </div>

         


        </section>


        {/*-------------------- SOBRE MI --------------------*/}


        <section className='my-20 gap-10 w-full flex flex-col text-texto2 font-bold'>

          <h1 className={`${inter.className} text-3xl dark:text-texto1`}>Sobre mi<span className='text-3xl text-nombre1 dark:text-components2'>.</span></h1>
          <p className='text-md font-semibold dark:text-texto1'>Soy un estudiante autodidacta de desarrollo web y actualmente curso la Tecnicatura en Desarrollo de Software. Durante más de un año, he estado aprendiendo y trabajando en proyectos con React y Next.js, lo que me ha permitido mejorar mis habilidades en el frontend. Actualmente, estoy estudiando Node.js, Express y MySQL para ampliar mis conocimientos en el backend.</p>
          
        </section>


        {/*-------------------- PROYECTOS --------------------*/} <div className='w-full h-0.5 bg-gray-200 dark:bg-gray-600'></div>


        <section className='my-20 gap-10 w-full flex flex-col text-texto2 border-components1'>

          <h1 className='text-3xl text-texto2 font-bold dark:text-texto1'>Proyectos<span className='text-nombre1 dark:text-components2'>.</span></h1>
          <ProyectCards />

        </section>


        {/*-------------------- TECNOLOGÍAS --------------------*/} <div className='w-full h-0.5 bg-gray-200 dark:bg-gray-600'></div>


        <section className='my-20 gap-8 w-full flex flex-col items-center justify-center text-texto2 font-semibold'>
          
          <h1 className='w-full text-3xl font-bold dark:text-texto1'>Mis tecnologías<span className='text-nombre1 dark:text-components2'>.</span></h1>
          <TechnologyCards />

        </section>
        

        {/*-------------------- CONTACTO --------------------*/} <div className='w-full h-0.5 bg-gray-200 dark:bg-gray-600'></div>


        <section className='my-20 gap-10 w-full flex flex-col text-texto2'>

          <h1 className='text-3xl font-bold dark:text-texto1'>Contactame<span className='text-nombre1 dark:text-components2'>.</span></h1>

          <Contact />

        </section>

      </div>
    </div>
  );
}
