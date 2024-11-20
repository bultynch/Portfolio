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
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaSquareFacebook } from 'react-icons/fa6';


export default function Home() {
  return (
    <div className="gap-8 bg-white dark:bg-bg2 flex flex-col items-center justify-center">

      <div className='w-full'>

        <nav className='px-10 md:px-20 lg:px-30 2xl:px-60 || text-right'>
          <DarkModeButton />

        </nav>


        {/*-------------------- NOMBRE Y PERFIL --------------------*/}


        <section className='w-full h-[91vh] || gap-8 mb-12 px-10 md:px-20 lg:px-30 2xl:px-60 py-40 || flex flex-col items-center justify-center'>

          <div className='w-full || lg:gap-8 || font-bold text-center || flex flex-col lg:flex-row lg:items-center lg:justify-start'>

            <div className='flex items-center justify-center'>
              <Image src={profile} alt='foto perfil' width={200} height={200} className='rounded-full'/>
            </div>

            <div className='lg:text-start'>
            <h1 className='mt-4 mb-2 lg:my-0 || text-5xl lg:text-6xl text-texto2 dark:text-texto1'> Hi, I'm <span className={`${inter.className} antialiased text-nombre1 dark:text-nombre2`}>Francisco</span><Emoji/></h1>

              <h2 className='lg:mt-2 lg:ml-0.5 || text-3xl lg:text-4xl text-texto2 dark:text-texto1'>Full Stack Developer</h2>

              <div className='lg:ml-1 mt-5 gap-2 flex items-center justify-center lg:justify-start '>
                <ButtonCV texto='Download CV' />
                <SocialLinks />
              </div>
            </div>

          </div>

         


        </section>


        {/*-------------------- SOBRE MI --------------------*/}


        <section className='w-full h-128 ||  px-10 md:px-20 lg:px-30 2xl:px-60 || bg-nombre1 text-texto1 font-bold dark:bg-components2 || flex flex-col justify-center '>

          <h1 className={`${bunge.className} mb-14 text-4xl dark:text-texto1`}>Sobre mi.</h1>
          <p className='text-lg font-semibold dark:text-texto1'>Soy un estudiante autodidacta de desarrollo web y actualmente curso la Tecnicatura en Desarrollo de Software. Durante más de un año, he estado aprendiendo y trabajando en proyectos con React y Next.js, lo que me ha permitido mejorar mis habilidades en el frontend. Actualmente, estoy estudiando Node.js, Express y MySQL para ampliar mis conocimientos en el backend.</p>

          
        </section>


        {/*-------------------- PROYECTOS --------------------*/} 


        <section className='w-full || gap-14 || py-20 md:py-40 px-10  md:px-20 lg:px-30 2xl:px-60 || text-texto2 || flex flex-col '>

        <h1 className={`${bunge.className} text-4xl text-nombre1 dark:text-texto1`}>Proyectos.</h1>
          <ProyectCards />

        </section>


        {/*-------------------- TECNOLOGÍAS --------------------*/} 


        <section className='w-full || gap-14 || py-20 md:py-40 px-10  md:px-20 lg:px-30 2xl:px-60 || bg-nombre1 text-texto2 font-semibold || flex flex-col items-center justify-center '>
          
          <h1 className='w-full || text-3xl font-bold dark:text-texto1'>Mis tecnologías<span className='text-nombre1 dark:text-components2'>.</span></h1>
          <TechnologyCards />

        </section>
        

        {/*-------------------- CONTACTO --------------------*/}


        <section className='w-full || gap-4 || mt-20 mb-10 || text-texto2 || flex flex-col '>

          <div className='p-10 || border border-black rounded-lg || flex flex-col items-center justify-center'>

            <div className='text-center'>
              <h1 className='mb-4 text-4xl font-bold dark:text-texto1'>Contactame<span className='text-nombre1 dark:text-components2'>.</span></h1>
              <p className='text-xl'>Tenés preguntas o querés trabajar conmigo? Enviame un mensaje!</p>
            </div>

            <div className='gap-2 mt-1 ml-4 || flex flex-row items-center justify-start'>
              <Link href={'https://github.com/bultynch'}><FaLinkedin className='w-8 h-8 text-texto2'/></Link>
              <Link href={'https://github.com/bultynch'}><FaInstagram className='w-8 h-8 text-texto2'/></Link>
              <Link href={'https://github.com/bultynch'}><FaSquareFacebook className='w-8 h-8 text-texto2'/></Link>
            </div>

          </div>

          <Contact />

        </section>

      </div>
    </div>
  );
}
