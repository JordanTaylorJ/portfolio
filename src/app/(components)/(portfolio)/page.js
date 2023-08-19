'use client'
import {useState} from 'react';
import Projects from "./projects";
import Skills from "./skills";
import Experience from "./experience";

const Portfolio = () => {

    const [active, setActive] = useState('')

    return(
        <main >
        <div className='flex justify-end m-16 p-6'>
            <img className='object-scale-down w-96' src='./sunglasses.jpg' alt='sunglasses'/>
        </div>
        <Projects/> 
        <div className='m-16 p-6'>
            <img className='object-scale-down w-2/5' src='./hiking.jpeg' alt='hiking'/>
        </div>
        <Skills/>
        <Experience/>
        </main>
    )
}

export default Portfolio;