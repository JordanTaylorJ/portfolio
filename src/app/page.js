import Main from "./(components)/main/page";
import About from "./(components)/about/page";
import Portfolio from "./(components)/portfolio/page";

export default function Home() {
  return (
    <>
    <main className="flex flex-col justify-between p-10 bg-brown">
      <div>
        <p className="left-0 justify-left text-6xl">
          hi - jordan here!
        </p>
      </div>
    </main>

    <div className="container left-0 my-10">
      <img className='object-scale-down'  src='/res.jpeg' alt="on the beach"/>
    </div>  
    <Main/>
    <About/>
    <Portfolio/>
    </>
  )
}
