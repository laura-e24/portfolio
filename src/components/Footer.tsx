import FAIcon from "./FAIcon";

const Footer = () => {
  return (
    <>
    <style>
      {`
      `}
    </style>
    <footer className="relative bottom-0 w-full mt-64 py-16">
      <p className="text-center font-sans font-light">Contacto</p>
      <div className="w-full justify-center flex">
        <address className="inline-block mx-auto">
          <div className="flex text-center w-full">
            <FAIcon className="mx-0" type="brands" name="linkedin" />
            <a href="https://www.linkedin.com/in/mar%C3%ADa-laura-eliceiry-123239252/" className=" not-italic">María Laura Eliceiry</a>
          </div> 
          <div className="flex">
            <FAIcon className="mx-0" type="brands" name="github" />
            <a href="https://github.com/laura-e24" className=" not-italic">laura-e24</a>
          </div> 
          <div className="flex">
            <FAIcon className="mx-0" type="solid" name="envelope" />
            <a href="mailto:lceiry@outlook.com" className=" not-italic">lceiry@outlook.com</a>
          </div> 
        </address>
      </div>
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-full" style={{zIndex: -1}}>
        <img src="/wave-footer-dark.svg" className="opacity-50" width='100%' />
      </div>
      <div className="absolute bottom-0   w-screen" style={{zIndex: -2, transform: 'translateZ(100px) translateX(-30px) translateY(3px)'}}>
        <img src="/wave-footer-darker.svg" className="opacity-30" width='100%' style={{filter: 'drop-shadow(5px 5px 20px rgba(19, 17, 28, 1))'}} />
      </div>
    </footer>
    </>
  );
}
 
export default Footer;