'use client'
import { useInView } from "react-intersection-observer";

export default function About() {
    
    const options = {
        threshold: 0.5
    }

    const { ref: aboutRef, inView: aboutIsVisible, entry } = useInView(options);

    return(
    <main id='About' className="aboutBackdrop grid min-h-screen p-6 md:p-24 gap-12 lg:gap-24 md:grid-cols-3 items-center " >
        <div ref={aboutRef} style={aboutIsVisible ? styles.visible : styles.notVisible} className='md:col-span-2  px-10 py-16 self-center' >
            <h1 className='text-2xl md:text-4xl pb-10 text-brown font-semibold' >MEET JORDAN</h1>
            <br></br>
            <p className='text-sm md:text-base'>
            The constant development required as a software engineer suits my aptitude for learning. Alongside my technical skills, I bring a unique blend of experiences including a background in accounting, a fixed-wing private pilot license, musical knowledge, and an eye for design. I’m the multitool you want in your back pocket.
            </p>
            <br></br>
            <a href='./resume_jordanjoseph.pdf' download='resume_jordanjoseph'>
                <button className='place-self-end hover:outline outline-offset-2 rounded text-brown hover:text-black'>download resume</button>
            </a>
        </div>
        <img className='object-contain w-40 sm:w-52 md:w-80 justify-self-center' src='/portrait.jpeg' alt='portrait' />
    </main>
    )
}

const styles = {
    visible: {
        background: 'white',
        transition: 'background 1s ease-in-out',
    },
    notVisible:{
        background: '',
        transition: 'background 1s ease-out'
    },
}