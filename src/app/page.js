import Main from "./(components)/main/page";
import About from "./(components)/about/page";
import Portfolio from "./(components)/portfolio/page";
import Images from "./images";
import Footer from "./footer";

export default function Home() {
  return (
    <div className='bg-fixed bg-center' style={{backgroundImage: "url(/swirls.jpg)"}}>
    <Main/>
    <About/>
    <Portfolio/>
    <Images/>
    <Footer/>
    </div>
  )
}
