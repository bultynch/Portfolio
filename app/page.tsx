import DarkModeButton from './Components/ui/Buttons and links/DarkModeButton';
import profile from './Components/Pictures/profilepic3.jpg';
import Image from 'next/image';
import Emoji from './Components/ui/Others/Emoji';
import ButtonCV from './Components/ui/Buttons and links/ButtonCV';
import SocialLinks from './Components/ui/Buttons and links/SocialLinks';
import {  bunge, ewert, fascinatein, fjallaone, honk, inter, lobster, montserrat, notable, pacifico, saira1, sancreek} from './fonts';
import PyComponent from './Components/ui/Proyects/PyComponent';
import PyComponentReverse from './Components/ui/Proyects/PyComponentReverse';
import TechnologyCards from './Components/ui/Technologies/TechnologyCards';
import Contact from './Components/ui/Contact/Contact';
import Contact2 from './Components/ui/Contact/Contact2';


export default function Home() {
  return (
    <div className="gap-8 || bg-texto1 dark:bg-bg2 || flex flex-col items-center justify-center">

      <div className='w-full'>

        <nav className='px-10 md:px-20 lg:px-30 2xl:px-60 || text-right'>

          <DarkModeButton />

        </nav>


        {/*-------------------- NOMBRE Y PERFIL --------------------*/}


        <section className='w-full h-[85vh] || gap-8 || mb-24 || px-10 md:px-20 lg:px-30 2xl:px-60 py-40 || flex flex-col items-center justify-center'>

          <div className='w-full || lg:gap-8 || font-bold text-center || flex flex-col lg:flex-row lg:items-center lg:justify-start'>

            <div className='flex items-center justify-center'>
              <Image src={profile} alt='foto perfil' width={250} height={250} className='rounded-full'/>
            </div>

            <div className='lg:text-start'>

              <h1 className='mt-4 mb-2 lg:my-0 || text-4xl sm:text-5xl lg:text-6xl text-texto2 dark:text-texto1'> Hola, soy <span className={`${inter.className} antialiased text-nombre1 dark:text-nombre2`}>Francisco</span><Emoji/></h1>
              <h2 className='lg:mt-2 lg:ml-0.5 || text-2xl sm:text-3xl lg:text-4xl text-texto2 dark:text-texto1'>Full Stack Developer</h2>

              <div className='gap-2 || lg:ml-1 mt-5 || flex items-center justify-center lg:justify-start '>
                <ButtonCV texto='Download CV' />
                <SocialLinks />
              </div>

            </div>

          </div>

        </section>


        {/*-------------------- SOBRE MI --------------------*/}


        <section className='w-full || py-20 md:py-40 px-10 md:px-20 lg:px-30 2xl:px-60 || bg-nombre1 dark:bg-components2 text-texto1 font-bold || '>

          <h2 className={`${inter.className} mb-14 || text-5xl text-texto1 font-bold`}>SOBRE MI<span className='text-texto2'>.</span></h2>
          <p className=' text-2xl font-medium || dark:text-texto1'>Soy un estudiante autodidacta de desarrollo web y actualmente curso la Tecnicatura Universitaria en Programación. Durante más de un año, he estado aprendiendo y trabajando en proyectos con React y Next.js, lo que me ha permitido mejorar mis habilidades en el frontend. Actualmente, estoy estudiando Node.js, Express y MySQL para ampliar mis conocimientos en el backend.</p>

        </section>


        {/*-------------------- PROYECTOS --------------------*/} 


        <section className='w-full || gap-20 || py-20 md:py-40 px-10  md:px-20 lg:px-30 2xl:px-60 || text-texto2 || flex flex-col '>

          <h2 className={`${inter.className} text-5xl text-texto2 || dark:text-texto1 font-bold`}>PROYECTOS<span className='text-nombre1 dark:text-components2'>.</span></h2>

          <PyComponent />
          <PyComponentReverse />
          <PyComponent />
          <PyComponentReverse />

        </section>


        {/*-------------------- TECNOLOGÍAS --------------------*/} 


        <section className='w-full || gap-20 || py-20 md:py-40 px-10 md:px-20 lg:px-30 2xl:px-60 || flex flex-col '>
          
          <h2 className={`${inter.className} text-5xl text-texto2 font-bold || dark:text-texto1`}>MIS TECNOLOGÍAS<span className='text-nombre1 dark:text-components2'>.</span></h2>
          <TechnologyCards />

        </section>
        

        {/*-------------------- CONTACTO --------------------*/}


        <section className='w-full || gap-10 || py-20 md:py-40 px-10 md:px-20 lg:px-30 2xl:px-60 || text-texto2 || grid grid-cols-1 lg:grid-cols-2'>

          <Contact2 />
          <Contact />

        </section>

      </div>
    </div>
  );
}
