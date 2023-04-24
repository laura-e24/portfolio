import Layout from '@/components/Layout'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'

const skills = [{
  name: "HTML",
  icon: "html.svg",
  color: "#E34F26",
  background: ""
}, {
  name: "CSS",
  icon: "css.svg",
  color: "#1572B6",
  background: ""
}, {
  name: "JavaScript",
  icon: "js.svg",
  color: "#F7DF1E",
  background: ""
}, {
  name: "TypeScript",
  icon: "ts.svg",
  color: "#3178C6",
  background: ""
}, {
  name: "Node.js",
  icon: "node.svg",
  color: "#339933",
  background: ""
}, {
  name: "NPM",
  icon: "npm.svg",
  color: "#CB3837",
  background: ""
}, {
  name: "React",
  icon: "react.svg",
  color: "#61DAFB",
  background: ""
}, {
  name: "Redux",
  icon: "redux.svg",
  color: "#764ABC",
  background: ""
}, {
  name: "TailwindCSS",
  icon: "tailwind.svg",
  color: "#06B6D4",
  background: ""
}, {
  name: "Styled components",
  icon: "styled.svg",
  color: "#DB7093",
  background: ""
}, {
  name: "Bootstrap",
  icon: "bootstrap.svg",
  color: "#7952B3",
  background: ""
}, {
  name: "NextJS",
  icon: "next.svg",
  color: "#000000",
  background: ""
}, {
  name: "Gatsby",
  icon: "gatsby.svg",
  color: "#663399",
  background: ""
}, {
  name: "Express.js",
  icon: "express.svg",
  color: "#000000",
  background: ""
}, {
  name: "GraphQL",
  icon: "graphql.svg",
  color: "#E10098",
  background: ""
}, {
  name: "Mocha",
  icon: "mocha.svg",
  color: "#8D6748",
  background: ""
}, {
  name: "Chai",
  icon: "chai.svg",
  color: "#A30701",
  background: ""
}, {
  name: "Swagger",
  icon: "swaggerui.svg",
  color: "#85EA2D",
  background: ""
}, {
  name: "Vercel",
  icon: "vercel.svg",
  color: "#000000",
  background: ""
}, {
  name: "Railway",
  icon: "railway.svg",
  color: "#0B0D0E",
  background: ""
}, {
  name: "Render",
  icon: "render.svg",
  color: "#46E3B7",
  background: ""
}, {
  name: "Netlify",
  icon: "netlify.svg",
  color: "#00C7B7",
  background: ""
}, {
  name: "MongoDB",
  icon: "mongodb.svg",
  color: "#47A248",
  background: ""
}, {
  name: "PostgreSQL",
  icon: "postgres.svg",
  color: "#4169E1",
  background: ""
}, {
  name: "Git",
  icon: "git.svg",
  color: "#F05032",
  background: ""
}, {
  name: "Figma",
  icon: "figma.svg",
  color: "#F24E1E",
  background: ""
}]

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
          <div className='grid grid-cols-8 p-6 gap-4'>
            {skills.map((s, i) => (
              <div key={i} className='rounded-lg p-4 bg-one bg-opacity-10 place-content-center'> 
                <span className='justify-center h-full my-auto flex flex-wrap content-center'>
                  <img src={`/skills/${s.icon}`} className='mx-auto h-8 ' />
                  <p style={{ backgroundColor: s.color }} className={`text-center font-light text-sm w-full mt-3 text-gray-100 bg-opacity-10 inline-block` }>{s.name}</p>
                </span>
              </div>
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
