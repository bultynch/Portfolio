import Button1 from './Components/ui/Button1'
import TechnologyCards from './Components/ui/TechnologyCards'
import SocialLinks from './Components/ui/SocialLinks'
import ProyectCards from './Components/ui/ProyectCards'
import { fjallaOne, montserrat, pacifico} from './fonts/fonts';
import Image from 'next/image';
import profile from './Components/Pictures/profilepic3.jpg'
import Contact from './Components/ui/Contact'



export default function Home() {
  return (
    <div className="gap-8 bg-bg1 flex flex-col items-center justify-center">

      <div className='px-4 sm:px-10 md:px-20 lg:px-0 w-full lg:w-[850px]'>


        {/*-------------------- NOMBRE Y PERFIL --------------------*/}


        <section className='gap-8 w-full h-[60vh] sm:h-[70vh] flex flex-col items-center justify-center'>

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


        <section className='px-2 my-20 w-full flex flex-col text-texto2'>

          <div className='w-full font-bold'>
            <h1 className='mb-4 text-3xl'>Sobre mi<span className='text-nombre1'>.</span></h1>
            <p className='text-md font-semibold'>Soy un estudiante autodidacta de desarrollo web y actualmente curso la Tecnicatura en Desarrollo de Software. Durante más de un año, he estado aprendiendo y trabajando en proyectos con React y Next.js, lo que me ha permitido mejorar mis habilidades en el frontend. Actualmente, estoy estudiando MongoDB, Node.js y Express para ampliar mis conocimientos en el backend.
            </p>
          </div>

        </section>


        {/*-------------------- PROYECTOS --------------------*/} <div className='divider'></div>


        <section className='my-20 gap-8 w-full flex flex-col text-texto2 border-components1'>

          <h1 className='p-2 text-3xl text-texto2 font-bold'>Proyectos<span className='text-nombre1'>.</span></h1>
          <ProyectCards />

        </section>


        {/*-------------------- TECNOLOGÍAS --------------------*/} <div className='divider'></div>


        <section className='my-20 gap-8 w-full flex flex-col items-center justify-center text-texto2 font-semibold'>
          
          <h1 className='w-full text-3xl font-bold'>Tecnologías<span className='text-nombre1'>.</span></h1>
          <TechnologyCards />

        </section>
        

        {/*-------------------- CONTACTO --------------------*/} <div className='divider'></div>


        <section className='my-20 rounded-lg'>

          <Contact />

        </section>

      </div>
    </div>
  );
}
