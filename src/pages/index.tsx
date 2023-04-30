import Layout from '@/components/Layout'
import { techFullName } from '@/utils/general'
import Head from 'next/head'
import Router from 'next/router'
import { Tooltip } from 'react-tooltip'
import computer from '../../public/computer.png'
import java from '../../public/skills/java.svg'
import Image from 'next/image'
import { skills, projects } from "../data/index"
import SIcon from '@/components/SIcon'
import mockProject from "../../public/project-mock.png"
import FAIcon from '@/components/FAIcon'

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
          <p className='text-center mx-auto font-light mt-2 max-w-prose'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
          <div className='grid grid-cols-2 lg:grid-cols-8 p-6 gap-4'>
            {skills.map((s, i) => (
              <div key={i} className='rounded-lg p-4 bg-one bg-opacity-10 place-content-center'> 
                <span className='justify-center h-full my-auto flex flex-wrap content-center'>
                  
                  <SIcon slug={s.slug} color={s.color} /> 
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
                  <Image
                    src={java}
                    alt=""
                    className='mx-auto h-10 w-10'
                  />
                  {/* <FAIcon size="xl" type="brands" name="java" color='' /> */}
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
          <p className='text-center mx-auto font-light mt-2 max-w-prose text-sm md:text-base mb-8'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 py-6 gap-4'>
            {projects.map((p, i) => (
              <div key={i} className='rounded-lg  bg-one bg-opacity-10' style={{minHeight: 430}}> 
                <div className='h-full my-auto flex flex-wrap relative'>
                  <div className='w-full relative'>
                    <Image 
                      src={mockProject}
                      alt='Foto del proyecto'
                      className='p-1 rounded shadow-md'
                    />
                    <div className='absolute top-0 right-0 mt-1 mr-1'>
                      <a href={p.repo} target='_blank'>
                        <FAIcon size='md' className='bg-three hover:bg-one hover:bg-opacity-75 rounded-full' name="github" type='brands' />
                      </a>
                    </div>
                  </div>
                  <div className='px-6 pb-4 relative'>
                    <span className='w-full flex flex-wrap gap-x-2 justify-around mt-2'>
                      <p className={`text-center font-medium text-gray-100` }>
                        {p?.name}
                      </p>
                      <p className={`text-justify font-light text-sm mt-2 text-gray-400 leading-tight overflow-y-auto max-h-32` }>
                        {p?.description}
                      </p>
                    </span>
                    <div className='absolut bottom-0 left-0 right-0 pt-6'>
                      <span className='border-b border-gray-300 border-opacity-10 w-full flex flex-wrap pt-2 pb-4 gap-x-2 justify-around'>
                        {p.tech.map((t, index) => {
                          return (
                            <span key={index}>
                              <Image
                                data-tooltip-id={t} 
                                data-tooltip-content={techFullName(t)}  
                                key={index}
                                src={`/skills/${t}.svg`}
                                alt=""
                                height={20} // h-5
                                width={20} // h-5
                              />
                              <Tooltip style={{backgroundColor:"#13111C"}} id={t} />
                            </span>
                          )}
                        )}
                      </span>
                      <span className='w-full flex justify-center text-center font-light text-sm pt-2'>
                        <p id="bullet" className='text-gray-400'>{p.type}</p>
                        <p className='text-gray-400'>{p.status}</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}
