import Main from "./(components)/main/page";
import About from "./(components)/about/page";
import Portfolio from "./(components)/portfolio/page";

export default function Home() {
  return (
    <>
    <main className="flex flex-col justify-between p-20 bg-brown">
      <div>
        <p className="left-0 justify-left text-lg">
          hi - jordan here!
        </p>
      </div>

    </main>
      <div className="left-0 top-40 bg-cream">
      <img className='object-contain'  src='/beach.jpeg' alt="on the beach"/>
      </div>  
      <Main/>
      <About/>
      <Portfolio/>
      </>

  )
}
