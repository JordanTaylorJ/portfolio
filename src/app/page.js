import Main from "./components/main";
import About from "./components/about";
import Portfolio from "./components/portfolio/portfolio";
import Images from "./components/images";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className='bg-fixed bg-center' style={{backgroundImage: "url(/swirls.jpg)"}}>
    <Navbar/>
    <Main/>
    <About/>
    <Portfolio/>
    <Images/>
    <Footer/>
    </div>
  )
}
