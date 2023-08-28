
export default function About() {
    return(
    <>
    <div id='About' className="grid min-h-screen p-24 gap-12 lg:gap-24 md:grid-cols-3 items-center" >
        <img className='object-contain w-40 sm:w-52 md:w-80 justify-self-center' src='/portrait.jpeg' alt='portrait' />
        <div className='md:col-span-2 bg-sage px-10 py-16 self-center' >
            <h1 className='text-2xl md:text-4xl pb-10 text-brown' >hey there, nice to meet you <br></br> - i'm jordan.</h1>
            <p className='text-sm md:text-base'>
            I recently graduated from a full stack software engineering program. The constant development required as a software engineer suits my aptitude for learning. I bring with me a diverse set of skills, including experience in the accounting industry, a fixed-wing private pilot license, musical knowledge, and an eye for design. I’m the multitool you want in your back pocket.
            </p>
        </div>
    </div>
    <div className='container min-h-screen relative'>
        <div className='absolute bg-brown bg-opacity-75 md:top-28 md:left-48 p-60 text-brown text-opacity-0'>O</div>
        <img className='absolute top-80 right-24 w-44 md:w-72 lg:w-80' src='./art.jpeg'/>
        <img className='absolute top-44 right-64 w-60 md:-96 lg:w-2/5 shadow-lg' src='./beach.jpeg'/>
        <img className='absolute top-12 left-24 w-44 md:w-80 lg:w-96' src='./shav.jpg'/>
    </div>
    </>
    )
}