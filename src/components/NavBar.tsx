import Link from "next/link";
import FAIcon from "./FAIcon";
import { useRouter } from 'next/router'

const NavBar = () => {
  const path = useRouter();
  const pathIncludes = (ref: string) => path.asPath.includes(ref);

  return (
    <>
    <style>
      {`
        .glow {
          text-shadow: 5px 2px 0.5em #853BCE, -5px -2px 0.5em #853BCE
        }
        @media (max-width: 768px) {
          .bottom {
            bottom: 0;
          }
        }
      `}
    </style>
    <nav className="bg-three md:bg-transparent bottom md:top-0 fixed md:border-b md:rounded-lg border-transparent w-full flex md:justify-center justify-around text-sm text-opacity-10 md:space-x-6 py-4 md:py-8" style={{zIndex: 1}}>
      <Link className="hover:text-one glow hidden md:inline border-r border-gray-600 pr-4 border-opacity-50" href='#home'>
        Inicio
      </Link>
      <Link passHref href="/" className="md:hidden">
        <FAIcon type={`${pathIncludes("home") ? "solid" : "light" }`} name="home" color={`active:text-one ${pathIncludes("home") ? "text-purple-800" : "text-gray-500" }`} />
      </Link>

      <Link className="hover:text-one glow hidden md:inline border-r border-gray-600 pr-4 border-opacity-50" href='#about'>
        Sobre mí
      </Link>
      <Link passHref href="#about" className="md:hidden">
        <FAIcon type={`${(pathIncludes("about")) ? "solid" : "light" }`} name="memo-circle-info" color={`active:text-one ${pathIncludes("about") ? "text-purple-800" : "text-gray-500" }`} />
      </Link>
      
      <Link className="hover:text-one glow hidden md:inline border-r border-gray-600 pr-4 border-opacity-50" href='#skills'>
        Habilidades
      </Link>
      <Link passHref href="#skills" className="md:hidden">
        <FAIcon className="md:hidden" type={`${(pathIncludes("skills")) ? "solid" : "light" }`} name="screwdriver-wrench" color={`active:text-one ${pathIncludes("skills") ? "text-purple-800" : "text-gray-500" }`} />
      </Link>

      <Link className="hover:text-one glow hidden md:inline border-r border-gray-600 pr-4 border-opacity-50" href='#projects'>
        Proyectos
      </Link>
      <Link passHref href="#projects" className="md:hidden">
        <FAIcon className="md:hidden" type={`${(pathIncludes("projects")) ? "solid" : "light" }`} name="briefcase" color={`active:text-one ${pathIncludes("projects") ? "text-purple-800" : "text-gray-500" }`} />
      </Link>

      <Link className="hover:text-one glow hidden md:inline" href='#contact'>
        Contacto
      </Link>
      <Link passHref href="#contact" className="md:hidden">
        <FAIcon className="md:hidden" type={`${(pathIncludes("contact")) ? "solid" : "light" }`} name="address-book" color={`active:text-one ${pathIncludes("contact") ? "text-purple-800" : "text-gray-500" }`} />
      </Link>
    </nav>
  </>
  );
}
 
export default NavBar;