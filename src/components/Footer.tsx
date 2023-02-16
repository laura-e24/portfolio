import Link from "next/link";
import FAIcon from "./FAIcon";

const Footer = () => {
  return (
    <>
    <style>
      {`
        .glow-magenta {
          text-shadow: 2px 2px 5px magenta;
        }
        .no-margin {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
      `}
    </style>
    <footer id="contact" className="relative bottom-0 w-full mt-64 py-16">
  
        <p className="text-center font-medium tracking-wider pb-10">Contacto</p>
        <div className="w-full justify-center flex">
          <address className="inline-block mx-auto md:flex lg:w-3/5 md:justify-around text-sm font-light">
            <Link 
              passHref
              target="_blank" 
              href="https://www.linkedin.com/in/mar%C3%ADa-laura-eliceiry-123239252" 
              className="flex px-4 py-2 border-b-2 border-transparent hover:border-one"
            >
              <FAIcon className="no-margin glow-magenta" type="brands" name="linkedin-in" color="text-four" />
              <p className="ml-4 my-auto not-italic">
                María Laura Eliceiry
              </p>
            </Link>
            <Link 
              passHref
              target="_blank" 
              href="https://github.com/laura-e24"
              className="flex px-4 py-2 border-b-2 border-transparent hover:border-one"
            >
              <FAIcon className="no-margin glow-magenta" type="brands" name="github" color="text-four" />
              <p className="not-italic ml-4 my-auto">laura-e24</p>
            </Link> 
            <Link 
              passHref
              target="_blank" 
              href="mailto:lceiry@outlook.com"
              className="flex px-4 py-2 border-b-2 border-transparent hover:border-one"
            >
              <FAIcon className="no-margin glow-magenta" type="solid" name="envelope" color="text-four" />
              <p className="ml-4 my-auto not-italic">lceiry@outlook.com</p>
            </Link> 
          </address>
        </div>
        <div className="bg-footer"></div>
    </footer>
    </>
  );
}
 
export default Footer;