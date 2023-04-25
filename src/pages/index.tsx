import FAIcon from '@/components/FAIcon'
import Layout from '@/components/Layout'
import { techFullName } from '@/utils/general'
import { Octokit } from '@octokit/core'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Tooltip } from 'react-tooltip'

const skills = [{
  name: "HTML",
  icon: "html.svg",
  color: "#E34F26",
}, {
  name: "CSS",
  icon: "css.svg",
  color: "#1572B6",
}, {
  name: "JavaScript",
  icon: "js.svg",
  color: "#F7DF1E",
}, {
  name: "TypeScript",
  icon: "ts.svg",
  color: "#3178C6",
}, {
  name: "Node.js",
  icon: "node.svg",
  color: "#339933",
}, {
  name: "NPM",
  icon: "npm.svg",
  color: "#CB3837",
}, {
  name: "React",
  icon: "react.svg",
  color: "#61DAFB",
}, {
  name: "Redux",
  icon: "redux.svg",
  color: "#764ABC",
}, {
  name: "TailwindCSS",
  icon: "tailwind.svg",
  color: "#06B6D4",
}, {
  name: "Styled components",
  icon: "styled.svg",
  color: "#DB7093",
}, {
  name: "Bootstrap",
  icon: "bootstrap.svg",
  color: "#7952B3",
}, {
  name: "NextJS",
  icon: "next.svg",
  color: "#000000",
}, {
  name: "Gatsby",
  icon: "gatsby.svg",
  color: "#663399",
}, {
  name: "Express.js",
  icon: "express.svg",
  color: "#000000",
}, {
  name: "GraphQL",
  icon: "graphql.svg",
  color: "#E10098",
}, {
  name: "Mocha",
  icon: "mocha.svg",
  color: "#8D6748",
}, {
  name: "Chai",
  icon: "chai.svg",
  color: "#A30701",
}, {
  name: "Swagger",
  icon: "swagger.svg",
  color: "#85EA2D",
}, {
  name: "Vercel",
  icon: "vercel.svg",
  color: "#000000",
}, {
  name: "Railway",
  icon: "railway.svg",
  color: "#0B0D0E",
}, {
  name: "Render",
  icon: "render.svg",
  color: "#46E3B7",
}, {
  name: "Netlify",
  icon: "netlify.svg",
  color: "#00C7B7",
}, {
  name: "MongoDB",
  icon: "mongodb.svg",
  color: "#47A248",
}, {
  name: "PostgreSQL",
  icon: "postgres.svg",
  color: "#4169E1",
}, {
  name: "Git",
  icon: "git.svg",
  color: "#F05032",
}, {
  name: "Figma",
  icon: "figma.svg",
  color: "#F24E1E",
}]

