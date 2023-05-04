import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (  
    <>
    <style>
      {`
      `}
    </style>
      <main>
        <div className="bg"></div>
        <div className="wave"></div>
        <NavBar />
        <div className='mt-20 md:mt-0'>
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
}
 
export default Layout;