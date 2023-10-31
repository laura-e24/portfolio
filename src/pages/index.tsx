import dynamic from "next/dynamic";
import Head from 'next/head'
import computer from '../../public/computer.png'
import about from '../../public/about.png'
import Image from 'next/image'
import { skills, projects } from "../data/index"
import Link from 'next/link'

const ProjectCard = dynamic(() => import("@/components/ProjectCard"));
const SkillCard = dynamic(() => import("@/components/SkillCard"));
const FAIcon = dynamic(() => import("@/components/FAIcon"));
const Layout = dynamic(() => import("@/components/Layout"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Laura - Fullstack web developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Layout>
        <section id="home" className='max-w-screen-lg mx-auto w-full flex justify-between select-none lg:px-20'>
          <div className='mx-auto md:mx-0 block my-auto px-5 md:px-0'>
            <span>
              <h1 className='text-center md:text-left'>
                <span className='block text-2xl md:text-3xl font-light'>
                  Hola, soy 
                </span>
                <span className='block text-5xl md:text-7xl font-bold font-sans'>Laura</span>
              </h1>
              <p className='typewriter-eff md:text-xl mt-2 md:mt-4 mb-4 text-gray-600 underline-color text-center md:text-left'>
                <span>Fullstack web developer.</span>
              </p>
            </span>
            <address className="flex space-x-6 justify-center md:justify-start mt-10 md:mt-0">
              <Link 
                passHref
                target="_blank" 
                href="https://www.linkedin.com/in/mlauraeliceiry" 
              >
                <FAIcon size="md" className="no-margin glow-magenta" type="brands" name="linkedin" color="text-four hover:text-gray-300" />
              </Link>
              <Link 
                passHref
                target="_blank" 
                href="https://github.com/laura-e24"
              >
                <FAIcon size="md" className="no-margin glow-magenta" type="brands" name="github" color="text-four hover:text-gray-300" />
              </Link> 
              <Link 
                passHref
                target="_blank" 
                href="mailto:lceiry@outlook.com"
              >
                <FAIcon size="md" className="no-margin glow-magenta" type="solid" name="envelope" color="text-four hover:text-gray-300" />
              </Link> 
            </address>
          </div>
          <div className="relative hidden md:inline">
            <video className='pc-screen-gif' controls width="200" height="175" loop autoPlay muted playsInline>
              <source src="/screen.webm" type="video/webm" />
            </video>
            <Image
              src={computer}
              alt=""
              width={400}
              className='h-auto'
              priority
              style={{filter: 'drop-shadow(5px 5px 15px rgba(5, 195, 253, 0.3))'}}
            />
          </div>
        </section>
        <section id="about" className='py-16 mt-40 md:mt-56'>
          <div className='max-w-screen-lg mx-auto md:flex justify-between'>
            <Image
              src={about}
              alt=""
              height={400}
              className='h-auto md:inline hidden'
              priority
            />
            <span className='block max-w-prose mt-10 md:my-auto'>
              <h1 className='text-white font-sans text-2xl md:text-3xl font-semibold text-center md:text-left'>
                Sobre mí
              </h1>
              <p className='text-justify font-light mt-2 text-sm md:text-base px-6 md:px-0'>
                Full Stack developer con sólidas habilidades Front-End y 2 años de experiencia 
                profesional en este área. Comprometida a entregar resultados atractivos, 
                limpios y escalables para cada proyecto en el que trabajo. 
                Hábil con HTML, CSS, JavaScript, React, REST APIs, y actualmente desempeñándome
                como Junior Frontend Developer. 
                Gran capacidad de autogestión durante proyectos independientes, 
                como así también para colaborar en equipo bajo metodologías ágiles como SCRUM.
              </p>
            </span>
          </div>
        </section>
        <section id="skills" className='max-w-screen-lg mx-auto pt-1'>
          <h1 className='text-white text-center text-2xl md:text-3xl font-sans font-bold mt-32'>Habilidades</h1>
          <div className='grid grid-cols-2 lg:grid-cols-8 p-6 gap-4'>
            {skills.map((s, i) => <SkillCard key={i} skill={s} />)}
          </div>
        </section>
        <section id="projects" className='max-w-screen-lg mx-auto pt-1'>
          <h1 className='text-white text-center text-2xl md:text-3xl font-sans font-bold mt-32'>Proyectos</h1>
          <div className='py-6 gap-4'>
            {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
          </div>
        </section>
      </Layout>
    </>
  )
}
