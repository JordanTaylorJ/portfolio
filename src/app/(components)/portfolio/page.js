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
        
        <div className='m-16 p-6'>
            <h2 className="text-center text-2xl block px-4 text-brown">Skills</h2>
            <Skills/>
            
        </div>
        <div className='m-16 p-6'>
            <img className='object-scale-down w-2/5' src='./hiking.jpeg' alt='hiking'/>
        </div>
        
            <Experience/>
        
        </main>
    )
}

export default Portfolio;



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

/*
        <div className="text-2xl flex place-content-center bg-greenblue ">
            <button className='p-4 bg-sage rounded-tr-lg'>Projects</button>
            <button className='p-4 border-2 border-sage rounded-tr-lg' >Skills</button>
            <button className='p-4 border-2 border-sage rounded-tr-lg'>Education & Experience</button>
        </div>
*/


/*
<ul class="flex">
<li class="flex-1 mr-2">
    <a class="text-center text-2xl block py-2 px-4 hover:bg-gray-200 text-white" href="/">Projects</a>
</li>
<li class="flex-1 mr-2">
    <a class="text-center text-2xl block py-2 px-4 hover:bg-gray-200 text-white"> Skills</a>
</li>
<li class="text-center flex-1">
    <a class="text-center text-2xl block py-2 px-4 hover:bg-gray-200 text-white">Education & Experience</a>
</li>
</ul>
*/