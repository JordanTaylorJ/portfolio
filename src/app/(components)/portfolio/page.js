'use client'
import {useState} from 'react';
import Projects from "./projects";
import Skills from "./skills";
import Experience from "./experience";

const Portfolio = () => {

    const [active, setActive] = useState('')

    return(
        <main className='m-16 p-6 bg-greenblue'>
        <div className="text-2xl flex place-content-center bg-greenblue ">
            <button className='p-4 bg-sage rounded-tr-lg'>Projects</button>
            <button className='p-4 border-2 border-sage rounded-tr-lg' >Skills</button>
            <button className='p-4 border-2 border-sage rounded-tr-lg'>Education & Experience</button>
        </div>
        <Projects/> 
  
        <Skills/>
        <Experience/>
        </main>
    )
}

export default Portfolio;

/*

        */


/*
        <div className="m-15 bg-musk">
        <ul className="flex flex-wrap -mb-px text-3xl font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
            <li className="mr-2" role="presentation">
                <button className="inline-block p-4 border-b-2 rounded-t-lg" id="projects-tab" data-tabs-target="#projects" type="button" role="tab" aria-controls="projects" aria-selected="false">Projects</button>
            </li>
            <li className="mr-2" role="presentation">
                <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="skills-tab" data-tabs-target="#skills" type="button" role="tab" aria-controls="skills" aria-selected="false">Skills</button>
            </li>
            <li className="mr-2" role="presentation">
                <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="experience-tab" data-tabs-target="#experience" type="button" role="tab" aria-controls="experience" aria-selected="false">Education & Experience</button>
            </li>
        </ul>
        </div>
        <div id="myTabContent">
            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="projects" role="tabpanel" aria-labelledby="projects-tab">
            <Projects/> 
            </div>
            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="skills" role="tabpanel" aria-labelledby="skills-tab">
            <Skills/> 
            </div>
            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="experience" role="tabpanel" aria-labelledby="experience-tab">
            <Experience/> 
            </div>
        </div>
*/