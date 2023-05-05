// import { useState, useEffect, useCallback, useRef } from "react";
// import Footer from "./Footer";
// import NavBar from "./NavBar";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import particlesConfig from "@/data/particlesjs-config.json"

// const Layout = ({ children }) => {

// return (
//    <>

//    </>
// );
// }
 
// export default Layout;



import Footer from "./Footer";
import NavBar from "./NavBar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Image from "next/image";
import wavebg from "../../public/test.svg"

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
      `}
    </style>
      <main className="relative">
        {/* <div className="bg"></div> */}
        <div className="relative">
          <Image
            src={wavebg}
            alt=""
            className="absolute inset-x-0 -z-10"
            style={{filter: 'drop-shadow(0px 0px 5px #181622)'}}
          />
        </div>
       
        <NavBar />
        <div className='mt-20 md:mt-0'>
          {children}
        </div>
        <Footer />
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