
export default function About() {
    return(
    <main id='About' className="grid min-h-screen md:mt-20 p-6 md:p-24 gap-12 lg:gap-24 md:grid-cols-3 items-center" >
        <div className='md:col-span-2 bg-sage px-10 py-16 self-center' >
            <h1 className='text-2xl md:text-4xl pb-10 text-brown font-semibold' >MEET JORDAN</h1>
            <br></br>
            <p className='text-sm md:text-base'>
            The constant development required as a software engineer suits my aptitude for learning. Alongside my techincal skills, I bring a unique blend of experiences including a background in accounting, a fixed-wing private pilot license, musical knowledge, and an eye for design. I’m the multitool you want in your back pocket.
            </p>
            <br></br>
            <a href='./resume_jordanjoseph.pdf' download='resume_jordanjoseph'>
                <button className='place-self-end hover:outline outline-offset-2 rounded text-white hover:text-black'>download resume</button>
            </a>
        </div>
        <img className='object-contain w-40 sm:w-52 md:w-80 justify-self-center' src='/portrait.jpeg' alt='portrait' />
    </main>
    )
}