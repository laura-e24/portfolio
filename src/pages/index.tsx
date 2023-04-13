import Layout from '@/components/Layout'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'

export default function Home() {

  return (
    <>
      <Head>
        <title>Laura - Fullstack web developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
          <div className="relative">
            {/* <img src="/laptop.png" width={300} /> */}
            
              <div className=''>
                <img src="/loading-screen.gif" className='mx-auto md:mx-0' width={300} />
              </div>
            
          </div>
          <span className='block max-w-prose mt-10 md:my-auto'>
              <h1 className='text-white font-sans text-2xl md:text-3xl font-semibold text-center md:text-right'>Sed ut perspiciatis unde omnis</h1>
              <p className='text-center md:text-right font-light mt-2 text-sm md:text-base'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
            </span>
          </div>
        </section>
        <section id="skills" className='max-w-screen-lg mx-auto'>
          <h1 className='text-white text-center text-2xl md:text-3xl font-sans font-bold mt-32'>Skills</h1>
          <p className='text-center mx-auto font-light mt-2 max-w-prose'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
          <div className='md:flex flex-wrap justify-center md:space-x-6 space-y-6 md:space-y-0 py-10'>
            {new Array(6).fill(0).map((_, i) => (
              <img key={i} src='/next.svg' width={150} className='mx-auto md:mx-0' />
            ))}
          </div>
        </section>
        <section id="projects" className='max-w-screen-lg mx-auto'>
          <h1 className='text-white text-center text-2xl md:text-3xl font-sans font-bold mt-32'>Proyectos</h1>
          <p className='text-center mx-auto font-light mt-2 max-w-prose text-sm md:text-base'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
          <div className='md:flex flex-wrap justify-center md:space-x-6 space-y-6 md:space-y-0 py-10'>
            {new Array(6).fill(0).map((_, i) => (
              <img key={i} src="/loading-screen.gif" width={150} className='mx-auto md:mx-0' />
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}
