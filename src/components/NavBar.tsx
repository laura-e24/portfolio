import Link from "next/link";

const NavBar = () => {
  return (
    <>
    <style>
      {`
        .glow {
          text-shadow: 5px 2px 0.5em #853BCE, -5px -2px 0.5em #853BCE
        }
      `}
    </style>
    <nav className="top-0 fixed border-b rounded-lg border-transparent w-full flex text-sm text-opacity-10 space-x-6 p-4">
      <Link className="hover:text-one glow border-r border-gray-600 pr-4 border-opacity-50" href='/'>
        Inicio
      </Link>
      <Link className="hover:text-one glow border-r border-gray-600 pr-4 border-opacity-50" href='#'>
        Proyectos
      </Link>
      <Link className="hover:text-one glow border-r border-gray-600 pr-4 border-opacity-50" href='#'>
        Habilidades
      </Link>
      <Link className="hover:text-one glow" href='#'>
        Contacto
      </Link>
    </nav>
    </>
  );
}
 
export default NavBar;