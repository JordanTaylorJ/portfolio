import Main from "./components/main";
import About from "./components/about";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div >
    <Navbar/>
    <Main/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
  )
}
