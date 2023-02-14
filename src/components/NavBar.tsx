import Link from "next/link";

const NavBar = () => {
  return (  
    <nav className="top-0 fixed border-b rounded-lg border-transparent shadow-lg w-full flex text-one text-opacity-75 justify-end space-x-6 p-4">
      <Link href='/'>
        Inicio
      </Link>
      <Link href='#'>
        Proyectos
      </Link>
      <Link href='#'>
        Habilidades
      </Link>
      <Link href='#'>
        Contacto
      </Link>
    </nav>
  );
}
 
export default NavBar;