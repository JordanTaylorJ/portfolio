'use client'
import {useState} from 'react';
import Projects from "./projects";
import Skills from "./skills";
import Experience from "./experience";

const Portfolio = () => {

    const [active, setActive] = useState('')

    return(
        <main id='Portfolio'>
        <Projects/> 
        
            <Skills/>
        
        <div className='m-16 p-6'>
            <img className='object-scale-down w-2/5' src='./hiking.jpeg' alt='hiking'/>
        </div>
            <Experience/>
        </main>
    )
}

export default Portfolio;