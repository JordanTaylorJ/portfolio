
export default function About() {
    return(
    <>
    <div id='About' className="grid min-h-screen p-24 gap-12 md:grid-cols-2 content-center" >
        <img className='object-contain w-80' src='/portrait.jpeg' alt='portrait' />
        <div className='bg-sage px-10 py-16 self-center' >
            <h1 className='text-2xl md:text-4xl pb-10 text-brown' >hey there, nice to meet you <br></br> - i'm jordan.</h1>
            <p>
            I recently graduated from a full stack software engineering program. The constant development required as a software engineer suits my aptitude for learning. I bring with me a diverse set of skills, including experience in the accounting industry, a fixed-wing private pilot license, musical knowledge, and an eye for design. I’m the multitool you want in your back pocket.
            </p>
        </div>
    </div>
    <div className='container min-h-screen relative'>
        <div className='absolute bg-brown bg-opacity-75 top-28 left-48 p-60 text-brown'>O</div>
        <img className='absolute top-80 right-24' src='./art.jpeg' width='350'/>
        <img className='absolute top-44 right-64 shadow-lg' src='./beach.jpeg' width='525'/>
        <img className='absolute top-12 left-24' src='./shav.jpg' width='375'/>
    </div>
    </>
    )
}