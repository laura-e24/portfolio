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
        <div className="wave">
          {/* <img src="/pattern.svg" className='w-full' /> */}
        </div>
        <NavBar />
        <div className='mt-20'>
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
}
 
export default Layout;