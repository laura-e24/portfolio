import dynamic from 'next/dynamic'
const Particles = dynamic(() => import('react-tsparticles'))
const NavBar = dynamic(() => import('./NavBar'))
//import NavBar from "./NavBar";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Image from "next/image";
import wavebg from "../../public/pattern.svg"

const Layout = ({ children }) => {
  const particlesInit = useCallback(async engine => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
  }, []);

  // const particlesLoaded = useCallback(async container => {
  //   await container
  // }, []);

  return (  
    <>
    <style>
      {`
        .glow-magenta {
          text-shadow: 2px 2px 3px #3B52D9;
        }
        .no-margin {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
      `}
    </style>
      <main className="relative">
        <Image
          src={wavebg}
          alt=""
          className="absolute inset-x-0 -z-10 rotate-180 opacity-25 -top-16 hidden md:inline"
        />
      <div 
        className='w-full bg-center bg-cover bg-img-size md:hidden absolute inset-x-0 -z-10 rotate-180 opacity-25' 
        style={{ backgroundImage: `url(/pattern.svg)`, height: 400}}
      ></div>
      <NavBar />
      <div className='mt-20 md:mt-0 pb-56'>
        {children}
      </div>
      <Particles 
        id="tsparticles" 
        options={{
          fpsLimit: 60,
          interactivity: {},
          particles: {
            "number": {
              "value": 600,
              "density": {
                "enable": true,
                "value_area": 600
              }
            },
            "color": {
              "value": "#676767"
            },
            "shape": {
              "type": "star",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
            },
            "opacity": {
              "value": 0.3,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
              }
            },
            "size": {
              "value": 1.5,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.3,
                "sync": false
              }
            },
            "move": {
              "enable": true,
              "speed": 1,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
              }
            }
          },
          detectRetina: true,
        }}
        init={particlesInit} 
        // loaded={particlesLoaded} 
        style={{overflowY: "scroll"}}
      />
      </main>
    </>
  );
}
 
export default Layout;
