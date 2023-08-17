
export default function About() {
    return(
    <div className="container flex min-h-screen p-24 gap-24 column-2" >
        <img className='object-contain w-80 ' src='/portrait.jpeg' alt='portrait' />
        <div className='bg-sage px-10 py-16 self-center' >
            <h1 className='text-4xl pb-10 text-brown' >hey there, nice to meet you <br></br> - i'm jordan.</h1>
            <p>
            I recently graduated from a full stack software engineering program. The constant development required as a software engineer suits my aptitude for learning. I bring with me a diverse set of skills, including experience in the accounting industry, a fixed-wing private pilot license, musical knowledge, and an eye for design. I’m the multitool you want in your back pocket.
            </p>
        </div>
    </div>
    )
}