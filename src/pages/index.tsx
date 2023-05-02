import Layout from '@/components/Layout'
import Head from 'next/head'
import Router from 'next/router'
import computer from '../../public/computer.png'
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
        <section id="home" className='max-w-screen-lg mx-auto w-full flex justify-between'>
          <div className='block my-auto px-5 md:px-0'>
            <span>
              <h1 className='text-white font-sans text-5xl md:text-6xl font-bold'>Hola, soy Laura</h1>
              <p className='text-2xl font-light mb-4 text-gray-500 underline-color'><span>Fullstack web developer.</span></p>
            </span>
            <button onClick={() => Router.push("#contact")} className='text-sm px-6 py-2 rounded-md mt-4 btn-three'>
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
          <div className='max-w-screen-lg mx-auto  md:flex justify-between'>
            <video className='mx-auto md:mx-0 h-auto' controls width="300" height="175" loop autoPlay muted playsInline>
              <source src="/loading-screen.webm" type="video/webm" />
            </video>
            <span className='block max-w-prose mt-10 md:my-auto'>
              <h1 className='text-white font-sans text-2xl md:text-3xl font-semibold text-center md:text-right'>Sed ut perspiciatis unde omnis</h1>
              <p className='text-center md:text-right font-light mt-2 text-sm md:text-base'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
            </span>
          </div>
        </section>
        <section id="skills" className='max-w-screen-lg mx-auto'>
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
