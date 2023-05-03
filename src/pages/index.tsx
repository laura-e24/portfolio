import Layout from '@/components/Layout'
import Head from 'next/head'
import Router from 'next/router'
import computer from '../../public/computer.png'
import about from '../../public/about.png'
import java from '../../public/skills/java.svg'
import Image from 'next/image'
import { skills, projects } from "../data/index"
import ProjectCard from '@/components/ProjectCard'
import SkillCard from '@/components/SkillCard'

export default function Home() {

  return (
    <>
      <Head>
        <title>Laura - Fullstack web developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Layout>
        <section id="home" className='max-w-screen-lg mx-auto w-full flex justify-between select-none'>
          <div className='mx-auto md:mx-0 block my-auto px-5 md:px-0'>
            <span>
              <h1 className='text-white hidden md:inline text-6xl font-bold font-sans'>
                Hola, soy Laura
              </h1>
              <h1 className='md:hidden block text-center'>
                <span className='block text-2xl font-light'>
                  Hola, soy 
                </span>
                <span className='block text-5xl font-bold font-sans'>Laura</span>
              </h1>
              <p className='text-lg md:text-2xl font-light mt-2 md:mt-0 mb-4 text-gray-500 underline-color text-center md:text-left'><span>Fullstack web developer.</span></p>
            </span>
            <button onClick={() => Router.push("#contact")} className='text-sm px-6 py-2 rounded-md mt-5 btn-three flex md:inline justify-center w-full md:w-auto'>
              Contacto
            </button>
          </div>
          <div className="relative hidden md:inline">
            <video className='screen' controls width="200" height="175" loop autoPlay muted playsInline>
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
        <section id="about" className='py-16 mt-56'>
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
                Hábil con HTML, CSS, JavaScript, React, REST APIs, y actualmente dedicada 
                a expandir mis habilidades de backend aprendiendo Java. 
                Gran capacidad de autogestión durante proyectos independientes, 
                como así también para colaborar en equipo bajo metodologías ágiles como SCRUM.
              </p>
            </span>
          </div>
        </section>
        <section id="skills" className='max-w-screen-lg mx-auto '>
          <h1 className='text-white text-center text-2xl md:text-3xl font-sans font-bold mt-32'>Habilidades</h1>
          <div className='grid grid-cols-2 lg:grid-cols-8 p-6 gap-4'>
            {skills.map((s, i) => <SkillCard key={i} skill={s} />)}
            <div>
              <p className="text-xs whitespace-nowrap font-light mb-1 ml-1">Aprendiendo...</p>
              <div className='rounded-lg p-4 bg-one bg-opacity-10 place-content-center'> 
                <span className='justify-center h-full my-auto flex flex-wrap content-center'>
                  <Image
                    src={java}
                    alt=""
                    className='mx-auto h-10 w-10'
                  />
                  <p style={{ backgroundColor: "#4E7896" }} className={`text-center font-light text-sm w-full mt-3 text-gray-100 bg-opacity-10 inline-block` }>
                    Java
                  </p>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className='max-w-screen-lg mx-auto'>
          <h1 className='text-white text-center text-2xl md:text-3xl font-sans font-bold mt-32'>Proyectos</h1>
          <div className='py-6 gap-4'>
            {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
          </div>
        </section>
      </Layout>
    </>
  )
}
