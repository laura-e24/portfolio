import Link from "next/link";
import FAIcon from "./FAIcon";

const NavBar = () => {
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
    <nav className="bg-two md:bg-transparent bottom md:top-0 fixed md:border-b md:rounded-lg border-transparent w-full flex md:justify-center justify-around text-sm text-opacity-10 md:space-x-6 py-4 md:py-8" style={{zIndex: 999}}>
      <Link className="hover:text-one glow hidden md:inline border-r border-gray-600 pr-4 border-opacity-50" href='/'>
        Inicio
      </Link>
      <Link passHref href="/" className="md:hidden">
        <FAIcon type="thin" name="home" color="active:text-one glow" />
      </Link>

      <Link className="hover:text-one glow hidden md:inline border-r border-gray-600 pr-4 border-opacity-50" href='/proyectos'>
        Proyectos
      </Link>
      <Link passHref href="/proyectos" className="md:hidden">
        <FAIcon className="md:hidden" type="thin" name="briefcase" color="active:text-one glow" />
      </Link>
      
      <Link className="hover:text-one glow hidden md:inline border-r border-gray-600 pr-4 border-opacity-50" href='#'>
        Habilidades
      </Link>
      <Link passHref href="/" className="md:hidden">
        <FAIcon className="md:hidden" type="thin" name="screwdriver-wrench" color="active:text-one glow" />
      </Link>

      <Link className="hover:text-one glow hidden md:inline" href='#contact'>
        Contacto
      </Link>
      <Link passHref href="#contact" className="md:hidden">
        <FAIcon className="md:hidden" type="thin" name="address-book" color="active:text-one glow" />
      </Link>
    </nav>
  </>
  );
}
 
export default NavBar;