const projects = [{
  name: "Marvel's Characters App",
  description: "Listado de personajes de Marvel utilizando su REST API. UI/UX responsive e intuitiva y adaptado al diseño de la página oficial de Marvel.",
  thumbnail: "/loading-screen.gif",
  tech: ["node", "react", "css", "styled"],
  status: "Terminado",
  type: "Prueba técnica"
}, {
  name: "FormatCSV App",
  description: "Listado de personajes de Marvel utilizando su REST API. UI/UX responsive e intuitiva y adaptado al diseño de la página oficial de Marvel.",
  thumbnail: "/loading-screen.gif",
  tech: ["node", "react", "css", "bootstrap", "express", "mocha", "swagger"],
  status: "Terminado",
  type: "Prueba técnica"
}, {
  name: "La Dionisia",
  description: "Listado de personajes de Marvel utilizando su REST API. UI/UX responsive e intuitiva y adaptado al diseño de la página oficial de Marvel.",
  thumbnail: "/loading-screen.gif",
  tech: ["node", "react", "ts", "next", "express", "css", "tailwind", "redux", "postgres"],
  status: "Terminado",
  type: "Proyecto académico"
}, {
  name: "Henry Countries",
  description: "Listado de personajes de Marvel utilizando su REST API. UI/UX responsive e intuitiva y adaptado al diseño de la página oficial de Marvel.",
  thumbnail: "/loading-screen.gif",
  tech: ["node", "react", "express", "css", "styled", "redux", "postgres"],
  status: "Terminado",
  type: "Proyecto académico"
}, {
  name: "Thumbnail Generator",
  description: "Listado de personajes de Marvel utilizando su REST API. UI/UX responsive e intuitiva y adaptado al diseño de la página oficial de Marvel.",
  thumbnail: "/loading-screen.gif",
  tech: ["node", "ts", "express", "swagger", "mocha"],
  status: "Terminado",
  type: "Prueba técnica"
}, {
  name: "UpTask",
  description: "Listado de personajes de Marvel utilizando su REST API. UI/UX responsive e intuitiva y adaptado al diseño de la página oficial de Marvel.",
  thumbnail: "/loading-screen.gif",
  tech: ["node", "ts", "express", "mongodb", "react", "tailwind", "vite"],
  status: "En proceso",
  type: "Proyecto personal"
}]

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
              <h1 className='text-white font-sans text-5xl md:text-6xl font-bold'>Hi, I'm Laura</h1>
              <p className='text-2xl font-light mb-4 text-gray-500 underline-color'><span>A fullstack web developer.</span></p>
            </span>
            <button onClick={() => Router.push("#contact")} className='text-sm px-6 py-2 rounded-md mt-4 btn-three'>
              Contact
            </button>
          </div>
          <div className="relative hidden md:inline">
            <div className='screen'></div>
            <img src="/computer.png" width={400} style={{filter: 'drop-shadow(5px 5px 15px rgba(5, 195, 253, 0.3))'}} />
          </div>
        </section>
        <section id="about" className='py-16 mt-56'>
          <div className='max-w-screen-lg mx-auto  md:flex justify-between'>
            <img src="/loading-screen.gif" className='mx-auto md:mx-0' width={300} />
            <span className='block max-w-prose mt-10 md:my-auto'>
              <h1 className='text-white font-sans text-2xl md:text-3xl font-semibold text-center md:text-right'>Sed ut perspiciatis unde omnis</h1>
              <p className='text-center md:text-right font-light mt-2 text-sm md:text-base'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
            </span>
          </div>
        </section>
        <section id="skills" className='max-w-screen-lg mx-auto'>
          <h1 className='text-white text-center text-2xl md:text-3xl font-sans font-bold mt-32'>Skills</h1>
          <p className='text-center mx-auto font-light mt-2 max-w-prose'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
          <div className='grid grid-cols-2 lg:grid-cols-8 p-6 gap-4'>
            {skills.map((s, i) => (
              <div key={i} className='rounded-lg p-4 bg-one bg-opacity-10 place-content-center'> 
                <span className='justify-center h-full my-auto flex flex-wrap content-center'>
                  <img src={`/skills/${s.icon}`} className='mx-auto h-8 ' />
                  <p style={{ backgroundColor: s.color }} className={`text-center font-light text-sm w-full mt-3 text-gray-100 bg-opacity-10 inline-block` }>
                    {s.name}
                  </p>
                </span>
              </div>
            ))}
            <div>
              <p className="text-xs whitespace-nowrap font-light mb-1 ml-1">Aprendiendo...</p>
              <div className='rounded-lg p-4 bg-one bg-opacity-10 place-content-center'> 
                <span className='justify-center h-full my-auto flex flex-wrap content-center'>
                  <img src="/skills/java.svg" className='mx-auto h-10 ' />
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
          <p className='text-center mx-auto font-light mt-2 max-w-prose text-sm md:text-base'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 p-6 gap-4'>
            {projects.map((p, i) => (
              <div key={i} className='rounded-lg p-4 bg-one bg-opacity-10 place-content-center'> 
                <div className='justify-center h-full my-auto flex flex-wrap content-center'>
                  <img src={p.thumbnail} className=' ' />
                  <span>
                    <p className={`text-center font-medium mt-3 text-gray-100` }>
                      {p?.name}
                    </p>
                    <p className={`text-center font-light text-sm pt-3 pb-1 text-gray-400 leading-tight` }>
                      {p?.description}
                    </p>
                  </span>
                  <span className='border-b border-gray-300 border-opacity-10 pb-3 w-full flex flex-wrap my-3 gap-2 justify-around'>
                    {p.tech.map((t, index) => {
                      return (
                        <span key={index}>
                          <img 
                            data-tooltip-id={t} 
                            data-tooltip-content={techFullName(t)}  
                            key={index} 
                            src={`/skills/${t}.svg`} 
                            className='h-5' 
                          />
                          <Tooltip style={{backgroundColor:"#13111C"}} id={t} />
                        </span>
                      )}
                    )}
                  </span>
                  <span className='flex text-center font-light text-sm'>
                    <p id="bullet" className='text-gray-400'>{p.type}</p>
                    <p className='text-gray-400'>{p.status}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}
